//
function script1210(int0: int, int1: int, int2: int, int3: int): int {
    var int4 = MODULO(((CLIENTCLOCK() + int3) - int2), int1);
    var int5 = (int1 / 2);
    var int6 = (int5 - int4);
    if ((int6 == 0)) {
        return int0;
    };
    if ((int6 > 0)) {
        return (int0 - SCALE(int6, int5, int0));
    };
    return (int0 + SCALE(int6, int5, int0));
}