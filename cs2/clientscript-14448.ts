//
function script14448(int0: cs2enum): int {
    if ((int0 == -1 as cs2enum)) {
        return 0;
    };
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = 0;
    while ((int2 < int1)) {
        if ((script14447(enum_getvalue(0, 0, int0, int2)) == 0)) {
            return 1;
        };
        int2 = (int2 + 1);
    };
    return 0;
}