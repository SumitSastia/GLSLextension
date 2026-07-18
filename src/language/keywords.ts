export const KEYWORDS = [
    {
        name: "if",
        description: "Executes a block of code when the specified condition evaluates to true."
    },
    {
        name: "else",
        description: "Executes an alternative block when the preceding if condition is false."
    },
    {
        name: "for",
        description: "Creates a counted loop with initialization, condition, and iteration expressions."
    },
    {
        name: "while",
        description: "Repeats execution while the condition evaluates to true."
    },
    {
        name: "do",
        description: "Executes the loop body once before testing the loop condition."
    },
    {
        name: "switch",
        description: "Selects one of several execution paths based on an integer expression."
    },
    {
        name: "case",
        description: "Defines a branch inside a switch statement."
    },
    {
        name: "default",
        description: "Defines the fallback branch in a switch statement."
    },
    {
        name: "break",
        description: "Terminates the nearest loop or switch statement."
    },
    {
        name: "continue",
        description: "Skips the remainder of the current loop iteration."
    },
    {
        name: "return",
        description: "Ends execution of the current function and optionally returns a value."
    },
    {
        name: "discard",
        description: "Terminates the current fragment shader invocation without writing outputs."
    },
    {
        name: "struct",
        description: "Defines a user-defined structure type."
    }
];

export const GLSL_KEYWORDS = new Set([
    
    "const",
    "uniform",
    "layout",
    "in",
    "out",
    "inout",

    "if",
    "else",
    "for",
    "while",
    "break",
    "continue",
    "discard",
    "return",

    "struct",

    "void",
    "bool",
    "int",
    "uint",
    "float",
    "double",

    "vec2",
    "vec3",
    "vec4",

    "ivec2",
    "ivec3",
    "ivec4",

    "uvec2",
    "uvec3",
    "uvec4",

    "mat2",
    "mat3",
    "mat4",

    "sampler2D",
    "samplerCube"
]);