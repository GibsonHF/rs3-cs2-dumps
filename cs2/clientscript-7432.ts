//
function script7432(int0: unknown_int, int1: int, int2: unknown_int, int3: unknown_int): void {
    if (((CLIENTCLOCK() - int1) < 5)) {
        return;
    };
    IF_SETONCLICKREPEAT(callback(script7432, int0, CLIENTCLOCK(), -2147483645, int3), int2);
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    var string0 = "";
    var int9 = 0;
    [int4, int5, int6, int7, int8, string0, int9] = script7434(int3);
    var int10 = (int9 + int0);
    int10 = MAX(MIN(int10, int7), int6);
    script7433(int10, int3, 1);
    return;
}