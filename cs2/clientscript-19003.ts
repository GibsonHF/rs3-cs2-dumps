//
function script19003(int0: component, int1: int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int3 = cc_getparam(8744);
        cc_setparam(8744, (int3 + 1));
        if ((int3 < 0)) {
            return;
        };
        if ((CC_GETTRANS() != 0)) {
            int4 = MODULO((MODULO((script12422((int3 * 6), 1000, cc_getparam(5940)) + cc_getparam(5403)), 90) + 90), 360);
            int5 = SCALE(enum_getvalue(0, 0, 9054 as cs2enum, int4), 100, 255);
            int5 = MIN(int5, 254);
            if ((int5 > CC_GETTRANS())) {
                int5 = 0;
            };
            CC_SETTRANS(int5);
        };
        int6 = MIN((cc_getparam(9110) + (cc_getparam(5830) * int3)), cc_getparam(5927));
        CC_SETPOSITION(cc_getparam(9109), int6, cc_getparam(5928), cc_getparam(5929));
        if (((int6 == cc_getparam(5927)) && (CC_GETTRANS() == 0))) {
            CC_SETONTIMER(callback());
            if ((CC_FIND[1](int0, (int1 + 1)) == 1)) {
                CC_SETONTIMER[1](callback(script19004, int0, (int1 + 1), int2));
                CC_SETHIDE[1](0);
            };
        };
    };
    return;
}