//
function script5611(int0: number, int1: number): void {
    var int0 = MIN(100, int0);
    int0 = MAX(0, int0);
    if ((int1 == -1)) {
        return;
    };
    var int2 = ((int0 * 16384) / 100);
    IF_SETSIZE(int2, IF_GETHEIGHT(int1), 2, 0, int1);
    return;
}