import * as vscode from "vscode";

import { BlockNode, DeclarationNode, ExpressionNode, FunctionBodyNode, FunctionDeclarationNode, IdentifierNode, LiteralNode, ParameterNode, ProgramNode, StatementNode, StructDeclarationNode, VariableDeclarationNode } from "../parser/ast";
import { Cords, Scope } from "./scope";
import { Token } from "../lexer/token";

export class Analyzer
{
    private globalScope: Scope;
    private currentScope: Scope;

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
            name: parameter.name
        };

        this.addVariable(variable);
    }

    analyze(programNode: ProgramNode) {

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

        // if (!start || !end) {
        //     return true;
        // }

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
        }
    }

    // private addParameter(parameter: ParameterNode) {

    //     const symbolVar: Symbol = {
    //         name: parameter.name.lexeme,
    //         kind: SymbolKind.Parameter,
    //         type: this.resolveType(parameter.type)
    //     };
    //     this.globalScope.add(symbolVar);
    // }

    // private visitFunction(statement: FunctionDeclarationNode) {

    //     this.pushScope();

    //     // parameters
    //     for (const parameter of statement.parameters)
    //     {
    //         this.addParameter(parameter);
    //     }

    //     this.visitBlock(statement.body.block);
    //     this.popScope();
    // }

    // private visitStruct(statement: StructDeclarationNode) {

    //     // this.pushScope();

    //     // for (const member of statement.members) {
    //     //     this.addVariable(member);
    //     // }

    //     // this.popScope();

    //     const structSymbol = new StructSymbol(statement.name.lexeme);

    //     for (const member of statement.members) {

    //         const symbolVar: Symbol = {
    //             name: member.name.lexeme,
    //             kind: SymbolKind.Variable,
    //             type: this.resolveType(member.type)
    //         };

    //         structSymbol.members.set(member.name.lexeme, symbolVar);
    //     }

    //     // console.log(structSymbol);
    //     // console.log(structSymbol.constructor.name);

    //     this.globalScope.add(structSymbol);

    //     const stored = this.globalScope.lookup("Light")!;

    //     console.log(
    //         this.globalScope.symbols.get("Light")
    //     );
    // }

    // private visitStatement(statement: StatementNode) {

    //     switch (statement.kind) {

    //         case "BlockNode":
    //             this.visitBlock(statement);
    //             break;
            
    //         case "VariableDeclaration":
    //             this.visitVariable(statement);
    //             break;
    //     }
    // }

    // private reportError(msg: string): Error {
    //     return new Error(`${msg}`);
    // }

    // private visitVariable(node: VariableDeclarationNode)
    // {
    //     this.addVariable(node);

    //     // if (!node.initializer) return;

    //     // const initializerType = this.visitExpression(node.initializer);
    
    //     // if (initializerType !== node.type.lexeme) {

    //     // }
    // }

    // private visitLiteral(node: LiteralNode)
    // {
    //     // if (node.value.type === )
    // }
    
    // // private visitExpression(node: ExpressionNode): GLSLType
    // // {
    // //     switch (node.kind)
    // //     {
    // //         case "Identifier":
    // //             return this.visitIdentifier(node);

    // //         case "Literal":
    // //             this.visitLiteral(node);
    // //             return this.resolveType(node.value)
    // //     }

    // //     return "";
    // // }

    // private visitIdentifier(node: IdentifierNode) {

    //     const symbol = this.currentScope.lookup(node.name.lexeme);

    //     if (!symbol) {
    //         throw this.reportError(
    //             `Unknown Indentifier ${node.name.lexeme}, at line ${node.name.line}, ${node.name.column}`
    //         );
    //     }

    //     // Success
    //     console.log(
    //         `'${node.name.lexeme}' resolved to`,
    //         symbol
    //     );

    //     // symbol.type = this.resolveType(node)
    // }

    // private resolveType(token: Token): GLSLType
    // {
    //     switch (token.lexeme)
    //     {
    //         case "int":       return GLSLType.Int;
    //         case "float":     return GLSLType.Float;
    //         case "bool":      return GLSLType.Bool;

    //         case "vec2":      return GLSLType.Vec2;
    //         case "vec3":      return GLSLType.Vec3;
    //         case "vec4":      return GLSLType.Vec4;

    //         case "mat2":      return GLSLType.Mat2;
    //         case "mat3":      return GLSLType.Mat3;
    //         case "mat4":      return GLSLType.Mat4;

    //         case "sampler2D": return GLSLType.Sampler2D;

    //         case "void":      return GLSLType.Void;
    //     }

    //     return GLSLType.Unknown;
    // }
}