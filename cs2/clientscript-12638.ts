//
function script12638(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    switch (cc_getparam(5836)) {
        case 0: {
            CC_SET2DANGLE(cc_getparam(5936));
            break;
        }
        case 1: {
            int1 = MODULO(cc_getparam(5936), 65536);
            if ((int1 < 0)) {
                int1 = (int1 + 65536);
            };
            int0 = CC_GET2DANGLE();
            if ((int0 != int1)) {
                if ((ABS((int1 - int0)) < 32768)) {
                    CC_SET2DANGLE(script12327(int0, int1));
                } else {
                    if ((int1 < int0)) {
                        int1 = (int1 + 65536);
                    } else {
                        int0 = (int0 + 65536);
                    };
                    CC_SET2DANGLE(MODULO(script12327(int0, int1), 65536));
                };
            };
            break;
        }
        case 2: {
            int3 = cc_getparam(4155);
            int2 = MODULO(CLIENTCLOCK(), (65536 / 1872));
            CC_SET2DANGLE(((0 - 1872) * int2));
            cc_setparam(4155, int2);
            break;
        }
        case 3: {
            int3 = cc_getparam(4155);
            int2 = MODULO(script12706(-1), 360);
            CC_SET2DANGLE(script12626(SCALE(SCALE(65536, 360, 15), 100, enum_getvalue(0, 0, 9054 as cs2enum, int2))));
            cc_setparam(4155, int2);
            break;
        }
        case 4: {
            int3 = cc_getparam(4155);
            [int1, int2] = script10253(script12706(-1));
            CC_SET2DANGLE(int1);
            cc_setparam(4155, int2);
            break;
        }
        case 5: {
            CC_SET2DANGLE((CC_GET2DANGLE() + MODULO(cc_getparam(5935), 65536)));
            break;
        }
    };
    if ((int2 < int3)) {
        return 1;
    };
    return 0;
}