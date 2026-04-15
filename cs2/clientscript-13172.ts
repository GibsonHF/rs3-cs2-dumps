//
function script13172(int0: int, int1: unknown_int): void {
    var int2 = 0;
    if (((IF_FIND(comp(1843, 183)) == 1) && (IF_FIND[1](comp(1843, 261)) == 1))) {
        if ((cc_getparam(6359) > 0)) {
            int2 = cc_getparam(6359);
        };
        CC_SETSCROLLPOS[1](int2, 0);
        if ((int0 <= 8)) {
            CC_SETSCROLLSIZE[1](0, 0);
            CC_DELETEALL(comp(1843, 262));
            IF_SETONSCROLLWHEEL(callback(), comp(1843, 251));
        } else if (((CC_GETSCROLLWIDTH[1]() != int0) || (int1 == 1))) {
            CC_SETSCROLLSIZE[1](int0, 0);
            script11147(comp(1843, 262), comp(1843, 261));
            IF_SETONSCROLLWHEEL(callback(), comp(1843, 261));
            IF_SETONSCROLLWHEEL(callback(script1701, 120783110, 120783109, -2147483646), 120783099);
            script14180();
        };
    };
    return;
}