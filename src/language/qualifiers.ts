export const QUALIFIERS = [
    {
        name: "uniform",
        description: "Declares a read-only global variable supplied by the application."
    },
    {
        name: "layout",
        description: "Specifies memory layout, binding locations, formats, or other implementation details."
    },
    {
        name: "in",
        description: "Declares an input variable."
    },
    {
        name: "out",
        description: "Declares an output variable."
    },
    {
        name: "inout",
        description: "Function parameter that acts as both input and output."
    },
    {
        name: "const",
        description: "Declares a compile-time constant."
    },
    {
        name: "flat",
        description: "Disables interpolation across a primitive."
    },
    {
        name: "smooth",
        description: "Uses perspective-correct interpolation (default)."
    },
    {
        name: "centroid",
        description: "Samples interpolated values from within the primitive."
    },
    {
        name: "patch",
        description: "Marks tessellation patch inputs or outputs."
    },
    {
        name: "shared",
        description: "Declares shared memory visible to all invocations within a compute workgroup."
    },
    {
        name: "attribute",
        description: "Declares a read-only per-vertex input variable supplied by the OpenGL application. Valid only in vertex shaders."
    },
    {
        name: "varying",
        description: "Declares an output variable from a vertex shader that is interpolated across the primitive and becomes an input variable in the fragment shader."
    }
];

export const TYPE_QUALIFIERS = [
    {
        name: "uniform",
        description: "Declares a read-only global variable whose value is provided by the OpenGL application and remains constant for all shader invocations."
    },
    {
        name: "attribute",
        description: "Declares a read-only per-vertex input variable supplied by the OpenGL application. Valid only in vertex shaders."
    },
    {
        name: "varying",
        description: "Declares an output variable from a vertex shader that is interpolated across the primitive and becomes an input variable in the fragment shader."
    },
    {
        name: "const",
        description: "Declares a compile-time constant whose value cannot be modified after initialization."
    },
    {
        name: "in",
        description: "Function parameter qualifier indicating that the argument is passed into the function. This is the default qualifier for function parameters."
    },
    {
        name: "out",
        description: "Function parameter qualifier indicating that the parameter is written by the function and copied back to the caller upon return."
    },
    {
        name: "inout",
        description: "Function parameter qualifier indicating that the argument is passed into the function, may be modified, and the updated value is copied back to the caller."
    }
];