//
function script6906(int0: unknown_int, int1: component): void {
    if (((CC_FIND(int1, 0) == 1) && (CC_FIND[1](int1, 1) == 1))) {
        if ((int0 == 1)) {
            CC_SETGRAPHIC(5924 as graphic);
            IF_SETONMOUSEOVER(callback(), int1);
            IF_SETONMOUSELEAVE(callback(), int1);
        } else {
            CC_SETGRAPHIC(5928 as graphic);
            IF_SETONMOUSEOVER(callback(script6907, -2147483645, 1), int1);
            IF_SETONMOUSELEAVE(callback(script6907, -2147483645, 0), int1);
        };
        CC_SETCOLOUR[1](16036156);
    };
    return;
}