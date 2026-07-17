export interface GLSLType {

    name: string;
    description: string;
}

export const TYPES: GLSLType[] = [

    {
        name: "int",
        description: "integer"
    },
    {
        name: "uint",
        description: "unsigned integer"
    },
    {
        name: "float",
        description: "float-point number."
    },
    {
        name: "vec2",
        description: "2D floating-point vector."
    },
    {
        name: "vec3",
        description: "3D floating-point vector."
    },
    {
        name: "vec4",
        description: "4-Component floating-point vector."
    },
    {
        name: "mat2",
        description: "2x2 Matrix."
    },
    {
        name: "mat3",
        description: "3x3 Matrix."
    },
    {
        name: "mat4",
        description: "4x4 Matrix."
    }
];

export const TYPES1 = [
    {
        name: "void",
        description: "Represents the absence of a return value."
    },
    {
        name: "bool",
        description: "Boolean type with values true or false."
    },
    {
        name: "int",
        description: "32-bit signed integer."
    },
    {
        name: "uint",
        description: "32-bit unsigned integer."
    },
    {
        name: "float",
        description: "32-bit floating-point scalar."
    },
    {
        name: "double",
        description: "64-bit floating-point scalar."
    },
    {
        name: "vec2",
        description: "Two-component floating-point vector."
    },
    {
        name: "vec3",
        description: "Three-component floating-point vector."
    },
    {
        name: "vec4",
        description: "Four-component floating-point vector."
    },
    {
        name: "mat3",
        description: "3×3 floating-point matrix."
    },
    {
        name: "mat4",
        description: "4×4 floating-point matrix."
    },
    {
        name: "sampler2D",
        description: "Opaque type used to sample a 2D texture."
    },
    {
        name: "samplerCube",
        description: "Opaque type used to sample a cubemap texture."
    }
];

export enum GLSLVersion {

    V330 = 330,
    V450 = 450,
    V460 = 460
}