//
function script4238(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    if ((varclient_1495 != 0)) {
        int3 = MAX(0, (120 - (CLIENTCLOCK() - varclient_1495)));
    };
    if (((int3 >= 60) && (int3 <= 120))) {
        IF_SETHIDE(0, int1);
        IF_SETHIDE(0, int2);
        IF_SET2DANGLE(MIN((int3 * 545), 65353), int2);
        IF_SET2DANGLE(0, int1);
    } else if (((int3 > 0) && (int3 < 60))) {
        IF_SETHIDE(1, int2);
        IF_SETHIDE(0, int1);
        IF_SET2DANGLE(32768, int2);
        IF_SET2DANGLE(MIN((32768 + (int3 * 545)), 65353), int1);
    } else {
        IF_SETHIDE(1, int1);
        IF_SETHIDE(1, int2);
        IF_SET2DANGLE(32768, int2);
        IF_SET2DANGLE(32768, int1);
        if ((varclient_1495 != 0)) {
            varclient_1495 = 0;
        };
    };
    return;
}