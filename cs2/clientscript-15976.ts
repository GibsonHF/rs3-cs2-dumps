//
function script15976(int0: component, int1: int, int2: int): void {
    var int3 = (int2 - int1);
    var int4 = (CLIENTCLOCK() - int1);
    var int5 = 0;
    var int6 = 48693257;
    var int7 = -1 as graphic;
    if ((int4 >= int3)) {
        int7 = 14659 as graphic;
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
        IF_SETFILL(1, int6);
        IF_SETONTIMER(callback(script6299, int6, -1, 1, CLIENTCLOCK()), int6);
    } else {
        int5 = script12377(SCALE(int4, int3, 138), 138, 0);
        int7 = script7988(int5);
    };
    stack(int7);
    stack(int0);
    IF_SETGRAPHIC();
    IF_SETONTIMER(callback(script15976, int0, int1, int2), int0);
    return;
}