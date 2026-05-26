//
function script15356(int0: number, int1: number): void {
    var int2 = 121307145;
    var int3 = 0;
    var int4 = -1;
    if ((IF_FIND(int0) == 1)) {
        int4 = cc_getparam(9209);
    };
    if ((int4 == -1)) {
        int4 = (IF_GETNEXTSUBID(int0) - 1);
    };
    if ((CC_FIND(int0, int4) == 1)) {
        int3 = (CC_GETY() + CC_GETHEIGHT());
        int3 = MAX(int3, (IF_GETY(121307148) + IF_GETHEIGHT(121307148)));
        if ((int3 > IF_GETHEIGHT(int2))) {
            IF_SETSCROLLSIZE(0, int3, int2);
            IF_SETSCROLLPOS(0, int1, int2);
            script7791(121307144, int2);
        } else {
            IF_SETSCROLLSIZE(0, 0, int2);
            IF_SETSCROLLPOS(0, 0, int2);
            CC_DELETEALL(121307144);
        };
    };
    return;
}