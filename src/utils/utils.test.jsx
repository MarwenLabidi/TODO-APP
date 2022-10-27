import { describe, it, expect } from "vitest";
const sum = (a, b) => a + b;

describe("sum function", () => {
        it.concurrent("result", async () => {
                //test playSound function
                const result = sum(2, 2);
                expect(result).toBe(4);
        });
});

// NOTE : i don't need unit test for this project so im gonna skip it and im gonna use component test and accesibility instead 