//
function script6872(int0: int, int1: unknown_int): void {
    if ((CC_FIND(comp(1360, 0), int0) == 1)) {
        if ((int1 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 1)) == 1)) {
        if ((int1 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 2)) == 1)) {
        if ((int1 == 1)) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    script41(comp(1360, 2));
    return;
}