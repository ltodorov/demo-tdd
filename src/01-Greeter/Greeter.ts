class Greeter {
    private trim(str: string): string {
        return str.trim();
    }

    private capitalizeFirstChar(str: string): string {
        return str.charAt(0).toLocaleUpperCase() + str.slice(1);
    }

    private getGreeting(hours: number): string {
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

    greet(name: string): string {
        let result: string;
        let date: Date = new Date();
        result = `${this.getGreeting(date.getHours())} ${this.capitalizeFirstChar(this.trim(name))}`;
        console.log(result);
        return result;
    }
}

const greeter = new Greeter();

export default greeter;