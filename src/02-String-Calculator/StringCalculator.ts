const StringCalculator = {
    add(str: string): number {
        let sum: number;

        if (str === "") {
            sum = 0;
        } else {
            sum = Number(str);
        }

        return sum;
    }
};

export default StringCalculator;