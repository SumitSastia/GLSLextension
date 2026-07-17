export const BUILTIN_UNIFORMS = [
    {
        name: "gl_ModelViewMatrix",
        description: "Combined model and view transformation matrix that transforms object-space coordinates into eye space."
    },
    {
        name: "gl_ModelViewProjectionMatrix",
        description: "Combined model, view, and projection transformation matrix that transforms object-space coordinates directly into clip space."
    },
    {
        name: "gl_ProjectionMatrix",
        description: "Projection transformation matrix that converts eye-space coordinates into clip space."
    },
    {
        name: "gl_TextureMatrix",
        description: "Array of texture transformation matrices, one for each texture coordinate set."
    },

    {
        name: "gl_ModelViewMatrixInverse",
        description: "Inverse of the current model-view matrix."
    },
    {
        name: "gl_ModelViewProjectionMatrixInverse",
        description: "Inverse of the current model-view-projection matrix."
    },
    {
        name: "gl_ProjectionMatrixInverse",
        description: "Inverse of the current projection matrix."
    },
    {
        name: "gl_TextureMatrixInverse",
        description: "Array containing the inverse of each texture transformation matrix."
    },

    {
        name: "gl_ModelViewMatrixTranspose",
        description: "Transpose of the current model-view matrix."
    },
    {
        name: "gl_ModelViewProjectionMatrixTranspose",
        description: "Transpose of the current model-view-projection matrix."
    },
    {
        name: "gl_ProjectionMatrixTranspose",
        description: "Transpose of the current projection matrix."
    },
    {
        name: "gl_TextureMatrixTranspose",
        description: "Array containing the transpose of each texture transformation matrix."
    },

    {
        name: "gl_ModelViewMatrixInverseTranspose",
        description: "Inverse transpose of the current model-view matrix. Commonly used for transforming surface normals."
    },
    {
        name: "gl_ModelViewProjectionMatrixInverseTranspose",
        description: "Inverse transpose of the current model-view-projection matrix."
    },
    {
        name: "gl_ProjectionMatrixInverseTranspose",
        description: "Inverse transpose of the current projection matrix."
    },
    {
        name: "gl_TextureMatrixInverseTranspose",
        description: "Array containing the inverse transpose of each texture transformation matrix."
    },

    {
        name: "gl_NormalMatrix",
        description: "3×3 matrix derived from the inverse transpose of the upper-left portion of the model-view matrix. Used to correctly transform normal vectors."
    },
    {
        name: "gl_NormalScale",
        description: "Scaling factor applied when transforming normals under certain fixed-function operations."
    },
    {
        name: "gl_DepthRangeParameters",
        description: "Structure containing the parameters that define the current depth range transformation."
    },
    {
        name: "gl_DepthRange.near",
        description: "The mapped value corresponding to the near clipping plane."
    },
    {
        name: "gl_DepthRange.far",
        description: "The mapped value corresponding to the far clipping plane."
    },
    {
        name: "gl_DepthRange.diff",
        description: "Difference between the far and near depth values (far - near)."
    },
    {
        name: "gl_DepthRange",
        description: "Built-in uniform structure containing the current depth range parameters."
    },
    {
        name: "gl_FogParameters",
        description: "Structure containing the current fixed-function fog parameters."
    },
    {
        name: "gl_Fog.color",
        description: "RGBA color used when blending fragments with fog."
    },
    {
        name: "gl_Fog.density",
        description: "Fog density used by exponential fog modes."
    },
    {
        name: "gl_Fog.start",
        description: "Distance from the viewer where linear fog begins."
    },
    {
        name: "gl_Fog.end",
        description: "Distance from the viewer where linear fog reaches full intensity."
    },
    {
        name: "gl_Fog.scale",
        description: "Precomputed scale factor used internally for linear fog calculations."
    },
    {
        name: "gl_Fog",
        description: "Built-in uniform structure containing all current fog parameters."
    },
    
    // ============================================================
    // Light Source Parameters
    // ============================================================

    {
        name: "gl_LightSourceParameters",
        description: "Structure describing all properties of a single fixed-function light source."
    },
    {
        name: "gl_LightSource",
        description: "Array of built-in light source structures. Each element represents one enabled OpenGL light."
    },
    {
        name: "gl_LightSource[].ambient",
        description: "Ambient color contribution of the light source."
    },
    {
        name: "gl_LightSource[].diffuse",
        description: "Diffuse color contribution of the light source."
    },
    {
        name: "gl_LightSource[].specular",
        description: "Specular color contribution of the light source."
    },
    {
        name: "gl_LightSource[].position",
        description: "Light position in eye coordinates. Directional lights have a w-component of zero."
    },
    {
        name: "gl_LightSource[].halfVector",
        description: "Halfway vector used by the fixed-function lighting model for specular calculations."
    },
    {
        name: "gl_LightSource[].spotDirection",
        description: "Direction of the spotlight in eye coordinates."
    },
    {
        name: "gl_LightSource[].spotExponent",
        description: "Controls how concentrated the spotlight intensity is toward its center."
    },
    {
        name: "gl_LightSource[].spotCutoff",
        description: "Maximum spotlight cone angle in degrees."
    },
    {
        name: "gl_LightSource[].spotCosCutoff",
        description: "Cosine of the spotlight cutoff angle, provided for efficient calculations."
    },
    {
        name: "gl_LightSource[].constantAttenuation",
        description: "Constant attenuation factor applied to the light intensity."
    },
    {
        name: "gl_LightSource[].linearAttenuation",
        description: "Linear attenuation factor applied based on distance."
    },
    {
        name: "gl_LightSource[].quadraticAttenuation",
        description: "Quadratic attenuation factor applied based on squared distance."
    },

    // ============================================================
    // Global Lighting Model
    // ============================================================

    {
        name: "gl_LightModelParameters",
        description: "Structure describing the global lighting model."
    },
    {
        name: "gl_LightModel",
        description: "Built-in uniform containing the current global lighting model."
    },
    {
        name: "gl_LightModel.ambient",
        description: "Global ambient light color applied to the entire scene."
    },

    // ============================================================
    // Light Model Products
    // ============================================================

    {
        name: "gl_LightModelProducts",
        description: "Structure containing products computed from the lighting model and material."
    },
    {
        name: "gl_FrontLightModelProduct",
        description: "Lighting model products for front-facing polygons."
    },
    {
        name: "gl_BackLightModelProduct",
        description: "Lighting model products for back-facing polygons."
    },
    {
        name: "gl_FrontLightModelProduct.sceneColor",
        description: "Combined scene ambient color used for front-facing polygons."
    },
    {
        name: "gl_BackLightModelProduct.sceneColor",
        description: "Combined scene ambient color used for back-facing polygons."
    },

    // ============================================================
    // Light Products
    // ============================================================

    {
        name: "gl_LightProducts",
        description: "Structure containing the products of a light source and a material."
    },
    {
        name: "gl_FrontLightProduct",
        description: "Array containing precomputed lighting products for front-facing materials."
    },
    {
        name: "gl_BackLightProduct",
        description: "Array containing precomputed lighting products for back-facing materials."
    },
    {
        name: "gl_FrontLightProduct[].ambient",
        description: "Ambient contribution of the light for the front material."
    },
    {
        name: "gl_FrontLightProduct[].diffuse",
        description: "Diffuse contribution of the light for the front material."
    },
    {
        name: "gl_FrontLightProduct[].specular",
        description: "Specular contribution of the light for the front material."
    },
    {
        name: "gl_BackLightProduct[].ambient",
        description: "Ambient contribution of the light for the back material."
    },
    {
        name: "gl_BackLightProduct[].diffuse",
        description: "Diffuse contribution of the light for the back material."
    },
    {
        name: "gl_BackLightProduct[].specular",
        description: "Specular contribution of the light for the back material."
    },

    // ============================================================
    // Material Parameters
    // ============================================================

    {
        name: "gl_MaterialParameters",
        description: "Structure containing the material properties used by the fixed-function lighting pipeline."
    },
    {
        name: "gl_FrontMaterial",
        description: "Built-in uniform containing the material properties for front-facing polygons."
    },
    {
        name: "gl_BackMaterial",
        description: "Built-in uniform containing the material properties for back-facing polygons."
    },

    {
        name: "gl_FrontMaterial.emission",
        description: "Emissive color emitted by the front-facing material, independent of scene lighting."
    },
    {
        name: "gl_FrontMaterial.ambient",
        description: "Ambient reflectance of the front-facing material."
    },
    {
        name: "gl_FrontMaterial.diffuse",
        description: "Diffuse reflectance of the front-facing material."
    },
    {
        name: "gl_FrontMaterial.specular",
        description: "Specular reflectance of the front-facing material."
    },
    {
        name: "gl_FrontMaterial.shininess",
        description: "Specifies the shininess exponent used when computing specular highlights for the front-facing material."
    },

    {
        name: "gl_BackMaterial.emission",
        description: "Emissive color emitted by the back-facing material."
    },
    {
        name: "gl_BackMaterial.ambient",
        description: "Ambient reflectance of the back-facing material."
    },
    {
        name: "gl_BackMaterial.diffuse",
        description: "Diffuse reflectance of the back-facing material."
    },
    {
        name: "gl_BackMaterial.specular",
        description: "Specular reflectance of the back-facing material."
    },
    {
        name: "gl_BackMaterial.shininess",
        description: "Specifies the shininess exponent used when computing specular highlights for the back-facing material."
    },

    // ============================================================
    // Point Parameters
    // ============================================================

    {
        name: "gl_PointParameters",
        description: "Structure containing parameters that control point rendering."
    },
    {
        name: "gl_Point",
        description: "Built-in uniform containing the current point rendering parameters."
    },

    {
        name: "gl_Point.size",
        description: "Base size used when rendering points."
    },
    {
        name: "gl_Point.sizeMin",
        description: "Minimum allowed point size after attenuation."
    },
    {
        name: "gl_Point.sizeMax",
        description: "Maximum allowed point size after attenuation."
    },
    {
        name: "gl_Point.fadeThresholdSize",
        description: "Threshold below which point fading begins."
    },
    {
        name: "gl_Point.distanceConstantAttenuation",
        description: "Constant attenuation factor applied to point size."
    },
    {
        name: "gl_Point.distanceLinearAttenuation",
        description: "Linear attenuation factor applied to point size based on distance."
    },
    {
        name: "gl_Point.distanceQuadraticAttenuation",
        description: "Quadratic attenuation factor applied to point size based on squared distance."
    },

    // ============================================================
    // Texture Environment
    // ============================================================

    {
        name: "gl_TextureEnvColor",
        description: "Array containing the texture environment color for each texture unit."
    },

    // ============================================================
    // User Clip Planes
    // ============================================================

    {
        name: "gl_ClipPlane",
        description: "Array of user-defined clipping planes represented as plane equations in eye coordinates."
    },

    // ============================================================
    // Eye Coordinate Texture Generation Planes
    // ============================================================

    {
        name: "gl_EyePlaneS",
        description: "Array of eye-space S texture coordinate generation planes."
    },
    {
        name: "gl_EyePlaneT",
        description: "Array of eye-space T texture coordinate generation planes."
    },
    {
        name: "gl_EyePlaneR",
        description: "Array of eye-space R texture coordinate generation planes."
    },
    {
        name: "gl_EyePlaneQ",
        description: "Array of eye-space Q texture coordinate generation planes."
    },

    // ============================================================
    // Object Coordinate Texture Generation Planes
    // ============================================================

    {
        name: "gl_ObjectPlaneS",
        description: "Array of object-space S texture coordinate generation planes."
    },
    {
        name: "gl_ObjectPlaneT",
        description: "Array of object-space T texture coordinate generation planes."
    },
    {
        name: "gl_ObjectPlaneR",
        description: "Array of object-space R texture coordinate generation planes."
    },
    {
        name: "gl_ObjectPlaneQ",
        description: "Array of object-space Q texture coordinate generation planes."
    },

    // ============================================================
    // OpenSceneGraph Preset Uniforms
    // ============================================================

    {
        name: "osg_FrameNumber",
        description: "Current frame number provided by OpenSceneGraph."
    },
    {
        name: "osg_FrameTime",
        description: "Elapsed application time in seconds provided by OpenSceneGraph."
    },
    {
        name: "osg_DeltaFrameTime",
        description: "Time elapsed since the previous rendered frame."
    },
    {
        name: "osg_ViewMatrix",
        description: "Current view transformation matrix provided by OpenSceneGraph."
    },
    {
        name: "osg_ViewMatrixInverse",
        description: "Inverse of the current view transformation matrix."
    }
];

