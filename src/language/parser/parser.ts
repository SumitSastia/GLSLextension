import { Token, TokenType } from "../lexer/token";
import {
    ASTNode,
    ProgramNode,
    VariableDeclarationNode,
    FunctionDeclarationNode,
    ParameterNode,
    StructDeclarationNode,
    DeclarationNode
} from "./ast";

import { GLSL_QUALIFIERS } from "../keywords";

export class Parser {

    private tokens: Token[] = [];

    private current = 0;

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

    private parseVariable(): VariableDeclarationNode
    {
        const qualifiers = this.parseQualifiers();
        const type = this.advance();
        const name = this.advance();

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
            name
        };
    }

    private parseFunction(): FunctionDeclarationNode {

        const returnType = this.advance().lexeme;
        const name = this.consume(TokenType.Identifier, "Expected a function name.").lexeme;

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
        this.consume(TokenType.LeftBrace, "Expected '{'.");

        let depth = 1;

        while (depth > 0 && !this.isAtEnd())
        {
            const token = this.advance();

            if (token.type == TokenType.LeftBrace)
                depth++;

            if (token.type == TokenType.RightBrace)
                depth--;
        }

        return {
            kind: "FunctionDeclaration",
            returnType,
            name,
            parameters,
            body: []
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

        if (!this.peekOffset(1))
            return null;

        if (!this.peekOffset(2))
            return null;

        if (this.peekOffset(1).type != TokenType.Identifier)
        {
            this.advance();
            return null;
        }

        if (this.peekOffset(2).type == TokenType.LeftParen)
            return this.parseFunction();

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
}