//
function script8196(int0: component, int1: component): void {
    var int2 = (ENUM_GETOUTPUTCOUNT(10364 as cs2enum) - 1);
    if ((int2 < 0)) {
        return;
    };
    var int3 = enum_getvalue(0, 9, 10364 as cs2enum, int2);
    var int4 = (IF_GETY(int3) + IF_GETHEIGHT(int3));
    if ((IF_GETSCROLLHEIGHT(int1) == int4)) {
        return;
    };
    IF_SETSCROLLSIZE(0, int4, int1);
    script7791(int0, int1);
    return;
}