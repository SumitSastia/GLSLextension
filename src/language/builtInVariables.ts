export const BUILTIN_VARIABLES = [
    
    // ============================================================
    // Special Output Variables
    // ============================================================

    {
        name: "gl_Position",
        description: "Vertex shader output specifying the clip-space position of the current vertex. Every vertex shader must write to this variable."
    },
    {
        name: "gl_PointSize",
        description: "Specifies the rasterized size of points. Effective only when GL_VERTEX_PROGRAM_POINT_SIZE is enabled."
    },
    {
        name: "gl_ClipVertex",
        description: "Specifies the vertex position used for user-defined clipping calculations."
    },

    // ============================================================
    // Attribute Inputs
    // ============================================================

    {
        name: "gl_Vertex",
        description: "Built-in vertex attribute containing the object-space vertex position."
    },
    {
        name: "gl_Normal",
        description: "Built-in vertex attribute containing the object-space surface normal."
    },
    {
        name: "gl_Color",
        description: "Built-in vertex attribute containing the primary vertex color."
    },
    {
        name: "gl_SecondaryColor",
        description: "Built-in vertex attribute containing the secondary vertex color."
    },
    {
        name: "gl_MultiTexCoord0",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 0."
    },
    {
        name: "gl_MultiTexCoord1",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 1."
    },
    {
        name: "gl_MultiTexCoord2",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 2."
    },
    {
        name: "gl_MultiTexCoord3",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 3."
    },
    {
        name: "gl_MultiTexCoord4",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 4."
    },
    {
        name: "gl_MultiTexCoord5",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 5."
    },
    {
        name: "gl_MultiTexCoord6",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 6."
    },
    {
        name: "gl_MultiTexCoord7",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 7."
    },
    {
        name: "gl_FogCoord",
        description: "Built-in vertex attribute containing the fog coordinate."
    },

    // ============================================================
    // Varying Outputs
    // ============================================================

    {
        name: "gl_FrontColor",
        description: "Primary front-face color passed from the vertex shader to the fragment shader."
    },
    {
        name: "gl_BackColor",
        description: "Primary back-face color passed from the vertex shader. Used when two-sided lighting is enabled."
    },
    {
        name: "gl_FrontSecondaryColor",
        description: "Secondary front-face color passed to the fragment shader."
    },
    {
        name: "gl_BackSecondaryColor",
        description: "Secondary back-face color passed to the fragment shader."
    },
    {
        name: "gl_TexCoord",
        description: "Array of texture coordinates passed from the vertex shader to the fragment shader. The array size is implementation-dependent and limited by gl_MaxTextureCoords."
    },
    {
        name: "gl_FogFragCoord",
        description: "Fog coordinate passed from the vertex shader to the fragment shader for fog calculations."
    },

    // ============================================================
    // Special Output Variables
    // ============================================================

    {
        name: "gl_FragColor",
        description: "Primary output color of the fragment shader. The computed fragment color is written to the current draw buffer."
    },
    {
        name: "gl_FragData",
        description: "Array of output colors used for Multiple Render Targets (MRT). Each element corresponds to a separate draw buffer."
    },
    {
        name: "gl_FragDepth",
        description: "Writable fragment depth value. If not explicitly written, the fragment depth defaults to gl_FragCoord.z."
    },

    // ============================================================
    // Special Input Variables
    // ============================================================

    {
        name: "gl_FragCoord",
        description: "Read-only window-relative coordinates of the current fragment. Contains the fragment position after viewport transformation."
    },
    {
        name: "gl_FrontFacing",
        description: "Read-only boolean indicating whether the current fragment belongs to a front-facing primitive."
    },

    // ============================================================
    // Varying Inputs
    // ============================================================

    {
        name: "gl_Color",
        description: "Interpolated primary color received from the vertex shader."
    },
    {
        name: "gl_SecondaryColor",
        description: "Interpolated secondary color received from the vertex shader."
    },
    {
        name: "gl_TexCoord",
        description: "Interpolated texture coordinate array received from the vertex shader."
    },
    {
        name: "gl_FogFragCoord",
        description: "Interpolated fog coordinate received from the vertex shader."
    }
];

