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

export enum GLSLVersion {

    V330 = 330,
    V450 = 450,
    V460 = 460
}