//
function script2357(int0: component): void {
    IF_SENDTOFRONT(int0);
    if ((varplayer_2644 == comp(-1, 65535))) {
        return;
    };
    var int1 = enum_getvalue(9, 9, 1592 as cs2enum, varplayer_2644);
    var int2 = IF_GETX(int0);
    var int3 = IF_GETY(int0);
    if ((int0 == comp(1053, 92))) {
        int2 = ((int2 + (IF_GETWIDTH(int0) / 2)) - (IF_GETWIDTH(int1) / 2));
        int3 = ((int3 + (IF_GETHEIGHT(int0) / 2)) - (IF_GETHEIGHT(int1) / 2));
    };
    IF_SETPOSITION(int2, int3, 0, 0, int1);
    return;
}