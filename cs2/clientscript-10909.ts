//
function script10909(int0: number, int1: number): void {
    var int2 = (int1 - int0);
    var int3 = (CLIENTCLOCK() - int0);
    var int4 = MIN(100, SCALE(int3, int2, 100));
    if ((int4 < 10)) {
        IF_SETTEXTFONT(26, 103481367);
        IF_SETTEXTFONT(26, 103481386);
        IF_SETTEXTFONT(26, 103481394);
        IF_SETTEXTFONT(26, 103481402);
        IF_SETTEXTFONT(26, 103481410);
    };
    var int5 = SCALE(320, 100, int4);
    var int6 = IF_GETWIDTH(103481370);
    if ((int6 < int5)) {
        IF_SETSIZE((int6 + 1), 5, 0, 0, 103481370);
    };
    if ((int4 == 100)) {
        IF_SETONTIMER(callback(), 103481356);
    };
    return;
}