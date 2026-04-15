//
function script13744(int0: cs2enum): void {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = 1;
    var int3 = false;
    var int4 = IF_GETWIDTH(comp(1914, 1));
    var int5 = ((int4 - 20) / 2);
    var int6 = 10;
    var string0 = "null";
    var int7 = 20;
    if ((script6431() == true)) {
        int7 = 30;
    };
    while ((int2 <= int1)) {
        string0 = enum_getvalue(0, 36, int0, int2);
        script12501(comp(1914, 1), comp(1914, 0), 28556 as struct, (8 + ((int4 / 2) * MODULO((int2 - 1), 2))), int6, int5, int7, (int2 - 1), int3, string0);
        if ((MODULO(int2, 2) == 0)) {
            int6 = (int6 + (int7 + 3));
        };
        int2 = (int2 + 1);
    };
    int6 = (int6 + (int7 + 3));
    if ((IF_GETHEIGHT(comp(1914, 5)) < int6)) {
        IF_SETSCROLLSIZE(0, int6, comp(1914, 5));
        script7791(comp(1914, 6), comp(1914, 5));
    };
    return;
}