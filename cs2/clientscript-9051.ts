//
function script9051(int0: int): obj {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(14100 as cs2enum);
    var int3 = -1 as cs2enum;
    var int4 = 0;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 26, 14100 as cs2enum, int1);
        int4 = ENUM_GETOUTPUTCOUNT(int3);
        if ((int0 < int4)) {
            return enum_getvalue(0, 33, int3, int0);
        };
        var int0 = (int0 - int4);
        int1 = (int1 + 1);
    };
    return -1 as obj;
}