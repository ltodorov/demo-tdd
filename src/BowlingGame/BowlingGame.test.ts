import { BowlingGame } from "./BowlingGame";

/**
 * Examples:
 * -/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0
 * 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20
 * 5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16
 * 10  1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14
 * 10 10 10 10 10 10 10 10 10 10 10 10 = 300
 */

describe("BowlingGame", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    it("should return 0 for a game of all zeros", () => {
        rollMany(0, 20);

        expect(game.score).toBe(0);
    });

    it("should return 20 for a game of all ones", () => {
        rollMany(1, 20);

        expect(game.score).toBe(20);
    });

    it("should return correct score when a spare is rolled", () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(0, 17);

        expect(game.score).toBe(16);
    });

    it("should return correct score when a strike is rolled", () => {
        game.roll(10);
        game.roll(1);
        game.roll(1);
        rollMany(0, 17);

        expect(game.score).toBe(14);
    });

    it("should return correct score for a game of all strikes", () => {
        rollMany(10, 12);

        expect(game.score).toBe(300);
    });

    function rollMany(pins: number, rolls: number) {
        for (let i = 0; i < rolls; i++) {
            game.roll(pins);
        }
    }
});
