//
function script12634(int0: int, int1: int): void {
    var int2 = cc_getparam(5931);
    var int3 = cc_getparam(5932);
    var int4 = cc_getparam(4058);
    var int5 = cc_getparam(4059);
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    switch (cc_getparam(5835)) {
        case 0: {
            if (((int2 == -1) && (int3 == -1))) {
                return;
            };
            if ((int2 == -1)) {
                int2 = CC_GETWIDTH();
            } else if ((int3 == -1)) {
                int3 = CC_GETHEIGHT();
            };
            CC_SETSIZE(int2, int3, 0, 0);
            break;
        }
        case 1: {
            if (((int2 == -1) && (int3 == -1))) {
                return;
            };
            if ((int2 == -1)) {
                int2 = CC_GETWIDTH();
            } else if ((int3 == -1)) {
                int3 = CC_GETHEIGHT();
            };
            CC_SETSIZE(script12327(CC_GETWIDTH(), int2), script12327(CC_GETHEIGHT(), int3), 0, 0);
            break;
        }
        case 3: {
            if (((int2 == -1) && (int3 == -1))) {
                return;
            };
            if ((int2 == -1)) {
                int2 = CC_GETWIDTH();
            } else if ((int3 == -1)) {
                int3 = CC_GETHEIGHT();
            };
            int8 = ABS(cc_getparam(5930));
            int7 = (int2 - CC_GETWIDTH());
            if ((int7 != 0)) {
                int2 = (script12421(int7) * MIN(ABS(int7), int8));
            } else {
                int2 = 0;
            };
            int7 = (int3 - CC_GETHEIGHT());
            if ((int7 != 0)) {
                int3 = (script12421(int7) * MIN(ABS(int7), int8));
            } else {
                int3 = 0;
            };
            CC_SETSIZE((CC_GETWIDTH() + int2), (CC_GETHEIGHT() + int3), 0, 0);
            break;
        }
        case 2: {
            if (((int0 == 1) && (int1 == 1))) {
                if ((int4 == -1)) {
                    int4 = CC_GETWIDTH();
                    cc_setparam(4058, int4);
                };
                if ((int5 == -1)) {
                    int5 = CC_GETHEIGHT();
                    cc_setparam(4059, int5);
                };
                int6 = enum_getvalue(0, 0, 9054 as cs2enum, MODULO(script12722(cc_getparam(8629), cc_getparam(8628)), 360));
                int2 = (int4 + SCALE(cc_getparam(8550), 100, int6));
                int3 = (int5 + SCALE(cc_getparam(8627), 100, int6));
                int2 = MAX(1, int2);
                int3 = MAX(1, int3);
                if ((int6 >= 0)) {
                    if ((MODULO(int4, 2) != MODULO(int2, 2))) {
                        int2 = (int2 - 1);
                    };
                    if ((MODULO(int5, 2) != MODULO(int3, 2))) {
                        int3 = (int3 - 1);
                    };
                } else {
                    if ((MODULO(int4, 2) != MODULO(int2, 2))) {
                        int2 = (int2 + 1);
                    };
                    if ((MODULO(int5, 2) != MODULO(int3, 2))) {
                        int3 = (int3 + 1);
                    };
                };
                CC_SETSIZE(int2, int3, 0, 0);
            };
            break;
        }
    };
    return;
}