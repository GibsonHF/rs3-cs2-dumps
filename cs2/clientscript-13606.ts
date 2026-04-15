//
function script13606(int0: unknown_int, int1: int, int2: int): void {
    CC_DELETEALL(comp(1896, 3));
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(13036 as cs2enum);
    var int5 = 0;
    while ((int3 < int4)) {
        int5 = (2 + ((45 + 2) * int3));
        if ((((int0 == 0) && (int2 > 0)) && (int3 > int1))) {
            int5 = (int5 + (2 + (int2 * (32 + 2))));
        };
        IF_SETPOSITION(0, int5, 1, 0, enum_getvalue(0, 9, 13036 as cs2enum, int3));
        int3 = (int3 + 1);
    };
    var int6 = enum_getvalue(0, 9, 13036 as cs2enum, (int4 - 1));
    var int7 = ((IF_GETY(int6) + IF_GETHEIGHT(int6)) + 3);
    IF_SETSCROLLSIZE(0, int7, IF_GETPARENTLAYER(int6));
    IF_SETSCROLLPOS(0, (int1 * 45), IF_GETPARENTLAYER(int6));
    if ((int7 <= IF_GETHEIGHT(IF_GETPARENTLAYER(int6)))) {
        script13578(comp(1896, 3));
    } else {
        script7791(comp(1896, 3), IF_GETPARENTLAYER(int6));
    };
    return;
}