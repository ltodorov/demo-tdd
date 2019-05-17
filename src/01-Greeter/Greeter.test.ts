import greeter from "./Greeter";
import mockDate from "mockdate";

describe("greet()", () => {
    let res: string;

    beforeEach(() => {
        mockDate.set(new Date("2019-05-17T14:00:00.000Z"));
    });

    afterEach(() => {
        mockDate.reset();
    });

    it("should have `greet()` that accepts a name and returns `Hello ${name}`", () => {
        res = greeter.greet("Lyubo");
        expect(res).toBe(`Hello Lyubo`);
    });

    it("should trim the provided input", () => {
        res = greeter.greet(" Lyubo ");
        expect(res).toBe("Hello Lyubo");
    });

    it("should capitalize the first letter of the name", () => {
        res = greeter.greet("lyubo");
        expect(res).toBe("Hello Lyubo");
    });

    it("should return `Good morning ${name}` if the time is 6:00", () => {
        mockDate.set(new Date("2019-05-17T06:00:00.000Z"));
        res = greeter.greet("Lyubo");
        expect(res).toBe("Good morning Lyubo");
    });

    it("should return `Good morning ${name}` if the time is 10:00", () => {
        mockDate.set(new Date("2019-05-17T10:00:00.000Z"));
        res = greeter.greet("Lyubo");
        expect(res).toBe("Good morning Lyubo");
    });

    it("should return `Good morning ${name}` if the time is 12:00", () => {
        mockDate.set(new Date("2019-05-17T12:00:00.000Z"));
        res = greeter.greet("Lyubo");
        expect(res).toBe("Good morning Lyubo");
    });
});