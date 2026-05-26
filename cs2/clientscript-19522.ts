//
function script19522(int0: number, int1: number, string0: string): void {
    if ((CC_FIND(86048844, int0) == 1)) {
        CC_SETPOSITION(0, int1, 0, 0);
        CC_SETTEXT(string0);
        script6888(1);
        CC_SETHIDE(0);
    };
    if ((CC_FIND(86048845, int0) == 1)) {
        CC_SETPOSITION(0, (int1 + 13), 0, 0);
        CC_SETHIDE(0);
    };
    return;
}