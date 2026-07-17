export interface GLSLParameter
{
    type: string;
    name: string;
}

export interface GLSLFunction
{
    name: string;
    returnType: string;
    description: string;
    parameters: GLSLParameter[];
}

export const FUNCTIONS: GLSLFunction[] =
[
    {
        name: "texture",
        returnType: "vec4",
        description: "Samples a texture.",
        parameters:
        [
            {
                type: "sampler2D",
                name: "sampler"
            },

            {
                type: "vec2",
                name: "uv"
            }
        ]
    }
];

// export const BUILTIN_FUNCTIONS = [
//     {
//         name: "sin",
//         description: "Returns the sine of an angle expressed in radians."
//     },
//     {
//         name: "cos",
//         description: "Returns the cosine of an angle expressed in radians."
//     },
//     {
//         name: "tan",
//         description: "Returns the tangent of an angle expressed in radians."
//     },
//     {
//         name: "asin",
//         description: "Returns the arc sine (inverse sine) of the input value in radians."
//     },
//     {
//         name: "acos",
//         description: "Returns the arc cosine (inverse cosine) of the input value in radians."
//     },
//     {
//         name: "atan",
//         description: "Returns the arc tangent of a value or computes the angle from the x- and y-components when two arguments are provided."
//     },
//     {
//         name: "radians",
//         description: "Converts an angle from degrees to radians."
//     },
//     {
//         name: "degrees",
//         description: "Converts an angle from radians to degrees."
//     },
//     {
//         name: "pow",
//         description: "Raises the first argument to the power of the second argument."
//     },
//     {
//         name: "exp",
//         description: "Returns Euler's number (e) raised to the specified power."
//     },
//     {
//         name: "log",
//         description: "Returns the natural logarithm (base e) of the input value."
//     },
//     {
//         name: "exp2",
//         description: "Returns 2 raised to the specified power."
//     },
//     {
//         name: "log2",
//         description: "Returns the base-2 logarithm of the input value."
//     },
//     {
//         name: "sqrt",
//         description: "Returns the square root of the input value."
//     },
//     {
//         name: "inversesqrt",
//         description: "Returns the reciprocal of the square root of the input value."
//     },
//     {
//         name: "abs",
//         description: "Returns the absolute value of the input."
//     },
//     {
//         name: "sign",
//         description: "Returns -1.0, 0.0, or 1.0 depending on the sign of the input."
//     },
//     {
//         name: "floor",
//         description: "Returns the greatest integer less than or equal to the input."
//     },
//     {
//         name: "ceil",
//         description: "Returns the smallest integer greater than or equal to the input."
//     },
//     {
//         name: "fract",
//         description: "Returns the fractional part of the input."
//     },
//     {
//         name: "mod",
//         description: "Returns the remainder of x divided by y."
//     },
//     {
//         name: "min",
//         description: "Returns the smaller of two values."
//     },
//     {
//         name: "max",
//         description: "Returns the larger of two values."
//     },
//     {
//         name: "clamp",
//         description: "Constrains a value to lie within the specified minimum and maximum values."
//     },
//     {
//         name: "mix",
//         description: "Performs linear interpolation between two values."
//     },
//     {
//         name: "step",
//         description: "Returns 0.0 if the input is less than the edge; otherwise returns 1.0."
//     },
//     {
//         name: "smoothstep",
//         description: "Performs smooth Hermite interpolation between 0.0 and 1.0."
//     },
//     {
//         name: "length",
//         description: "Returns the length (magnitude) of a vector."
//     },
//     {
//         name: "distance",
//         description: "Returns the distance between two points."
//     },
//     {
//         name: "dot",
//         description: "Returns the dot product of two vectors."
//     },
//     {
//         name: "cross",
//         description: "Returns the cross product of two 3-component vectors."
//     },
//     {
//         name: "normalize",
//         description: "Returns a normalized vector with a length of 1.0."
//     },
//     {
//         name: "faceforward",
//         description: "Returns the normal oriented away from the reference vector."
//     },
//     {
//         name: "reflect",
//         description: "Returns the reflection direction for an incident vector about a surface normal."
//     },
//     {
//         name: "refract",
//         description: "Returns the refraction direction for an incident vector through a surface."
//     },
//     {
//         name: "matrixCompMult",
//         description: "Performs component-wise multiplication of two matrices. Each element of the result is the product of the corresponding elements of the input matrices."
//     },
//     {
//         name: "lessThan",
//         description: "Performs a component-wise less-than comparison between two vectors."
//     },
//     {
//         name: "lessThanEqual",
//         description: "Performs a component-wise less-than-or-equal comparison between two vectors."
//     },
//     {
//         name: "greaterThan",
//         description: "Performs a component-wise greater-than comparison between two vectors."
//     },
//     {
//         name: "greaterThanEqual",
//         description: "Performs a component-wise greater-than-or-equal comparison between two vectors."
//     },
//     {
//         name: "equal",
//         description: "Performs a component-wise equality comparison between two vectors."
//     },
//     {
//         name: "notEqual",
//         description: "Performs a component-wise inequality comparison between two vectors."
//     },
//     {
//         name: "any",
//         description: "Returns true if any component of a boolean vector is true."
//     },
//     {
//         name: "all",
//         description: "Returns true only if every component of a boolean vector is true."
//     },
//     {
//         name: "not",
//         description: "Performs a component-wise logical NOT operation on a boolean vector."
//     },
//     {
//         name: "texture1D",
//         description: "Samples a one-dimensional texture using the specified texture coordinate."
//     },
//     {
//         name: "texture1DProj",
//         description: "Projects the texture coordinate before sampling a one-dimensional texture."
//     },
//     {
//         name: "texture2D",
//         description: "Samples a two-dimensional texture using the specified texture coordinates."
//     },
//     {
//         name: "texture2DProj",
//         description: "Projects the texture coordinates before sampling a two-dimensional texture."
//     },
//     {
//         name: "texture3D",
//         description: "Samples a three-dimensional texture using the specified texture coordinates."
//     },
//     {
//         name: "texture3DProj",
//         description: "Projects the texture coordinates before sampling a three-dimensional texture."
//     },
//     {
//         name: "textureCube",
//         description: "Samples a cubemap texture using a direction vector."
//     },
//     {
//         name: "shadow1D",
//         description: "Performs a depth comparison when sampling a one-dimensional shadow texture."
//     },
//     {
//         name: "shadow1DProj",
//         description: "Projects the coordinates before sampling a one-dimensional shadow texture."
//     },
//     {
//         name: "shadow2D",
//         description: "Performs a depth comparison when sampling a two-dimensional shadow texture."
//     },
//     {
//         name: "shadow2DProj",
//         description: "Projects the coordinates before sampling a two-dimensional shadow texture."
//     },
//     {
//         name: "texture1DLod",
//         description: "Samples a one-dimensional texture using an explicitly specified mipmap level."
//     },
//     {
//         name: "texture1DProjLod",
//         description: "Projects the coordinates before sampling a one-dimensional texture using an explicit mipmap level."
//     },
//     {
//         name: "texture2DLod",
//         description: "Samples a two-dimensional texture using an explicitly specified mipmap level."
//     },
//     {
//         name: "texture2DProjLod",
//         description: "Projects the coordinates before sampling a two-dimensional texture using an explicit mipmap level."
//     },
//     {
//         name: "texture3DLod",
//         description: "Samples a three-dimensional texture using an explicitly specified mipmap level."
//     },
//     {
//         name: "texture3DProjLod",
//         description: "Projects the coordinates before sampling a three-dimensional texture using an explicit mipmap level."
//     },
//     {
//         name: "textureCubeLod",
//         description: "Samples a cubemap using an explicitly specified mipmap level."
//     },
//     {
//         name: "shadow1DLod",
//         description: "Performs a one-dimensional shadow comparison using an explicitly specified mipmap level."
//     },
//     {
//         name: "shadow1DProjLod",
//         description: "Projects the coordinates before performing a one-dimensional shadow comparison using an explicit mipmap level."
//     },
//     {
//         name: "shadow2DLod",
//         description: "Performs a two-dimensional shadow comparison using an explicitly specified mipmap level."
//     },
//     {
//         name: "shadow2DProjLod",
//         description: "Projects the coordinates before performing a two-dimensional shadow comparison using an explicit mipmap level."
//     },
//     {
//         name: "dFdx",
//         description: "Returns the partial derivative of the expression with respect to the screen-space x coordinate."
//     },
//     {
//         name: "dFdy",
//         description: "Returns the partial derivative of the expression with respect to the screen-space y coordinate."
//     },
//     {
//         name: "fwidth",
//         description: "Returns the sum of the absolute x and y derivatives of the expression."
//     },
//     {
//         name: "noise1",
//         description: "Returns a one-dimensional procedural noise value for the specified input."
//     },
//     {
//         name: "noise2",
//         description: "Returns a two-component procedural noise vector for the specified input."
//     },
//     {
//         name: "noise3",
//         description: "Returns a three-component procedural noise vector for the specified input."
//     },
//     {
//         name: "noise4",
//         description: "Returns a four-component procedural noise vector for the specified input."
//     }
// ];

