//
function script11814(int0: number, int1: number, int2: number, string0: string): void {
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1 as struct;
    [int7, int3, int7, int7, int4, int5, int7, int6] = script8436(int0);
    if (((((int3 == comp(-1, 65535)) || (int4 == -1)) || (int5 == -1)) || (int6 == -1))) {
        return;
    };
    var int9 = 0;
    while ((CC_FIND(int3, int9) == 1)) {
        int8 = cc_getparam(3438);
        int8 = script8247(int8);
        if ((((CC_GETHIDE() == false) && (cc_getparam(5313) == false)) && (int8 != -1 as struct))) {
            switch (struct_getparam(int8, 2806)) {
                case 2:
                case 1:
                case 3:
                case 4:
                case 29:
                case 27:
                case 28:
                case 6:
                case 5: {
                    if ((struct_getparam(int8, 4499) == false)) {
                        if ((struct_getparam(int8, 5550) == false)) {
                            if (((script17453(int8) == 0) || (script17694(int8) > CLIENTCLOCK()))) {
                                if ((int2 != 4)) {
                                    if ((int2 == 4)) {
                                        cc_setparam(5314, 0);
                                    } else {
                                        cc_setparam(5314, 1);
                                    };
                                    script11819(int4, int6, int5, int9, int2, string0, int1);
                                } else if (((int2 == 4) && (cc_getparam(5314) == true))) {
                                    if ((int2 == 4)) {
                                        cc_setparam(5314, 0);
                                    } else {
                                        cc_setparam(5314, 1);
                                    };
                                    script11819(int4, int6, int5, int9, int2, string0, int1);
                                };
                            };
                        } else if ((script17694(int8) > CLIENTCLOCK())) {
                            if ((int2 != 4)) {
                                if ((int2 == 4)) {
                                    cc_setparam(5314, 0);
                                } else {
                                    cc_setparam(5314, 1);
                                };
                                script11819(int4, int6, int5, int9, int2, string0, int1);
                            } else if (((int2 == 4) && (cc_getparam(5314) == true))) {
                                if ((int2 == 4)) {
                                    cc_setparam(5314, 0);
                                } else {
                                    cc_setparam(5314, 1);
                                };
                                script11819(int4, int6, int5, int9, int2, string0, int1);
                            };
                        };
                    } else if ((script17694(int8) > CLIENTCLOCK())) {
                        if ((int2 != 4)) {
                            if ((int2 == 4)) {
                                cc_setparam(5314, 0);
                            } else {
                                cc_setparam(5314, 1);
                            };
                            script11819(int4, int6, int5, int9, int2, string0, int1);
                        } else if (((int2 == 4) && (cc_getparam(5314) == true))) {
                            if ((int2 == 4)) {
                                cc_setparam(5314, 0);
                            } else {
                                cc_setparam(5314, 1);
                            };
                            script11819(int4, int6, int5, int9, int2, string0, int1);
                        };
                    };
                    break;
                }
            };
        };
        int9 = (int9 + 1);
    };
    return;
}