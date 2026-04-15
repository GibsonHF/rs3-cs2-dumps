//
function script20249(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = MODULO((CLIENTCLOCK() - int2), 75);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int5, int6, int7] = script2413(int3);
    if ((int4 < 25)) {
    } else if ((int4 < 50)) {
        int4 = ((int4 - 25) * 5);
        int5 = MAX(0, (int5 - int4));
        int6 = MIN(255, (int6 + int4));
        int7 = MAX(0, (int7 - int4));
    } else {
        int4 = ((int4 - 50) * 5);
        int5 = MIN(int5, MAX(0, (int5 - (125 - int4))));
        int6 = MAX(int6, MIN(255, (int6 + (125 - int4))));
        int7 = MIN(int7, MAX(0, (int7 - (125 - int4))));
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETCOLOUR(script693(int5, int6, int7));
    };
    return;
}