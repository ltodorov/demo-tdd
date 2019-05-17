class StringCalculator {
    add(str: string): number {
        let sum: number;
        let delimiter: RegExp = /,|\n/;
        let numbers: string[];
        let negativeNums: string[];

        if (str === "") {
            sum = 0;
        } else if (str.search(delimiter) !== -1) {
            numbers = str.split(delimiter);
            negativeNums = numbers.filter((val: string) => Number(val) < 0);

            if (negativeNums.length > 0) {
                throw new Error(`negatives not allowed: ${negativeNums.join(",")}`);
            }

            sum = numbers.reduce((acc: number, val: string) => {
                return acc += Number(val);
            }, 0);
        } else {
            sum = Number(str);
        }

        return sum;
    }
}

export default StringCalculator;