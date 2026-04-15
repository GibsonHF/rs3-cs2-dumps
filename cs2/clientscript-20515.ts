//
function script20515(int0: cs2enum): void {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    var int4 = IF_GETWIDTH(comp(1475, 4));
    var int5 = (int4 - 22);
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as struct;
    var string0 = "";
    var int9 = 0;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 0, int0, int1);
        int8 = script10405(int3);
        if ((int8 != -1 as struct)) {
            int7 = 1;
            switch (int3) {
                case 1027: {
                    if ((STAFFMODLEVEL() < 2)) {
                        int7 = 0;
                    };
                    break;
                }
                case 2008: {
                    if ((varbitplayer_22332 == 0)) {
                        int7 = 0;
                    };
                    break;
                }
                case 1019: {
                    if ((varbitplayer_20187 == 0)) {
                        int7 = 0;
                    };
                    break;
                }
                case 1042:
                case 1043:
                case 1044:
                case 1048: {
                    int7 = 0;
                    break;
                }
                case 1015: {
                    int7 = 0;
                    break;
                }
                case 1025: {
                    int7 = 0;
                    break;
                }
                case 1016: {
                    int7 = 0;
                    break;
                }
            };
            if ((int7 == 1)) {
                int6 = enum_getvalue(0, 0, 13938 as cs2enum, int3);
                if ((((int6 == 0) && (struct_getparam(int8, 3533) == false)) && (IF_GETHIDE(struct_getparam(int8, 3503)) == false))) {
                    int6 = 1;
                };
                string0 = struct_getparam(int8, 3493);
                int9 = MAX(24, script15891(string0, int5, 26 as fontmetrics, 0));
                script7876(comp(1475, 3), int3, 0, 0, 2, 0, 10, int9, 1, 0, 2550 as dbrow, string0, true, 1, script734(int6));
                cc_setparam(7194, int6);
                cc_setparam(7195, int3);
                CC_SETOP(1, "Toggle");
                CC_SETONOP(callback(script6591, -2147483643));
                CC_SETONSCROLLWHEEL(callback(script36, 96665622, 96665604, -2147483646));
                CC_SETHIDE(1);
                if ((int6 == 1)) {
                    script8393(int3, int6);
                };
            };
        };
        int1 = (int1 + 1);
    };
    return;
}