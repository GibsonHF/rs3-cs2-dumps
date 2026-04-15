//
function script12639(): void {
    var int0 = cc_getparam(5843);
    var int1 = -1;
    var int2 = -1;
    if ((int0 != -1 as cs2enum)) {
        int1 = ENUM_GETOUTPUTCOUNT(int0);
        if ((int1 > 1)) {
            switch (cc_getparam(5842)) {
                case 0: {
                    if ((cc_getparam(5845) > 0)) {
                        cc_setparam(5846, MODULO((cc_getparam(5846) + 1), (cc_getparam(5845) + 1)));
                        if ((cc_getparam(5846) == 0)) {
                            int2 = MODULO((cc_getparam(5844) + 1), int1);
                            cc_setparam(5844, int2);
                            CC_SETGRAPHIC(enum_getvalue(0, 23, int0, int2));
                        };
                    } else {
                        int2 = MODULO((cc_getparam(5844) + 1), int1);
                        cc_setparam(5844, int2);
                        CC_SETGRAPHIC(enum_getvalue(0, 23, int0, int2));
                    };
                    break;
                }
            };
        };
    };
    return;
}