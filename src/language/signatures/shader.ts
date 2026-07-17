import { GLSLSignature } from "./functionFormat";

export const GEOMETRY_SHADER_SIGNATURES: GLSLSignature[] = [

    {
        name: "EmitVertex",
        returnType: "void",
        description: "Emits the current vertex to the current output primitive.",
        category: "Geometry Shader",
        version: "1.50",
        parameters: []
    },

    {
        name: "EndPrimitive",
        returnType: "void",
        description: "Completes the current output primitive and starts a new one.",
        category: "Geometry Shader",
        version: "1.50",
        parameters: []
    },

    {
        name: "EmitStreamVertex",
        returnType: "void",
        description: "Emits the current vertex to the specified output stream.",
        category: "Geometry Shader",
        version: "4.00",
        parameters: [
            {
                type: "int",
                name: "stream"
            }
        ]
    },

    {
        name: "EndStreamPrimitive",
        returnType: "void",
        description: "Completes the current primitive for the specified output stream.",
        category: "Geometry Shader",
        version: "4.00",
        parameters: [
            {
                type: "int",
                name: "stream"
            }
        ]
    }

];

export const FRAGMENT_SHADER_SIGNATURES: GLSLSignature[] = [

    {
        name: "reflect",
        returnType: "genType",
        description: "Calculates the reflection direction for an incident vector.",
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
        description: "Calculates the reflection direction for an incident vector.",
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
        description: "Calculates the refraction direction for an incident vector.",
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
        description: "Calculates the refraction direction for an incident vector.",
        category: "Geometric",
        version: "4.00",
        parameters: [
            { type: "genDType", name: "I" },
            { type: "genDType", name: "N" },
            { type: "double", name: "eta" }
        ]
    },

    {
        name: "interpolateAtCentroid",
        returnType: "genType",
        description: "Returns the value of an input interpolated at the centroid of the covered sample locations.",
        category: "Fragment Shader",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "interpolant"
            }
        ]
    },

    {
        name: "interpolateAtSample",
        returnType: "genType",
        description: "Returns the value of an input interpolated at the specified sample location.",
        category: "Fragment Shader",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "interpolant"
            },
            {
                type: "int",
                name: "sample"
            }
        ]
    },

    {
        name: "interpolateAtOffset",
        returnType: "genType",
        description: "Returns the value of an input interpolated at the specified offset from the fragment center.",
        category: "Fragment Shader",
        version: "4.00",
        parameters: [
            {
                type: "genType",
                name: "interpolant"
            },
            {
                type: "vec2",
                name: "offset"
            }
        ]
    }

];