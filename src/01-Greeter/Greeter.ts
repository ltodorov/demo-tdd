class Greeter {
    greet(name: string): string {
        return `Hello ${name}`;
    }
}

const greeter = new Greeter();

export default greeter;