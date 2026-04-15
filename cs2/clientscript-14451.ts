//
function script14451(int0: cs2enum): int {
    if ((int0 == -1 as cs2enum)) {
        return 0;
    };
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1;
    while ((++int2 < int1)) {
        if ((script14449(enum_getvalue(0, 0, int0, int2)) == 0)) {
            return 1;
        };
    };
    return 0;
}