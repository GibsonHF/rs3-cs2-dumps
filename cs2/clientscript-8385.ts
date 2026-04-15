//
function script8385(int0: component, int1: component, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: int, int7: int, int8: int): [int, int, int] {
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 2147483647;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = IF_GETX(int0);
    var int23 = IF_GETY(int0);
    var int24 = IF_GETWIDTH(int0);
    var int25 = IF_GETHEIGHT(int0);
    var int26 = IF_GETPARENTLAYER(int0);
    var int27 = IF_GETWIDTH(int26);
    var int28 = IF_GETHEIGHT(int26);
    var int29 = ((int22 + (int24 / 2)) - script8407(int26));
    var int30 = ((int23 + (int25 / 2)) - script8408(int26));
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 1;
    [int11, int12, int13, int14] = script8395(int0, int1);
    if (((((int11 + int12) + int13) + int14) > 0)) {
        int35 = (varbitclient_19933 * int8);
        while ((int9 <= 3)) {
            int34 = (varbitclient_19931 * int6);
            int33 = (varbitclient_19932 * int7);
            int17 = 0;
            int16 = 0;
            int31 = int29;
            int32 = int30;
            switch (int9) {
                case 0: {
                    if (((int4 > 0) || (int6 == 0))) {
                        int17 = int11;
                    } else if (((int22 - int11) < 0)) {
                        int16 = int22;
                        int17 = (int11 - int16);
                    } else {
                        int16 = int11;
                    };
                    if ((((int24 - int17) < int2) || ((int22 - int16) < 0))) {
                        int36 = 0;
                    } else {
                        int36 = 1;
                        int31 = ((int31 - int16) - (int17 / 2));
                    };
                    break;
                }
                case 1: {
                    if (((int4 < 0) || (int6 == 0))) {
                        int34 = 0;
                        int17 = int12;
                        int16 = int12;
                    } else if ((((int22 + int24) + int12) > int27)) {
                        int33 = ((int33 * (int27 - (int22 + int24))) / int12);
                        int16 = int12;
                        int17 = (int16 - (int27 - (int22 + int24)));
                    } else {
                        int16 = int12;
                    };
                    if ((((int24 - int17) < int2) || (((int22 + int24) - int17) > int27))) {
                        int36 = 0;
                    } else {
                        int36 = 1;
                        int31 = ((int31 + int16) - (int17 / 2));
                    };
                    break;
                }
                case 2: {
                    if (((int5 > 0) || (int6 == 0))) {
                        int17 = int13;
                    } else if (((int23 - int13) < 0)) {
                        int16 = int23;
                        int17 = (int13 - int16);
                    } else {
                        int16 = int13;
                    };
                    if ((((int25 - int17) < int3) || ((int23 - int16) < 0))) {
                        int36 = 0;
                    } else {
                        int36 = 1;
                        int32 = ((int32 - int16) - (int17 / 2));
                    };
                    break;
                }
                case 3: {
                    if (((int5 < 0) || (int6 == 0))) {
                        int34 = 0;
                        int17 = int14;
                        int16 = int14;
                    } else if ((((int23 + int25) + int14) > int28)) {
                        int33 = ((int33 * (int28 - (int23 + int25))) / int14);
                        int16 = int14;
                        int17 = (int16 - (int28 - (int23 + int25)));
                    } else {
                        int16 = int14;
                    };
                    if ((((int25 - int17) < int3) || (((int23 + int25) - int17) > int28))) {
                        int36 = 0;
                    } else {
                        int36 = 1;
                        int32 = ((int32 + int16) - (int17 / 2));
                    };
                    break;
                }
            };
            if ((int36 == 1)) {
                int10 = ((int33 * int17) + (int34 * int16));
                if ((int35 != 0)) {
                    int10 = (int10 + (int35 * INVPOW((POW((int31 - GET_MOUSEX()), 2) + POW((int32 - GET_MOUSEY()), 2)), 2)));
                };
            } else {
                int10 = 2147483647;
            };
            if ((int15 >= int10)) {
                int15 = int10;
                int18 = int16;
                int19 = int17;
                int20 = int9;
            };
            int9 = (int9 + 1);
        };
    };
    if (((int15 == 2147483647) && ((int18 != 0) || (int19 != 0)))) {
        int20 = -1;
    };
    return [int18, int19, int20];
}