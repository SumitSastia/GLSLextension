export enum SymbolKind
{
    Variable,
    Uniform,
    Function,
    Parameter,
    Struct,
}

interface GLSLType {
    
}

export interface Symbol
{
    name: string;

    kind: SymbolKind;

    // type: GLSLType;
    type: string;
}

export class StructSymbol implements Symbol
{
    name: string;
    kind = SymbolKind.Struct;
    // type: GLSLType;
    type = "struct";

    members = new Map<string, Symbol>();

    constructor(name: string)
    {
        this.name = name;
    }
}