//
function script17101(int0: int, int1: int, int2: int, int3: int, int4: int, int5: cs2enum, int6: cs2enum, int7: cs2enum): int {
    var int8 = int3;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as obj;
    var int13 = 0;
    if ((int5 != -1 as cs2enum)) {
        int10 = ENUM_GETOUTPUTCOUNT(int5);
        while ((int9 < int10)) {
            if (((int8 + int4) >= int2)) {
                int8 = int3;
                var int1 = (int1 + (int4 + 5));
            };
            script8023(comp(1626, 74), int0, int11, int8, int1, 0, 0, int4, int4, 0, 0, enum_getvalue(0, 23, int5, int9));
            if ((int6 != -1 as cs2enum)) {
                script14990(0, enum_getvalue(0, 36, int6, int9));
            };
            int8 = (int8 + (int4 + 5));
            int11 = (int11 + 1);
            int9 = (int9 + 1);
        };
    };
    if ((int7 != -1 as cs2enum)) {
        int9 = 0;
        int10 = ENUM_GETOUTPUTCOUNT(int7);
        int13 = SCALE(int4, 36, 32);
        while ((int9 < int10)) {
            if (((int8 + int4) >= int2)) {
                int8 = int3;
                int1 = (int1 + (int4 + 5));
            };
            int12 = enum_getvalue(0, 33, int7, int9);
            script15943(comp(1626, 74), int0, int11, int8, int1, 0, 0, int4, int13, 0, 0, int12, 1);
            script14738(int12);
            int8 = (int8 + (int4 + 5));
            int11 = (int11 + 1);
            int9 = (int9 + 1);
        };
    };
    if ((int8 != int3)) {
        int1 = (int1 + (int4 + 5));
    };
    return int1;
}