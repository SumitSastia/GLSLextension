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
    type: string;
    name: string;
}

export interface ProgramNode extends ASTNode
{
    kind: "Program";

    declarations: ASTNode[];
}