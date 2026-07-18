import { Token } from "./token";
import { TokenType } from "./token";

import { GLSL_KEYWORDS } from "../keywords";

export class Lexer {

    private source: string = "";

    private start   = 0;
    private current = 0;

    private line   = 0;
    private column = 0;

    private scanToken(): Token | null
    {
        const c = this.advance();

        // Operators
        switch (c)
        {
            case '(':
                return this.makeToken(TokenType.LeftParen);

            case ')':
                return this.makeToken(TokenType.RightParen);

            case '{':
                return this.makeToken(TokenType.LeftBrace);

            case '}':
                return this.makeToken(TokenType.RightBrace);

            case '[':
                return this.makeToken(TokenType.LeftBracket);

            case ']':
                return this.makeToken(TokenType.RightBracket);

            case ',':
                return this.makeToken(TokenType.Comma);

            case '.':
                return this.makeToken(TokenType.Dot);

            case ';':
                return this.makeToken(TokenType.Semicolon);

            case ':':
                return this.makeToken(TokenType.Colon);

            case '?':
                return this.makeToken(TokenType.Question);

            case '+':
                if (this.match('+'))
                    return this.makeToken(TokenType.Increment);

                if (this.match('='))
                    return this.makeToken(TokenType.PlusEqual);

                return this.makeToken(TokenType.Plus);

            case '-':
                if (this.match('-'))
                    return this.makeToken(TokenType.Decrement);

                if (this.match('='))
                    return this.makeToken(TokenType.MinusEqual);

                return this.makeToken(TokenType.Minus);

            case '*':
                if (this.match('='))
                    return this.makeToken(TokenType.StarEqual);
                return this.makeToken(TokenType.Star);

            case '/':
                if (this.match('='))
                    return this.makeToken(TokenType.SlashEqual);
                return this.makeToken(TokenType.Slash);

            case '=':
                if (this.match('='))
                    return this.makeToken(TokenType.EqualEqual);
                return this.makeToken(TokenType.Equal);

            case '!':
                if (this.match('='))
                    return this.makeToken(TokenType.NotEqual);
                return this.makeToken(TokenType.Bang);
                
            case '<':
                if (this.match('='))
                    return this.makeToken(TokenType.LessEqual);
                return this.makeToken(TokenType.Less);

            case '>':
                if (this.match('='))
                    return this.makeToken(TokenType.GreaterEqual);
                return this.makeToken(TokenType.Greater);

            case '&':
                if (this.match('&'))
                    return this.makeToken(TokenType.AndAnd);
                if (this.match('='))
                    return this.makeToken(TokenType.AndEqual);
                return this.makeToken(TokenType.And);

            case '|':
                if (this.match('|'))
                    return this.makeToken(TokenType.OrOr);
                if (this.match('='))
                    return this.makeToken(TokenType.OrEqual);
                return this.makeToken(TokenType.Or);
                
            case '%':
                if (this.match('='))
                    return this.makeToken(TokenType.PercentEqual);
                return this.makeToken(TokenType.Percent);


            case ' ':
            case '\r':
            case '\t':
                return null;

            case '\n':
                this.line++;
                this.column = 0;
                return null;
        }

        if (this.isAlpha(c)) return this.scanIdentifier();
        if (this.isDigit(c)) return this.scanNumber();

        return this.makeToken(TokenType.Unknown);
    }

    private makeToken(type: TokenType): Token
    {
        return {
            type,
            lexeme: this.source.substring(this.start, this.current),
            line: this.line,
            column: this.column
        };
    }

    private isDigit(c: string): boolean
    {
        return c >= '0' && c <= '9';
    }

    private isAlpha(c: string): boolean
    {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            c == '_'
        );
    }

    private isAlphaNumeric(c: string): boolean
    {
        return this.isAlpha(c) || this.isDigit(c);
    }

    private scanIdentifier(): Token
    {
        while (this.isAlphaNumeric(this.peek()))
            this.advance();

        const text = this.source.substring(this.start, this.current);

        if (GLSL_KEYWORDS.has(text))
            return this.makeToken(TokenType.Keyword);

        return this.makeToken(TokenType.Identifier);
    }

    private scanNumber(): Token
    {
        while (this.isDigit(this.peek()))
            this.advance();

        // Fractional part
        if (this.peek() == '.' && this.isDigit(this.peekNext()))
        {
            this.advance(); // consume '.'

            while (this.isDigit(this.peek()))
                this.advance();
        }

        return this.makeToken(TokenType.Number);
    }

    private peek(): string {

        if (this.current >= this.source.length)
            return '\0';

        return this.source[this.current];
    }

    private peekNext(): string
    {
        if (this.current + 1 >= this.source.length)
            return '\0';

        return this.source[this.current + 1];
    }

    private advance(): string {

        const c = this.peek();

        this.current++;
        this.column++;

        return c;
    }

    private match(expected: string): boolean
    {
        if (this.isAtEnd())
            return false;

        if (this.peek() !== expected)
            return false;

        this.advance();

        return true;
    }

    private isAtEnd(): boolean {
        return this.current >= this.source.length;
    }

    tokenize(source: string): Token[] {

        this.source = source;
        this.current = 0;

        const tokens: Token[] = [];

        while (!this.isAtEnd())
        {
            this.start = this.current;

            const token = this.scanToken();

            if (token)
                tokens.push(token);
        }

        tokens.push({
            type: TokenType.EOF,
            lexeme: "",
            line: this.line,
            column: this.column
        });

        return tokens;
    }
}