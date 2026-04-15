//
function script11318(int0: struct): int {
    var int1 = 1;
    var int2 = (script11073(int0) - CLIENTCLOCK());
    if ((MODULO((int2 / 50), 2) == 1)) {
        int1 = 0;
    };
    var int3 = 0;
    if ((int1 == 1)) {
        int3 = MIN(112, MAX(0, (112 - SCALE(MODULO(int2, 50), 50, 112))));
    } else {
        int3 = MIN(112, MAX(0, SCALE(MODULO(int2, 50), 50, 112)));
    };
    return int3;
}