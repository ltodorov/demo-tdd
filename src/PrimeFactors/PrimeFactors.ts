class PrimeFactors {
    generate(number: number): number[] {
        const factors = [];

        for (let divisor = 2; number > 1; divisor++) {
            while (number % divisor === 0) {
                factors.push(divisor);
                number /= divisor;
            }
        }

        return factors;
    }
}

export {
    PrimeFactors
};