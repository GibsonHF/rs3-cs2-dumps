//
function script1654(int0: number): void {
    var int1 = IF_GETWIDTH(82116729);
    var int2 = IF_GETX(82116729);
    var int3 = IF_GETX(82116727);
    var int4 = IF_GETX(82116725);
    var int5 = 0;
    var int6 = 0;
    var int7 = (int0 / ABS(int0));
    var int8 = -1;
    if ((int0 < 0)) {
        int5 = MIN(int2, MIN(int3, int4));
    } else {
        int5 = MAX(int2, MAX(int3, int4));
    };
    if ((int2 == (int1 - int7))) {
        int8 = 0;
    };
    if ((int3 == (int1 - int7))) {
        int8 = 1;
    };
    if ((int4 == (int1 - int7))) {
        int8 = 2;
    };
    if ((int8 >= 0)) {
        script2371(int8);
        return;
    };
    int6 = ABS(MODULO(int5, (int1 - 1)));
    if ((int6 < SCALE(int1, 100, 90))) {
        var int0 = (int0 + (2 * int7));
    } else if ((int6 > SCALE(int1, 100, 10))) {
        int0 = (int0 - (2 * int7));
    };
    if (((int6 + ABS(int0)) > (int1 - 1))) {
        int0 = (((int1 - 1) - int6) * int7);
    };
    IF_SETPOSITION((int2 + int0), 0, 0, 0, 82116729);
    IF_SETPOSITION((int3 + int0), 0, 0, 0, 82116727);
    IF_SETPOSITION((int4 + int0), 0, 0, 0, 82116725);
    IF_SETONTIMER(callback(script1654, int0), 82116724);
    return;
}