import { Symbol } from "./symbol";

export class Scope
{
    readonly symbols = new Map<string, Symbol>();

    constructor(
        public readonly parent?: Scope
    ) {}

    add(symbol: Symbol): boolean
    {
        if (this.symbols.has(symbol.name))
            return false;

        this.symbols.set(symbol.name, symbol);

        return true;
    }

    lookup(name: string): Symbol | undefined
    {
        let scope: Scope | undefined = this;

        while (scope)
        {
            const symbol = scope.symbols.get(name);

            if (symbol)
                return symbol;

            scope = scope.parent;
        }

        return undefined;
    }
}