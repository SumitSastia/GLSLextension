import { GLSLSignature } from "./functionFormat";

export const DERIVATIVE_SIGNATURES: GLSLSignature[] = [

    {
        name: "dFdx",
        returnType: "genType",
        description: "Returns the partial derivative of p with respect to window x.",
        category: "Derivative",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdx",
        returnType: "genDType",
        description: "Returns the partial derivative of p with respect to window x.",
        category: "Derivative",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdy",
        returnType: "genType",
        description: "Returns the partial derivative of p with respect to window y.",
        category: "Derivative",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdy",
        returnType: "genDType",
        description: "Returns the partial derivative of p with respect to window y.",
        category: "Derivative",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "fwidth",
        returnType: "genType",
        description: "Returns the sum of the absolute derivatives in x and y.",
        category: "Derivative",
        version: "1.10",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "fwidth",
        returnType: "genDType",
        description: "Returns the sum of the absolute derivatives in x and y.",
        category: "Derivative",
        version: "4.00",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdxFine",
        returnType: "genType",
        description: "Returns the fine partial derivative of p with respect to window x.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdxFine",
        returnType: "genDType",
        description: "Returns the fine partial derivative of p with respect to window x.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdyFine",
        returnType: "genType",
        description: "Returns the fine partial derivative of p with respect to window y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdyFine",
        returnType: "genDType",
        description: "Returns the fine partial derivative of p with respect to window y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "fwidthFine",
        returnType: "genType",
        description: "Returns the sum of the absolute fine derivatives in x and y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "fwidthFine",
        returnType: "genDType",
        description: "Returns the sum of the absolute fine derivatives in x and y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdxCoarse",
        returnType: "genType",
        description: "Returns the coarse partial derivative of p with respect to window x.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdxCoarse",
        returnType: "genDType",
        description: "Returns the coarse partial derivative of p with respect to window x.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdyCoarse",
        returnType: "genType",
        description: "Returns the coarse partial derivative of p with respect to window y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "dFdyCoarse",
        returnType: "genDType",
        description: "Returns the coarse partial derivative of p with respect to window y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    },

    {
        name: "fwidthCoarse",
        returnType: "genType",
        description: "Returns the sum of the absolute coarse derivatives in x and y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genType",
                name: "p"
            }
        ]
    },

    {
        name: "fwidthCoarse",
        returnType: "genDType",
        description: "Returns the sum of the absolute coarse derivatives in x and y.",
        category: "Derivative",
        version: "4.50",
        parameters: [
            {
                type: "genDType",
                name: "p"
            }
        ]
    }
];

export const ATOMIC_COUNTER_SIGNATURES: GLSLSignature[] = [

    {
        name: "atomicCounter",
        returnType: "uint",
        description: "Returns the current value of an atomic counter.",
        category: "Atomic Counter",
        version: "4.20",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            }
        ]
    },

    {
        name: "atomicCounterIncrement",
        returnType: "uint",
        description: "Atomically increments an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.20",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            }
        ]
    },

    {
        name: "atomicCounterDecrement",
        returnType: "uint",
        description: "Atomically decrements an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.20",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            }
        ]
    },

    {
        name: "atomicCounterAdd",
        returnType: "uint",
        description: "Atomically adds data to an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterSubtract",
        returnType: "uint",
        description: "Atomically subtracts data from an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterMin",
        returnType: "uint",
        description: "Atomically stores the minimum of the counter and data, returning the original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterMax",
        returnType: "uint",
        description: "Atomically stores the maximum of the counter and data, returning the original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterAnd",
        returnType: "uint",
        description: "Atomically performs a bitwise AND on an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterOr",
        returnType: "uint",
        description: "Atomically performs a bitwise OR on an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterXor",
        returnType: "uint",
        description: "Atomically performs a bitwise XOR on an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterExchange",
        returnType: "uint",
        description: "Atomically replaces the value of an atomic counter and returns its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCounterCompSwap",
        returnType: "uint",
        description: "Atomically compares and swaps the value of an atomic counter, returning its original value.",
        category: "Atomic Counter",
        version: "4.60",
        parameters: [
            {
                type: "atomic_uint",
                name: "c"
            },
            {
                type: "uint",
                name: "compare"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    }

];

export const ATOMIC_MEMORY_SIGNATURES: GLSLSignature[] = [

    {
        name: "atomicAdd",
        returnType: "int",
        description: "Atomically adds data to mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicAdd",
        returnType: "uint",
        description: "Atomically adds data to mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicMin",
        returnType: "int",
        description: "Atomically stores the minimum of mem and data, returning the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicMin",
        returnType: "uint",
        description: "Atomically stores the minimum of mem and data, returning the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicMax",
        returnType: "int",
        description: "Atomically stores the maximum of mem and data, returning the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicMax",
        returnType: "uint",
        description: "Atomically stores the maximum of mem and data, returning the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicAnd",
        returnType: "int",
        description: "Atomically performs a bitwise AND on mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicAnd",
        returnType: "uint",
        description: "Atomically performs a bitwise AND on mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicOr",
        returnType: "int",
        description: "Atomically performs a bitwise OR on mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicOr",
        returnType: "uint",
        description: "Atomically performs a bitwise OR on mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicXor",
        returnType: "int",
        description: "Atomically performs a bitwise XOR on mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicXor",
        returnType: "uint",
        description: "Atomically performs a bitwise XOR on mem and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicExchange",
        returnType: "int",
        description: "Atomically replaces the value of mem with data and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicExchange",
        returnType: "uint",
        description: "Atomically replaces the value of mem with data and returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCompSwap",
        returnType: "int",
        description: "Atomically compares the value of mem with compare and, if equal, replaces it with data. Returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout int",
                name: "mem"
            },
            {
                type: "int",
                name: "compare"
            },
            {
                type: "int",
                name: "data"
            }
        ]
    },

    {
        name: "atomicCompSwap",
        returnType: "uint",
        description: "Atomically compares the value of mem with compare and, if equal, replaces it with data. Returns the original value.",
        category: "Atomic Memory",
        version: "4.20",
        parameters: [
            {
                type: "inout uint",
                name: "mem"
            },
            {
                type: "uint",
                name: "compare"
            },
            {
                type: "uint",
                name: "data"
            }
        ]
    }
];

