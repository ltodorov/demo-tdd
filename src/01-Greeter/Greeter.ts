class Greeter {
    greet(name: string): string {
        let trimmedName: string = name.trim();
        return `Hello ${trimmedName}`;
    }
}

const greeter = new Greeter();

export default greeter;