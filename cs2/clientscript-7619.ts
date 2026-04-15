//
function script7619(int0: component, int1: component, int2: int): void {
    var int3 = (CLIENTCLOCK() - int2);
    var int4 = 0;
    if ((int3 < 75)) {
        int4 = SCALE(int3, 75, 255);
        IF_SETCOLOUR(script693(255, int4, int4), int1);
    } else if ((int3 < 150)) {
        int4 = SCALE((150 - int3), 75, 255);
        IF_SETCOLOUR(script693(255, int4, int4), int1);
    } else {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
    };
    return;
}