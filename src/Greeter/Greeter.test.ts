import { Greeter, Logger } from "./Greeter";
import mockDate from "mockdate";

type DayTimes = Record<string, string[]>;

const times: DayTimes = {
    morning: ["6:00", "10:00", "11:59"],
    evening: ["18:00", "21:59"],
    night: ["22:00", "00:00", "5:59"]
}

interface HoursAndMinutes {
    hours: number;
    minutes: number;
}

function extractHoursAndMinutes(time: string): HoursAndMinutes {
    const [hours, minutes] = time.split(":");

    return {
        hours: Number(hours),
        minutes: Number(minutes)
    };
}

describe("Greeter", () => {
    let res: string;
    let greeter: Greeter;
    let logger: Logger;

    beforeEach(() => {
        logger = {
            log: jest.fn()
        };
        greeter = new Greeter(logger);
        mockDate.set(new Date(2019, 4, 17, 14, 0));
    });

    afterEach(() => {
        mockDate.reset();
    });

    it("should have `greet()` that accepts a name and returns `Hello ${name}`", () => {
        res = greeter.greet("Jack");
        expect(res).toBe(`Hello Jack`);
    });

    it("should trim the provided input", () => {
        res = greeter.greet(" Jack ");
        expect(res).toBe("Hello Jack");
    });

    it("should capitalize the first letter of the name", () => {
        res = greeter.greet("jack");
        expect(res).toBe("Hello Jack");
    });

    Object.keys(times).forEach(key => {
        describe(`in the ${key}`, () => {
            times[key].forEach((time) => {
                const { hours, minutes } = extractHoursAndMinutes(time);
                it(`should return Good ${key} if the time is ${time}`, () => {
                    mockDate.set(new Date(2019, 4, 17, hours, minutes));
                    res = greeter.greet("Jack");
                    expect(res).toBe(`Good ${key} Jack`);
                });
            });
        });
    });

    it("should log into console when it is called", () => {
        greeter.greet("Jack");
        expect(logger.log).toHaveBeenCalledTimes(1);
    });
});