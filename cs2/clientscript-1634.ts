//
function script1634(int0: cs2enum, int1: int): int {
    if ((int0 == -1 as cs2enum)) {
        return -1;
    };
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    while ((int2 < int3)) {
        if ((enum_getvalue(0, 0, int0, int2) == int1)) {
            return script10272((int2 + 1));
        };
        int2 = (int2 + 1);
    };
    return -1;
}