// export const ANGLE_AND_TRIGONOMETRIC_FUNCTIONS = [
//     {
//         name: "sin",
//         description: "Returns the sine of an angle expressed in radians."
//     },
//     {
//         name: "cos",
//         description: "Returns the cosine of an angle expressed in radians."
//     },
//     {
//         name: "tan",
//         description: "Returns the tangent of an angle expressed in radians."
//     },
//     {
//         name: "asin",
//         description: "Returns the arc sine (inverse sine) of the input value in radians."
//     },
//     {
//         name: "acos",
//         description: "Returns the arc cosine (inverse cosine) of the input value in radians."
//     },
//     {
//         name: "atan",
//         description: "Returns the arc tangent of a value or computes the angle from the x- and y-components when two arguments are provided."
//     },
//     {
//         name: "radians",
//         description: "Converts an angle from degrees to radians."
//     },
//     {
//         name: "degrees",
//         description: "Converts an angle from radians to degrees."
//     }
// ];

// export const ANGLE_AND_TRIGONOMETRIC_SIGNATURES = [
//     {
//         name: "sin",
//         signature: "genType sin(genType angle)"
//     },
//     {
//         name: "cos",
//         signature: "genType cos(genType angle)"
//     },
//     {
//         name: "tan",
//         signature: "genType tan(genType angle)"
//     },
//     {
//         name: "asin",
//         signature: "genType asin(genType x)"
//     },
//     {
//         name: "acos",
//         signature: "genType acos(genType x)"
//     },
//     {
//         name: "atan",
//         signature: "genType atan(genType y, genType x)"
//     },
//     {
//         name: "atan",
//         signature: "genType atan(genType y_over_x)"
//     },
//     {
//         name: "radians",
//         signature: "genType radians(genType degrees)"
//     },
//     {
//         name: "degrees",
//         signature: "genType degrees(genType radians)"
//     }
// ];

