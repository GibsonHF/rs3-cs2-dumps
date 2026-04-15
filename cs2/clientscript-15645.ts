//
function script15645(int0: component, int1: component, int2: unknown_int, int3: unknown_int): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    if (((int2 < 0) || (int2 > 2))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    define_array(6);
    if ((int2 == 0)) {
        var int3 = 0;
    };
    var int4 = script15211(0, 0);
    var int5 = IF_GETWIDTH(int0);
    var int6 = IF_GETHEIGHT(int1);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    switch (int2) {
        case 0: {
            int7 = 40;
            int8 = 40;
            int9 = 5;
            int10 = 5;
            break;
        }
        case 1: {
            int7 = 200;
            int8 = 50;
            int9 = 5;
            if ((int3 == 1)) {
                int9 = 15;
            };
            int10 = 5;
            break;
        }
        case 2: {
            int7 = 208;
            int8 = 44;
            int9 = ((int6 - (int4 * int8)) / (int4 + 1));
            if ((MODULO(int9, 2) == 1)) {
                int9 = (int9 + 1);
            };
            int10 = 4;
            break;
        }
    };
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    switch (int2) {
        case 0: {
            int12 = MAX(1, ((int5 - int10) / (int7 + int10)));
            int14 = MAX(1, MIN(((int6 - int9) / (int8 + int9)), script5276(int4, int12)));
            int13 = script5276(int4, int14);
            int16 = MODULO(int4, int14);
            break;
        }
        case 1:
        case 2: {
            int11 = MAX(1, ((int6 - int9) / (int8 + int9)));
            int13 = MAX(1, MIN(((int5 - int10) / (int7 + int10)), script5276(int4, int11)));
            int14 = script5276(int4, int13);
            if (((int2 == 1) && ((int11 * int13) < int4))) {
                int15 = 1;
            };
            int16 = MODULO(int4, int13);
            break;
        }
    };
    var int17 = ((int7 * int13) + (int10 * (int13 - 1)));
    var int18 = MIN(int6, ((int8 * int14) + (int9 * (int14 - 1))));
    var int19 = ((int5 - int17) / 2);
    var int20 = -1;
    var int21 = -1 as struct;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = -1 as graphic;
    while ((int24 < int4)) {
        int20 = push_array(int24);
        int21 = enum_getvalue(0, 73, 1467 as cs2enum, int20);
        int22 = MODULO(int24, int13);
        int23 = (int24 / int13);
        if ((int24 >= (int4 - int16))) {
            int17 = ((int7 * int16) + (int10 * (int16 - 1)));
            int19 = (((int5 - 10) - int17) / 2);
        };
        int25 = (((int7 + int10) * int22) + int19);
        if ((int2 != 2)) {
            if ((int15 == 1)) {
                int26 = ((int6 / int14) * int23);
            } else {
                int26 = ((int8 + int9) * int23);
            };
        } else {
            int26 = ((int8 + 15) * int23);
        };
        switch (int2) {
            case 0: {
                script4512(int1, int7, int8, int25, int26, struct_getparam(int21, 3910));
                CC_SETONCLICK(callback(script9061, int20));
                int24 = (int24 + 1);
                break;
            }
            case 1: {
                int24 = script11624(int0, int1, int21, int25, int26, int24, 1);
                if ((CC_FIND(int1, (int24 - 1)) == 1)) {
                    CC_SETONCLICK(callback(script9061, int20));
                };
                break;
            }
            case 2: {
                if ((strcmp(struct_getparam(int21, 8263), "") != 0)) {
                    script10410(int0, comp(-1, 65535), 28557 as struct, int25, int26, int7, int8, -1, false, "");
                    script4512(int0, struct_getparam(int21, 3915), MIN(int8, struct_getparam(int21, 3916)), (int25 + 3), (int26 + 3), struct_getparam(int21, 3910));
                    script6200(int0, (((int7 - 40) - 10) - 10), int8, ((int25 + 40) + 10), int26, 28 as fontmetrics, struct_getparam(int21, 8263), 0);
                    CC_SETTEXTALIGN(1, 1, 14);
                    script152(int1, int7, int8, int25, int26, 26 as fontmetrics, "", 0);
                } else {
                    int27 = struct_getparam(int21, 8299);
                    switch (MAP_LANG()) {
                        case 1: {
                            if ((struct_getparam(int21, 8300) != -1 as graphic)) {
                                int27 = struct_getparam(int21, 8300);
                            };
                            break;
                        }
                        case 2: {
                            if ((struct_getparam(int21, 8301) != -1 as graphic)) {
                                int27 = struct_getparam(int21, 8301);
                            };
                            break;
                        }
                        case 3: {
                            if ((struct_getparam(int21, 8302) != -1 as graphic)) {
                                int27 = struct_getparam(int21, 8302);
                            };
                            break;
                        }
                    };
                    script4512(int1, int7, int8, int25, int26, int27);
                };
                if ((CC_FIND(int1, int24) == 1)) {
                    CC_SETONCLICK(callback(script9061, int20));
                };
                int24 = (int24 + 1);
                break;
            }
        };
    };
    script10410(comp(744, 70), comp(-1, 65535), 28557 as struct, 0, 0, int7, int8, -1, false, "");
    script4512(comp(744, 70), struct_getparam(631 as struct, 3915), MIN(int8, struct_getparam(631 as struct, 3916)), (0 + 3), (0 + 3), struct_getparam(631 as struct, 3910));
    script6200(comp(744, 70), (((int7 - 40) - 10) - 10), int8, ((0 + 40) + 10), 0, 28 as fontmetrics, struct_getparam(631 as struct, 8263), 0);
    CC_SETTEXTALIGN(1, 1, 14);
    script152(comp(744, 71), int7, int8, 0, 0, 26 as fontmetrics, "", 0);
    IF_SETONCLICK(callback(script9061, 7), comp(744, 71));
    return;
}