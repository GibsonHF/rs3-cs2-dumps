//
function script6487(): void {
    if ((IF_GETNEXTSUBID(comp(1475, 2)) > 0)) {
        script20516();
        return;
    };
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(9825 as cs2enum);
    var int2 = -1 as cs2enum;
    var string0 = "";
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 26, 9825 as cs2enum, int0);
        string0 = enum_getvalue(0, 36, 9824 as cs2enum, int0);
        script7852(comp(1475, 0), int0, 0, 0, 0, 0, 0, 24, 1, 0, 13572 as dbrow, string0);
        CC_SETONOP(callback(script20513, -2147483643));
        CC_SETONSCROLLWHEEL(callback(script36, 96665622, 96665604, -2147483646));
        script20515(int2);
        int0 = (int0 + 1);
    };
    script20514(-1);
    return;
}