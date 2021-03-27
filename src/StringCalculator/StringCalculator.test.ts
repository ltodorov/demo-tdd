import { StringCalculator } from "./StringCalculator";

describe("StringCalculator", () => {
    const stringCalculator = new StringCalculator();

    it("should return 0 if we provide an empty string", () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    it("should return the single number", () => {
        expect(stringCalculator.add("1")).toBe(1);
        expect(stringCalculator.add("2")).toBe(2);
    });

    it("should return the sum of two numbers, comma delimited", () => {
        expect(stringCalculator.add("1,2")).toBe(3);
        expect(stringCalculator.add("10,20")).toBe(30);
    });

    it("should return the sum of two numbers, newline delimited", () => {
        expect(stringCalculator.add("1\n2")).toBe(3);
    });

    it("should return the sum of four numbers, delimited either way", () => {
        expect(stringCalculator.add("1\n2,3\n4")).toBe(10);
    });

    it("should throw an exception if there are negative numbers", () => {
        expect(() => stringCalculator.add("-1,2,-3")).toThrow("negatives not allowed: -1,-3");
    });

    it("should ignore numbers greater than 1000", () => {
        expect(stringCalculator.add("1001,2000,3,2")).toBe(5);
    });

    it("should use a single char delimiter defined on the first line starting with `//`", () => {
        expect(stringCalculator.add("//#\n1#2")).toBe(3);
    });

    it("should use a multi char delimiter defined on the first line starting with `//`", () => {
        expect(stringCalculator.add("//###\n1###2")).toBe(3);
    });
});