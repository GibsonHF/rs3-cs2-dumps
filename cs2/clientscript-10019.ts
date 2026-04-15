//
function script10019(int0: component, int1: int): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1))) {
        return;
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 5;
    var int7 = -1;
    var int8 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        int7 = cc_getparam(6407);
        if ((int7 != -1)) {
            int8 = MODULO(((100 + CLIENTCLOCK()) - (int7 * 25)), 100);
            if (((int8 / 25) == 0)) {
                CC_SENDTOFRONT();
            } else if (((int8 / 25) == 1)) {
                int8 = 25;
            } else {
                int8 = 0;
            };
            CC_SETTRANS(SCALE((100 - SCALE(int8, 25, 100)), 100, 255));
        } else if ((cc_getparam(4424) == 1)) {
            CC_SETTRANS(SCALE((enum_getvalue(0, 0, 9054 as cs2enum, MODULO(SCALE(MODULO(CLIENTCLOCK(), 100), 100, 360), 360)) + 100), 200, 255));
        } else if ((cc_getparam(4423) > -1)) {
            if ((CC_FIND[1](int0, cc_getparam(4423)) == 1)) {
                CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
            };
        } else {
            int2 = cc_getparam(4421);
            int3 = cc_getparam(4422);
            if (((int2 == -2147483648) || (int3 == -2147483648))) {
                return;
            };
            int5 = SCALE(enum_getvalue(0, 0, 9054 as cs2enum, MODULO(SCALE(MODULO((CLIENTCLOCK() * 2), 100), 100, 360), 360)), 100, int6);
            CC_SETPOSITION(((int2 + int4) - (CC_GETWIDTH() / 2)), ((int3 + int5) - (CC_GETHEIGHT() / 2)), 0, 0);
        };
    };
    return;
}