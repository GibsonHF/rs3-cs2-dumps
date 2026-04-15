//
function script19618(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: cs2enum, int8: cs2enum, int9: cs2enum): [int, int] {
    var int10 = int4;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as obj;
    var int14 = 0;
    if ((int7 != -1 as cs2enum)) {
        int12 = ENUM_GETOUTPUTCOUNT(int7);
        while ((int11 < int12)) {
            if (((int10 + int5) >= int3)) {
                int10 = int4;
                var int2 = (int2 + (int6 + 4));
            };
            script7918(int0, int1++, int10, int2, 0, 0, int5, int6, 0, 0, enum_getvalue(0, 23, int7, int11));
            if ((int8 != -1 as cs2enum)) {
                script14990(0, enum_getvalue(0, 36, int8, int11));
            };
            int10 = (int10 + (int5 + 4));
            int11 = (int11 + 1);
        };
    };
    if ((int9 != -1 as cs2enum)) {
        int11 = 0;
        int12 = ENUM_GETOUTPUTCOUNT(int9);
        int14 = SCALE(int6, 32, 36);
        while ((int11 < int12)) {
            if (((int10 + int14) >= int3)) {
                int10 = int4;
                int2 = (int2 + (int6 + 4));
            };
            int13 = enum_getvalue(0, 33, int9, int11);
            script17950(int0, int1++, int10, int2, 0, 0, int14, int6, 0, 0, int13, 1);
            script14738(int13);
            int10 = (int10 + (int14 + 4));
            int11 = (int11 + 1);
        };
    };
    if ((int10 != int4)) {
        int2 = (int2 + (int6 + 4));
    };
    return [int1, int2];
}