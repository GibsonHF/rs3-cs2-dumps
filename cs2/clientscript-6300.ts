//
function script6300(int0: unknown_int): [int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = enum_getvalue(0, 26, 15492 as cs2enum, varplayer_8729);
    var int4 = -1 as cs2enum;
    var int5 = -1 as struct;
    if ((varplayer_7123 > 0)) {
        int5 = enum_getvalue(0, 73, int3, varplayer_7123);
        if ((int5 != -1 as struct)) {
            int4 = struct_getparam(int5, 8072);
            if (((int4 != -1 as cs2enum) && (enum_hasoutput(73, int4, int0) == 1))) {
                int1 = varplayer_8729;
                int2 = varplayer_7123;
            };
        };
    };
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(int3);
    while (((int6 < int7) && (int2 == 0))) {
        int5 = enum_getvalue(0, 73, int3, int6);
        if ((int5 != -1 as struct)) {
            int4 = struct_getparam(int5, 8072);
            if (((int4 != -1 as cs2enum) && (enum_hasoutput(73, int4, int0) == 1))) {
                int1 = varplayer_8729;
                int2 = int6;
            };
        };
        int6 = (int6 + 1);
    };
    var int8 = 0;
    var int9 = ENUM_GETOUTPUTCOUNT(15492 as cs2enum);
    while (((int8 < int9) && (int2 == 0))) {
        if ((int8 != varplayer_8729)) {
            int3 = enum_getvalue(0, 26, 15492 as cs2enum, int8);
            int6 = 0;
            int7 = ENUM_GETOUTPUTCOUNT(int3);
            while (((int6 < int7) && (int2 == 0))) {
                int5 = enum_getvalue(0, 73, int3, int6);
                if ((int5 != -1 as struct)) {
                    int4 = struct_getparam(int5, 8072);
                    if (((int4 != -1 as cs2enum) && (enum_hasoutput(73, int4, int0) == 1))) {
                        int1 = int8;
                        int2 = int6;
                    };
                };
                int6 = (int6 + 1);
            };
        };
        int8 = (int8 + 1);
    };
    if (((int1 < 0) || (int2 <= 0))) {
        return [-1, -1];
    };
    return [int1, int2];
}