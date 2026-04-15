//
function script7214(int0: struct, int1: quest, int2: achievement): coordgrid {
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as cs2enum;
    var int8 = -1 as coordgrid;
    if ((int1 != -1 as quest)) {
        int8 = script2110(int1);
    } else if ((int0 != -1 as struct)) {
        switch (script7663(int0, int1, int2)) {
            case 8: {
                int8 = script7797(struct_getparam(int0, 1378));
                break;
            }
            case 7: {
                int8 = script7156(varbitplayer_9072);
                break;
            }
            case 3: {
                [int3, int4] = script6301(int0, 0, -1);
                if ((int4 != -1 as struct)) {
                    int8 = script7214(int4, -1 as quest, -1 as achievement);
                };
                if ((int8 == -1 as coordgrid)) {
                    int5 = 0;
                    int6 = ENUM_GETOUTPUTCOUNT(15492 as cs2enum);
                    while ((int5 < int6)) {
                        int7 = enum_getvalue(0, 26, 15492 as cs2enum, int5);
                        if ((enum_hasoutput(73, int7, int0) == 1)) {
                            int8 = enum_getvalue(0, 22, 6169 as cs2enum, int5);
                            int5 = int6;
                        };
                        int5 = (int5 + 1);
                    };
                };
                break;
            }
        };
        if ((int8 == -1 as coordgrid)) {
            int8 = struct_getparam(int0, 2700);
            if (((int8 == pos(0,51,55,8,6)) && (script13702(28) == 0))) {
                int8 = pos(0,50,52,56,49);
            };
        };
    };
    return int8;
}