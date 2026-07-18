import { Token, TokenType } from "../lexer/token";
import { ASTNode, ProgramNode, VariableDeclarationNode, FunctionDeclarationNode, ExpressionNode } from "./ast";

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

    private parseVariable(): VariableDeclarationNode
    {
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
            type,
            name
        };
    }

    private parseFunction(): FunctionDeclarationNode {

        const returnType = this.advance().lexeme;
        const name = this.consume(TokenType.Identifier, "Expected a function name.").lexeme;

        this.consume(TokenType.LeftParen, "Expected '(' after function name.");

        while (
            !this.check(TokenType.RightParen) &&
            !this.isAtEnd()
        )
        {
            this.advance();
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
            parameters: [],
            body: []
        };
    }

    private parseDeclaration(): ASTNode | null
    {
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

    parse(tokens: Token[]): ProgramNode
    {
        this.tokens = tokens;
        this.current = 0;

        const declarations: ASTNode[] = [];

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