// export const EXPONENTIAL_FUNCTIONS = [
//     {
//         name: "pow",
//         description: "Raises the first argument to the power of the second argument."
//     },
//     {
//         name: "exp",
//         description: "Returns Euler's number (e) raised to the specified power."
//     },
//     {
//         name: "log",
//         description: "Returns the natural logarithm (base e) of the input value."
//     },
//     {
//         name: "exp2",
//         description: "Returns 2 raised to the specified power."
//     },
//     {
//         name: "log2",
//         description: "Returns the base-2 logarithm of the input value."
//     },
//     {
//         name: "sqrt",
//         description: "Returns the square root of the input value."
//     },
//     {
//         name: "inversesqrt",
//         description: "Returns the reciprocal of the square root of the input value."
//     }
// ];

// export const EXPONENTIAL_FUNCTION_SIGNATURES = [
//     {
//         name: "pow",
//         signature: "genType pow(genType x, genType y)"
//     },
//     {
//         name: "exp",
//         signature: "genType exp(genType x)"
//     },
//     {
//         name: "log",
//         signature: "genType log(genType x)"
//     },
//     {
//         name: "exp2",
//         signature: "genType exp2(genType x)"
//     },
//     {
//         name: "log2",
//         signature: "genType log2(genType x)"
//     },
//     {
//         name: "sqrt",
//         signature: "genType sqrt(genType x)"
//     },
//     {
//         name: "inversesqrt",
//         signature: "genType inversesqrt(genType x)"
//     }
// ];

