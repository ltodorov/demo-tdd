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
        } else if (date.getUTCHours() >= 18 && date.getUTCHours() < 22) {
            greeting = "Good evening";
        } else if (date.getUTCHours() >= 22 || date.getUTCHours() < 6) {
            greeting = "Good night";
        }
        return `${greeting} ${this.capitalizeFirstChar(this.trim(name))}`;
    }
}

const greeter = new Greeter();

export default greeter;