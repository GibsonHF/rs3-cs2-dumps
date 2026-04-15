//
function script14825(int0: cs2enum): void {
    CC_DELETEALL(comp(685, 18));
    CC_DELETEALL(comp(685, 19));
    script14814(comp(685, 17), IF_GETSCROLLHEIGHT(comp(685, 17)), -1, comp(685, 67), comp(685, 68));
    IF_SETSCROLLPOS(0, 0, comp(685, 17));
    if ((int0 == -1 as cs2enum)) {
        return;
    };
    var int1 = -1 as dbrow;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    var int4 = 55;
    if ((IF_GETHEIGHT(comp(685, 0)) >= 550)) {
        int4 = 75;
    };
    var int5 = IF_GETHEIGHT(comp(685, 17));
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
                int3 = (IF_GETWIDTH(comp(685, 18)) - 326);
                int4 = (int4 - ((70 + 5) * 5));
            };
        };
        script14826(comp(685, 18), comp(685, 19), int1, int3, int4, 326, 70, IF_GETNEXTSUBID(comp(685, 19)));
        int4 = (int4 + (70 + 5));
    };
    IF_SETSCROLLSIZE(0, int6, comp(685, 17));
    if ((int6 > int5)) {
        IF_SETHIDE(false, comp(685, 64));
        script14812(44892177, int5, 44892225, 44892227, 44892226, 44892228);
    } else {
        IF_SETHIDE(true, comp(685, 64));
    };
    return;
}