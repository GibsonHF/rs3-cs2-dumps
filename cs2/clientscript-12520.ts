//
function script12520(int0: int): int {
    if ((int0 < 1)) {
        return 0;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(enum_getvalue(0, 26, 10383 as cs2enum, int0));
    while ((int2 < int3)) {
        int1 = (int1 + script5929(int0, int2));
        int2 = (int2 + 1);
    };
    if ((int1 == int3)) {
        return 1;
    };
    return 0;
}