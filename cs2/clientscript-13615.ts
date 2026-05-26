//
function script13615(int0: number, int1: number): void {
    var int2 = (int0 * (60 + 2));
    if ((varbitplayer_37059 == 1)) {
        int2 = (int0 * (35 + 2));
    };
    if ((int2 < IF_GETHEIGHT(121307176))) {
        int2 = IF_GETHEIGHT(121307176);
    };
    IF_SETSCROLLSIZE(0, int2, 121307176);
    if ((int1 == 1)) {
        IF_SETSCROLLPOS(0, 0, 121307176);
    } else if ((int1 == 2)) {
        IF_SETSCROLLPOS(0, varclient_5992, 121307176);
    };
    script7791(121307175, 121307176);
    return;
}