//
function script2667(): void {
    var int0 = enum_getvalue(0, 9, 2565 as cs2enum, varbitplayer_11159);
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if (((IF_GETX(int0) >= 17) && (IF_GETX(int0) <= 57))) {
        script11106(37, IF_GETY(int0), int0);
    } else {
        IF_SETPOSITION(IF_GETX(int0), IF_GETY(int0), 0, 0, int0);
    };
    return;
}