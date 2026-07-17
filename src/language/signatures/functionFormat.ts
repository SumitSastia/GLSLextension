export interface GLSLSignature {
    name: string;
    returnType: string;
    description: string;
    category: string;
    version: string;

    parameters: {
        type: string;
        name: string;
    }[];
}