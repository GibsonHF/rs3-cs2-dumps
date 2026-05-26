//
function script13329(int0: number): void {
    var int1 = enum_getvalue(0, 9, 11065 as cs2enum, (ENUM_GETOUTPUTCOUNT(11065 as cs2enum) - 1));
    var int2 = ((IF_GETY(int1) + IF_GETHEIGHT(int1)) + 3);
    IF_SETSCROLLSIZE(0, int2, IF_GETPARENTLAYER(int1));
    IF_SETSCROLLPOS(0, ((int0 - 1) * 45), IF_GETPARENTLAYER(int1));
    if ((int2 <= 404)) {
        CC_DELETEALL(comp(1851, 8));
        script13578(121307144);
    } else {
        script7791(121307144, 121307145);
    };
    return;
}