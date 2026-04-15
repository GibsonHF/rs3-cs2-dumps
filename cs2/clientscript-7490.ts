//
function script7490(int0: int, int1: int): int {
    var int2 = 5960 as cs2enum;
    var int3 = enum_getvalue(0, 9, int2, int0);
    if ((int3 == comp(-1, 65535))) {
        return int1;
    };
    if ((IF_GETNEXTSUBID(int3) > 0)) {
        IF_SETPOSITION(0, int1, 0, 0, int3);
        var int1 = (int1 + IF_GETHEIGHT(int3));
    };
    return int1;
}