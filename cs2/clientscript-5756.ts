//
function script5756(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    if ((IF_FIND(int0) == 1)) {
        int3 = (cc_getparam(6519) + SCALE((int2 - int1), 100, 4));
        if ((int3 >= int2)) {
            int3 = int2;
            CC_SETONTIMER(callback());
        };
        CC_SETTEXT(TOSTRING_LOCALISED(int3, 1));
        cc_setparam(6519, int3);
    };
    return;
}