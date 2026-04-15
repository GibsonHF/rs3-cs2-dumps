//
function script16137(int0: int): int {
    script10485(int0, 10, 0, 0, 0, 0, 0, 0, 1, 0, 2100 as dbrow, "Advertise for:");
    CC_SETTEXTALIGN(0, 1, 0);
    var int1 = enum_getvalue(25, 0, 8549 as cs2enum, CC_GETFONTMETRICS());
    CC_SETSIZE(0, int1, 1, 0);
    return int1;
}