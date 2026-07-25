import * as vscode from "vscode";

import { AssignmentStatementNode, BlockNode, FunctionBodyNode, FunctionDeclarationNode, ParameterNode, ProgramNode, StatementNode, StructDeclarationNode, VariableAccess, VariableDeclarationNode } from "../parser/ast";
import { Cords, Scope } from "./scope";
import { Token } from "../lexer/token";

import { BUILTIN_STRUCTS } from "../datatypes";

export let USERDEFINED_FUNCTIONS: FunctionDeclarationNode[] = [];

export interface AnalyzerError
{
    token: Token;
    message: string;
}

export class Analyzer
{
    private globalScope: Scope;
    private currentScope: Scope;
    private errors: AnalyzerError[] = [];

    constructor(endToken: Token) {
        
        const start: Cords = {
            line: 0,
            column: 0
        };

        const end: Cords = {
            line: endToken.line,
            column: endToken.column
        };

        this.globalScope = new Scope(start, end);
        this.currentScope = this.globalScope;
    }

    private pushScope(block: BlockNode)
    {
        const start: Cords = {
            line: block.leftBrace.line,
            column: block.leftBrace.column
        };

        const end: Cords = {
            line: block.rightBrace.line,
            column: block.rightBrace.column
        };

        const child = new Scope(start, end, this.currentScope);

        child.start = block.leftBrace;
        child.end = block.rightBrace;
        
        this.currentScope.children.push(child);
        this.currentScope = child;
    }

    private popScope()
    {
        if (this.currentScope.parent)
            this.currentScope = this.currentScope.parent;
    }

    private addVariable(variable: VariableDeclarationNode) {

        this.currentScope.add(variable);
    }

    private addStruct(struct: StructDeclarationNode) {

        this.currentScope.add(struct);
    }

    private addParameter(parameter: ParameterNode) {

        const variable: VariableDeclarationNode = {

            kind: "VariableDeclaration",
            qualifiers: parameter.qualifiers,
            type: parameter.type,
            name: parameter.name,
            access: parameter.access
        };

        this.addVariable(variable);
    }

    analyze(programNode: ProgramNode) {

        USERDEFINED_FUNCTIONS = [];
        this.collectGlobals(programNode);
        this.currentScope = this.globalScope;
    }

    findScope(position: vscode.Position): Scope {

        return this.findScopeRecursive(this.globalScope, position);
    }

    findStruct(struct: string): StructDeclarationNode | null {
        
        const node = this.globalScope.lookup(struct);
        if (node && node.kind == "StructDeclaration") return node;

        return null;
    }

    private findScopeRecursive(
        scope: Scope,
        position: vscode.Position
    ): Scope
    {
        for (const child of scope.children)
        {
            if (this.contains(child, position))
                return this.findScopeRecursive(child, position);
        }

        return scope;
    }

    private contains(
        scope: Scope,
        position: vscode.Position
    ): boolean
    {

        const start = scope.start;
        const end = scope.end;

        const afterStart =
            position.line > start.line ||
            (
                position.line == start.line &&
                position.character >= start.column
            );

        const beforeEnd =
            position.line < end.line ||
            (
                position.line == end.line &&
                position.character <= end.column
            );

        return afterStart && beforeEnd;
    }

    private collectGlobals(programNode: ProgramNode) {

        for (const node of programNode.declarations) {

            switch(node.kind) {

                case "FunctionDeclaration":
                    
                    if (node.name.lexeme !== "main") USERDEFINED_FUNCTIONS.push(node);
                    
                    this.globalScope.add(node);
                    this.visitFunction(node);
                    break;

                case "VariableDeclaration":
                    this.addVariable(node);
                    break;

                case "UniformBlock":
                    for (const variable of node.members) {
                        this.addVariable(variable);
                    }
                    break;

                case "StructDeclaration":
                    this.addStruct(node);
                    break;
            }
        }
    }

    private visitFunction(func: FunctionDeclarationNode) {

        this.pushScope(func.body.block);

        for (const parameter of func.parameters) {
            this.addParameter(parameter);
        }

        this.visitFunctionBody(func.body);
        this.popScope();
    }

    private visitFunctionBody(body: FunctionBodyNode) {

        for (const statement of body.block.statements) {
            this.visitStatement(statement);
        }
    }

    private visitBlock(block: BlockNode) {

        this.pushScope(block);

        for (const statement of block.statements) {
            this.visitStatement(statement);
        }

        this.popScope();
    }

    private visitStatement(statement: StatementNode) {

        switch(statement.kind) {

            case "BlockNode":
                this.visitBlock(statement);
                break;

            case "VariableDeclaration":
                this.addVariable(statement);
                break;

            case "AssignmentStatement":
                this.checkAssignment(statement);
                break;
        }
    }

    private checkAssignment(statement: AssignmentStatementNode): boolean {

        const variable = this.currentScope.lookup(statement.left.name.lexeme);

        if (
            variable &&
            variable.kind == "VariableDeclaration" &&
            variable.access == VariableAccess.READ_ONLY
        ) {
            // console.log("ERROR: Assigning on Read-only Variable!");

            this.errors.push({
                token: statement.left.name,
                message: "Cannot assign to read-only variable."
            });
            return false;
        }

        return true;
    }

    lookupStructType(type: string): string[] | null {

        return BUILTIN_STRUCTS.get(type) ?? null;
    }

    getErrors(): AnalyzerError[] {
        return this.errors;
    }
}