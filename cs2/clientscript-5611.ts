//
function script5611(int0: int, int1: component): void {
    var int0 = MIN(100, int0);
    int0 = MAX(0, int0);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = ((int0 * 16384) / 100);
    IF_SETSIZE(int2, IF_GETHEIGHT(int1), 2, 0, int1);
    return;
}