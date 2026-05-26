//
function script14842(int0: number): void {
    CC_DELETEALL(44892184);
    CC_DELETEALL(44892185);
    script14814(44892183, IF_GETSCROLLHEIGHT(44892183), -1, 44892416, 44892417);
    IF_SETSCROLLPOS(0, 0, 44892183);
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = -1 as dbrow;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    var int4 = 55;
    if ((IF_GETHEIGHT(44892160) >= 550)) {
        int4 = 75;
    };
    var int5 = IF_GETHEIGHT(44892183);
    var int6 = int5;
    var int7 = -1;
    while ((++int7 < int2)) {
        int1 = enum_getvalue(0, 74, int0, int7);
        if (((int7 > 0) && (MODULO(int7, 2) == 0))) {
            if ((MODULO(int7, (2 * 2)) == 0)) {
                int3 = 0;
                int4 = ((int4 - ((180 + 20) * 2)) + int5);
                int6 = (int6 + int5);
            } else {
                int3 = (IF_GETWIDTH(44892184) - 326);
                int4 = (int4 - ((180 + 20) * 2));
            };
        };
        script14843(44892184, 44892185, int1, int3, int4, 326, 180, IF_GETNEXTSUBID(44892185));
        int4 = (int4 + (180 + 20));
    };
    IF_SETSCROLLSIZE(0, int6, 44892183);
    if ((int6 > int5)) {
        IF_SETHIDE(0, 44892249);
        script14812(44892183, int5, 44892414, 44892416, 44892415, 44892417);
    } else {
        IF_SETHIDE(1, 44892249);
    };
    return;
}