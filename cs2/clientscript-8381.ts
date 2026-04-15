//
function script8381(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int): [int, int, int, int] {
    var int6 = int0;
    var int7 = int1;
    var int8 = int2;
    var int9 = int3;
    var int10 = script10405(int4);
    var int11 = struct_getparam(int10, 3503);
    var int12 = struct_getparam(int10, 3494);
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = comp(-1, 65535);
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = ENUM_GETOUTPUTCOUNT(7718 as cs2enum);
    var int24 = -1;
    var int25 = int23;
    var int26 = (int25 - 1);
    var int27 = 0;
    if ((int12 != -1 as struct)) {
        [int13, int14] = script20539(int12);
    };
    IF_SETPOSITION(int6, int7, 0, 0, int11);
    IF_SETSIZE(int8, int9, 0, 0, int11);
    while ((int27 < int23)) {
        int15 = enum_getvalue(0, 0, 7718 as cs2enum, int27);
        int16 = struct_getparam(script10405(int15), 3503);
        if (((IF_GETHIDE(int16) == false) && (int15 != int4))) {
            [int20, int19, int22, int21] = script8395(int11, int16);
            if (((((int19 + int20) + int21) + int22) > 0)) {
                switch (int5) {
                    case 1: {
                        int7 = (int7 + int21);
                        int9 = (int9 - int21);
                        break;
                    }
                    case 3: {
                        int6 = (int6 + int19);
                        int8 = (int8 - int19);
                        break;
                    }
                    case 4: {
                        int8 = (int8 - int20);
                        break;
                    }
                    case 6: {
                        int9 = (int9 - int22);
                        break;
                    }
                    case 0: {
                        if (((int19 < int21) && ((int8 - int19) >= int13))) {
                            int6 = (int6 + int19);
                            int8 = (int8 - int19);
                        } else if (((int9 - int21) >= int14)) {
                            int7 = (int7 + int21);
                            int9 = (int9 - int21);
                        } else {
                            int6 = (int6 + int19);
                            int8 = (int8 - int19);
                        };
                        break;
                    }
                    case 2: {
                        if (((int20 < int21) && ((int8 - int20) >= int13))) {
                            int8 = (int8 - int20);
                        } else if (((int9 - int21) >= int14)) {
                            int7 = (int7 + int21);
                            int9 = (int9 - int21);
                        } else {
                            int8 = (int8 - int20);
                        };
                        break;
                    }
                    case 5: {
                        if (((int19 < int22) && ((int8 - int19) >= int13))) {
                            int6 = (int6 + int19);
                            int8 = (int8 - int19);
                        } else if (((int9 - int22) >= int14)) {
                            int9 = (int9 - int22);
                        } else {
                            int6 = (int6 + int19);
                            int8 = (int8 - int19);
                        };
                        break;
                    }
                    case 7: {
                        if (((int20 < int22) && ((int8 - int20) >= int13))) {
                            int8 = (int8 - int20);
                        } else if (((int9 - int22) >= int14)) {
                            int9 = (int9 - int22);
                        } else {
                            int8 = (int8 - int20);
                        };
                        break;
                    }
                };
                IF_SETPOSITION(int6, int7, 0, 0, int11);
                IF_SETSIZE(int8, int9, 0, 0, int11);
                int24 = int27;
                int25 = int23;
                int26 = (int25 - 1);
            };
        };
        if (((int27 == int26) && (int24 != -1))) {
            int27 = 0;
            int25 = int24;
            int26 = (int25 - 1);
            int24 = -1;
        } else {
            int27 = (int27 + 1);
        };
    };
    return [int6, int7, int8, int9];
}