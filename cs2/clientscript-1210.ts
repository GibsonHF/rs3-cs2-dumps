//
function script1210(int0: number, int1: number, int2: number, int3: number): number {
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