export interface Logger {
    log(print: string): void;
}

class Greeter {
    logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    greet(name: string): string {
        let result: string;
        let date: Date = new Date();
        result = `${getGreeting(date.getHours())} ${capitalizeFirstChar(trim(name))}`;
        this.logger.log(result);
        return result;
    }
}

function trim(str: string): string {
    return str.trim();
}

function capitalizeFirstChar(str: string): string {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}

function getGreeting(hours: number): string {
    let greeting: string;

    if (hours >= 6 && hours < 12) {
        greeting = "Good morning";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Hello";
    } else if (hours >= 18 && hours < 22) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    return greeting;
}

export {
    Greeter
};