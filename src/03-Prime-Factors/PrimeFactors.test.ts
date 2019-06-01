import PrimeFactors from "./PrimeFactors";

describe("PrimeFactors", () => {
    let primeFactors: PrimeFactors;

    beforeEach(() => {
        primeFactors = new PrimeFactors();
    });

    it("should return class instance", () => {
        expect(primeFactors).toBeInstanceOf(PrimeFactors);
    });

    it("should have generate() method than returns [] if we pass 1", () => {
        expect(primeFactors.generate(1)).toEqual([]);
    });
});