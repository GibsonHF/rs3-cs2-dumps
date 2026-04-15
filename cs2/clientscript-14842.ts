//
function script14842(int0: cs2enum): void {
    CC_DELETEALL(comp(685, 24));
    CC_DELETEALL(comp(685, 25));
    script14814(comp(685, 23), IF_GETSCROLLHEIGHT(comp(685, 23)), -1, comp(685, 256), comp(685, 257));
    IF_SETSCROLLPOS(0, 0, comp(685, 23));
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
    var int5 = IF_GETHEIGHT(comp(685, 23));
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
                int3 = (IF_GETWIDTH(comp(685, 24)) - 326);
                int4 = (int4 - ((180 + 20) * 2));
            };
        };
        script14843(comp(685, 24), 44892185, int1, int3, int4, 326, 180, IF_GETNEXTSUBID(comp(685, 25)));
        int4 = (int4 + (180 + 20));
    };
    IF_SETSCROLLSIZE(0, int6, comp(685, 23));
    if ((int6 > int5)) {
        IF_SETHIDE(false, comp(685, 89));
        script14812(44892183, int5, 44892414, 44892416, 44892415, 44892417);
    } else {
        IF_SETHIDE(true, comp(685, 89));
    };
    return;
}