import { SIGNATURE_FUNCTIONS } from "../builtInFunctions";
import { GLSLSignature } from "../signatures/functionFormat";

export const ABSTRACT_TYPES: Record<string, string[]> = {

    genType: [
        "float",
        "vec2",
        "vec3",
        "vec4"
    ],

    genDType: [
        "double",
        "dvec2",
        "dvec3",
        "dvec4"
    ],

    genIType: [
        "int",
        "ivec2",
        "ivec3",
        "ivec4"
    ],

    genUType: [
        "uint",
        "uvec2",
        "uvec3",
        "uvec4"
    ],

    genBType: [
        "bool",
        "bvec2",
        "bvec3",
        "bvec4"
    ],

    mat: [
        "mat2",
        "mat3",
        "mat4",
        "mat2x3",
        "mat2x4",
        "mat3x2",
        "mat3x4",
        "mat4x2",
        "mat4x3"
    ],

    dmat: [
        "dmat2",
        "dmat3",
        "dmat4",
        "dmat2x3",
        "dmat2x4",
        "dmat3x2",
        "dmat3x4",
        "dmat4x2",
        "dmat4x3"
    ]
};

function expandType(type: string): string[] {

    return ABSTRACT_TYPES[type] ?? [type];
}

export const EXPANDED_SIGNATURES: GLSLSignature[] = [];

function expandSignatures() {

    for (const signature of SIGNATURE_FUNCTIONS) {

        const parameterTypes = signature.parameters.map(param =>
            expandType(param.type)
        );

        const abstractTypes = new Set<string>();
        abstractTypes.add(signature.returnType);

        for (const param of signature.parameters) {
            abstractTypes.add(param.type);
        }

        const abstractKeys = [...abstractTypes].filter(type => type in ABSTRACT_TYPES);

        const mapping = new Map<string, string>();
        const expansionCount = abstractKeys.length == 0 ? 1 : ABSTRACT_TYPES[abstractKeys[0]].length;

        for (let i = 0; i < expansionCount; i++) {

            mapping.clear();
            for (const key of abstractKeys) {
                mapping.set(key, ABSTRACT_TYPES[key][i]);
            }

            const expanded: GLSLSignature = {
                ...signature,
                parameters: signature.parameters.map(p => ({ ...p}))
            }

            expanded.returnType = mapping.get(signature.returnType) ?? signature.returnType;

            for (const param of expanded.parameters) {
                param.type = mapping.get(param.type) ?? param.type;
            }

            EXPANDED_SIGNATURES.push(expanded);
        }
    }
}

expandSignatures();