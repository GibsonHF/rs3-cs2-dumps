//
function script8392(int0: int): void {
    var int1 = -1 as struct;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    int1 = script10405(int0);
    int3 = struct_getparam(int1, 3513);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    int2 = struct_getparam(int1, 3505);
    if ((int2 == comp(-1, 65535))) {
        int2 = struct_getparam(int1, 3504);
        if ((int2 == comp(-1, 65535))) {
            return;
        };
    };
    IF_SETPOSITION(IF_GETX(int2), IF_GETY(int2), 0, 0, int3);
    IF_SETSIZE(IF_GETWIDTH(int2), IF_GETHEIGHT(int2), 0, 0, int3);
    if (((CC_FIND[1](int3, 2) == 1) && (CC_FIND(int3, 1) == 1))) {
        CC_SETPOSITION[1](0, (CC_GETY() + (PARAHEIGHT(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS()) * 15)), 1, 0);
    };
    return;
}