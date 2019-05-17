class StringCalculator {
    add(str: string): number {
        let sum: number;

        if (str === "") {
            sum = 0;
        } else {
            sum = this.sum(
                this.filterGreaterNumbers(
                    this.checkNegatives(
                        this.splitAndParse(str)
                    ), 1000
                )
            );
        }

        return sum;
    }

    private splitAndParse(str: string): number[] {
        const delimiter = /,|\n/;
        return str.split(delimiter).map(Number);
    }

    private checkNegatives(numbers: number[]): number[] {
        const negatives = numbers.filter((val: number) => val < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(",")}`);
        }
        return numbers;
    }

    private filterGreaterNumbers(numbers: number[], limit: number) {
        return numbers.filter((val: number) => val <= limit);
    }

    private sum(numbers: number[]): number {
        return numbers.reduce((acc: number, val: number) => {
            return acc += val;
        }, 0);
    }
}

export default StringCalculator;