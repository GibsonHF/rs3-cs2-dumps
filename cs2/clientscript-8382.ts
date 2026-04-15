//
function script8382(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: unknown_int): [int, int, int, int, unknown_int] {
    if ((varbitplayer_27169 == 1)) {
        return [int0, int1, int2, int3, 1];
    };
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = script10405(int4);
    var int14 = struct_getparam(int13, 3503);
    var int15 = -1;
    var int16 = 0;
    var int17 = comp(-1, 65535);
    var int18 = script1886(int4);
    var int19 = int0;
    var int20 = int1;
    var int21 = int2;
    var int22 = int3;
    var int23 = int0;
    var int24 = int1;
    var int25 = int2;
    var int26 = int3;
    var int27 = 0;
    var int28 = 0;
    var int29 = script20451(int13);
    if ((script8137(int4) == 1)) {
        int29 = 0;
    };
    if ((int6 == 1)) {
        [int23, int24, int25, int26] = script8383(int0, int1, int2, int3, 0, 0);
    };
    var int30 = struct_getparam(int13, 3494);
    if ((int30 != -1 as struct)) {
        [int27, int28] = script20539(struct_getparam(int13, 3494));
    } else {
        int27 = int2;
        int28 = int3;
    };
    int21 = MIN(IF_GETWIDTH(int18), MAX(int25, int27));
    int22 = MIN(IF_GETHEIGHT(int18), MAX(int26, int28));
    var int31 = 0;
    var int32 = 0;
    var int33 = (IF_GETWIDTH(int18) - int21);
    var int34 = (IF_GETHEIGHT(int18) - int22);
    int19 = MAX(int31, MIN(int23, int33));
    int20 = MAX(int32, MIN(int24, int34));
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = 0;
    if ((int21 < int25)) {
        int35 = 1;
        int36 = 1;
    } else if ((int19 > int23)) {
        int7 = 1;
        int35 = 1;
    } else if ((int19 < int23)) {
        int7 = -1;
        int36 = 1;
    };
    if ((int22 < int26)) {
        int37 = 1;
        int38 = 1;
    } else if ((int20 > int24)) {
        int8 = 1;
        int37 = 1;
    } else if ((int20 < int24)) {
        int8 = -1;
        int38 = 1;
    };
    IF_SETPOSITION(int19, int20, 0, 0, int14);
    IF_SETSIZE(int21, int22, 0, 0, int14);
    var int39 = ENUM_GETOUTPUTCOUNT(7718 as cs2enum);
    var int40 = -1;
    var int41 = int39;
    var int42 = (int41 - 1);
    var int43 = -1;
    if ((struct_getparam(int13, 3529) == false)) {
        while ((int12 < int41)) {
            int16 = enum_getvalue(0, 0, 7718 as cs2enum, int12);
            int17 = struct_getparam(script10405(int16), 3503);
            if ((((IF_GETHIDE(int17) == false) && (int16 != int4)) && (script8394(int14, int17) == 1))) {
                [int9, int10, int11] = script8385(int14, int17, int27, int28, int7, int8, 1, 1, int5);
                if (((int9 != 0) || (int10 != 0))) {
                    switch (int11) {
                        case -1: {
                            IF_SETPOSITION(int0, int1, 0, 0, int14);
                            IF_SETSIZE(int2, int3, 0, 0, int14);
                            return [int0, int1, int2, int3, 0];
                        }
                        case 0: {
                            int7 = -1;
                            int19 = (int19 - int9);
                            int21 = (int21 - int10);
                            int36 = 1;
                            if ((int10 != 0)) {
                                int35 = 1;
                            };
                            break;
                        }
                        case 1: {
                            int7 = 1;
                            int19 = (int19 + int9);
                            int21 = (int21 - int10);
                            int35 = 1;
                            if ((int10 != 0)) {
                                int36 = 1;
                            };
                            break;
                        }
                        case 2: {
                            int8 = -1;
                            int20 = (int20 - int9);
                            int22 = (int22 - int10);
                            int38 = 1;
                            if ((int10 != 0)) {
                                int37 = 1;
                            };
                            break;
                        }
                        case 3: {
                            int8 = 1;
                            int20 = (int20 + int9);
                            int22 = (int22 - int10);
                            int37 = 1;
                            if ((int10 != 0)) {
                                int38 = 1;
                            };
                            break;
                        }
                    };
                    IF_SETPOSITION(int19, int20, 0, 0, int14);
                    IF_SETSIZE(int21, int22, 0, 0, int14);
                    int40 = int12;
                    int43 = int16;
                    int41 = int39;
                    int42 = (int41 - 1);
                };
            };
            if (((int12 == int42) && (int40 != -1))) {
                int12 = 0;
                int41 = int40;
                int42 = (int41 - 1);
                int40 = -1;
            } else {
                int12 = (int12 + 1);
            };
        };
    };
    if ((int6 == 1)) {
        if ((int43 != -1)) {
            int17 = struct_getparam(script10405(int43), 3503);
            if ((int8 != 0)) {
                [int19, int21, int35, int36] = script8386(int19, int21, int27, IF_GETX(int17), IF_GETWIDTH(int17), int7, int35, int36);
            };
            if ((int7 != 0)) {
                [int20, int22, int37, int38] = script8386(int20, int22, int28, IF_GETY(int17), IF_GETHEIGHT(int17), int8, int37, int38);
            };
        };
        switch (int29) {
            case 0: {
                [int19, int20, int21, int22] = script8384(int19, int20, int21, int22, int35, int36, int37, int38, int27, int28, (int0 + (int2 / 2)), (int1 + (int3 / 2)));
                break;
            }
            case 2: {
                [int19, int20, int21, int22] = script8384(int19, int20, int21, int22, int35, int36, int37, int38, int27, -1, (int0 + (int2 / 2)), -1);
                break;
            }
            case 1: {
                [int19, int20, int21, int22] = script8384(int19, int20, int21, int22, int35, int36, int37, int38, -1, int28, -1, (int1 + (int3 / 2)));
                break;
            }
            case 3: {
                [int19, int20, int21, int22] = script8384(int19, int20, int21, int22, int35, int36, int37, int38, -1, -1, -1, -1);
                break;
            }
        };
    };
    int33 = ((int31 + IF_GETWIDTH(int18)) - int21);
    int34 = ((int32 + IF_GETHEIGHT(int18)) - int22);
    int19 = MAX(int31, MIN(int19, int33));
    int20 = MAX(int32, MIN(int20, int34));
    int21 = MIN(IF_GETWIDTH(int18), MAX(int21, int27));
    int22 = MIN(IF_GETHEIGHT(int18), MAX(int22, int28));
    IF_SETPOSITION(int0, int1, 0, 0, int14);
    IF_SETSIZE(int2, int3, 0, 0, int14);
    return [int19, int20, int21, int22, 1];
}