//
function script13131(int0: component, int1: component, int2: unknown_int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    if ((IF_FIND(int0) == 1)) {
        int4 = cc_getparam(6312);
        int5 = cc_getparam(6313);
    };
    if (((int5 > 0) && (CC_FIND(int0, int3) == 1))) {
        if (((CLIENTCLOCK() - cc_getparam(6314)) < int5)) {
            return;
        };
        cc_setparam(6314, CLIENTCLOCK());
    };
    if ((int2 == 1)) {
        int4 = script12626(int4);
    };
    var int6 = (IF_GETSCROLLX(int1) + int4);
    if ((CC_FIND(int0, 1) == 1)) {
        script1702(int0, int1, int6, 1);
    };
    return;
}