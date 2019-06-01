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
        it("should return [] if we pass 1", () => {
            expect(primeFactors.generate(1)).toEqual([]);
        });

        it("should return [2] if we pass 2", () => {
            expect(primeFactors.generate(2)).toEqual([2]);
        });

        it("should return [2, 2] if we pass 4", () => {
            expect(primeFactors.generate(4)).toEqual([2, 2]);
        });
    });

});