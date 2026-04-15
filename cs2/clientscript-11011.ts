//
function script11011(int0: int, int1: int, int2: int): struct {
    if (((int2 == -1) || (int2 == 1023))) {
        return -1 as struct;
    };
    var int3 = enum_getvalue(0, 26, 5958 as cs2enum, int0);
    if ((int3 == -1 as cs2enum)) {
        return -1 as struct;
    };
    var int4 = -1 as struct;
    int4 = enum_getvalue(0, 73, int3, int2);
    return int4;
}