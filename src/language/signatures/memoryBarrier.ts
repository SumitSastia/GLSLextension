import { GLSLSignature } from "./functionFormat";

export const MEMORY_BARRIER_SIGNATURES: GLSLSignature[] = [

    {
        name: "memoryBarrier",
        returnType: "void",
        description: "Waits for the completion of all memory accesses issued by the current shader invocation.",
        category: "Memory Barrier",
        version: "4.20",
        parameters: []
    },

    {
        name: "memoryBarrierAtomicCounter",
        returnType: "void",
        description: "Waits for the completion of all atomic counter memory accesses issued by the current shader invocation.",
        category: "Memory Barrier",
        version: "4.20",
        parameters: []
    },

    {
        name: "memoryBarrierBuffer",
        returnType: "void",
        description: "Waits for the completion of all buffer variable memory accesses issued by the current shader invocation.",
        category: "Memory Barrier",
        version: "4.20",
        parameters: []
    },

    {
        name: "memoryBarrierShared",
        returnType: "void",
        description: "Waits for the completion of all shared variable memory accesses issued by the current shader invocation.",
        category: "Memory Barrier",
        version: "4.30",
        parameters: []
    },

    {
        name: "memoryBarrierImage",
        returnType: "void",
        description: "Waits for the completion of all image memory accesses issued by the current shader invocation.",
        category: "Memory Barrier",
        version: "4.20",
        parameters: []
    },

    {
        name: "groupMemoryBarrier",
        returnType: "void",
        description: "Waits for the completion of all memory accesses performed by the current work group.",
        category: "Memory Barrier",
        version: "4.30",
        parameters: []
    },

    {
        name: "barrier",
        returnType: "void",
        description: "Synchronizes execution and memory accesses between invocations within the same work group.",
        category: "Memory Barrier",
        version: "4.30",
        parameters: []
    }
];