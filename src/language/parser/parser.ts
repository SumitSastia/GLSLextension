import { Token, TokenType } from "../lexer/token";
import {
    ProgramNode,
    VariableDeclarationNode,
    FunctionDeclarationNode,
    ParameterNode,
    StructDeclarationNode,
    DeclarationNode,
    FunctionBodyNode,
    UnknownStatementNode,
    StatementNode,
    BlockNode,
    UniformBlockNode,
    VariableAccess,
    AssignmentStatementNode,
    IdentifierExpressionNode
} from "./ast";

import { GLSL_QUALIFIERS } from "../keywords";

export class ParseError extends Error {

    constructor(
        public readonly token: Token,
        message: string
    )
    {
        super(message);
    }
}

export class Parser {

    private tokens: Token[] = [];
    private current = 0;

    getEnd(): Token {
        return this.tokens[this.tokens.length - 2];
    }

    private peek(): Token
    {
        return this.tokens[this.current];
    }

    private peekOffset(offset: number): Token
    {
        return this.tokens[this.current + offset];
    }

    private previous(): Token
    {
        return this.tokens[this.current - 1];
    }

    private isAtEnd(): boolean
    {
        return this.peek().type == TokenType.EOF;
    }

    private isQualifier(token: Token): boolean
    {
        return GLSL_QUALIFIERS.has(token.lexeme);
    }

    private advance(): Token
    {
        if (!this.isAtEnd())
            this.current++;

        return this.previous();
    }

    private check(type: TokenType): boolean
    {
        if (this.isAtEnd())
            return false;

        return this.peek().type == type;
    }

    private consume(type: TokenType, message: string): Token
    {
        if (this.check(type))
            return this.advance();

        throw new Error(message);
        // throw new ParseError(this.peek(), message);
    }

    private match(...types: TokenType[]): boolean
    {
        for (const type of types)
        {
            if (this.check(type))
            {
                this.advance();
                return true;
            }
        }

        return false;
    }

    private parseParameter(): ParameterNode
    {
        const qualifiers = this.parseQualifiers();

        const type = this.consume(
            TokenType.Keyword,
            "Expected parameter type."
        );

        const name = this.consume(
            TokenType.Identifier,
            "Expected parameter name."
        );

        const access = this.determineAccess(qualifiers);

        return {
            qualifiers,
            type,
            name,
            access
        };
    }

    private parseQualifiers(): Token[] {

        const qualifiers: Token[] = [];

        while (true)
        {
            if (this.isQualifier(this.peek()))
            {
                qualifiers.push(this.advance());
                continue;
            }

            break;
        }

        return qualifiers;
    }

    private parseAssignmentStatement(): AssignmentStatementNode | IdentifierExpressionNode {

        const left = this.consume(
            TokenType.Identifier,
            "Expected Identifier."
        );

        const identifier: IdentifierExpressionNode = {
            kind: "IdentifierExpression",
            name: left
        };

        if (!this.match(TokenType.Equal))
        {
            // console.log("variable; found.");

            this.consume(
                TokenType.Semicolon,
                "Expected ';'."
            );

            return identifier;
        }

        // Skip everything on the RHS until ';'
        while (
            !this.check(TokenType.Semicolon) &&
            !this.isAtEnd()
        )
        {
            this.advance();
        }

        // console.log("assignment found.");

        this.consume(
            TokenType.Semicolon,
            "Expected ';'."
        );

        return {
            kind: "AssignmentStatement",
            left: identifier
        };
    }

    private parseVariable(): VariableDeclarationNode
    {
        const qualifiers = this.parseQualifiers();
        const type = this.advance();
        const name = this.consume(TokenType.Identifier, "Expected a variable name.");

        while (
            !this.check(TokenType.Semicolon) &&
            !this.isAtEnd()
        )
        {
            this.advance();
        }

        this.match(TokenType.Semicolon);

        const access = this.determineAccess(qualifiers);

        // if (qualifiers.length > 0)
        //     console.log(qualifiers[0].lexeme + " " + type.lexeme + " " + name.lexeme);
        // else
        //     console.log(type.lexeme + " " + name.lexeme);

        return {
            kind: "VariableDeclaration",
            qualifiers,
            type,
            access,
            name
        };
    }

