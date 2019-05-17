const StringCalculator = {
    add(str: string): number {
        let sum: number;
        let delimiter: RegExp = /,|\n/;

        if (str === "") {
            sum = 0;
        } else if (str.search(delimiter) !== -1) {
            sum = str.split(delimiter).reduce((acc: number, val: string) => {
                return acc += Number(val);
            }, 0);
        } else {
            sum = Number(str);
        }

        return sum;
    }
};

export default StringCalculator;