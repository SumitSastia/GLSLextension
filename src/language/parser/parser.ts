import { Token, TokenType } from "../lexer/token";
import {
    ASTNode,
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
    ExpressionNode,
    IdentifierNode,
    LiteralNode
} from "./ast";

import { GLSL_QUALIFIERS } from "../keywords";
import { Func } from "mocha";

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
    }

    private isTypeToken(token: Token): boolean
    {
        return token.type == TokenType.Keyword;
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

        return {
            qualifiers,
            type,
            name
        };
    }

    private parseQualifiers(): Token[] {

        const qualifiers: Token[] = [];

        while (true)
        {
            if (this.peek().lexeme == "layout")
            {
                this.advance();
                continue;
            }

            if (this.isQualifier(this.peek()))
            {
                qualifiers.push(this.advance());
                continue;
            }

            break;
        }

        return qualifiers;
    }

    private parseIdentifier(): IdentifierNode
    {
        return {
            kind: "Identifier",
            name: this.advance()
        };
    }

    private parseLiteral(): LiteralNode
    {
        return {
            kind: "Literal",
            value: this.advance()
        };
    }

    private parsePrimary(): ExpressionNode
    {
        if (this.check(TokenType.Identifier))
        {
            return this.parseIdentifier();
        }

        if (this.check(TokenType.IntegerLiteral) ||
            this.check(TokenType.FloatLiteral))
        {
            return this.parseLiteral();
        }

        throw this.error(this.peek(), "Expected expression.");
    }

    private parsePostfix(): ExpressionNode
    {
        let expr = this.parsePrimary();

        while (true)
        {
            if (this.match(TokenType.LeftParen))
            {
                // Function call
            }
            else if (this.match(TokenType.Dot))
            {
                // Member access
            }
            else if (this.match(TokenType.LeftBracket))
            {
                // Array access
            }
            else
            {
                break;
            }
        }

        return expr;
    }

    private parseExpression(): ExpressionNode {
        return this.parsePrimary();
    }

    private parseVariable(): VariableDeclarationNode
    {
        const qualifiers = this.parseQualifiers();
        const type = this.advance();
        const name = this.consume(TokenType.Identifier, "Expected a variable name.");

        let initializer: ExpressionNode | undefined;

        // if (this.match(TokenType.Equal))
        // {
        //     initializer = this.parseExpression();
        // }

        // this.consume(
        //     TokenType.Semicolon,
        //     "Expected ';' after variable declaration."
        // );

        while (
            !this.check(TokenType.Semicolon) &&
            !this.isAtEnd()
        )
        {
            this.advance();
        }

        this.match(TokenType.Semicolon);

        return {
            kind: "VariableDeclaration",
            qualifiers,
            type,
            name,
            initializer
        };
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

        while (
            !this.check(TokenType.Semicolon) &&
            !this.check(TokenType.RightBrace)
        )
        {
            this.advance();
        }

        this.match(TokenType.Semicolon);

        return {
            kind: "Unknown"
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

        if (!this.check(TokenType.Keyword))
        {
            this.advance();
            return null;
        }

        // No next Token (Should be Datatype)
        if (!this.peekOffset(1))
            return null;

        // No next Token after next Token (Should be Indentifier)
        if (!this.peekOffset(2))
            return null;

        if (this.peekOffset(1).type != TokenType.Identifier)
        {
            this.advance();
            return null;
        }

        // Found Function Header
        if (this.peekOffset(2).type == TokenType.LeftParen)
            return this.parseFunction();

        // Return Variable Declaration
        return this.parseVariable();
    }

    private parseDeclaration(): DeclarationNode | null
    {
        switch (this.peek().lexeme)
        {
            case "struct":
                return this.parseStruct();

            case "precision":
                // return this.parsePrecision();

            case "layout":
                // return this.parseLayoutDeclaration();

            case "buffer":
                // return this.parseBufferBlock();

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
}