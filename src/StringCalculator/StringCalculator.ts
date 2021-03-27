class StringCalculator {
    add(str: string): number {
        let result: number;

        if (str === "") {
            result = 0;
        } else {
            result = sum(
                filterGreaterNumbers(
                    checkNegatives(
                        splitAndParse(str)
                    ), 1000
                )
            );
        }

        return result;
    }
}

function sum(numbers: number[]): number {
    return numbers.reduce((acc: number, val: number) => {
        return acc + val;
    }, 0);
}

function filterGreaterNumbers(numbers: number[], limit: number) {
    return numbers.filter((val: number) => val <= limit);
}

function checkNegatives(numbers: number[]): number[] {
    const negatives = numbers.filter((val: number) => val < 0);

    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return numbers;
}

function splitAndParse(str: string): number[] {
    const { numStr, delimiter } = formatString(str);

    return numStr.split(delimiter).map(Number);
}

function formatString(str: string): {
    numStr: string
    delimiter: RegExp | string
} {
    let numStr = str;
    let delimiter: RegExp | string = /,|\n/;
    let indexOfNewLine = str.indexOf("\n");

    if (str.startsWith("//")) {
        numStr = str.substring(indexOfNewLine);
        delimiter = str.substring(2, indexOfNewLine);
    }

    return {
        numStr,
        delimiter
    };
}

export {
    StringCalculator
};