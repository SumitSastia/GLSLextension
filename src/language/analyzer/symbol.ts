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