    private determineAccess(qualifiers: Token[]): VariableAccess {

        // console.log("Determining");

        for (const qualifier of qualifiers) {

            switch(qualifier.lexeme) {

                case "const":
                case "in":
                case "uniform":
                    return VariableAccess.READ_ONLY;

                case "out":
                case "buffer":
                    return VariableAccess.READ_WRITE;
            }
        }


        return VariableAccess.READ_WRITE;
    }

    private isVariableDeclaration(): boolean {

        let offset = 0;

         // Skip qualifiers
        while (true)
        {
            const token = this.peekOffset(offset);

            if (!token)
                return false;

            if (!this.isQualifier(token))
                break;

            offset++;
        }

        // Type
        const type = this.peekOffset(offset);

        if (!type)
            return false;

        if (
            type.type != TokenType.Keyword &&
            type.type != TokenType.Identifier
        )
        {
            return false;
        }

        offset++;

        // Variable name
        const name = this.peekOffset(offset);

        if (!name)
            return false;

        if (name.type != TokenType.Identifier)
            return false;

        offset++;

        // What follows the variable name?
        const next = this.peekOffset(offset);

        if (!next)
            return false;

        return (
            next.type == TokenType.Semicolon ||
            next.type == TokenType.Equal ||
            next.type == TokenType.LeftBracket
        );
    }

    private skipStatement(): UnknownStatementNode {

        const token: Token = {
            type: TokenType.Unknown,
            lexeme: "",
            line: 0,
            column: 0
        };

        while (
            !this.check(TokenType.Semicolon) &&
            !this.check(TokenType.RightBrace) &&
            !this.isAtEnd()
        )
        {
            this.advance();
        }

        this.match(TokenType.Semicolon);

        return {
            kind: "Unknown",
            name: token
        }
    }

    private parseBlock(): BlockNode {

        const leftBrace = this.consume(
            TokenType.LeftBrace,
            "Expected '{'."
        );

        const statements: StatementNode[] = [];

        while (
            !this.check(TokenType.RightBrace) &&
            !this.isAtEnd()
        )
        {
            if (this.check(TokenType.LeftBrace))
            {
                statements.push(this.parseBlock());
            }
            else if (this.isVariableDeclaration())
            {
                statements.push(this.parseVariable());
            }
            else if (
                this.check(TokenType.Identifier) &&
                this.peekOffset(1).type == TokenType.Equal
            ) {
                const statement = this.parseAssignmentStatement();
                if (statement.kind == "AssignmentStatement") statements.push(statement);
            }
            else
            {
                statements.push(this.skipStatement());
            }
        }

        const rightBrace = this.consume(
            TokenType.RightBrace,
            "Expected '}'."
        );

        return {
            kind: "BlockNode",
            leftBrace,
            rightBrace,
            statements
        };
    }

    private parseFunctionBody(): FunctionBodyNode {

        const block: BlockNode = this.parseBlock();

        return {
            kind: "FunctionBody",
            block
        };
    }

    private parseFunction(): FunctionDeclarationNode {

        const returnType = this.advance().lexeme;
        const name = this.consume(TokenType.Identifier, "Expected a function name.");

        this.consume(TokenType.LeftParen, "Expected '(' after function name.");

        const parameters: ParameterNode[] = [];

        if (!this.check(TokenType.RightParen))
        {
            do
            {
                parameters.push(this.parseParameter());
            }
            while (this.match(TokenType.Comma));
        }

        this.consume(TokenType.RightParen, "Expected ')'.");
        
        const body = this.parseFunctionBody();

        return {
            kind: "FunctionDeclaration",
            returnType,
            name,
            parameters,
            body
        };
    }

    private parseStruct(): StructDeclarationNode {

        this.consume(
            TokenType.Keyword,
            "Expected 'struct'."
        );

        const name = this.consume(
            TokenType.Identifier,
            "Expected struct name."
        );

        this.consume(
            TokenType.LeftBrace,
            "Expected '{'."
        );

        const members: VariableDeclarationNode[] = [];

        while (
            !this.check(TokenType.RightBrace) &&
            !this.isAtEnd()
        )
        {
            members.push(this.parseVariable());
        }

        this.consume(
            TokenType.RightBrace,
            "Expected '}'."
        );

        this.consume(
            TokenType.Semicolon,
            "Expected ';'."
        );

        return {
            kind: "StructDeclaration",
            name,
            members
        };
    }

