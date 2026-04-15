//
function script13434(int0: int): int {
    var int1 = struct_getparam(script13433(int0), 6583);
    if ((int1 != -1 as cs2enum)) {
        return enum_getvalue(0, 0, int1, (ENUM_GETOUTPUTCOUNT(int1) - 1));
    };
    return -1;
}