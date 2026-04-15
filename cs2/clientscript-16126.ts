//
function script16126(int0: int, int1: int): int {
    var int1 = (int1 + 4);
    script10485(int0, 6, 0, int1, 0, 0, 0, 0, 1, 0, 2100 as dbrow, "Wants: <col=ffffff>Loading...</col>");
    var int2 = enum_getvalue(25, 0, 8549 as cs2enum, CC_GETFONTMETRICS());
    CC_SETSIZE(0, int2, 1, 0);
    return (int1 + int2);
}