export const DATA_TYPES = [
    {
        name: "float",
        description: "32-bit floating-point scalar."
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
        name: "int",
        description: "32-bit signed integer scalar."
    },
    {
        name: "ivec2",
        description: "Two-component signed integer vector."
    },
    {
        name: "ivec3",
        description: "Three-component signed integer vector."
    },
    {
        name: "ivec4",
        description: "Four-component signed integer vector."
    },
    {
        name: "bool",
        description: "Boolean scalar value that can be true or false."
    },
    {
        name: "bvec2",
        description: "Two-component boolean vector."
    },
    {
        name: "bvec3",
        description: "Three-component boolean vector."
    },
    {
        name: "bvec4",
        description: "Four-component boolean vector."
    },
    {
        name: "mat2",
        description: "2x2 floating-point matrix."
    },
    {
        name: "mat3",
        description: "3x3 floating-point matrix."
    },
    {
        name: "mat4",
        description: "4x4 floating-point matrix."
    },
    {
        name: "void",
        description: "Represents the absence of a value. Used as a function return type."
    },
    {
        name: "sampler1D",
        description: "Opaque type used for sampling one-dimensional textures."
    },
    {
        name: "sampler2D",
        description: "Opaque type used for sampling two-dimensional textures."
    },
    {
        name: "sampler3D",
        description: "Opaque type used for sampling three-dimensional textures."
    },
    {
        name: "samplerCube",
        description: "Opaque type used for sampling cubemap textures."
    },
    {
        name: "sampler1DShadow",
        description: "Opaque type used for depth comparisons when sampling one-dimensional shadow textures."
    },
    {
        name: "sampler2DShadow",
        description: "Opaque type used for depth comparisons when sampling two-dimensional shadow textures."
    }
];

export const BUILTIN_STRUCTS = new Map([

    // Float vectors
    ["vec2", [
        "x", "y",
        "r", "g",
        "s", "t"
    ]],

    ["vec3", [
        "x", "y", "z",
        "r", "g", "b",
        "s", "t", "p"
    ]],

    ["vec4", [
        "x", "y", "z", "w",
        "r", "g", "b", "a",
        "s", "t", "p", "q"
    ]],

    // Integer vectors
    ["ivec2", [
        "x", "y",
        "r", "g",
        "s", "t"
    ]],

    ["ivec3", [
        "x", "y", "z",
        "r", "g", "b",
        "s", "t", "p"
    ]],

    ["ivec4", [
        "x", "y", "z", "w",
        "r", "g", "b", "a",
        "s", "t", "p", "q"
    ]],

    // Unsigned integer vectors
    ["uvec2", [
        "x", "y",
        "r", "g",
        "s", "t"
    ]],

    ["uvec3", [
        "x", "y", "z",
        "r", "g", "b",
        "s", "t", "p"
    ]],

    ["uvec4", [
        "x", "y", "z", "w",
        "r", "g", "b", "a",
        "s", "t", "p", "q"
    ]],

    // Boolean vectors
    ["bvec2", [
        "x", "y",
        "r", "g",
        "s", "t"
    ]],

    ["bvec3", [
        "x", "y", "z",
        "r", "g", "b",
        "s", "t", "p"
    ]],

    ["bvec4", [
        "x", "y", "z", "w",
        "r", "g", "b", "a",
        "s", "t", "p", "q"
    ]],

    // Double vectors
    ["dvec2", [
        "x", "y",
        "r", "g",
        "s", "t"
    ]],

    ["dvec3", [
        "x", "y", "z",
        "r", "g", "b",
        "s", "t", "p"
    ]],

    ["dvec4", [
        "x", "y", "z", "w",
        "r", "g", "b", "a",
        "s", "t", "p", "q"
    ]]
]);