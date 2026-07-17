import { GLSLSignature } from "./functionFormat";

export const ANGLE_SIGNATURES: GLSLSignature[] = [

    {
        name: "radians",
        returnType: "genType",
        description: "Converts degrees to radians.",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "degrees"
            }
        ]
    },

    {
        name: "degrees",
        returnType: "genType",
        description: "Converts radians to degrees.",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "radians"
            }
        ]
    },

    {
        name: "sin",
        returnType: "genType",
        description: "Returns the sine of an angle expressed in radians.",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "angle"
            }
        ]
    },

    {
        name: "cos",
        returnType: "genType",
        description: "Returns the cosine of an angle expressed in radians.",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "angle"
            }
        ]
    },

    {
        name: "tan",
        returnType: "genType",
        description: "Returns the tangent of an angle expressed in radians.",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "angle"
            }
        ]
    },

    {
        name: "asin",
        returnType: "genType",
        description: "Returns the arc sine of x. Results are in the range [-π/2, π/2].",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "acos",
        returnType: "genType",
        description: "Returns the arc cosine of x. Results are in the range [0, π].",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "atan",
        returnType: "genType",
        description: "Returns the arc tangent of y/x using the signs of both arguments to determine the correct quadrant.",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "y"
            },
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "atan",
        returnType: "genType",
        description: "Returns the arc tangent of x. Results are in the range [-π/2, π/2].",
        category: "Angle and Trigonometry",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "sinh",
        returnType: "genType",
        description: "Returns the hyperbolic sine of x.",
        category: "Angle and Trigonometry",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "cosh",
        returnType: "genType",
        description: "Returns the hyperbolic cosine of x.",
        category: "Angle and Trigonometry",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "tanh",
        returnType: "genType",
        description: "Returns the hyperbolic tangent of x.",
        category: "Angle and Trigonometry",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "asinh",
        returnType: "genType",
        description: "Returns the inverse hyperbolic sine.",
        category: "Angle and Trigonometry",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "acosh",
        returnType: "genType",
        description: "Returns the inverse hyperbolic cosine.",
        category: "Angle and Trigonometry",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "atanh",
        returnType: "genType",
        description: "Returns the inverse hyperbolic tangent.",
        category: "Angle and Trigonometry",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    }
];

export const EXPONENTIAL_SIGNATURES: GLSLSignature[] = [

    {
        name: "pow",
        returnType: "genType",
        description: "Returns x raised to the power y.",
        category: "Exponential",
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
        name: "exp",
        returnType: "genType",
        description: "Returns e raised to the power x.",
        category: "Exponential",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "log",
        returnType: "genType",
        description: "Returns the natural logarithm of x.",
        category: "Exponential",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "exp2",
        returnType: "genType",
        description: "Returns 2 raised to the power x.",
        category: "Exponential",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "log2",
        returnType: "genType",
        description: "Returns the base-2 logarithm of x.",
        category: "Exponential",
        version: "1.30",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "sqrt",
        returnType: "genType",
        description: "Returns the square root of x.",
        category: "Exponential",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    },

    {
        name: "inversesqrt",
        returnType: "genType",
        description: "Returns the inverse square root of x.",
        category: "Exponential",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "x"
            }
        ]
    }
];