//
function script13171(int0: int, int1: unknown_int): void {
    var int2 = 0;
    if ((IF_FIND(comp(1843, 183)) == 1)) {
        if ((int0 <= IF_GETHEIGHT(CC_GETLAYER()))) {
            CC_SETSCROLLSIZE(0, 0);
            CC_SETSIZE(16, int0, 1, 0);
            CC_SETSCROLLPOS(0, 0);
            if ((cc_getparam(6359) > 0)) {
                cc_setparam(6359, 0);
            };
            CC_DELETEALL(comp(1843, 186));
        } else if (((CC_GETSCROLLHEIGHT() != int0) || (int1 == 1))) {
            CC_SETSCROLLSIZE(0, int0);
            CC_SETSIZE(16, 0, 1, 1);
            if ((cc_getparam(6359) > 0)) {
                int2 = (cc_getparam(6359) * (20 + 4));
            };
            if (((int0 - CC_GETHEIGHT()) < int2)) {
                CC_SETSCROLLPOS(0, (int0 - CC_GETHEIGHT()));
                script13173(CC_GETSCROLLY(int2));
            } else {
                CC_SETSCROLLPOS(0, int2);
            };
            script7791(comp(1843, 186), comp(1843, 183));
        };
    };
    return;
}