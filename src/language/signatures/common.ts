import { GLSLSignature } from "./functionFormat";

export const COMMON_SIGNATURES: GLSLSignature[] = [

    {
        name: "abs",
        returnType: "genType",
        description: "Returns the absolute value of x.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "abs",
        returnType: "genIType",
        description: "Returns the absolute value of x.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            }
        ]
    },

    {
        name: "sign",
        returnType: "genType",
        description: "Returns -1.0 if x < 0, 0.0 if x == 0, and 1.0 if x > 0.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "sign",
        returnType: "genIType",
        description: "Returns -1 if x < 0, 0 if x == 0, and 1 if x > 0.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            }
        ]
    },

    {
        name: "floor",
        returnType: "genType",
        description: "Returns the greatest integer less than or equal to x.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "trunc",
        returnType: "genType",
        description: "Returns the nearest integer toward zero.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "round",
        returnType: "genType",
        description: "Returns the nearest integer value to x.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "roundEven",
        returnType: "genType",
        description: "Returns the nearest integer. Halfway values are rounded to the nearest even integer.",
        category: "Common",
        version: "1.40",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "ceil",
        returnType: "genType",
        description: "Returns the least integer greater than or equal to x.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "fract",
        returnType: "genType",
        description: "Returns the fractional part of x.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "mod",
        returnType: "genType",
        description: "Computes x - y * floor(x / y).",
        category: "Common",
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
        name: "mod",
        returnType: "genType",
        description: "Computes x - y * floor(x / y).",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "float",
                name: "y"
            }
        ]
    },

    {
        name: "modf",
        returnType: "genType",
        description: "Splits x into fractional and integer parts.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "out genType",
                name: "i"
            }
        ]
    },

    //////// 

    {
        name: "min",
        returnType: "genType",
        description: "Returns the smaller of x and y.",
        category: "Common",
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
        name: "min",
        returnType: "genType",
        description: "Returns the smaller of x and y.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "float",
                name: "y"
            }
        ]
    },

    {
        name: "min",
        returnType: "genIType",
        description: "Returns the smaller of x and y.",
        category: "Common",
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
        name: "min",
        returnType: "genUType",
        description: "Returns the smaller of x and y.",
        category: "Common",
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
        name: "max",
        returnType: "genType",
        description: "Returns the larger of x and y.",
        category: "Common",
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
        name: "max",
        returnType: "genType",
        description: "Returns the larger of x and y.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "float",
                name: "y"
            }
        ]
    },

    {
        name: "max",
        returnType: "genIType",
        description: "Returns the larger of x and y.",
        category: "Common",
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
        name: "max",
        returnType: "genUType",
        description: "Returns the larger of x and y.",
        category: "Common",
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
        name: "clamp",
        returnType: "genType",
        description: "Constrains x to the range [minVal, maxVal].",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "genType",
                name: "minVal"
            },
            {
                type: "genType",
                name: "maxVal"
            }
        ]
    },

    {
        name: "clamp",
        returnType: "genType",
        description: "Constrains x to the range [minVal, maxVal].",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "float",
                name: "minVal"
            },
            {
                type: "float",
                name: "maxVal"
            }
        ]
    },

    {
        name: "clamp",
        returnType: "genIType",
        description: "Constrains x to the range [minVal, maxVal].",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genIType",
                name: "x"
            },
            {
                type: "genIType",
                name: "minVal"
            },
            {
                type: "genIType",
                name: "maxVal"
            }
        ]
    },

    {
        name: "clamp",
        returnType: "genUType",
        description: "Constrains x to the range [minVal, maxVal].",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genUType",
                name: "x"
            },
            {
                type: "genUType",
                name: "minVal"
            },
            {
                type: "genUType",
                name: "maxVal"
            }
        ]
    },

    {
        name: "mix",
        returnType: "genType",
        description: "Performs a linear interpolation between x and y using a.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "genType",
                name: "y"
            },
            {
                type: "genType",
                name: "a"
            }
        ]
    },

    {
        name: "mix",
        returnType: "genType",
        description: "Performs a linear interpolation between x and y using scalar a.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "genType",
                name: "y"
            },
            {
                type: "float",
                name: "a"
            }
        ]
    },

    {
        name: "mix",
        returnType: "genDType",
        description: "Performs a linear interpolation between x and y using scalar a.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            },
            {
                type: "genDType",
                name: "y"
            },
            {
                type: "double",
                name: "a"
            }
        ]
    },

    {
        name: "mix",
        returnType: "genType",
        description: "Selects components from x or y according to boolean selector a.",
        category: "Common",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "genType",
                name: "y"
            },
            {
                type: "genBType",
                name: "a"
            }
        ]
    },

    {
        name: "mix",
        returnType: "genDType",
        description: "Selects components from x or y according to boolean selector a.",
        category: "Common",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "x"
            },
            {
                type: "genDType",
                name: "y"
            },
            {
                type: "genBType",
                name: "a"
            }
        ]
    },

    ////

    {
        name: "step",
        returnType: "genType",
        description: "Returns 0.0 if x < edge; otherwise returns 1.0.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "edge"
            },
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "step",
        returnType: "genType",
        description: "Returns 0.0 if x < edge; otherwise returns 1.0.",
        category: "Common",
        version: "1.10",
        parameters: [
            {
                type: "float",
                name: "edge"
            },
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "step",
        returnType: "genDType",
        description: "Returns 0.0 if x < edge; otherwise returns 1.0.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "edge"
            },
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "step",
        returnType: "genDType",
        description: "Returns 0.0 if x < edge; otherwise returns 1.0.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "double",
                name: "edge"
            },
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "smoothstep",
        returnType: "genType",
        description: "Performs smooth Hermite interpolation between 0 and 1 when x is in the range [edge0, edge1].",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "edge0"
            },
            {
                type: "genType",
                name: "edge1"
            },
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "smoothstep",
        returnType: "genType",
        description: "Performs smooth Hermite interpolation between 0 and 1 when x is in the range [edge0, edge1].",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "float",
                name: "edge0"
            },
            {
                type: "float",
                name: "edge1"
            },
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "smoothstep",
        returnType: "genDType",
        description: "Performs smooth Hermite interpolation between 0 and 1 when x is in the range [edge0, edge1].",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "edge0"
            },
            {
                type: "genDType",
                name: "edge1"
            },
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "smoothstep",
        returnType: "genDType",
        description: "Performs smooth Hermite interpolation between 0 and 1 when x is in the range [edge0, edge1].",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "double",
                name: "edge0"
            },
            {
                type: "double",
                name: "edge1"
            },
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "isnan",
        returnType: "genBType",
        description: "Returns true for each component of x that is NaN.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "isnan",
        returnType: "genBType",
        description: "Returns true for each component of x that is NaN.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    {
        name: "isinf",
        returnType: "genBType",
        description: "Returns true for each component of x that is positive or negative infinity.",
        category: "Common",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "isinf",
        returnType: "genBType",
        description: "Returns true for each component of x that is positive or negative infinity.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            }
        ]
    },

    //

    {
        name: "floatBitsToInt",
        returnType: "genIType",
        description: "Reinterprets the bit pattern of a floating-point value as a signed integer.",
        category: "Common",
        version: "3.30",
        parameters: [
            {
                type: "genType",
                name: "value"
            }
        ]
    },

    {
        name: "floatBitsToUint",
        returnType: "genUType",
        description: "Reinterprets the bit pattern of a floating-point value as an unsigned integer.",
        category: "Common",
        version: "3.30",
        parameters: [
            {
                type: "genType",
                name: "value"
            }
        ]
    },

    {
        name: "intBitsToFloat",
        returnType: "genType",
        description: "Reinterprets the bit pattern of a signed integer as a floating-point value.",
        category: "Common",
        version: "3.30",
        parameters: [
            {
                type: "genIType",
                name: "value"
            }
        ]
    },

    {
        name: "uintBitsToFloat",
        returnType: "genType",
        description: "Reinterprets the bit pattern of an unsigned integer as a floating-point value.",
        category: "Common",
        version: "3.30",
        parameters: [
            {
                type: "genUType",
                name: "value"
            }
        ]
    },

    {
        name: "fma",
        returnType: "genType",
        description: "Computes a * b + c with a single rounding operation.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "a"
            },
            {
                type: "genType",
                name: "b"
            },
            {
                type: "genType",
                name: "c"
            }
        ]
    },

    {
        name: "fma",
        returnType: "genDType",
        description: "Computes a * b + c with a single rounding operation.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "a"
            },
            {
                type: "genDType",
                name: "b"
            },
            {
                type: "genDType",
                name: "c"
            }
        ]
    },

    {
        name: "frexp",
        returnType: "genType",
        description: "Splits a floating-point value into a normalized fraction and an integral exponent.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "out genIType",
                name: "exp"
            }
        ]
    },

    {
        name: "frexp",
        returnType: "genDType",
        description: "Splits a double-precision value into a normalized fraction and an integral exponent.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            },
            {
                type: "out genIType",
                name: "exp"
            }
        ]
    },

    {
        name: "ldexp",
        returnType: "genType",
        description: "Builds a floating-point value from a normalized fraction and an integral exponent.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            },
            {
                type: "genIType",
                name: "exp"
            }
        ]
    },

    {
        name: "ldexp",
        returnType: "genDType",
        description: "Builds a double-precision value from a normalized fraction and an integral exponent.",
        category: "Common",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "x"
            },
            {
                type: "genIType",
                name: "exp"
            }
        ]
    },
];