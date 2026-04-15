//
function script13615(int0: int, int1: unknown_int): void {
    var int2 = (int0 * (60 + 2));
    if ((varbitplayer_37059 == 1)) {
        int2 = (int0 * (35 + 2));
    };
    if ((int2 < IF_GETHEIGHT(comp(1851, 40)))) {
        int2 = IF_GETHEIGHT(comp(1851, 40));
    };
    IF_SETSCROLLSIZE(0, int2, comp(1851, 40));
    if ((int1 == 1)) {
        IF_SETSCROLLPOS(0, 0, comp(1851, 40));
    } else if ((int1 == 2)) {
        IF_SETSCROLLPOS(0, varclient_5992, comp(1851, 40));
    };
    script7791(comp(1851, 39), comp(1851, 40));
    return;
}