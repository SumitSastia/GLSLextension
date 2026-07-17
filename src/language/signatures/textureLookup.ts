import { GLSLSignature } from "./functionFormat";

export const TEXTURE_LOOKUP_SIGNATURES: GLSLSignature[] = [

    {
        name: "textureSize",
        returnType: "ivec",
        description: "Returns the dimensions of level lod for the texture.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "int",
                name: "lod"
            }
        ]
    },

    {
        name: "textureSize",
        returnType: "ivec",
        description: "Returns the dimensions of level lod for the texture.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "int",
                name: "lod"
            }
        ]
    },

    {
        name: "textureSize",
        returnType: "ivec",
        description: "Returns the dimensions of level lod for the texture.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "int",
                name: "lod"
            }
        ]
    },

    {
        name: "textureSize",
        returnType: "ivec",
        description: "Returns the dimensions of level lod for the texture.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            },
            {
                type: "int",
                name: "lod"
            }
        ]
    },

    {
        name: "texture",
        returnType: "gvec4",
        description: "Performs a texture lookup using normalized texture coordinates.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "float",
                name: "P"
            }
        ]
    },

    {
        name: "texture",
        returnType: "gvec4",
        description: "Performs a texture lookup using normalized texture coordinates.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            }
        ]
    },

    {
        name: "texture",
        returnType: "gvec4",
        description: "Performs a texture lookup using normalized texture coordinates.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            }
        ]
    },

    {
        name: "texture",
        returnType: "gvec4",
        description: "Performs a texture lookup using normalized texture coordinates.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            }
        ]
    },

    ///////////

    {
        name: "textureProj",
        returnType: "gvec4",
        description: "Performs a projective texture lookup.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            }
        ]
    },

    {
        name: "textureProj",
        returnType: "gvec4",
        description: "Performs a projective texture lookup.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            }
        ]
    },

    {
        name: "textureProj",
        returnType: "gvec4",
        description: "Performs a projective texture lookup.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            }
        ]
    },

    {
        name: "textureProj",
        returnType: "gvec4",
        description: "Performs a projective texture lookup.",
        category: "Texture Lookup",
        version: "1.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec4",
                name: "P"
            }
        ]
    },

    {
        name: "textureOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "textureOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureOffset",
        returnType: "gvec4",
        description: "Performs a texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "int",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureProjOffset",
        returnType: "gvec4",
        description: "Performs a projective texture lookup with an integer texel offset.",
        category: "Texture Lookup",
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
                type: "ivec3",
                name: "offset"
            }
        ]
    },

    ////

    {
        name: "texelFetch",
        returnType: "gvec4",
        description: "Fetches a single texel from a texture using integer texture coordinates.",
        category: "Texture Lookup",
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
            }
        ]
    },

    {
        name: "texelFetch",
        returnType: "gvec4",
        description: "Fetches a single texel from a texture using integer texture coordinates.",
        category: "Texture Lookup",
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
            }
        ]
    },

    {
        name: "texelFetch",
        returnType: "gvec4",
        description: "Fetches a single texel from a texture using integer texture coordinates.",
        category: "Texture Lookup",
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
            }
        ]
    },

    {
        name: "textureGather",
        returnType: "gvec4",
        description: "Gathers four texels from a texture and returns one component from each.",
        category: "Texture Lookup",
        version: "4.00",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            }
        ]
    },

    {
        name: "textureGather",
        returnType: "gvec4",
        description: "Gathers four texels from a texture and returns one selected component from each.",
        category: "Texture Lookup",
        version: "4.00",
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
                type: "int",
                name: "comp"
            }
        ]
    },

    {
        name: "textureGather",
        returnType: "gvec4",
        description: "Gathers four texels from a cube map texture and returns one component from each.",
        category: "Texture Lookup",
        version: "4.00",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            }
        ]
    },

    {
        name: "textureGather",
        returnType: "gvec4",
        description: "Gathers four texels from a cube map texture and returns one selected component from each.",
        category: "Texture Lookup",
        version: "4.00",
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
                type: "int",
                name: "comp"
            }
        ]
    },

    {
        name: "textureGatherOffset",
        returnType: "gvec4",
        description: "Gathers four texels using a constant integer texel offset.",
        category: "Texture Lookup",
        version: "4.00",
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
                type: "ivec2",
                name: "offset"
            }
        ]
    },

    {
        name: "textureGatherOffset",
        returnType: "gvec4",
        description: "Gathers four texels using a constant integer texel offset.",
        category: "Texture Lookup",
        version: "4.00",
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
                type: "ivec2",
                name: "offset"
            },
            {
                type: "int",
                name: "comp"
            }
        ]
    },

    {
        name: "textureGatherOffsets",
        returnType: "gvec4",
        description: "Gathers four texels using four constant integer texel offsets.",
        category: "Texture Lookup",
        version: "4.00",
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
                type: "ivec2[4]",
                name: "offsets"
            }
        ]
    },

    {
        name: "textureGatherOffsets",
        returnType: "gvec4",
        description: "Gathers four texels using four constant integer texel offsets.",
        category: "Texture Lookup",
        version: "4.00",
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
                type: "ivec2[4]",
                name: "offsets"
            },
            {
                type: "int",
                name: "comp"
            }
        ]
    },

    //////////////

    {
        name: "textureQueryLevels",
        returnType: "int",
        description: "Returns the number of mipmap levels accessible in a texture.",
        category: "Texture Lookup",
        version: "4.30",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            }
        ]
    },

    {
        name: "textureQueryLevels",
        returnType: "int",
        description: "Returns the number of mipmap levels accessible in a texture.",
        category: "Texture Lookup",
        version: "4.30",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            }
        ]
    },

    {
        name: "textureQueryLevels",
        returnType: "int",
        description: "Returns the number of mipmap levels accessible in a texture.",
        category: "Texture Lookup",
        version: "4.30",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            }
        ]
    },

    {
        name: "textureQueryLevels",
        returnType: "int",
        description: "Returns the number of mipmap levels accessible in a texture.",
        category: "Texture Lookup",
        version: "4.30",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            }
        ]
    },

    {
        name: "textureSamples",
        returnType: "int",
        description: "Returns the number of samples of a multisample texture.",
        category: "Texture Lookup",
        version: "4.50",
        parameters: [
            {
                type: "gsampler2DMS",
                name: "sampler"
            }
        ]
    },

    {
        name: "textureSamples",
        returnType: "int",
        description: "Returns the number of samples of a multisample texture.",
        category: "Texture Lookup",
        version: "4.50",
        parameters: [
            {
                type: "gsampler2DMSArray",
                name: "sampler"
            }
        ]
    },

    {
        name: "textureQueryLod",
        returnType: "vec2",
        description: "Computes the level-of-detail information that would be used to sample from a texture.",
        category: "Texture Lookup",
        version: "4.00",
        parameters: [
            {
                type: "gsampler1D",
                name: "sampler"
            },
            {
                type: "float",
                name: "P"
            }
        ]
    },

    {
        name: "textureQueryLod",
        returnType: "vec2",
        description: "Computes the level-of-detail information that would be used to sample from a texture.",
        category: "Texture Lookup",
        version: "4.00",
        parameters: [
            {
                type: "gsampler2D",
                name: "sampler"
            },
            {
                type: "vec2",
                name: "P"
            }
        ]
    },

    {
        name: "textureQueryLod",
        returnType: "vec2",
        description: "Computes the level-of-detail information that would be used to sample from a texture.",
        category: "Texture Lookup",
        version: "4.00",
        parameters: [
            {
                type: "gsampler3D",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            }
        ]
    },

    {
        name: "textureQueryLod",
        returnType: "vec2",
        description: "Computes the level-of-detail information that would be used to sample from a texture.",
        category: "Texture Lookup",
        version: "4.00",
        parameters: [
            {
                type: "gsamplerCube",
                name: "sampler"
            },
            {
                type: "vec3",
                name: "P"
            }
        ]
    },
];