import { GLSLSignature } from "./functionFormat";

export const MATRIX_SIGNATURES: GLSLSignature[] = [

    {
        name: "matrixCompMult",
        returnType: "mat",
        description: "Performs a component-wise multiplication of two matrices.",
        category: "Matrix",
        version: "1.10",
        parameters: [
            {
                type: "mat",
                name: "x"
            },
            {
                type: "mat",
                name: "y"
            }
        ]
    },

    {
        name: "matrixCompMult",
        returnType: "dmat",
        description: "Performs a component-wise multiplication of two matrices.",
        category: "Matrix",
        version: "4.00",
        parameters: [
            {
                type: "dmat",
                name: "x"
            },
            {
                type: "dmat",
                name: "y"
            }
        ]
    },

    {
        name: "outerProduct",
        returnType: "mat",
        description: "Computes the outer product of two vectors.",
        category: "Matrix",
        version: "1.20",
        parameters: [
            {
                type: "vec",
                name: "c"
            },
            {
                type: "vec",
                name: "r"
            }
        ]
    },

    {
        name: "outerProduct",
        returnType: "dmat",
        description: "Computes the outer product of two vectors.",
        category: "Matrix",
        version: "4.00",
        parameters: [
            {
                type: "dvec",
                name: "c"
            },
            {
                type: "dvec",
                name: "r"
            }
        ]
    },

    {
        name: "transpose",
        returnType: "mat",
        description: "Returns the transpose of a matrix.",
        category: "Matrix",
        version: "1.20",
        parameters: [
            {
                type: "mat",
                name: "m"
            }
        ]
    },

    {
        name: "transpose",
        returnType: "dmat",
        description: "Returns the transpose of a matrix.",
        category: "Matrix",
        version: "4.00",
        parameters: [
            {
                type: "dmat",
                name: "m"
            }
        ]
    },

    {
        name: "determinant",
        returnType: "float",
        description: "Returns the determinant of a square matrix.",
        category: "Matrix",
        version: "1.40",
        parameters: [
            {
                type: "mat",
                name: "m"
            }
        ]
    },

    {
        name: "determinant",
        returnType: "double",
        description: "Returns the determinant of a square matrix.",
        category: "Matrix",
        version: "4.00",
        parameters: [
            {
                type: "dmat",
                name: "m"
            }
        ]
    },

    {
        name: "inverse",
        returnType: "mat",
        description: "Returns the inverse of a matrix.",
        category: "Matrix",
        version: "1.40",
        parameters: [
            {
                type: "mat",
                name: "m"
            }
        ]
    },

    {
        name: "inverse",
        returnType: "dmat",
        description: "Returns the inverse of a matrix.",
        category: "Matrix",
        version: "4.00",
        parameters: [
            {
                type: "dmat",
                name: "m"
            }
        ]
    }

];

export const VECTOR_RELATIONAL_SIGNATURES: GLSLSignature[] = [

    {
        name: "lessThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x < y.",
        category: "Vector Relational",
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
        name: "lessThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x < y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "y"
            }
        ]
    },

    {
        name: "lessThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x < y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "y"
            }
        ]
    },

    {
        name: "lessThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x < y.",
        category: "Vector Relational",
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
        name: "lessThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x <= y.",
        category: "Vector Relational",
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
        name: "lessThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x <= y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "y"
            }
        ]
    },

    {
        name: "lessThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x <= y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "y"
            }
        ]
    },

    {
        name: "lessThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x <= y.",
        category: "Vector Relational",
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
        name: "greaterThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x > y.",
        category: "Vector Relational",
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
        name: "greaterThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x > y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "y"
            }
        ]
    },

    {
        name: "greaterThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x > y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "y"
            }
        ]
    },

    {
        name: "greaterThan",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x > y.",
        category: "Vector Relational",
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
        name: "greaterThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x >= y.",
        category: "Vector Relational",
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
        name: "greaterThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x >= y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "y"
            }
        ]
    },

    {
        name: "greaterThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x >= y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "y"
            }
        ]
    },

    {
        name: "greaterThanEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x >= y.",
        category: "Vector Relational",
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
        name: "equal",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
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
        name: "equal",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "y"
            }
        ]
    },

    {
        name: "equal",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "y"
            }
        ]
    },

    {
        name: "equal",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
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
        name: "equal",
        returnType: "bvec2",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "bvec2",
                name: "x"
            },
            {
                type: "bvec2",
                name: "y"
            }
        ]
    },

    {
        name: "equal",
        returnType: "bvec3",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "bvec3",
                name: "x"
            },
            {
                type: "bvec3",
                name: "y"
            }
        ]
    },

    {
        name: "equal",
        returnType: "bvec4",
        description: "Returns the component-wise comparison of x == y.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "bvec4",
                name: "x"
            },
            {
                type: "bvec4",
                name: "y"
            }
        ]
    },

    {
        name: "notEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
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
        name: "notEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "y"
            }
        ]
    },

    {
        name: "notEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "y"
            }
        ]
    },

    {
        name: "notEqual",
        returnType: "genBType",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
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
        name: "notEqual",
        returnType: "bvec2",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "bvec2",
                name: "x"
            },
            {
                type: "bvec2",
                name: "y"
            }
        ]
    },

    {
        name: "notEqual",
        returnType: "bvec3",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "bvec3",
                name: "x"
            },
            {
                type: "bvec3",
                name: "y"
            }
        ]
    },

    {
        name: "notEqual",
        returnType: "bvec4",
        description: "Returns the component-wise comparison of x != y.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "bvec4",
                name: "x"
            },
            {
                type: "bvec4",
                name: "y"
            }
        ]
    },

    {
        name: "any",
        returnType: "bool",
        description: "Returns true if any component of x is true.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "genBType",
                name: "x"
            }
        ]
    },

    {
        name: "all",
        returnType: "bool",
        description: "Returns true if all components of x are true.",
        category: "Vector Relational",
        version: "1.10",
        parameters: [
            {
                type: "genBType",
                name: "x"
            }
        ]
    },

    {
        name: "not",
        returnType: "genBType",
        description: "Returns the component-wise logical complement of x.",
        category: "Vector Relational",
        version: "1.30",
        parameters: [
            {
                type: "genBType",
                name: "x"
            }
        ]
    },
];