class Greeter {
    private trim(str: string): string {
        return str.trim();
    }

    private capitalizeFirstChar(str: string): string {
        return str.charAt(0).toLocaleUpperCase() + str.slice(1);
    }

    greet(name: string): string {
        return `Hello ${this.capitalizeFirstChar(this.trim(name))}`;
    }
}

const greeter = new Greeter();

export default greeter;