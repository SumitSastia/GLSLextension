import { GLSLSignature } from "./functionFormat";

export const IMAGE_SIGNATURES: GLSLSignature[] = [

    {
        name: "imageSize",
        returnType: "ivec",
        description: "Returns the dimensions of an image.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            }
        ]
    },

    {
        name: "imageSamples",
        returnType: "int",
        description: "Returns the number of samples of a multisampled image.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            }
        ]
    },

    {
        name: "imageLoad",
        returnType: "gvec4",
        description: "Loads a texel from an image.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            }
        ]
    },

    {
        name: "imageStore",
        returnType: "void",
        description: "Stores a texel into an image.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "gvec4",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicAdd",
        returnType: "genIUType",
        description: "Atomically adds data to an image texel and returns the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicMin",
        returnType: "genIUType",
        description: "Atomically stores the minimum of the image texel and data, returning the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicMax",
        returnType: "genIUType",
        description: "Atomically stores the maximum of the image texel and data, returning the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicAnd",
        returnType: "genIUType",
        description: "Atomically performs a bitwise AND on an image texel and returns the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicOr",
        returnType: "genIUType",
        description: "Atomically performs a bitwise OR on an image texel and returns the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicXor",
        returnType: "genIUType",
        description: "Atomically performs a bitwise XOR on an image texel and returns the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    ///

    {
        name: "imageAtomicExchange",
        returnType: "genIUType",
        description: "Atomically replaces the value of an image texel and returns the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicCompSwap",
        returnType: "genIUType",
        description: "Atomically compares the value of an image texel with compare and, if equal, replaces it with data. Returns the original value.",
        category: "Image",
        version: "4.20",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "compare"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicCompSwap",
        returnType: "genIUType",
        description: "Atomically compares the value of an image texel with compare and, if equal, replaces it with data. Returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage",
                name: "image"
            },
            {
                type: "ivec",
                name: "P"
            },
            {
                type: "genIUType",
                name: "compare"
            },
            {
                type: "genIUType",
                name: "data"
            },
            {
                type: "int",
                name: "sample"
            }
        ]
    },

    {
        name: "imageAtomicExchange",
        returnType: "genIUType",
        description: "Atomically replaces the value of a multisampled image texel and returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicAdd",
        returnType: "genIUType",
        description: "Atomically adds data to a multisampled image texel and returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    ////

    {
        name: "imageAtomicMin",
        returnType: "genIUType",
        description: "Atomically stores the minimum of a multisampled image texel and data, returning the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicMax",
        returnType: "genIUType",
        description: "Atomically stores the maximum of a multisampled image texel and data, returning the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicAnd",
        returnType: "genIUType",
        description: "Atomically performs a bitwise AND on a multisampled image texel and returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicOr",
        returnType: "genIUType",
        description: "Atomically performs a bitwise OR on a multisampled image texel and returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicXor",
        returnType: "genIUType",
        description: "Atomically performs a bitwise XOR on a multisampled image texel and returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    ////////

    {
        name: "imageAtomicExchange",
        returnType: "genIUType",
        description: "Atomically replaces the value of a multisampled image texel and returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    },

    {
        name: "imageAtomicCompSwap",
        returnType: "genIUType",
        description: "Atomically compares the value of a multisampled image texel with compare and, if equal, replaces it with data. Returns the original value.",
        category: "Image",
        version: "4.60",
        parameters: [
            {
                type: "gimage2DMS",
                name: "image"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "sample"
            },
            {
                type: "genIUType",
                name: "compare"
            },
            {
                type: "genIUType",
                name: "data"
            }
        ]
    }
];