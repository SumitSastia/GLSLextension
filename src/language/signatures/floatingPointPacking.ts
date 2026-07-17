import { GLSLSignature } from "./functionFormat";

export const FLOATING_POINT_PACKING_SIGNATURES: GLSLSignature[] = [

    {
        name: "packUnorm2x16",
        returnType: "uint",
        description: "Packs two normalized floating-point values into a 32-bit unsigned integer.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "vec2",
                name: "v"
            }
        ]
    },

    {
        name: "packSnorm2x16",
        returnType: "uint",
        description: "Packs two signed normalized floating-point values into a 32-bit unsigned integer.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "vec2",
                name: "v"
            }
        ]
    },

    {
        name: "packUnorm4x8",
        returnType: "uint",
        description: "Packs four normalized floating-point values into a 32-bit unsigned integer.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "vec4",
                name: "v"
            }
        ]
    },

    {
        name: "packSnorm4x8",
        returnType: "uint",
        description: "Packs four signed normalized floating-point values into a 32-bit unsigned integer.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "vec4",
                name: "v"
            }
        ]
    },

    {
        name: "unpackUnorm2x16",
        returnType: "vec2",
        description: "Unpacks a 32-bit unsigned integer into two normalized floating-point values.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "uint",
                name: "p"
            }
        ]
    },

    {
        name: "unpackSnorm2x16",
        returnType: "vec2",
        description: "Unpacks a 32-bit unsigned integer into two signed normalized floating-point values.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "uint",
                name: "p"
            }
        ]
    },

    {
        name: "unpackUnorm4x8",
        returnType: "vec4",
        description: "Unpacks a 32-bit unsigned integer into four normalized floating-point values.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "uint",
                name: "p"
            }
        ]
    },

    {
        name: "unpackSnorm4x8",
        returnType: "vec4",
        description: "Unpacks a 32-bit unsigned integer into four signed normalized floating-point values.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "uint",
                name: "p"
            }
        ]
    },

    {
        name: "packHalf2x16",
        returnType: "uint",
        description: "Packs two 32-bit floating-point values into two 16-bit half-precision values.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "vec2",
                name: "v"
            }
        ]
    },

    {
        name: "unpackHalf2x16",
        returnType: "vec2",
        description: "Unpacks two 16-bit half-precision values into two 32-bit floating-point values.",
        category: "Floating-Point Packing",
        version: "4.20",
        parameters: [
            {
                type: "uint",
                name: "v"
            }
        ]
    }

];

export const GEOMETRIC_SIGNATURES: GLSLSignature[] = [

    {
        name: "length",
        returnType: "float",
        description: "Returns the length of the vector.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "length",
        returnType: "double",
        description: "Returns the length of the vector.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "distance",
        returnType: "float",
        description: "Returns the distance between two points.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "p0"
            },
            {
                type: "genType",
                name: "p1"
            }
        ]
    },

    {
        name: "distance",
        returnType: "double",
        description: "Returns the distance between two points.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "p0"
            },
            {
                type: "genDType",
                name: "p1"
            }
        ]
    },

    {
        name: "dot",
        returnType: "float",
        description: "Returns the dot product of two vectors.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "genType",
                name: "y"
            }
        ]
    },

    {
        name: "dot",
        returnType: "double",
        description: "Returns the dot product of two vectors.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            },
            {
                type: "genDType",
                name: "y"
            }
        ]
    },

    {
        name: "cross",
        returnType: "vec3",
        description: "Returns the cross product of two vectors.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "vec3",
                name: "x"
            },
            {
                type: "vec3",
                name: "y"
            }
        ]
    },

    {
        name: "cross",
        returnType: "dvec3",
        description: "Returns the cross product of two vectors.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "dvec3",
                name: "x"
            },
            {
                type: "dvec3",
                name: "y"
            }
        ]
    },

    {
        name: "normalize",
        returnType: "genType",
        description: "Returns a vector with the same direction as x but with length 1.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "normalize",
        returnType: "genDType",
        description: "Returns a vector with the same direction as x but with length 1.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "faceforward",
        returnType: "genType",
        description: "Returns N if dot(Nref, I) < 0; otherwise returns -N.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "N"
            },
            {
                type: "genType",
                name: "I"
            },
            {
                type: "genType",
                name: "Nref"
            }
        ]
    },

    {
        name: "faceforward",
        returnType: "genDType",
        description: "Returns N if dot(Nref, I) < 0; otherwise returns -N.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "N"
            },
            {
                type: "genDType",
                name: "I"
            },
            {
                type: "genDType",
                name: "Nref"
            }
        ]
    },

    {
        name: "reflect",
        returnType: "genType",
        description: "Returns the reflection direction for an incident vector.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "I"
            },
            {
                type: "genType",
                name: "N"
            }
        ]
    },

    {
        name: "reflect",
        returnType: "genDType",
        description: "Returns the reflection direction for an incident vector.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "I"
            },
            {
                type: "genDType",
                name: "N"
            }
        ]
    },

    {
        name: "refract",
        returnType: "genType",
        description: "Returns the refraction vector for an incident vector and surface normal.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "I"
            },
            {
                type: "genType",
                name: "N"
            },
            {
                type: "float",
                name: "eta"
            }
        ]
    },

    {
        name: "refract",
        returnType: "genDType",
        description: "Returns the refraction vector for an incident vector and surface normal.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "I"
            },
            {
                type: "genDType",
                name: "N"
            },
            {
                type: "double",
                name: "eta"
            }
        ]
    }
];