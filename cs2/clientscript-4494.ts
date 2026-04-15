//
function script4494(int0: component, int1: int): void {
    var int2 = -1;
    while ((CC_FIND(int0, ++int2) == 1)) {
        if ((cc_getparam(7186) == 1)) {
            CC_SETHIDE(true);
        };
    };
    while ((CC_FIND(int0, int1++) == 1)) {
        if ((cc_getparam(7186) == 1)) {
            CC_SETHIDE(false);
            return;
        };
    };
    return;
}