//
function script8173(int0: int, int1: unknown_int, int2: int, int3: int): void {
    if ((script8874() == 0)) {
        script8306();
        return;
    };
    if ((script8137(int0) == 0)) {
        return;
    };
    varclient_3467 = int0;
    var int4 = script10405(int0);
    var int5 = script8418(int4, 0);
    var int6 = struct_getparam(int4, 3503);
    var int7 = script1886(int0);
    IF_SENDTOFRONT(int6);
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = script8405(IF_GETPARENTLAYER(int6));
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    [int13, int14, int11, int12] = script8717(int0);
    script8691(int13, int14, int11, int12);
    IF_SETSIZE(int11, int12, 0, 0, int6);
    IF_SETPOSITION(int13, int14, 0, 0, int6);
    var int17 = int11;
    var int18 = int12;
    var int19 = int13;
    var int20 = int14;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    [int23, int24] = script8405(int7);
    int23 = (int23 - int8);
    int24 = (int24 - int9);
    switch (int1) {
        case 0:
        case 3:
        case 5: {
            int17 = ((IF_GETWIDTH(int6) + IF_GETX(int6)) - (int2 - int8));
            if ((int17 < int25)) {
                int17 = int25;
            };
            break;
        }
        case 2: {
            int17 = (((int2 - int8) - int19) + struct_getparam(int5, 3554));
            if ((int17 < int25)) {
                int17 = int25;
            };
            break;
        }
        case 4: {
            int17 = (((int2 - int8) - int19) + struct_getparam(int5, 3551));
            if ((int17 < int25)) {
                int17 = int25;
            };
            break;
        }
        case 7: {
            int17 = (((int2 - int8) - int19) + struct_getparam(int5, 3561));
            if ((int17 < int25)) {
                int17 = int25;
            };
            break;
        }
    };
    switch (int1) {
        case 0:
        case 1:
        case 2: {
            int18 = ((IF_GETHEIGHT(int6) + IF_GETY(int6)) - (int3 - int9));
            if ((int18 < int26)) {
                int18 = int26;
            };
            break;
        }
        case 5: {
            int18 = (((int3 - int9) - int20) + struct_getparam(int5, 3560));
            if ((int18 < int26)) {
                int18 = int26;
            };
            break;
        }
        case 6: {
            int18 = (((int3 - int9) - int20) + struct_getparam(int5, 3549));
            if ((int18 < int26)) {
                int18 = int26;
            };
            break;
        }
        case 7: {
            int18 = (((int3 - int9) - int20) + struct_getparam(int5, 3562));
            if ((int18 < int26)) {
                int18 = int26;
            };
            break;
        }
    };
    [int15, int16] = script8138(int0);
    switch (int1) {
        case 1:
        case 6: {
            [int21, int22] = script8175(int0, -1, int18);
            break;
        }
        case 3:
        case 4: {
            [int21, int22] = script8175(int0, int17, -1);
            break;
        }
        default: {
            [int21, int22] = script8175(int0, int17, int18);
            break;
        }
    };
    [int17, int18] = script8140(int0, int21, int22);
    switch (int1) {
        case 0: {
            int19 = (int19 - (int17 - IF_GETWIDTH(int6)));
            int20 = (int20 - (int18 - IF_GETHEIGHT(int6)));
            break;
        }
        case 1: {
            int20 = (int20 - (int18 - IF_GETHEIGHT(int6)));
            break;
        }
        case 2: {
            int20 = (int20 - (int18 - IF_GETHEIGHT(int6)));
            break;
        }
        case 3: {
            int19 = (int19 - (int17 - IF_GETWIDTH(int6)));
            break;
        }
        case 5: {
            int19 = (int19 - (int17 - IF_GETWIDTH(int6)));
            break;
        }
    };
    int19 = MAX(int23, MIN(int19, (IF_GETWIDTH(int7) - int17)));
    int20 = MAX(int24, MIN(int20, (IF_GETHEIGHT(int7) - int18)));
    IF_SETSIZE(int17, int18, 0, 0, int6);
    IF_SETPOSITION(int19, int20, 0, 0, int6);
    script8390(int0);
    [int19, int20, int17, int18, int10] = script8382(int19, int20, int17, int18, int0, 0, 0);
    if ((int10 == 1)) {
        if ((script8397(int13, int14, (int13 + int11), (int14 + int12), int19, int20, (int19 + int17), (int20 + int18)) == 0)) {
            int10 = 0;
        } else {
            switch (int1) {
                case 0: {
                    if ((((int13 + int11) != (int19 + int17)) && ((int14 + int12) != (int20 + int18)))) {
                        int10 = 0;
                    };
                    break;
                }
                case 1: {
                    if ((((int13 != int19) && ((int13 + int11) != (int19 + int17))) && ((int14 + int12) != (int20 + int18)))) {
                        int10 = 0;
                    };
                    break;
                }
                case 2: {
                    if (((int13 != int19) && ((int14 + int12) != (int20 + int18)))) {
                        int10 = 0;
                    };
                    break;
                }
                case 3: {
                    if (((((int13 + int11) != (int19 + int17)) && (int14 != int20)) && ((int14 + int12) != (int20 + int18)))) {
                        int10 = 0;
                    };
                    break;
                }
                case 4: {
                    if ((((int13 != int19) && (int14 != int20)) && ((int14 + int12) != (int20 + int18)))) {
                        int10 = 0;
                    };
                    break;
                }
                case 5: {
                    if ((((int13 + int11) != (int19 + int17)) && (int14 != int20))) {
                        int10 = 0;
                    };
                    break;
                }
                case 6: {
                    if ((((int13 != int19) && ((int13 + int11) != (int19 + int17))) && (int14 != int20))) {
                        int10 = 0;
                    };
                    break;
                }
                case 7: {
                    if (((int13 != int19) && (int14 != int20))) {
                        int10 = 0;
                    };
                    break;
                }
            };
        };
        if ((int10 == 1)) {
            script8688(int19, int20, int17, int18);
            IF_SETSIZE(int17, int18, 0, 0, int6);
            IF_SETPOSITION(int19, int20, 0, 0, int6);
        };
    };
    return;
}