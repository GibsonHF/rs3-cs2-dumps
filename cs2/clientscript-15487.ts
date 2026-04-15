//
function script15487(int0: int): struct {
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = -1 as cs2enum;
    var int4 = ENUM_GETOUTPUTCOUNT(9410 as cs2enum);
    while ((int1 < int4)) {
        int2 = enum_getvalue(0, 73, 9410 as cs2enum, int1);
        int3 = struct_getparam(int2, 3839);
        if (((int3 != -1 as cs2enum) && (enum_getreversecount(0, int3, int0) > 0))) {
            return int2;
        };
        if ((((int3 == -1 as cs2enum) && (DATE_RUNEDAY() >= struct_getparam(int2, 4630))) && (DATE_RUNEDAY() <= struct_getparam(int2, 4631)))) {
            return int2;
        };
        int1 = (int1 + 1);
    };
    return -1 as struct;
}