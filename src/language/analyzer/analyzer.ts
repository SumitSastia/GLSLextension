import { StructSymbol, Symbol } from "./symbol";
import { SymbolKind } from "./symbol";

import { BlockNode, DeclarationNode, ExpressionNode, FunctionDeclarationNode, IdentifierNode, LiteralNode, ParameterNode, ProgramNode, StatementNode, StructDeclarationNode, VariableDeclarationNode } from "../parser/ast";
import { Scope } from "./scope";

export class Analyzer
{
    private globalScope = new Scope();
    private currentScope = this.globalScope;

    private pushScope()
    {
        const child = new Scope(this.currentScope);
        this.currentScope.children.push(child);

        this.currentScope = child;
    }

    private popScope()
    {
        if (this.currentScope.parent)
            this.currentScope = this.currentScope.parent;
    }

    private addVariable(variable: VariableDeclarationNode) {

        const symbolVar: Symbol = {
            name: variable.name.lexeme,
            kind: SymbolKind.Variable,
            type: variable.type.lexeme
        };
        this.globalScope.add(symbolVar);
    }

    analyze(programNode: ProgramNode) {

        this.collectGlobals(programNode);

        this.currentScope = this.globalScope;

        for (const symbol of this.globalScope.symbols.values()) {

            console.log(symbol.name, symbol.kind, symbol.type);

            // if (symbol.kind === SymbolKind.Variable) {

            // }

            // if (symbol instanceof StructSymbol)
            // {
            //     console.log(" Members:");

            //     for (const member of symbol.members.values())
            //     {
            //         console.log("   ", member.name);
            //     }
            // }

            // console.log(symbol);
            // console.log(symbol.constructor.name);
        }
    }

    private collectGlobals(programNode: ProgramNode) {

        for (const node of programNode.declarations) {

            switch(node.kind) {

                case "FunctionDeclaration":

                    const symbolFunc: Symbol = {
                        name: node.name,
                        kind: SymbolKind.Function,
                        type: ""
                    };
                    
                    this.globalScope.add(symbolFunc);
                    this.visitFunction(node);
                    break;

                case "StructDeclaration":
                    
                    const symbolStruct: Symbol = {
                        name: node.name.lexeme,
                        kind: SymbolKind.Struct,
                        type: ""
                    };

                    this.globalScope.add(symbolStruct);
                    this.visitStruct(node);
                    break;

                case "VariableDeclaration":
                    this.visitVariable(node);
                    break;
            }
        }
    }

    private visitBlock(block: BlockNode) {

        this.pushScope();

        for (const statement of block.statements) {
            this.visitStatement(statement);
        }

        this.popScope();
    }

    private addParameter(parameter: ParameterNode) {

        const symbolVar: Symbol = {
            name: parameter.name.lexeme,
            kind: SymbolKind.Parameter,
            type: parameter.type.lexeme
        };
        this.globalScope.add(symbolVar);
    }

    private visitFunction(statement: FunctionDeclarationNode) {

        this.pushScope();

        // parameters
        for (const parameter of statement.parameters)
        {
            this.addParameter(parameter);
        }

        this.visitBlock(statement.body.block);
        this.popScope();
    }

    private visitStruct(statement: StructDeclarationNode) {

        // this.pushScope();

        // for (const member of statement.members) {
        //     this.addVariable(member);
        // }

        // this.popScope();

        const structSymbol = new StructSymbol(statement.name.lexeme);

        for (const member of statement.members) {

            const symbolVar: Symbol = {
                name: member.name.lexeme,
                kind: SymbolKind.Variable,
                type: member.type.lexeme
            };

            structSymbol.members.set(member.name.lexeme, symbolVar);
        }

        // console.log(structSymbol);
        // console.log(structSymbol.constructor.name);

        this.globalScope.add(structSymbol);

        const stored = this.globalScope.lookup("Light")!;

        console.log(
            this.globalScope.symbols.get("Light")
        );
    }

    private visitStatement(statement: StatementNode) {

        switch (statement.kind) {

            case "BlockNode":
                this.visitBlock(statement);
                break;
            
            case "VariableDeclaration":
                this.addVariable(statement);
                break;
        }
    }

    private reportError(msg: string): Error {
        return new Error(`${msg}`);
    }

    private visitVariable(node: VariableDeclarationNode)
    {
        this.addVariable(node);

        if (node.initializer)
        {
            this.visitExpression(node.initializer);
        }
    }

    private visitLiteral(node: LiteralNode)
    {
        // Literals are always valid.
    }
    
    private visitExpression(node: ExpressionNode)
    {
        switch (node.kind)
        {
            case "Identifier":
                this.visitIdentifier(node);
                break;

            case "Literal":
                this.visitLiteral(node);
                break;
        }
    }

    private visitIdentifier(node: IdentifierNode) {

        const symbol = this.currentScope.lookup(node.name.lexeme);

        if (!symbol) {
            throw this.reportError(
                `Unknown Indentifier ${node.name.lexeme}, at line ${node.name.line}, ${node.name.column}`
            );
        }

        // Success
        console.log(
            `'${node.name.lexeme}' resolved to`,
            symbol
        );
    }
}