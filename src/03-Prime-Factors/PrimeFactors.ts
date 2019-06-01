class PrimeFactors {
    generate(num: number): number[] {
        let res: number[] = [];

        if (num % 2 === 0) {
            for (let i = 0, len = num / 2; i < len; i += 1) {
                res.push(2);
            }
        }

        return res;
    }
}

export default PrimeFactors;