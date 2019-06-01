import PrimeFactors from "./PrimeFactors";

describe("PrimeFactors", () => {
    let primeFactors: PrimeFactors;

    beforeEach(() => {
        primeFactors = new PrimeFactors();
    });

    it("should return class instance", () => {
        expect(primeFactors).toBeInstanceOf(PrimeFactors);
    });


});