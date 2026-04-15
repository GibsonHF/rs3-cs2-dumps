//
function script10253(int0: int): [int, int] {
    var int1 = MODULO(int0, (360 * 7));
    var int2 = 15;
    if ((int1 >= (360 * 3))) {
        int2 = (int2 / POW(2, (((int1 - (360 * 3)) / 180) + 1)));
        if ((int2 == 0)) {
            return [0, int1];
        };
    };
    return [script12626(SCALE(SCALE(65536, 360, int2), 100, enum_getvalue(0, 0, 9054 as cs2enum, MODULO(int1, 360)))), int1];
}