export const BUILTIN_VERTEX_VARIABLES = [
    // ============================================================
    // Special Output Variables
    // ============================================================

    {
        name: "gl_Position",
        description: "Vertex shader output specifying the clip-space position of the current vertex. Every vertex shader must write to this variable."
    },
    {
        name: "gl_PointSize",
        description: "Specifies the rasterized size of points. Effective only when GL_VERTEX_PROGRAM_POINT_SIZE is enabled."
    },
    {
        name: "gl_ClipVertex",
        description: "Specifies the vertex position used for user-defined clipping calculations."
    },

    // ============================================================
    // Attribute Inputs
    // ============================================================

    {
        name: "gl_Vertex",
        description: "Built-in vertex attribute containing the object-space vertex position."
    },
    {
        name: "gl_Normal",
        description: "Built-in vertex attribute containing the object-space surface normal."
    },
    {
        name: "gl_Color",
        description: "Built-in vertex attribute containing the primary vertex color."
    },
    {
        name: "gl_SecondaryColor",
        description: "Built-in vertex attribute containing the secondary vertex color."
    },
    {
        name: "gl_MultiTexCoord0",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 0."
    },
    {
        name: "gl_MultiTexCoord1",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 1."
    },
    {
        name: "gl_MultiTexCoord2",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 2."
    },
    {
        name: "gl_MultiTexCoord3",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 3."
    },
    {
        name: "gl_MultiTexCoord4",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 4."
    },
    {
        name: "gl_MultiTexCoord5",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 5."
    },
    {
        name: "gl_MultiTexCoord6",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 6."
    },
    {
        name: "gl_MultiTexCoord7",
        description: "Built-in vertex attribute containing texture coordinates for texture unit 7."
    },
    {
        name: "gl_FogCoord",
        description: "Built-in vertex attribute containing the fog coordinate."
    },

    // ============================================================
    // Varying Outputs
    // ============================================================

    {
        name: "gl_FrontColor",
        description: "Primary front-face color passed from the vertex shader to the fragment shader."
    },
    {
        name: "gl_BackColor",
        description: "Primary back-face color passed from the vertex shader. Used when two-sided lighting is enabled."
    },
    {
        name: "gl_FrontSecondaryColor",
        description: "Secondary front-face color passed to the fragment shader."
    },
    {
        name: "gl_BackSecondaryColor",
        description: "Secondary back-face color passed to the fragment shader."
    },
    {
        name: "gl_TexCoord",
        description: "Array of texture coordinates passed from the vertex shader to the fragment shader. The array size is implementation-dependent and limited by gl_MaxTextureCoords."
    },
    {
        name: "gl_FogFragCoord",
        description: "Fog coordinate passed from the vertex shader to the fragment shader for fog calculations."
    }
];

export const BUILTIN_FRAGMENT_VARIABLES = [
    // ============================================================
    // Special Output Variables
    // ============================================================

    {
        name: "gl_FragColor",
        description: "Primary output color of the fragment shader. The computed fragment color is written to the current draw buffer."
    },
    {
        name: "gl_FragData",
        description: "Array of output colors used for Multiple Render Targets (MRT). Each element corresponds to a separate draw buffer."
    },
    {
        name: "gl_FragDepth",
        description: "Writable fragment depth value. If not explicitly written, the fragment depth defaults to gl_FragCoord.z."
    },

    // ============================================================
    // Special Input Variables
    // ============================================================

    {
        name: "gl_FragCoord",
        description: "Read-only window-relative coordinates of the current fragment. Contains the fragment position after viewport transformation."
    },
    {
        name: "gl_FrontFacing",
        description: "Read-only boolean indicating whether the current fragment belongs to a front-facing primitive."
    },

    // ============================================================
    // Varying Inputs
    // ============================================================

    {
        name: "gl_Color",
        description: "Interpolated primary color received from the vertex shader."
    },
    {
        name: "gl_SecondaryColor",
        description: "Interpolated secondary color received from the vertex shader."
    },
    {
        name: "gl_TexCoord",
        description: "Interpolated texture coordinate array received from the vertex shader."
    },
    {
        name: "gl_FogFragCoord",
        description: "Interpolated fog coordinate received from the vertex shader."
    }
];