class Greeter {
    private trim(str: string): string {
        return str.trim();
    }

    private capitalizeFirstChar(str: string): string {
        return str.charAt(0).toLocaleUpperCase() + str.slice(1);
    }

    greet(name: string): string {
        let date: Date = new Date();
        let greeting: string = "Hello";
        if (date.getUTCHours() >= 6 && date.getUTCHours() <= 12) {
            greeting = "Good morning";
        }
        return `${greeting} ${this.capitalizeFirstChar(this.trim(name))}`;
    }
}

const greeter = new Greeter();

export default greeter;