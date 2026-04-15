//
function script12321(int0: component, int1: int, int2: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    if ((varclient_5156 != 0)) {
        return;
    };
    var int3 = 0;
    if ((IF_FIND(int2) == 1)) {
        int3 = cc_getparam(5643);
    };
    var int4 = IF_GETNEXTSUBID(int2);
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int2, MODULO(((int4 + int3) - 1), int4)) == 1))) {
        if (((CC_GETWIDTH[1]() > 0) && (CC_GETHEIGHT[1]() > 0))) {
            CC_SETSIZE(CC_GETWIDTH[1](), CC_GETHEIGHT[1](), 0, 0);
            CC_SETPOSITION((IF_GETX(int2) + CC_GETX[1]()), CC_GETY[1](), 0, 0);
            if ((cc_getparam[1](5929) == 0)) {
                CC_SETCOLOUR(varclient_5178);
            } else {
                CC_SETCOLOUR(varclient_5175);
            };
            script10019(int0, int1);
        } else {
            CC_SETTRANS(255);
            CC_SETSIZE(1, 1, 0, 0);
            CC_SETPOSITION(0, 0, 0, 0);
        };
    };
    return;
}