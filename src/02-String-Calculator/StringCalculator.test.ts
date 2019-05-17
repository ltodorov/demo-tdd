import StringCalculator from "./StringCalculator";

describe("StringCalculator.add()", () => {
    it("should return 0 if we provide an empty string", () => {
        expect(StringCalculator.add("")).toBe(0);
    });
});