// export const COMMON_FUNCTIONS = [
//     {
//         name: "abs",
//         description: "Returns the absolute value of the input."
//     },
//     {
//         name: "sign",
//         description: "Returns -1.0, 0.0, or 1.0 depending on the sign of the input."
//     },
//     {
//         name: "floor",
//         description: "Returns the greatest integer less than or equal to the input."
//     },
//     {
//         name: "ceil",
//         description: "Returns the smallest integer greater than or equal to the input."
//     },
//     {
//         name: "fract",
//         description: "Returns the fractional part of the input."
//     },
//     {
//         name: "mod",
//         description: "Returns the remainder of x divided by y."
//     },
//     {
//         name: "min",
//         description: "Returns the smaller of two values."
//     },
//     {
//         name: "max",
//         description: "Returns the larger of two values."
//     },
//     {
//         name: "clamp",
//         description: "Constrains a value to lie within the specified minimum and maximum values."
//     },
//     {
//         name: "mix",
//         description: "Performs linear interpolation between two values."
//     },
//     {
//         name: "step",
//         description: "Returns 0.0 if the input is less than the edge; otherwise returns 1.0."
//     },
//     {
//         name: "smoothstep",
//         description: "Performs smooth Hermite interpolation between 0.0 and 1.0."
//     }
// ];

// export const COMMON_FUNCTION_SIGNATURES = [
//     {
//         name: "abs",
//         signature: "genType abs(genType x)"
//     },
//     {
//         name: "sign",
//         signature: "genType sign(genType x)"
//     },
//     {
//         name: "floor",
//         signature: "genType floor(genType x)"
//     },
//     {
//         name: "ceil",
//         signature: "genType ceil(genType x)"
//     },
//     {
//         name: "fract",
//         signature: "genType fract(genType x)"
//     },
//     {
//         name: "mod",
//         signature: "genType mod(genType x, genType y)"
//     },
//     {
//         name: "mod",
//         signature: "genType mod(genType x, float y)"
//     },
//     {
//         name: "min",
//         signature: "genType min(genType x, genType y)"
//     },
//     {
//         name: "min",
//         signature: "genType min(genType x, float y)"
//     },
//     {
//         name: "max",
//         signature: "genType max(genType x, genType y)"
//     },
//     {
//         name: "max",
//         signature: "genType max(genType x, float y)"
//     },
//     {
//         name: "clamp",
//         signature: "genType clamp(genType x, genType minVal, genType maxVal)"
//     },
//     {
//         name: "clamp",
//         signature: "genType clamp(genType x, float minVal, float maxVal)"
//     },
//     {
//         name: "mix",
//         signature: "genType mix(genType x, genType y, genType a)"
//     },
//     {
//         name: "mix",
//         signature: "genType mix(genType x, genType y, float a)"
//     },
//     {
//         name: "step",
//         signature: "genType step(genType edge, genType x)"
//     },
//     {
//         name: "step",
//         signature: "genType step(float edge, genType x)"
//     },
//     {
//         name: "smoothstep",
//         signature: "genType smoothstep(genType edge0, genType edge1, genType x)"
//     },
//     {
//         name: "smoothstep",
//         signature: "genType smoothstep(float edge0, float edge1, genType x)"
//     }
// ];

// export const GEOMETRIC_FUNCTIONS = [
//     {
//         name: "length",
//         description: "Returns the length (magnitude) of a vector."
//     },
//     {
//         name: "distance",
//         description: "Returns the distance between two points."
//     },
//     {
//         name: "dot",
//         description: "Returns the dot product of two vectors."
//     },
//     {
//         name: "cross",
//         description: "Returns the cross product of two 3-component vectors."
//     },
//     {
//         name: "normalize",
//         description: "Returns a normalized vector with a length of 1.0."
//     },
//     {
//         name: "faceforward",
//         description: "Returns the normal oriented away from the reference vector."
//     },
//     {
//         name: "reflect",
//         description: "Returns the reflection direction for an incident vector about a surface normal."
//     },
//     {
//         name: "refract",
//         description: "Returns the refraction direction for an incident vector through a surface."
//     }
// ];

