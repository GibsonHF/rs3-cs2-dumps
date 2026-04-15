//
function script13174(int0: int, int1: int): void {
    var int2 = (int1 - int0);
    var int3 = -1;
    if ((int2 == 0)) {
        return;
    };
    var int4 = (int2 / ABS(int2));
    if (((IF_FIND(comp(1843, 183)) == 1) && (IF_FIND[1](comp(1843, 261)) == 1))) {
        int3 = cc_getparam(6359);
        if ((int4 > 0)) {
            int2 = MIN(int2, (CC_GETSCROLLWIDTH[1]() - 8));
        } else {
            int2 = MAX(int2, (0 - int3));
        };
        int3 = (int3 + int2);
        cc_setparam(6359, int3);
        script13177();
    };
    return;
}