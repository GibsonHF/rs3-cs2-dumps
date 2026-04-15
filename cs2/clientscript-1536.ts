//
function script1536(int0: int): void {
    var int1 = (65 - SCALE(((int0 + 300) - CLIENTCLOCK()), 300, 50));
    var int2 = 255;
    var int3 = SCALE(220, 50, int1);
    var int4 = SCALE(180, 50, int1);
    if ((int1 < 65)) {
        IF_SETSIZE(int1, IF_GETHEIGHT(comp(18, 17)), 0, 0, comp(18, 17));
        IF_SETCOLOUR(script693(int2, int3, int4), comp(18, 0));
    } else {
        IF_SETHIDE(false, comp(18, 4));
        IF_SETONTIMER(callback(), comp(18, 16));
    };
    return;
}