// export const GEOMETRIC_FUNCTION_SIGNATURES = [
//     {
//         name: "length",
//         signature: "float length(genType x)"
//     },
//     {
//         name: "distance",
//         signature: "float distance(genType p0, genType p1)"
//     },
//     {
//         name: "dot",
//         signature: "float dot(genType x, genType y)"
//     },
//     {
//         name: "cross",
//         signature: "vec3 cross(vec3 x, vec3 y)"
//     },
//     {
//         name: "normalize",
//         signature: "genType normalize(genType x)"
//     },
//     {
//         name: "faceforward",
//         signature: "genType faceforward(genType N, genType I, genType Nref)"
//     },
//     {
//         name: "reflect",
//         signature: "genType reflect(genType I, genType N)"
//     },
//     {
//         name: "refract",
//         signature: "genType refract(genType I, genType N, float eta)"
//     }
// ];

// export const MATRIX_FUNCTIONS = [
//     {
//         name: "matrixCompMult",
//         description: "Performs component-wise multiplication of two matrices. Each element of the result is the product of the corresponding elements of the input matrices."
//     }
// ];

// export const MATRIX_FUNCTION_SIGNATURES = [
//     {
//         name: "matrixCompMult",
//         signature: "mat matrixCompMult(mat x, mat y)"
//     },
//     {
//         name: "matrixCompMult",
//         signature: "mat2 matrixCompMult(mat2 x, mat2 y)"
//     },
//     {
//         name: "matrixCompMult",
//         signature: "mat3 matrixCompMult(mat3 x, mat3 y)"
//     },
//     {
//         name: "matrixCompMult",
//         signature: "mat4 matrixCompMult(mat4 x, mat4 y)"
//     }
// ];

// export const VECTOR_RELATIONAL_FUNCTIONS = [
//     {
//         name: "lessThan",
//         description: "Performs a component-wise less-than comparison between two vectors."
//     },
//     {
//         name: "lessThanEqual",
//         description: "Performs a component-wise less-than-or-equal comparison between two vectors."
//     },
//     {
//         name: "greaterThan",
//         description: "Performs a component-wise greater-than comparison between two vectors."
//     },
//     {
//         name: "greaterThanEqual",
//         description: "Performs a component-wise greater-than-or-equal comparison between two vectors."
//     },
//     {
//         name: "equal",
//         description: "Performs a component-wise equality comparison between two vectors."
//     },
//     {
//         name: "notEqual",
//         description: "Performs a component-wise inequality comparison between two vectors."
//     },
//     {
//         name: "any",
//         description: "Returns true if any component of a boolean vector is true."
//     },
//     {
//         name: "all",
//         description: "Returns true only if every component of a boolean vector is true."
//     },
//     {
//         name: "not",
//         description: "Performs a component-wise logical NOT operation on a boolean vector."
//     }
// ];

// export const VECTOR_RELATIONAL_FUNCTION_SIGNATURES = [
//     {
//         name: "lessThan",
//         signature: "bvec lessThan(vec x, vec y)"
//     },
//     {
//         name: "lessThanEqual",
//         signature: "bvec lessThanEqual(vec x, vec y)"
//     },
//     {
//         name: "greaterThan",
//         signature: "bvec greaterThan(vec x, vec y)"
//     },
//     {
//         name: "greaterThanEqual",
//         signature: "bvec greaterThanEqual(vec x, vec y)"
//     },
//     {
//         name: "equal",
//         signature: "bvec equal(vec x, vec y)"
//     },
//     {
//         name: "notEqual",
//         signature: "bvec notEqual(vec x, vec y)"
//     },
//     {
//         name: "any",
//         signature: "bool any(bvec x)"
//     },
//     {
//         name: "all",
//         signature: "bool all(bvec x)"
//     },
//     {
//         name: "not",
//         signature: "bvec not(bvec x)"
//     }
// ];