export const BUILTIN_MATRIX_UNIFORMS = [
    {
        name: "gl_ModelViewMatrix",
        description: "Combined model and view transformation matrix that transforms object-space coordinates into eye space."
    },
    {
        name: "gl_ModelViewProjectionMatrix",
        description: "Combined model, view, and projection transformation matrix that transforms object-space coordinates directly into clip space."
    },
    {
        name: "gl_ProjectionMatrix",
        description: "Projection transformation matrix that converts eye-space coordinates into clip space."
    },
    {
        name: "gl_TextureMatrix",
        description: "Array of texture transformation matrices, one for each texture coordinate set."
    },

    {
        name: "gl_ModelViewMatrixInverse",
        description: "Inverse of the current model-view matrix."
    },
    {
        name: "gl_ModelViewProjectionMatrixInverse",
        description: "Inverse of the current model-view-projection matrix."
    },
    {
        name: "gl_ProjectionMatrixInverse",
        description: "Inverse of the current projection matrix."
    },
    {
        name: "gl_TextureMatrixInverse",
        description: "Array containing the inverse of each texture transformation matrix."
    },

    {
        name: "gl_ModelViewMatrixTranspose",
        description: "Transpose of the current model-view matrix."
    },
    {
        name: "gl_ModelViewProjectionMatrixTranspose",
        description: "Transpose of the current model-view-projection matrix."
    },
    {
        name: "gl_ProjectionMatrixTranspose",
        description: "Transpose of the current projection matrix."
    },
    {
        name: "gl_TextureMatrixTranspose",
        description: "Array containing the transpose of each texture transformation matrix."
    },

    {
        name: "gl_ModelViewMatrixInverseTranspose",
        description: "Inverse transpose of the current model-view matrix. Commonly used for transforming surface normals."
    },
    {
        name: "gl_ModelViewProjectionMatrixInverseTranspose",
        description: "Inverse transpose of the current model-view-projection matrix."
    },
    {
        name: "gl_ProjectionMatrixInverseTranspose",
        description: "Inverse transpose of the current projection matrix."
    },
    {
        name: "gl_TextureMatrixInverseTranspose",
        description: "Array containing the inverse transpose of each texture transformation matrix."
    },

    {
        name: "gl_NormalMatrix",
        description: "3×3 matrix derived from the inverse transpose of the upper-left portion of the model-view matrix. Used to correctly transform normal vectors."
    },
    {
        name: "gl_NormalScale",
        description: "Scaling factor applied when transforming normals under certain fixed-function operations."
    }
];

