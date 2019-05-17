import StringCalculator from "./StringCalculator";

describe("StringCalculator.add()", () => {
    it("should return 0 if we provide an empty string", () => {
        expect(StringCalculator.add("")).toBe(0);
    });

    it("should return the single number", () => {
        expect(StringCalculator.add("1")).toBe(1);
        expect(StringCalculator.add("2")).toBe(2);
    });

    it("should return the sum of two numbers, comma delimited", () => {
        expect(StringCalculator.add("1,2")).toBe(3);
        expect(StringCalculator.add("10,20")).toBe(30);
    });

    it("should return the sum of two numbers, newline delimited", () => {
        expect(StringCalculator.add("1\n2")).toBe(3);
    });
});