// export const TEXTURE_LOOKUP_FUNCTIONS = [
//     {
//         name: "texture1D",
//         description: "Samples a one-dimensional texture using the specified texture coordinate."
//     },
//     {
//         name: "texture1DProj",
//         description: "Projects the texture coordinate before sampling a one-dimensional texture."
//     },
//     {
//         name: "texture2D",
//         description: "Samples a two-dimensional texture using the specified texture coordinates."
//     },
//     {
//         name: "texture2DProj",
//         description: "Projects the texture coordinates before sampling a two-dimensional texture."
//     },
//     {
//         name: "texture3D",
//         description: "Samples a three-dimensional texture using the specified texture coordinates."
//     },
//     {
//         name: "texture3DProj",
//         description: "Projects the texture coordinates before sampling a three-dimensional texture."
//     },
//     {
//         name: "textureCube",
//         description: "Samples a cubemap texture using a direction vector."
//     },
//     {
//         name: "shadow1D",
//         description: "Performs a depth comparison when sampling a one-dimensional shadow texture."
//     },
//     {
//         name: "shadow1DProj",
//         description: "Projects the coordinates before sampling a one-dimensional shadow texture."
//     },
//     {
//         name: "shadow2D",
//         description: "Performs a depth comparison when sampling a two-dimensional shadow texture."
//     },
//     {
//         name: "shadow2DProj",
//         description: "Projects the coordinates before sampling a two-dimensional shadow texture."
//     }
// ];

// export const TEXTURE_LOOKUP_FUNCTION_SIGNATURES = [
//     {
//         name: "texture1D",
//         signature: "vec4 texture1D(sampler1D sampler, float coord)"
//     },
//     {
//         name: "texture1DProj",
//         signature: "vec4 texture1DProj(sampler1D sampler, vec2 coord)"
//     },
//     {
//         name: "texture1DProj",
//         signature: "vec4 texture1DProj(sampler1D sampler, vec4 coord)"
//     },
//     {
//         name: "texture2D",
//         signature: "vec4 texture2D(sampler2D sampler, vec2 coord)"
//     },
//     {
//         name: "texture2DProj",
//         signature: "vec4 texture2DProj(sampler2D sampler, vec3 coord)"
//     },
//     {
//         name: "texture2DProj",
//         signature: "vec4 texture2DProj(sampler2D sampler, vec4 coord)"
//     },
//     {
//         name: "texture3D",
//         signature: "vec4 texture3D(sampler3D sampler, vec3 coord)"
//     },
//     {
//         name: "texture3DProj",
//         signature: "vec4 texture3DProj(sampler3D sampler, vec4 coord)"
//     },
//     {
//         name: "textureCube",
//         signature: "vec4 textureCube(samplerCube sampler, vec3 direction)"
//     },
//     {
//         name: "shadow1D",
//         signature: "float shadow1D(sampler1DShadow sampler, vec3 coord)"
//     },
//     {
//         name: "shadow1DProj",
//         signature: "float shadow1DProj(sampler1DShadow sampler, vec4 coord)"
//     },
//     {
//         name: "shadow2D",
//         signature: "float shadow2D(sampler2DShadow sampler, vec3 coord)"
//     },
//     {
//         name: "shadow2DProj",
//         signature: "float shadow2DProj(sampler2DShadow sampler, vec4 coord)"
//     }
// ];

// export const TEXTURE_LOOKUP_LOD_FUNCTIONS = [
//     {
//         name: "texture1DLod",
//         description: "Samples a one-dimensional texture using an explicitly specified mipmap level."
//     },
//     {
//         name: "texture1DProjLod",
//         description: "Projects the coordinates before sampling a one-dimensional texture using an explicit mipmap level."
//     },
//     {
//         name: "texture2DLod",
//         description: "Samples a two-dimensional texture using an explicitly specified mipmap level."
//     },
//     {
//         name: "texture2DProjLod",
//         description: "Projects the coordinates before sampling a two-dimensional texture using an explicit mipmap level."
//     },
//     {
//         name: "texture3DLod",
//         description: "Samples a three-dimensional texture using an explicitly specified mipmap level."
//     },
//     {
//         name: "texture3DProjLod",
//         description: "Projects the coordinates before sampling a three-dimensional texture using an explicit mipmap level."
//     },
//     {
//         name: "textureCubeLod",
//         description: "Samples a cubemap using an explicitly specified mipmap level."
//     },
//     {
//         name: "shadow1DLod",
//         description: "Performs a one-dimensional shadow comparison using an explicitly specified mipmap level."
//     },
//     {
//         name: "shadow1DProjLod",
//         description: "Projects the coordinates before performing a one-dimensional shadow comparison using an explicit mipmap level."
//     },
//     {
//         name: "shadow2DLod",
//         description: "Performs a two-dimensional shadow comparison using an explicitly specified mipmap level."
//     },
//     {
//         name: "shadow2DProjLod",
//         description: "Projects the coordinates before performing a two-dimensional shadow comparison using an explicit mipmap level."
//     }
// ];