export const BUILTIN_DEPTH_AND_FOG_UNIFORMS = [
    // ============================================================
    // Depth Range
    // ============================================================

    {
        name: "gl_DepthRangeParameters",
        description: "Structure containing the parameters that define the current depth range transformation."
    },
    {
        name: "gl_DepthRange.near",
        description: "The mapped value corresponding to the near clipping plane."
    },
    {
        name: "gl_DepthRange.far",
        description: "The mapped value corresponding to the far clipping plane."
    },
    {
        name: "gl_DepthRange.diff",
        description: "Difference between the far and near depth values (far - near)."
    },
    {
        name: "gl_DepthRange",
        description: "Built-in uniform structure containing the current depth range parameters."
    },

    // ============================================================
    // Fog
    // ============================================================

    {
        name: "gl_FogParameters",
        description: "Structure containing the current fixed-function fog parameters."
    },
    {
        name: "gl_Fog.color",
        description: "RGBA color used when blending fragments with fog."
    },
    {
        name: "gl_Fog.density",
        description: "Fog density used by exponential fog modes."
    },
    {
        name: "gl_Fog.start",
        description: "Distance from the viewer where linear fog begins."
    },
    {
        name: "gl_Fog.end",
        description: "Distance from the viewer where linear fog reaches full intensity."
    },
    {
        name: "gl_Fog.scale",
        description: "Precomputed scale factor used internally for linear fog calculations."
    },
    {
        name: "gl_Fog",
        description: "Built-in uniform structure containing all current fog parameters."
    }
];

