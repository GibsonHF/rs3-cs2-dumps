//
function script12635(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): void {
    var int6 = cc_getparam(5926);
    var int7 = cc_getparam(5927);
    if ((int6 == -1)) {
        int6 = int0;
    };
    if ((int7 == -1)) {
        int7 = int1;
    };
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1;
    var int15 = -1;
    switch (cc_getparam(5828)) {
        case 0:
        case 1: {
            int8 = cc_getparam(5829);
            int9 = cc_getparam(5830);
            if ((cc_getparam(5828) == 1)) {
                int10 = cc_getparam(5831);
                int11 = cc_getparam(5832);
                if (((int10 != 0) || (int11 != 0))) {
                    script12642(script11882(int8, int10), script11882(int9, int11));
                    int8 = script11882(int8, (int10 / 2));
                    int9 = script11882(int9, (int11 / 2));
                };
            };
            int8 = script11882(int8, cc_getparam(5833));
            int9 = script11882(int9, cc_getparam(5834));
            int6 = (int6 * 1000);
            int7 = (int7 * 1000);
            if ((int2 == 2)) {
                int6 = (int6 - int8);
            } else {
                int6 = (int6 + int8);
            };
            if ((int3 == 2)) {
                int7 = (int7 - int9);
            } else {
                int7 = (int7 + int9);
            };
            if ((cc_getparam(5847) != -1)) {
                var int4 = (int4 * 1000);
                var int5 = (int5 * 1000);
                switch (int2) {
                    case 0:
                    case 2: {
                        if ((int6 < 0)) {
                            int6 = script12626(int6);
                            int12 = 1;
                        } else {
                            int14 = (int6 + (CC_GETWIDTH() * 1000));
                            if ((int14 > int4)) {
                                int6 = (((2 * int4) - int14) - (CC_GETWIDTH() * 1000));
                                int12 = 1;
                            };
                        };
                        break;
                    }
                    case 1: {
                        int14 = ((CC_GETWIDTH() * 1000) / 2);
                        int15 = (int6 - int14);
                        int14 = (int6 + int14);
                        int4 = (int4 / 2);
                        if ((int15 < (0 - int4))) {
                            int6 = (((-2 * int4) - int15) + ((CC_GETWIDTH() * 1000) / 2));
                            int12 = 1;
                        } else if ((int14 > int4)) {
                            int6 = (((2 * int4) - int14) - ((CC_GETWIDTH() * 1000) / 2));
                            int12 = 1;
                        };
                        break;
                    }
                };
                if ((int12 == 1)) {
                    cc_setparam(5829, script12626(cc_getparam(5829)));
                };
                int12 = 0;
                switch (int3) {
                    case 0:
                    case 2: {
                        if ((int7 < 0)) {
                            int7 = script12626(int7);
                            int12 = 1;
                        } else {
                            int14 = (int7 + (CC_GETHEIGHT() * 1000));
                            if ((int14 > int5)) {
                                int7 = (((2 * int5) - int14) - (CC_GETHEIGHT() * 1000));
                                int12 = 1;
                                int13 = 1;
                            };
                        };
                        break;
                    }
                    case 1: {
                        int14 = ((CC_GETHEIGHT() * 1000) / 2);
                        int15 = (int7 - int14);
                        int14 = (int7 + int14);
                        int5 = (int5 / 2);
                        if ((int15 < (0 - int5))) {
                            int7 = (((-2 * int5) - int15) + ((CC_GETHEIGHT() * 1000) / 2));
                            int12 = 1;
                        } else if ((int14 > int5)) {
                            int7 = (((2 * int5) - int14) - ((CC_GETHEIGHT() * 1000) / 2));
                            int12 = 1;
                            int13 = 1;
                        };
                        break;
                    }
                };
                if ((int12 == 1)) {
                    cc_setparam(5830, script12626(cc_getparam(5830)));
                };
                if (((int13 == 1) && (cc_getparam(5847) == 1))) {
                    cc_setparam(5830, (cc_getparam(5830) / 2));
                    cc_setparam(5829, (cc_getparam(5829) / 2));
                };
            };
            cc_setparam(5833, MODULO(int6, 1000));
            cc_setparam(5834, MODULO(int7, 1000));
            int6 = (int6 / 1000);
            int7 = (int7 / 1000);
            cc_setparam(5926, int6);
            cc_setparam(5927, int7);
            break;
        }
    };
    return;
}