    private parseVariableOrFunction(): DeclarationNode | null {

        // if (!this.check(TokenType.Keyword))
        // {
        //     this.advance();
        //     return null;
        // }

        let offset = 0;

        // Skip all qualifiers
        while (
            this.peekOffset(offset) &&
            this.isQualifier(this.peekOffset(offset))
        )
        {
            offset++;
        }

        // Need: type + name
        const type = this.peekOffset(offset);
        const name = this.peekOffset(offset + 1);

        if (
            !type || !name ||
            (
                type.type != TokenType.Keyword
            ) ||
            name.type != TokenType.Identifier
        )
        {
            this.advance();
            return null;
        }

        // Found Function Header
        if (this.peekOffset(offset + 2)?.type == TokenType.LeftParen)
            return this.parseFunction();

        // Return Variable Declaration
        return this.parseVariable();
    }

    private parseDeclaration(): DeclarationNode | null
    {
        // console.log(this.peek().lexeme);

        switch (this.peek().lexeme)
        {
            case "struct":
                return this.parseStruct();

            case "precision":
                // return this.parsePrecision();

            case "layout":

                this.parseLayout();
                return this.parseUniformLayout();

            case "subroutine":
                // return this.parseSubroutine();

            default:
                return this.parseVariableOrFunction();
        }
    }

    parse(tokens: Token[]): ProgramNode
    {
        this.tokens = tokens;
        this.current = 0;

        const declarations: DeclarationNode[] = [];

        while (!this.isAtEnd())
        {
            const declaration = this.parseDeclaration();

            if (declaration)
                declarations.push(declaration);
        }

        return {
            kind: "Program",
            declarations
        };
    }

    private error(token: Token, message: string): Error
    {
        return new Error(
            `[Line ${token.line}] ${message}`
        );
    }

    private parseLayout() {

        this.consume(TokenType.Keyword, "Expected 'layout'.");

        this.consume(
            TokenType.LeftParen,
            "Expected '(' after 'layout'."
        );

        let depth = 1;

        while (!this.isAtEnd() && depth > 0)
        {
            if (this.match(TokenType.LeftParen))
            {
                depth++;
                continue;
            }

            if (this.match(TokenType.RightParen))
            {
                depth--;
                continue;
            }

            this.advance();
        }

        if (depth != 0)
        {
            throw this.error(
                this.peek(),
                "Expected ')' after layout qualifier."
            );
        }
    }

    private parseUniformLayout(): DeclarationNode {

        const qualifier = this.advance(); // consume in/uniform/buffer
        
        if (this.check(TokenType.Semicolon)) {
            
            this.advance();
            
            return {
                kind: "Unknown",
                name: qualifier
            }
        }
        
        const type = this.advance(); // maybe Datatype (Variable) or Identifier (Block)
        
        // Block (std140 or std430)
        if (
            this.check(TokenType.LeftBrace)
        )
        {
            if (qualifier.lexeme == "buffer") return this.parseUniformBlock(type, VariableAccess.READ_WRITE);
            return this.parseUniformBlock(type, VariableAccess.READ_ONLY);
        }

        const name = this.consume(TokenType.Identifier, "Expected a variable name.");

        while (
            !this.check(TokenType.Semicolon) &&
            !this.isAtEnd()
        )
        {
            this.advance();
        }

        this.match(TokenType.Semicolon);

        const access = this.determineAccess([qualifier]);

        return {
            kind: "VariableDeclaration",
            qualifiers: [],
            name,
            access,
            type
        };
    }

    private parseUniformBlock(name: Token, access: VariableAccess): UniformBlockNode
    {
        this.consume(
            TokenType.LeftBrace,
            "Expected '{'."
        );

        const members: VariableDeclarationNode[] = [];

        while (!this.check(TokenType.RightBrace))
        {
            const variable = this.parseVariable();
            variable.access = access;

            members.push(variable);
        }

        this.consume(
            TokenType.RightBrace,
            "Expected '}'."
        );

        this.consume(
            TokenType.Semicolon,
            "Expected ';' after uniform block."
        );

        return {
            kind: "UniformBlock",
            name,
            members
        };
    }
}