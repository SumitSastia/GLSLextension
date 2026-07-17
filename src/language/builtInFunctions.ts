
/////////////////////////////////////////////////////////////////

import { GLSLSignature } from "./signatures/functionFormat";

import { ANGLE_SIGNATURES } from "./signatures/angle";
import { COMMON_SIGNATURES } from "./signatures/common";

import { DERIVATIVE_SIGNATURES } from "./signatures/derivative";
import { ATOMIC_COUNTER_SIGNATURES } from "./signatures/derivative";
import { ATOMIC_MEMORY_SIGNATURES } from "./signatures/derivative";

import { FLOATING_POINT_PACKING_SIGNATURES } from "./signatures/floatingPointPacking";
import { IMAGE_SIGNATURES } from "./signatures/image";
import { MATRIX_SIGNATURES } from "./signatures/matrix";
import { VECTOR_RELATIONAL_SIGNATURES } from "./signatures/matrix";
import { MEMORY_BARRIER_SIGNATURES } from "./signatures/memoryBarrier";

import { GEOMETRY_SHADER_SIGNATURES } from "./signatures/shader";
import { FRAGMENT_SHADER_SIGNATURES } from "./signatures/shader";

import { TEXTURE_LOD_SIGNATURES } from "./signatures/textureLod";
import { TEXTURE_LOOKUP_SIGNATURES } from "./signatures/textureLookup";

export const SIGNATURE_FUNCTIONS: GLSLSignature[] = [

    ...ANGLE_SIGNATURES,
    ...COMMON_SIGNATURES,
    ...DERIVATIVE_SIGNATURES,
    ...ATOMIC_COUNTER_SIGNATURES,
    ...ATOMIC_MEMORY_SIGNATURES,
    ...FLOATING_POINT_PACKING_SIGNATURES,
    ...IMAGE_SIGNATURES,
    ...MATRIX_SIGNATURES,
    ...VECTOR_RELATIONAL_SIGNATURES,
    ...MEMORY_BARRIER_SIGNATURES,
    ...GEOMETRY_SHADER_SIGNATURES,
    ...FRAGMENT_SHADER_SIGNATURES,
    ...TEXTURE_LOD_SIGNATURES,
    ...TEXTURE_LOOKUP_SIGNATURES
];

export const GLSL_FUNCTION_NAMES: string[] = [
    ...new Set(SIGNATURE_FUNCTIONS.map(sign => sign.name))
];