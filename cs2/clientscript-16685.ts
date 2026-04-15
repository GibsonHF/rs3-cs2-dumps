//
function script16685(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTRANS(SCALE((enum_getvalue(0, 0, 9054 as cs2enum, script16684(cc_getparam(5940), cc_getparam(5403))) + 100), 200, 255));
    };
    return;
}