// export const TEXTURE_LOOKUP_LOD_FUNCTION_SIGNATURES = [
//     {
//         name: "texture1DLod",
//         signature: "vec4 texture1DLod(sampler1D sampler, float coord, float lod)"
//     },
//     {
//         name: "texture1DProjLod",
//         signature: "vec4 texture1DProjLod(sampler1D sampler, vec2 coord, float lod)"
//     },
//     {
//         name: "texture1DProjLod",
//         signature: "vec4 texture1DProjLod(sampler1D sampler, vec4 coord, float lod)"
//     },
//     {
//         name: "texture2DLod",
//         signature: "vec4 texture2DLod(sampler2D sampler, vec2 coord, float lod)"
//     },
//     {
//         name: "texture2DProjLod",
//         signature: "vec4 texture2DProjLod(sampler2D sampler, vec3 coord, float lod)"
//     },
//     {
//         name: "texture2DProjLod",
//         signature: "vec4 texture2DProjLod(sampler2D sampler, vec4 coord, float lod)"
//     },
//     {
//         name: "texture3DLod",
//         signature: "vec4 texture3DLod(sampler3D sampler, vec3 coord, float lod)"
//     },
//     {
//         name: "texture3DProjLod",
//         signature: "vec4 texture3DProjLod(sampler3D sampler, vec4 coord, float lod)"
//     },
//     {
//         name: "textureCubeLod",
//         signature: "vec4 textureCubeLod(samplerCube sampler, vec3 direction, float lod)"
//     },
//     {
//         name: "shadow1DLod",
//         signature: "float shadow1DLod(sampler1DShadow sampler, vec3 coord, float lod)"
//     },
//     {
//         name: "shadow1DProjLod",
//         signature: "float shadow1DProjLod(sampler1DShadow sampler, vec4 coord, float lod)"
//     },
//     {
//         name: "shadow2DLod",
//         signature: "float shadow2DLod(sampler2DShadow sampler, vec3 coord, float lod)"
//     },
//     {
//         name: "shadow2DProjLod",
//         signature: "float shadow2DProjLod(sampler2DShadow sampler, vec4 coord, float lod)"
//     }
// ];

// export const FRAGMENT_PROCESSING_FUNCTIONS = [
//     {
//         name: "dFdx",
//         description: "Returns the partial derivative of the expression with respect to the screen-space x coordinate."
//     },
//     {
//         name: "dFdy",
//         description: "Returns the partial derivative of the expression with respect to the screen-space y coordinate."
//     },
//     {
//         name: "fwidth",
//         description: "Returns the sum of the absolute x and y derivatives of the expression."
//     }
// ];

// export const FRAGMENT_PROCESSING_FUNCTION_SIGNATURES = [
//     {
//         name: "dFdx",
//         signature: "genType dFdx(genType p)"
//     },
//     {
//         name: "dFdy",
//         signature: "genType dFdy(genType p)"
//     },
//     {
//         name: "fwidth",
//         signature: "genType fwidth(genType p)"
//     }
// ];

// export const NOISE_FUNCTIONS = [
//     {
//         name: "noise1",
//         description: "Returns a one-dimensional procedural noise value for the specified input."
//     },
//     {
//         name: "noise2",
//         description: "Returns a two-component procedural noise vector for the specified input."
//     },
//     {
//         name: "noise3",
//         description: "Returns a three-component procedural noise vector for the specified input."
//     },
//     {
//         name: "noise4",
//         description: "Returns a four-component procedural noise vector for the specified input."
//     }
// ];

// export const NOISE_FUNCTION_SIGNATURES = [
//     {
//         name: "noise1",
//         signature: "float noise1(genType x)"
//     },
//     {
//         name: "noise2",
//         signature: "vec2 noise2(genType x)"
//     },
//     {
//         name: "noise3",
//         signature: "vec3 noise3(genType x)"
//     },
//     {
//         name: "noise4",
//         signature: "vec4 noise4(genType x)"
//     }
// ];