//
function script8807(int0: number, int1: number, int2: number): void {
    if ((int1 == -1)) {
        IF_SETCOLOUR(int2, int0);
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETCOLOUR(int2);
    };
    script8808();
    return;
}