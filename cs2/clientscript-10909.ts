//
function script10909(int0: int, int1: int): void {
    var int2 = (int1 - int0);
    var int3 = (CLIENTCLOCK() - int0);
    var int4 = MIN(100, SCALE(int3, int2, 100));
    if ((int4 < 10)) {
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 23));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 42));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 50));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 58));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 66));
    };
    var int5 = SCALE(320, 100, int4);
    var int6 = IF_GETWIDTH(comp(1579, 26));
    if ((int6 < int5)) {
        IF_SETSIZE((int6 + 1), 5, 0, 0, comp(1579, 26));
    };
    if ((int4 == 100)) {
        IF_SETONTIMER(callback(), comp(1579, 12));
    };
    return;
}