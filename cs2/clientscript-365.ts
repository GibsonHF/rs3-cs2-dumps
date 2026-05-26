//
function script365(int0: number, int1: number, int2: number): void {
    var int3 = STRINGWIDTH(IF_GETTEXT(96534539), 26);
    var int4 = 10;
    if (((int1 == 109182982) || (int2 == 33882132))) {
        int4 = 0;
    };
    var int5 = 1;
    var int6 = (CLIENTCLOCK() - int0);
    if ((int6 < 25)) {
        int5 = (1 - ((int3 * (25 - int6)) / 25));
    };
    if ((int2 == 125829133)) {
        IF_SETPOSITION(int5, IF_GETY(int2), 2, 0, int2);
    } else {
        IF_SETPOSITION(int5, int4, 2, 0, int2);
    };
    if ((int6 < 150)) {
        return;
    };
    IF_SETHIDE(1, 96600077);
    IF_SETHIDE(1, 96534538);
    IF_SETHIDE(1, 125829133);
    IF_SETHIDE(1, 109182977);
    IF_SETHIDE(1, 33882132);
    IF_SETONTIMER(callback(), 96600077);
    IF_SETONTIMER(callback(), 96534538);
    IF_SETONTIMER(callback(), 125829133);
    IF_SETONTIMER(callback(), 109182977);
    IF_SETONTIMER(callback(), 33882132);
    return;
}