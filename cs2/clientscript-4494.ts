//
function script4494(int0: number, int1: number): void {
    var int2 = -1;
    stack(int0);
    int2 = (int2 + 1);
    while ((CC_FIND(int2) == 1)) {
        if ((cc_getparam(7186) == 1)) {
            CC_SETHIDE(true);
        };
    };
    stack(int0);
    stack(int1);
    var int1 = (int1 + 1);
    while ((CC_FIND() == 1)) {
        if ((cc_getparam(7186) == 1)) {
            CC_SETHIDE(false);
            return;
        };
    };
    return;
}