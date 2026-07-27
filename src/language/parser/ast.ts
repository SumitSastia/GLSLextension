import { Token } from "../lexer/token";

export interface ASTNode
{
    kind: string;
}

export interface IdentifierExpressionNode extends ASTNode
{
    kind: "IdentifierExpression";
    name: Token;
}

export interface LiteralExpressionNode extends ASTNode
{
    kind: "LiteralExpression";
    value: Token;
}

export type ExpressionNode = 
    | IdentifierExpressionNode
    | LiteralExpressionNode;

export interface AssignmentStatementNode extends ASTNode
{
    kind: "AssignmentStatement";
    left: IdentifierExpressionNode;
}

export interface LayoutQualifierNode extends ASTNode {

    kind: "LayoutQualifier";
    name: Token;
}

export type LayoutNode =
    | LayoutQualifierNode
    | Token[];

export interface UnknownStatementNode extends ASTNode {
    kind: "Unknown";
    name: Token
}

export interface UniformBlockNode extends ASTNode {

    kind: "UniformBlock";

    name: Token;
    members: VariableDeclarationNode[];
}

export enum VariableAccess {
    READ_ONLY,
    READ_WRITE
}

export interface VariableDeclarationNode extends ASTNode
{
    kind: "VariableDeclaration";
    
    qualifiers: LayoutNode;
    type: Token;
    name: Token;
    access: VariableAccess;
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
    qualifiers: Token[];
    type: Token;
    name: Token;
    access: VariableAccess;
}

export type StatementNode =
    | BlockNode
    | VariableDeclarationNode
    | AssignmentStatementNode
    | IdentifierExpressionNode
    | UnknownStatementNode;

export interface BlockNode extends ASTNode
{
    kind: "BlockNode";

    leftBrace: Token;
    rightBrace: Token;

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
    | StructDeclarationNode
    | UniformBlockNode
    | UnknownStatementNode;

export interface ProgramNode extends ASTNode
{
    kind: "Program";

    declarations: DeclarationNode[];
}