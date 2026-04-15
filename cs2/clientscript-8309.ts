//
function script8309(int0: int): unknown_int {
    var int1 = script10405(int0);
    var int2 = script8418(int1, 0);
    var int3 = -1 as struct;
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    var int9 = 1;
    var int10 = 0;
    var int11 = 1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = -1 as struct;
    var int20 = -1 as struct;
    var int21 = struct_getparam(int1, 3494);
    var int22 = struct_getparam(int1, 3503);
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = IF_GETX(int22);
    var int28 = IF_GETY(int22);
    var int29 = IF_GETWIDTH(int22);
    var int30 = IF_GETHEIGHT(int22);
    if ((varclient_3466 != int0)) {
        int3 = script10405(varclient_3466);
        int4 = struct_getparam(int3, 3506);
        if ((int4 != comp(-1, 65535))) {
            int5 = script8403(int4);
            int6 = script8404(int4);
            if (((((int5 > 0) && (int5 < IF_GETWIDTH(int4))) && (int6 > 0)) && (int6 < IF_GETHEIGHT(int4)))) {
                switch (int0) {
                    case 17:
                    case 1001:
                    case 2000: {
                        break;
                    }
                    default: {
                        if (((script6213(int0) == 1) && (struct_getparam(int3, 3531) == true))) {
                            return 3;
                        };
                        break;
                    }
                };
                if ((((script12612(int3) == true) && (script12612(int1) == true)) && ((script20475() == 1) || ((varclient_3477 == true) && (script20518() == 0))))) {
                    int12 = struct_getparam(int2, 3577);
                    int14 = 0;
                    int16 = IF_GETWIDTH(int4);
                    if ((struct_getparam(int2, 8296) == 2)) {
                        int15 = 0;
                        int17 = IF_GETHEIGHT(int4);
                    } else {
                        int15 = 0;
                        int17 = ((struct_getparam(int2, 3547) + int12) + struct_getparam(int2, 3586));
                    };
                    if (((((int5 >= int14) && (int5 <= int16)) && (int6 >= int15)) && (int6 <= int17))) {
                        return 1;
                    };
                };
                if (((struct_getparam(int3, 3530) == true) && (struct_getparam(int1, 3530) == true))) {
                    [int14, int15, int18, int18, int16, int17, int7, int8, int9, int10, int11] = script8701(9, int0);
                    int19 = struct_getparam(int3, 3494);
                    int20 = struct_getparam(int1, 3494);
                    if ((int9 == 1)) {
                        if (((script12612(int1) == true) && ((int7 != -1) || (int8 != -1)))) {
                            if ((int7 != -1)) {
                                [int7, int8] = script8718(int7);
                            } else if ((int8 != -1)) {
                                [int7, int8] = script8718(int8);
                            };
                            if (((int7 != int0) && (int8 != int0))) {
                                return -1;
                            };
                        };
                        if (((((script20540(int19) <= int16) && (script20541(int19) <= int17)) && (script20540(int20) <= IF_GETWIDTH(int4))) && (script20541(int20) <= IF_GETHEIGHT(int4)))) {
                            [int23, int24, int25, int26] = script8717(int0);
                            [int27, int28, int29, int30] = script8717(varclient_3466);
                            if ((int21 == -1 as struct)) {
                            } else if (((((((int29 >= script20540(int21)) && (int30 >= script20541(int21))) && (int25 >= script20540(int19))) && (int26 >= script20541(int19))) && ((int29 * int30) >= struct_getparam(int21, 3543))) && ((int25 * int26) >= struct_getparam(int19, 3543)))) {
                                return 2;
                            };
                            return -1;
                        };
                        return -1;
                    };
                    return -1;
                };
            };
        };
    };
    return 0;
}