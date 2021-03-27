class BowlingGame {
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    get score(): number {
        let score = 0;
        let rollIndex = 0;

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            if (this.isStrike(rollIndex)) {
                score += this.getStrikeBonus(rollIndex);
                rollIndex += 1;
                continue;
            }

            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

            if (this.isSpare(frameScore)) {
                score += this.getSpareBonus(rollIndex);
            } else {
                score += frameScore;
            }

            rollIndex += 2;
        }

        return score;
    }

    private isSpare(frameScore: number): boolean {
        return frameScore === 10;
    }

    private getSpareBonus(rollIndex: number): number {
        return 10 + this.rolls[rollIndex + 2];
    }

    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === 10;
    }

    private getStrikeBonus(rollIndex: number): number {
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
}

export {
    BowlingGame
};