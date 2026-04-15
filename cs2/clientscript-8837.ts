//
function script8837(int0: cs2enum, int1: unknown_int): void {
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int2 = -1;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int0);
    while ((int3 < int4)) {
        int2 = enum_getvalue(0, 0, int0, int3);
        script8843(int2, int1);
        int3 = (int3 + 1);
    };
    return;
}