export const BUILTIN_LIGHTING_UNIFORMS = [
    // ============================================================
    // Light Source Parameters
    // ============================================================

    {
        name: "gl_LightSourceParameters",
        description: "Structure describing all properties of a single fixed-function light source."
    },
    {
        name: "gl_LightSource",
        description: "Array of built-in light source structures. Each element represents one enabled OpenGL light."
    },
    {
        name: "gl_LightSource[].ambient",
        description: "Ambient color contribution of the light source."
    },
    {
        name: "gl_LightSource[].diffuse",
        description: "Diffuse color contribution of the light source."
    },
    {
        name: "gl_LightSource[].specular",
        description: "Specular color contribution of the light source."
    },
    {
        name: "gl_LightSource[].position",
        description: "Light position in eye coordinates. Directional lights have a w-component of zero."
    },
    {
        name: "gl_LightSource[].halfVector",
        description: "Halfway vector used by the fixed-function lighting model for specular calculations."
    },
    {
        name: "gl_LightSource[].spotDirection",
        description: "Direction of the spotlight in eye coordinates."
    },
    {
        name: "gl_LightSource[].spotExponent",
        description: "Controls how concentrated the spotlight intensity is toward its center."
    },
    {
        name: "gl_LightSource[].spotCutoff",
        description: "Maximum spotlight cone angle in degrees."
    },
    {
        name: "gl_LightSource[].spotCosCutoff",
        description: "Cosine of the spotlight cutoff angle, provided for efficient calculations."
    },
    {
        name: "gl_LightSource[].constantAttenuation",
        description: "Constant attenuation factor applied to the light intensity."
    },
    {
        name: "gl_LightSource[].linearAttenuation",
        description: "Linear attenuation factor applied based on distance."
    },
    {
        name: "gl_LightSource[].quadraticAttenuation",
        description: "Quadratic attenuation factor applied based on squared distance."
    },

    // ============================================================
    // Global Lighting Model
    // ============================================================

    {
        name: "gl_LightModelParameters",
        description: "Structure describing the global lighting model."
    },
    {
        name: "gl_LightModel",
        description: "Built-in uniform containing the current global lighting model."
    },
    {
        name: "gl_LightModel.ambient",
        description: "Global ambient light color applied to the entire scene."
    },

    // ============================================================
    // Light Model Products
    // ============================================================

    {
        name: "gl_LightModelProducts",
        description: "Structure containing products computed from the lighting model and material."
    },
    {
        name: "gl_FrontLightModelProduct",
        description: "Lighting model products for front-facing polygons."
    },
    {
        name: "gl_BackLightModelProduct",
        description: "Lighting model products for back-facing polygons."
    },
    {
        name: "gl_FrontLightModelProduct.sceneColor",
        description: "Combined scene ambient color used for front-facing polygons."
    },
    {
        name: "gl_BackLightModelProduct.sceneColor",
        description: "Combined scene ambient color used for back-facing polygons."
    },

    // ============================================================
    // Light Products
    // ============================================================

    {
        name: "gl_LightProducts",
        description: "Structure containing the products of a light source and a material."
    },
    {
        name: "gl_FrontLightProduct",
        description: "Array containing precomputed lighting products for front-facing materials."
    },
    {
        name: "gl_BackLightProduct",
        description: "Array containing precomputed lighting products for back-facing materials."
    },
    {
        name: "gl_FrontLightProduct[].ambient",
        description: "Ambient contribution of the light for the front material."
    },
    {
        name: "gl_FrontLightProduct[].diffuse",
        description: "Diffuse contribution of the light for the front material."
    },
    {
        name: "gl_FrontLightProduct[].specular",
        description: "Specular contribution of the light for the front material."
    },
    {
        name: "gl_BackLightProduct[].ambient",
        description: "Ambient contribution of the light for the back material."
    },
    {
        name: "gl_BackLightProduct[].diffuse",
        description: "Diffuse contribution of the light for the back material."
    },
    {
        name: "gl_BackLightProduct[].specular",
        description: "Specular contribution of the light for the back material."
    }
];

