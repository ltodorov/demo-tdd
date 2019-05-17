import greeter from "./Greeter";
import mockDate from "mockdate";

describe("greet()", () => {
    let res: string;

    beforeEach(() => {
        mockDate.set(new Date(2019, 4, 17, 14, 0));
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

    describe("greet() returns Good morning", () => {
        it("should return `Good morning ${name}` if the time is 6:00", () => {
            mockDate.set(new Date(2019, 4, 17, 6, 0));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good morning Lyubo");
        });

        it("should return `Good morning ${name}` if the time is 10:00", () => {
            mockDate.set(new Date(2019, 4, 17, 10, 0));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good morning Lyubo");
        });

        it("should return `Good morning ${name}` if the time is 11:59", () => {
            mockDate.set(new Date(2019, 4, 17, 11, 59));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good morning Lyubo");
        });
    });

    describe("greet() returns Good evening", () => {
        it("should return `Good evening ${name}` if the time is 18:00", () => {
            mockDate.set(new Date(2019, 4, 17, 18, 0));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good evening Lyubo");
        });

        it("should return `Good evening ${name}` if the time is 21:59", () => {
            mockDate.set(new Date(2019, 4, 17, 21, 59));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good evening Lyubo");
        });
    });

    describe("greet() returns Good night", () => {
        it("should return `Good night ${name}` if the time is 22:00", () => {
            mockDate.set(new Date(2019, 4, 17, 22, 0));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good night Lyubo");
        });

        it("should return `Good night ${name}` if the time is 00:00", () => {
            mockDate.set(new Date(2019, 4, 17, 0, 0));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good night Lyubo");
        });

        it("should return `Good night ${name}` if the time is 05:59", () => {
            mockDate.set(new Date(2019, 4, 17, 5, 59));
            res = greeter.greet("Lyubo");
            expect(res).toBe("Good night Lyubo");
        });
    });

    it("should log into console when it is called", () => {
        const spy = jest.spyOn(console, "log");
        greeter.greet("Lyubo");
        expect(spy).toHaveBeenCalledTimes(1);
    });
});