import greeter from "./Greeter";

describe("greet()", () => {
    let res: string;

    it("should have `greet()` that accepts a name and returns `Hello ${name}`", () => {
        let name: string = "World";
        res = greeter.greet(name);
        expect(res).toBe(`Hello ${name}`);
    });

    it("should trim the provided input", () => {
        res = greeter.greet(" World ");
        expect(res).toBe("Hello World");
    });

    it("should capitalize the first letter of the name", () => {
        res = greeter.greet("world");
        expect(res).toBe("Hello World");
    });
});