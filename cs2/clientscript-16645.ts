//
function script16645(int0: component): void {
    script7925(int0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 60, 60, 10);
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETHEIGHT(int0);
    var int3 = -1;
    var int4 = -1;
    int3 = ((int1 - 10) / (60 + 10));
    var int5 = 912 as cs2enum;
    var int6 = ENUM_GETOUTPUTCOUNT(int5);
    int4 = (int6 / int3);
    if ((MODULO(int6, int3) != 0)) {
        int4 = (int4 + 1);
    };
    var int7 = (10 + (int4 * (60 + 10)));
    IF_SETSCROLLSIZE(0, int7, int0);
    var int8 = 0;
    while ((int8++ < int6)) {
        script16646(int0, int8, int5);
    };
    script7791(comp(597, 4), int0);
    return;
}