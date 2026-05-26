//
function script10492(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(12984 as cs2enum);
    var int2 = 0;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 0, 12984 as cs2enum, int0);
        if ((script12344(int2, 0) == 1)) {
            script12431(int2);
        };
        int0 = (int0 + 1);
    };
    return;
}