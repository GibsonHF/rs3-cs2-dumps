//
function script365(int0: int, int1: unknown_int, int2: component): void {
    var int3 = STRINGWIDTH(IF_GETTEXT(comp(1473, 11)), 26 as fontmetrics);
    var int4 = 10;
    if (((int1 == 109182982) || (int2 == comp(517, 20)))) {
        int4 = 0;
    };
    var int5 = 1;
    var int6 = (CLIENTCLOCK() - int0);
    if ((int6 < 25)) {
        int5 = (1 - ((int3 * (25 - int6)) / 25));
    };
    if ((int2 == comp(1920, 13))) {
        IF_SETPOSITION(int5, IF_GETY(int2), 2, 0, int2);
    } else {
        IF_SETPOSITION(int5, int4, 2, 0, int2);
    };
    if ((int6 < 150)) {
        return;
    };
    IF_SETHIDE(true, comp(1474, 13));
    IF_SETHIDE(true, comp(1473, 10));
    IF_SETHIDE(true, comp(1920, 13));
    IF_SETHIDE(true, comp(1666, 1));
    IF_SETHIDE(true, comp(517, 20));
    IF_SETONTIMER(callback(), comp(1474, 13));
    IF_SETONTIMER(callback(), 96534538);
    IF_SETONTIMER(callback(), 125829133);
    IF_SETONTIMER(callback(), 109182977);
    IF_SETONTIMER(callback(), 33882132);
    return;
}