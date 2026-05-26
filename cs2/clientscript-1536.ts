//
function script1536(int0: number): void {
    var int1 = (65 - SCALE(((int0 + 300) - CLIENTCLOCK()), 300, 50));
    var int2 = 255;
    var int3 = SCALE(220, 50, int1);
    var int4 = SCALE(180, 50, int1);
    if ((int1 < 65)) {
        IF_SETSIZE(int1, IF_GETHEIGHT(1179665), 0, 0, 1179665);
        IF_SETCOLOUR(script693(int2, int3, int4), 1179648);
    } else {
        IF_SETHIDE(0, 1179652);
        IF_SETONTIMER(callback(), 1179664);
    };
    return;
}