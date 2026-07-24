import { DeclarationNode, StructDeclarationNode } from "../parser/ast";

export interface Cords {

    line: number;
    column: number;
};

export class Scope
{
    public parent?: Scope;
    public children: Scope[] = [];
    public declarations: Map<string, DeclarationNode> = new Map();

    start: Cords;
    end: Cords;

    constructor(start: Cords, end: Cords, parent?: Scope) {

        this.start = start;
        this.end = end;
        this.parent = parent;
    }

    add(node: DeclarationNode): boolean {

        if (this.declarations.has(node.name.lexeme))
            return false;

        this.declarations.set(node.name.lexeme, node);
        return true;
    }

    lookup(name: string): DeclarationNode | null
    {
        let scope: Scope | undefined = this;

        while (scope)
        {
            const declaration = scope.declarations.get(name);

            if (declaration) return declaration;

            scope = scope.parent;
        }

        return null;
    }

    lookupCompletionItem(word: string): string[]
    {
        let scope: Scope | undefined = this;
        const names: string[] = [];

        while (scope)
        {
            for (const declaration of scope.declarations.values()) {

                if (declaration.name.lexeme.startsWith(word)) {
                    names.push(declaration.name.lexeme);
                };
            }

            scope = scope.parent;
        }

        return names;
    }

    lookupType(name: string): DeclarationNode | null {

        const struct = this.declarations.get(name);
        if (struct) return struct;

        return null;
    }
}