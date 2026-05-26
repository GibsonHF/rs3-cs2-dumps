//
function script14825(int0: number): void {
    CC_DELETEALL(44892178);
    CC_DELETEALL(44892179);
    script14814(44892177, IF_GETSCROLLHEIGHT(44892177), -1, 44892227, 44892228);
    IF_SETSCROLLPOS(0, 0, 44892177);
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
    var int5 = IF_GETHEIGHT(44892177);
    var int6 = int5;
    var int7 = -1;
    while ((++int7 < int2)) {
        int1 = enum_getvalue(0, 74, int0, int7);
        if (((int7 > 0) && (MODULO(int7, 5) == 0))) {
            if ((MODULO(int7, (2 * 5)) == 0)) {
                int3 = 0;
                int4 = ((int4 - ((70 + 5) * 5)) + int5);
                int6 = (int6 + int5);
            } else {
                int3 = (IF_GETWIDTH(44892178) - 326);
                int4 = (int4 - ((70 + 5) * 5));
            };
        };
        script14826(44892178, 44892179, int1, int3, int4, 326, 70, IF_GETNEXTSUBID(44892179));
        int4 = (int4 + (70 + 5));
    };
    IF_SETSCROLLSIZE(0, int6, 44892177);
    if ((int6 > int5)) {
        IF_SETHIDE(0, 44892224);
        script14812(44892177, int5, 44892225, 44892227, 44892226, 44892228);
    } else {
        IF_SETHIDE(1, 44892224);
    };
    return;
}