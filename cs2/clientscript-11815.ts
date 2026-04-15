//
function script11815(int0: unknown_int, int1: graphic, int2: unknown_int, string0: string): void {
    var int3 = 1;
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = -1 as struct;
    while ((int3 <= 14)) {
        int4 = script7974(int0, int3);
        int5 = script7979(int0, int3);
        int6 = script7978(int0, int3);
        int7 = script1601(int0, int3);
        if ((((((int4 != comp(-1, 65535)) && (int5 != comp(-1, 65535))) && (int6 != comp(-1, 65535))) && (int7 != comp(-1, 65535))) && (IF_FIND(int4) == 1))) {
            int8 = cc_getparam(3438);
            int8 = script8247(int8);
            if (((cc_getparam(5313) == false) && (int8 != -1 as struct))) {
                switch (struct_getparam(int8, 2806)) {
                    case 2:
                    case 1:
                    case 3:
                    case 4:
                    case 29:
                    case 27:
                    case 28:
                    case 6:
                    case 5:
                    case 8: {
                        if ((((((struct_getparam(int8, 4499) == false) && (struct_getparam(int8, 5550) == false)) && (script17453(int8) == 0)) || (script17694(int8) > CLIENTCLOCK())) && ((int2 != 4) || ((int2 == 4) && (cc_getparam(5314) == true))))) {
                            if ((int2 == 4)) {
                                cc_setparam(5314, 0);
                            } else {
                                cc_setparam(5314, 1);
                            };
                            script11819(int5, int7, int6, -1, int2, string0, int1);
                        };
                        break;
                    }
                };
            };
        };
        int3 = (int3 + 1);
    };
    return;
}