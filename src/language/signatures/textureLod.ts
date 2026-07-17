import { GLSLSignature } from "./functionFormat";

export const TEXTURE_LOD_SIGNATURES: GLSLSignature[] = [

    {
        name: "textureLod",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "float",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureLod",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureLod",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureLod",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureProjLod",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureProjLod",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureProjLod",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureProjLod",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            }
        ]
    },

    {
        name: "textureLodOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "float",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "textureLodOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureLodOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    ///////////////////////

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    {
        name: "textureGrad",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "float",
                name: "P"
            },
            {
                type: "float",
                name: "dPdx"
            },
            {
                type: "float",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureGrad",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "vec2",
                name: "dPdx"
            },
            {
                type: "vec2",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureGrad",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "vec3",
                name: "dPdx"
            },
            {
                type: "vec3",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureGrad",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "vec3",
                name: "dPdx"
            },
            {
                type: "vec3",
                name: "dPdy"
            }
        ]
    },

    ////////////////////////////

    {
        name: "textureGradOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "float",
                name: "P"
            },
            {
                type: "float",
                name: "dPdx"
            },
            {
                type: "float",
                name: "dPdy"
            },
            {
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "textureGradOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "vec2",
                name: "dPdx"
            },
            {
                type: "vec2",
                name: "dPdy"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureGradOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "vec3",
                name: "dPdx"
            },
            {
                type: "vec3",
                name: "dPdy"
            },
            {
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjGrad",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "float",
                name: "dPdx"
            },
            {
                type: "float",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureProjGrad",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "vec2",
                name: "dPdx"
            },
            {
                type: "vec2",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureProjGrad",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "vec2",
                name: "dPdx"
            },
            {
                type: "vec2",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureProjGrad",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "vec3",
                name: "dPdx"
            },
            {
                type: "vec3",
                name: "dPdy"
            }
        ]
    },

    {
        name: "textureProjGradOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            },
            {
                type: "float",
                name: "dPdx"
            },
            {
                type: "float",
                name: "dPdy"
            },
            {
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjGradOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "vec2",
                name: "dPdx"
            },
            {
                type: "vec2",
                name: "dPdy"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjGradOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "vec2",
                name: "dPdx"
            },
            {
                type: "vec2",
                name: "dPdy"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjGradOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup using explicit texture coordinate gradients and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "vec3",
                name: "dPdx"
            },
            {
                type: "vec3",
                name: "dPdy"
            },
            {
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    /////////////////////

    {
        name: "texelFetchOffset",
        returnType: "gvec4",
        description: "Fetches a single texel from a texture using integer texture coordinates and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "int",
                name: "P"
            },
            {
                type: "int",
                name: "lod"
            },
            {
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "texelFetchOffset",
        returnType: "gvec4",
        description: "Fetches a single texel from a texture using integer texture coordinates and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "ivec2",
                name: "P"
            },
            {
                type: "int",
                name: "lod"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "texelFetchOffset",
        returnType: "gvec4",
        description: "Fetches a single texel from a texture using integer texture coordinates and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "ivec3",
                name: "P"
            },
            {
                type: "int",
                name: "lod"
            },
            {
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjLodOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an explicit level-of-detail and a constant texel offset.",
        category: "Texture LOD",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            },
            {
                type: "float",
                name: "lod"
            },
            {
                type: "ivec3",
                name: "offset"
            }
        ]
    }
];