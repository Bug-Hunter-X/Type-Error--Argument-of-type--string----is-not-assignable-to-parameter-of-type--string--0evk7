# Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'
This TypeScript code demonstrates a common type error that occurs when passing an array to a function expecting a string.  The `greeter` function expects a single string argument, but an array of strings is passed. This leads to a compilation error because TypeScript's type system correctly identifies the type mismatch.

The solution involves modifying either the function signature or the argument passed to correctly match the expected type.

## How to reproduce:
1. Save the code in `bug.ts`.
2. Compile the code using a TypeScript compiler (tsc).
3. Observe the compilation error.