//
function script11225(int0: unknown_int, int1: int): int {
    var int2 = -1 as struct;
    var int3 = 0;
    var int4 = 0;
    var int5 = int1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    while ((int3 <= int1)) {
        int4 = 0;
        int8 = enum_getvalue(0, 0, 9909 as cs2enum, int3);
        int2 = enum_getvalue(0, 73, 9908 as cs2enum, int8);
        int4 = script11226(int2, int0);
        if ((int4 == 0)) {
            int7 = (int7 + 1);
        };
        int3 = (int3 + 1);
    };
    return int7;
}