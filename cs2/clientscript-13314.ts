//
function script13314(int0: component, int1: component, int2: component, int3: component, int4: component): void {
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 131;
    if ((IF_FIND(int0) == 1)) {
        int8 = script12422(int8, 1000, cc_getparam(5942));
        int5 = cc_getparam(6408);
        int6 = cc_getparam(6409);
        int7 = script12377((int5 + script12377((int6 - int5), (0 - int8), int8)), 0, 65536);
        cc_setparam(6408, int7);
        if ((CC_FIND[1](int1, 0) == 1)) {
            CC_SET2DANGLE[1](MAX((65536 - int7), 32768));
        };
        if ((CC_FIND[1](int2, 0) == 1)) {
            CC_SET2DANGLE[1](MIN(MAX((65536 - int7), 16384), 49152));
        };
        if ((CC_FIND[1](int3, 0) == 1)) {
            CC_SET2DANGLE[1](MIN((65536 - int7), 32768));
        };
        if ((CC_FIND[1](int4, 0) == 1)) {
            CC_SET2DANGLE[1](MIN((65536 - int7), 16384));
        };
        if ((int7 == 65536)) {
            if ((int5 == 65536)) {
                if ((CC_FIND[1](int4, 0) == 1)) {
                    CC_SET2DANGLE[1](MAX((65536 - ((CLIENTCLOCK() - cc_getparam(5945)) * int8)), 49152));
                };
            } else {
                cc_setparam(5945, CLIENTCLOCK());
            };
        } else {
            cc_setparam(5945, -1);
        };
    };
    return;
}