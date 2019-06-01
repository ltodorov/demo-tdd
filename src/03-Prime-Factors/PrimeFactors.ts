class PrimeFactors {
    private static primeNumbers = [
        2, 3
    ];

    generate(num: number): number[] {
        return PrimeFactors.primeNumbers.reduce((acc: number[], prime: number) => {
            while (num % prime === 0) {
                acc.push(prime);
                num /= prime;
            }
            return acc;
        }, []);
    }
}

export default PrimeFactors;