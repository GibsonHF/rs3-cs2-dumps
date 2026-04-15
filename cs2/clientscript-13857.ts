//
function script13857(int0: int): int {
    var int1 = enum_getvalue(0, 0, 13321 as cs2enum, int0);
    if ((int1 >= 0)) {
        return int1;
    };
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return -1;
    };
    return struct_getparam(int2, 3534);
}