import { GLSLSignature } from "./functionFormat";

export const GEOMETRIC_FUNCTIONS: GLSLSignature[] = [

    {
        name: "dot",
        returnType: "float",
        description: "Returns the dot product of two vectors.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "x" },
            { type: "genType", name: "y" }
        ]
    },
    {
        name: "dot",
        returnType: "double",
        description: "Returns the dot product of two double-precision vectors.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "x" },
            { type: "genDType", name: "y" }
        ]
    },

    {
        name: "cross",
        returnType: "vec3",
        description: "Returns the cross product of two 3-component vectors.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "vec3", name: "x" },
            { type: "vec3", name: "y" }
        ]
    },
    {
        name: "cross",
        returnType: "dvec3",
        description: "Returns the cross product of two 3-component double-precision vectors.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "dvec3", name: "x" },
            { type: "dvec3", name: "y" }
        ]
    },

    {
        name: "length",
        returnType: "float",
        description: "Returns the length of a vector.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "x" }
        ]
    },
    {
        name: "length",
        returnType: "double",
        description: "Returns the length of a double-precision vector.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "x" }
        ]
    },

    {
        name: "distance",
        returnType: "float",
        description: "Returns the distance between two points.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "p0" },
            { type: "genType", name: "p1" }
        ]
    },
    {
        name: "distance",
        returnType: "double",
        description: "Returns the distance between two double-precision points.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "p0" },
            { type: "genDType", name: "p1" }
        ]
    },

    {
        name: "normalize",
        returnType: "genType",
        description: "Returns a normalized vector with length 1.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "x" }
        ]
    },
    {
        name: "normalize",
        returnType: "genDType",
        description: "Returns a normalized double-precision vector with length 1.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "x" }
        ]
    },

    {
        name: "faceforward",
        returnType: "genType",
        description: "Returns N if dot(Nref, I) < 0, otherwise returns -N.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "N" },
            { type: "genType", name: "I" },
            { type: "genType", name: "Nref" }
        ]
    },
    {
        name: "faceforward",
        returnType: "genDType",
        description: "Returns N if dot(Nref, I) < 0, otherwise returns -N for double-precision vectors.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "N" },
            { type: "genDType", name: "I" },
            { type: "genDType", name: "Nref" }
        ]
    },

    {
        name: "reflect",
        returnType: "genType",
        description: "Returns the reflection direction for an incident vector.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "I" },
            { type: "genType", name: "N" }
        ]
    },
    {
        name: "reflect",
        returnType: "genDType",
        description: "Returns the reflection direction for a double-precision incident vector.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "I" },
            { type: "genDType", name: "N" }
        ]
    },

    {
        name: "refract",
        returnType: "genType",
        description: "Computes the refraction vector.",
        category: "Geometric",
        version: "1.10",
        parameters: [
            { type: "genType", name: "I" },
            { type: "genType", name: "N" },
            { type: "float", name: "eta" }
        ]
    },
    {
        name: "refract",
        returnType: "genDType",
        description: "Computes the double-precision refraction vector.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "I" },
            { type: "genDType", name: "N" },
            { type: "double", name: "eta" }
        ]
    }
];

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