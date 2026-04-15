//
function script8380(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int): [int, int, int, int] {
    var int6 = 0;
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = (16 + 1);
    var int20 = int19;
    var int21 = 0;
    switch (int5) {
        case 3: {
            int12 = int0;
            int13 = int1;
            int14 = (int1 + int3);
            break;
        }
        case 4: {
            int12 = (int0 + int2);
            int13 = int1;
            int14 = (int1 + int3);
            break;
        }
        case 1: {
            int12 = int1;
            int13 = int0;
            int14 = (int0 + int2);
            break;
        }
        case 6: {
            int12 = (int1 + int3);
            int13 = int0;
            int14 = (int0 + int2);
            break;
        }
        default: {
            return [int0, int1, int2, int3];
        }
    };
    var int22 = ENUM_GETOUTPUTCOUNT(7718 as cs2enum);
    var int23 = 0;
    while ((int23 < int22)) {
        int6 = enum_getvalue(0, 0, 7718 as cs2enum, int23);
        int7 = struct_getparam(script10405(int6), 3503);
        if ((((IF_GETHIDE(int7) == false) && (int6 != int4)) && (struct_getparam(script10405(int6), 3528) == true))) {
            int8 = IF_GETX(int7);
            int9 = IF_GETY(int7);
            int10 = IF_GETWIDTH(int7);
            int11 = IF_GETHEIGHT(int7);
            switch (int5) {
                case 3:
                case 4: {
                    int15 = int8;
                    int16 = (int8 + int10);
                    int17 = int9;
                    int18 = (int9 + int11);
                    break;
                }
                case 1:
                case 6: {
                    int15 = int9;
                    int16 = (int9 + int11);
                    int17 = int8;
                    int18 = (int8 + int10);
                    break;
                }
            };
            int21 = MAX(int19, (0 - int19));
            if (((int12 < (int15 + int21)) && (int12 > (int15 - int21)))) {
                if ((((int13 > (int17 - int20)) && (int13 < (int18 + int20))) || (((int14 > (int17 - int20)) && (int14 < (int18 + int20))) || ((int17 > int13) && (int17 < int14))))) {
                    int19 = (int12 - int15);
                };
            } else if ((((int12 < (int16 + int21)) && (int12 > (int16 - int21))) && (((int13 > (int17 - int20)) && (int13 < (int18 + int20))) || (((int14 > (int17 - int20)) && (int14 < (int18 + int20))) || ((int17 > int13) && (int17 < int14)))))) {
                int19 = (int12 - int16);
            };
        };
        int23 = (int23 + 1);
    };
    if ((MAX(int19, (0 - int19)) < 16)) {
        switch (int5) {
            case 3: {
                var int0 = (int0 - int19);
                var int2 = (int2 + int19);
                break;
            }
            case 1: {
                var int1 = (int1 - int19);
                var int3 = (int3 + int19);
                break;
            }
            case 4: {
                int2 = (int2 - int19);
                break;
            }
            case 6: {
                int3 = (int3 - int19);
                break;
            }
        };
    };
    return [int0, int1, int2, int3];
}