export const PREPROCESSORS = [
    {
        name: "#version",
        description: "Specifies the GLSL language version used by the shader."
    },
    {
        name: "#define",
        description: "Defines a macro."
    },
    {
        name: "#ifdef",
        description: "Compiles code if the specified macro is defined."
    },
    {
        name: "#ifndef",
        description: "Compiles code if the specified macro is not defined."
    },
    {
        name: "#if",
        description: "Compiles code when the expression evaluates to true."
    },
    {
        name: "#elif",
        description: "Alternative conditional branch."
    },
    {
        name: "#else",
        description: "Fallback conditional branch."
    },
    {
        name: "#endif",
        description: "Ends a conditional preprocessing block."
    },
    {
        name: "#extension",
        description: "Enables or controls GLSL extensions."
    },
    {
        name: "#pragma",
        description: "Provides implementation-specific compiler instructions."
    },
    {
        name: "#line",
        description: "Changes the reported source line number."
    },
    {
        name: "#error",
        description: "Generates a compile-time error with a custom message."
    },
    {
        name: "#undef",
        description: "Removes a previously defined macro."
    }
];

export const PREPROCESSOR_DIRECTIVES = [
    {
        name: "#",
        description: "Introduces a GLSL preprocessor directive."
    },
    {
        name: "#define",
        description: "Defines a macro or macro function that is expanded before compilation."
    },
    {
        name: "#undef",
        description: "Removes a previously defined macro."
    },
    {
        name: "#if",
        description: "Compiles the following code only if the constant expression evaluates to true."
    },
    {
        name: "#ifdef",
        description: "Compiles the following code if the specified macro is defined."
    },
    {
        name: "#ifndef",
        description: "Compiles the following code if the specified macro is not defined."
    },
    {
        name: "#else",
        description: "Specifies the alternative branch of a conditional preprocessor block."
    },
    {
        name: "#elif",
        description: "Provides an additional conditional branch in a preprocessor block."
    },
    {
        name: "#endif",
        description: "Marks the end of a conditional preprocessor block."
    },
    {
        name: "#error",
        description: "Generates a compile-time error with the specified message."
    },
    {
        name: "#pragma",
        description: "Provides implementation-specific compiler instructions."
    },
    {
        name: "#line",
        description: "Changes the reported source line number and optional source file number."
    },
    {
        name: "#version",
        description: "Specifies the GLSL language version that the shader uses."
    },
    {
        name: "#extension",
        description: "Enables, disables, or configures support for a GLSL language extension."
    },
    {
        name: "__LINE__",
        description: "Expands to the current source line number as an integer constant."
    },
    {
        name: "__FILE__",
        description: "Expands to the current source string number specified by the compiler or #line directive."
    },
    {
        name: "__VERSION__",
        description: "Expands to an integer representing the GLSL language version being compiled."
    }
];

export const PREDEFINED_MACROS = [
    {
        name: "__LINE__",
        description: "Expands to the current source line number as an integer constant."
    },
    {
        name: "__FILE__",
        description: "Expands to the current source string number specified by the compiler or #line directive."
    },
    {
        name: "__VERSION__",
        description: "Expands to an integer representing the GLSL language version being compiled."
    }
];