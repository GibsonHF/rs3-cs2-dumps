//
function script15976(int0: number, int1: number, int2: number): void {
    var int3 = (int2 - int1);
    var int4 = (CLIENTCLOCK() - int1);
    var int5 = 0;
    var int6 = 48693257;
    var int7 = -1;
    if ((int4 >= int3)) {
        int7 = 14659;
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
        IF_SETFILL(1, int6);
        IF_SETONTIMER(callback(script6299, int6, -1, 1, CLIENTCLOCK()), int6);
    } else {
        int5 = script12377(SCALE(int4, int3, 138), 138, 0);
        int7 = script7988(int5);
    };
    IF_SETGRAPHIC(int7, int0);
    IF_SETONTIMER(callback(script15976, int0, int1, int2), int0);
    return;
}