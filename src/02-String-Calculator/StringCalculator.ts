const StringCalculator = {
    add(str: string): number {
        let sum: number;
        let delimiter: string = ",";

        if (str === "") {
            sum = 0;
        } else if (str.indexOf(delimiter)) {
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