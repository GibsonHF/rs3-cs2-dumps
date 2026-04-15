//
function script11012(int0: int, int1: int, int2: int): int {
    if (((int2 == -1) || (int2 == 1023))) {
        return -1;
    };
    var int2 = (int2 + 1);
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = enum_getvalue(0, 26, 5958 as cs2enum, int0);
    if ((int6 == -1 as cs2enum)) {
        return -1;
    };
    var int7 = ENUM_GETOUTPUTCOUNT(int6);
    if ((int7 == 0)) {
        return -1;
    };
    define_array(int7);
    var int8 = -1 as struct;
    while ((int3 < int7)) {
        int8 = enum_getvalue(0, 73, int6, int3);
        if (((((varbitplayer_678 == 1) && (script13100(int8, 0) == 1)) || (script6488(int8) == 1)) || (((MAP_MEMBERS() == 0) && (struct_getparam(int8, 2546) == 2)) && (script6214(int8) == 1)))) {
            pop_array(int4, int3);
            int4 = (int4 + 1);
        } else {
            int5 = (int5 + 1);
        };
        int3 = (int3 + 1);
    };
    int7 = (int7 - int5);
    var int9 = 0;
    var int10 = 0;
    int3 = 0;
    while ((int3 < int7)) {
        int10 = push_array(int3);
        int8 = enum_getvalue(0, 73, int6, int10);
        if ((struct_getparam(int8, 2532) == int1)) {
            int9 = (int9 + 1);
        };
        if ((int9 == int2)) {
            return int10;
        };
        int3 = (int3 + 1);
    };
    return -2;
}