export const BUILTIN_MATERIAL_AND_POINT_UNIFORMS = [
    // ============================================================
    // Material Parameters
    // ============================================================

    {
        name: "gl_MaterialParameters",
        description: "Structure containing the material properties used by the fixed-function lighting pipeline."
    },
    {
        name: "gl_FrontMaterial",
        description: "Built-in uniform containing the material properties for front-facing polygons."
    },
    {
        name: "gl_BackMaterial",
        description: "Built-in uniform containing the material properties for back-facing polygons."
    },

    {
        name: "gl_FrontMaterial.emission",
        description: "Emissive color emitted by the front-facing material, independent of scene lighting."
    },
    {
        name: "gl_FrontMaterial.ambient",
        description: "Ambient reflectance of the front-facing material."
    },
    {
        name: "gl_FrontMaterial.diffuse",
        description: "Diffuse reflectance of the front-facing material."
    },
    {
        name: "gl_FrontMaterial.specular",
        description: "Specular reflectance of the front-facing material."
    },
    {
        name: "gl_FrontMaterial.shininess",
        description: "Specifies the shininess exponent used when computing specular highlights for the front-facing material."
    },

    {
        name: "gl_BackMaterial.emission",
        description: "Emissive color emitted by the back-facing material."
    },
    {
        name: "gl_BackMaterial.ambient",
        description: "Ambient reflectance of the back-facing material."
    },
    {
        name: "gl_BackMaterial.diffuse",
        description: "Diffuse reflectance of the back-facing material."
    },
    {
        name: "gl_BackMaterial.specular",
        description: "Specular reflectance of the back-facing material."
    },
    {
        name: "gl_BackMaterial.shininess",
        description: "Specifies the shininess exponent used when computing specular highlights for the back-facing material."
    },

    // ============================================================
    // Point Parameters
    // ============================================================

    {
        name: "gl_PointParameters",
        description: "Structure containing parameters that control point rendering."
    },
    {
        name: "gl_Point",
        description: "Built-in uniform containing the current point rendering parameters."
    },

    {
        name: "gl_Point.size",
        description: "Base size used when rendering points."
    },
    {
        name: "gl_Point.sizeMin",
        description: "Minimum allowed point size after attenuation."
    },
    {
        name: "gl_Point.sizeMax",
        description: "Maximum allowed point size after attenuation."
    },
    {
        name: "gl_Point.fadeThresholdSize",
        description: "Threshold below which point fading begins."
    },
    {
        name: "gl_Point.distanceConstantAttenuation",
        description: "Constant attenuation factor applied to point size."
    },
    {
        name: "gl_Point.distanceLinearAttenuation",
        description: "Linear attenuation factor applied to point size based on distance."
    },
    {
        name: "gl_Point.distanceQuadraticAttenuation",
        description: "Quadratic attenuation factor applied to point size based on squared distance."
    }
];

