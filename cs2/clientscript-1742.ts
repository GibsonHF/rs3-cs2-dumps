//
function script1742(int0: cs2enum, int1: int, int2: int, int3: int): int {
    if ((enum_getvalue(0, 0, int0, int3) <= int1)) {
        return int3;
    };
    if ((int1 < enum_getvalue(0, 0, int0, int2))) {
        return (int2 - 1);
    };
    if ((enum_getreversecount(0, int0, int1) > 0)) {
        return enum_getreverseindex(0, 0, int0, int1, 0);
    };
    var int4 = -1;
    while ((int2 < int3)) {
        int4 = ((int2 + int3) / 2);
        if ((enum_getvalue(0, 0, int0, int4) < int1)) {
            var int2 = (int4 + 1);
        } else {
            var int3 = int4;
        };
    };
    return (int2 - 1);
}