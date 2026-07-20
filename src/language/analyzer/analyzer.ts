import { Symbol } from "./symbol";
import { SymbolKind } from "./symbol";

import { ProgramNode, VariableDeclarationNode } from "../parser/ast";
import { Scope } from "./scope";

export class Analyzer
{
    private globalScope = new Scope();
    private currentScope = this.globalScope;

    private pushScope()
    {
        this.currentScope = new Scope(this.currentScope);
    }

    private popScope()
    {
        if (this.currentScope.parent)
            this.currentScope = this.currentScope.parent;
    }

    analyze(programNode: ProgramNode) {

        this.collectGlobals(programNode);

        this.currentScope = this.globalScope;

        for (const symbol of this.globalScope.symbols.values()) {

            console.log(symbol.name, symbol.kind, symbol.type);
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
                    break;

                case "StructDeclaration":
                    
                    const symbolStruct: Symbol = {
                        name: node.name.lexeme,
                        kind: SymbolKind.Struct,
                        type: ""
                    };
                    this.globalScope.add(symbolStruct);
                    break;

                case "VariableDeclaration":

                    const symbolVar: Symbol = {
                        name: node.name.lexeme,
                        kind: SymbolKind.Variable,
                        type: node.type.lexeme
                    };
                    this.globalScope.add(symbolVar);
                    break;
            }
        }
    }
}