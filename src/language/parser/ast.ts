import { Token } from "../lexer/token";

export interface ASTNode
{
    kind: string;
}

export interface LiteralNode extends ASTNode
{
    kind: "Literal";
    value: Token;
}

export interface IdentifierNode extends ASTNode
{
    kind: "Identifier";
    name: Token;
    resolvedSymbol?: Symbol;
}

export interface CallExpressionNode extends ASTNode
{
    kind: "Expression";
}

export type ExpressionNode =
    | LiteralNode
    | IdentifierNode
    | CallExpressionNode;

// export interface ExpressionNode extends ASTNode
// {

// }

export interface UnknownStatementNode extends ASTNode {
    kind: "Unknown";
}

export interface VariableDeclarationNode extends ASTNode
{
    kind: "VariableDeclaration";

    qualifiers: Token[];
    type: Token;
    name: Token;
    initializer?: ExpressionNode;
}

export interface FunctionDeclarationNode extends ASTNode
{
    kind: "FunctionDeclaration";
    returnType: string;
    name: Token;
    parameters: ParameterNode[];
    body: FunctionBodyNode;
}

export interface ParameterNode
{
    qualifiers: Token[],
    type: Token;
    name: Token;
}

export type StatementNode =
    | BlockNode
    | VariableDeclarationNode
    | UnknownStatementNode;

export interface BlockNode extends ASTNode
{
    kind: "BlockNode";
    statements: StatementNode[];
}

export interface FunctionBodyNode extends ASTNode
{
    kind: "FunctionBody";
    block: BlockNode;
}

export interface StructDeclarationNode extends ASTNode
{
    kind: "StructDeclaration";
    name: Token;
    members: VariableDeclarationNode[];
}

export type DeclarationNode =
    | VariableDeclarationNode
    | FunctionDeclarationNode
    | StructDeclarationNode;

export interface ProgramNode extends ASTNode
{
    kind: "Program";

    declarations: DeclarationNode[];
}