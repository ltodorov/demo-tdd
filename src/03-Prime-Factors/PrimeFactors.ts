class PrimeFactors {
    generate(num: number): number[] {
        let res: number[] = [];

        while (num % 2 === 0) {
            res.push(2);
            num = num / 2;
        }

        return res;
    }
}

export default PrimeFactors;