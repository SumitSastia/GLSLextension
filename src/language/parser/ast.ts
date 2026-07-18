import { Token } from "../lexer/token";

export interface ASTNode
{
    kind: string;
}

export interface ExpressionNode extends ASTNode
{

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
    name: string;
    parameters: ParameterNode[];
    body: ASTNode[];
}

export interface ParameterNode
{
    qualifiers: Token[],
    type: Token;
    name: Token;
}

export interface StructDeclarationNode extends ASTNode
{
    kind: "StructDeclaration";
    name: Token;
    members: VariableDeclarationNode[];
}

export interface ProgramNode extends ASTNode
{
    kind: "Program";

    declarations: ASTNode[];
}