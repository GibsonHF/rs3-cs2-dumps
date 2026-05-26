//
function script17215(int0: number, int1: number): number {
    if (((int1 < 1) || (int1 > 31))) {
        script12478(`Clue numbers must be 1-31. ${inttostring(int1, 10)} not valid.`);
        return 0;
    };
    return script734(TESTBIT(int0, (int1 - 1)));
}