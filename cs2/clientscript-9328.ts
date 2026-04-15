//
function script9328(int0: int, int1: int, string0: string): void {
    if ((CC_FIND(comp(517, 203), int0) == 1)) {
        CC_SETPOSITION(0, int1, 0, 0);
        CC_SETTEXT(string0);
        script6888(1);
        CC_SETHIDE(false);
    };
    if ((CC_FIND(comp(517, 204), int0) == 1)) {
        CC_SETPOSITION(0, (int1 + 15), 0, 0);
        CC_SETHIDE(false);
    };
    return;
}