export const BUILTIN_MISC_UNIFORMS = [
    // ============================================================
    // Texture Environment
    // ============================================================

    {
        name: "gl_TextureEnvColor",
        description: "Array containing the texture environment color for each texture unit."
    },

    // ============================================================
    // User Clip Planes
    // ============================================================

    {
        name: "gl_ClipPlane",
        description: "Array of user-defined clipping planes represented as plane equations in eye coordinates."
    },

    // ============================================================
    // Eye Coordinate Texture Generation Planes
    // ============================================================

    {
        name: "gl_EyePlaneS",
        description: "Array of eye-space S texture coordinate generation planes."
    },
    {
        name: "gl_EyePlaneT",
        description: "Array of eye-space T texture coordinate generation planes."
    },
    {
        name: "gl_EyePlaneR",
        description: "Array of eye-space R texture coordinate generation planes."
    },
    {
        name: "gl_EyePlaneQ",
        description: "Array of eye-space Q texture coordinate generation planes."
    },

    // ============================================================
    // Object Coordinate Texture Generation Planes
    // ============================================================

    {
        name: "gl_ObjectPlaneS",
        description: "Array of object-space S texture coordinate generation planes."
    },
    {
        name: "gl_ObjectPlaneT",
        description: "Array of object-space T texture coordinate generation planes."
    },
    {
        name: "gl_ObjectPlaneR",
        description: "Array of object-space R texture coordinate generation planes."
    },
    {
        name: "gl_ObjectPlaneQ",
        description: "Array of object-space Q texture coordinate generation planes."
    },

    // ============================================================
    // OpenSceneGraph Preset Uniforms
    // ============================================================

    {
        name: "osg_FrameNumber",
        description: "Current frame number provided by OpenSceneGraph."
    },
    {
        name: "osg_FrameTime",
        description: "Elapsed application time in seconds provided by OpenSceneGraph."
    },
    {
        name: "osg_DeltaFrameTime",
        description: "Time elapsed since the previous rendered frame."
    },
    {
        name: "osg_ViewMatrix",
        description: "Current view transformation matrix provided by OpenSceneGraph."
    },
    {
        name: "osg_ViewMatrixInverse",
        description: "Inverse of the current view transformation matrix."
    }
];