import greeter from "./Greeter";

describe("Greeter", () => {
    it("should have `greet()` that accepts a name and returns `Hello ${name}`", () => {
        let name: string = "World";
        let res: string = greeter.greet(name);
        expect(res).toBe(`Hello ${name}`);
    });
});