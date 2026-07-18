export enum TokenType {

    // Literals
    Identifier,
    Number,
    String,

    // Keywords
    Keyword,

    // Punctuation
    LeftParen,
    RightParen,

    LeftBrace,
    RightBrace,

    LeftBracket,
    RightBracket,

    Semicolon,
    Comma,
    Dot,
    Colon,
    Question,

    // Operators
    Plus,
    Minus,
    Star,
    Slash,
    Percent,

    Equal,

    EqualEqual,
    NotEqual,

    Less,
    LessEqual,

    Greater,
    GreaterEqual,

    And,
    Or,

    AndAnd,
    OrOr,

    AndEqual,
    OrEqual,

    Bang,

    PlusEqual,
    MinusEqual,
    StarEqual,
    SlashEqual,
    PercentEqual,

    Increment,
    Decrement,

    Arrow,

    // Preprocessor
    Hash,

    // End
    EOF,

    Unknown
}

export interface Token {

    type: TokenType;

    lexeme: string;

    line: number;

    column: number;
}