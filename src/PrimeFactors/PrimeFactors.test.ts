import PrimeFactors from "./PrimeFactors";

describe("PrimeFactors", () => {
    let primeFactors: PrimeFactors;

    beforeEach(() => {
        primeFactors = new PrimeFactors();
    });

    it("should return class instance", () => {
        expect(primeFactors).toBeInstanceOf(PrimeFactors);
    });

    describe("PrimeFactors.generate()", () => {
        const rules: Record<string, number[]> = {
            "1": [],
            "2": [2],
            "4": [2, 2],
            "8": [2, 2, 2],
            "3": [3],
            "6": [2, 3],
            "5": [5],
            "7": [7],
            "9": [3, 3],
            "4620": [2, 2, 3, 5, 7, 11]
        };

        Object.keys(rules).forEach(key => {
            it(`should return [${rules[key]}] if we pass ${key}`, () => {
                expect(primeFactors.generate(Number(key))).toEqual(rules[key]);
            });
        });
    });
});