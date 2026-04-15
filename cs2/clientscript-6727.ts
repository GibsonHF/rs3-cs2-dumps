//
function script6727(int0: int): [unknown_int, int] {
    var int1 = 1;
    var int2 = int0;
    var int3 = 1;
    var int4 = 0;
    if ((int0 > 50)) {
        int2 = 50;
        var int0 = (int0 - 50);
    };
    int2 = (50 / int2);
    if ((MODULO(CLIENTCLOCK(), int2) != 0)) {
        int1 = 0;
    } else if ((int0 > 0)) {
        int3 = (int3 + (int0 / 50));
        int4 = MODULO(int0, 50);
        if (((int4 != 0) && (MODULO(CLIENTCLOCK(), (50 / int4)) == 0))) {
            int3 = (int3 + 1);
        };
    };
    return [int1, int3];
}