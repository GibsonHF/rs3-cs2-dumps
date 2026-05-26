//
function script7431(int0: number, int1: number, int2: number, int3: number): void {
    if (((int2 == 1) && (MODULO(CLIENTCLOCK(), 10) != 0))) {
        return;
    };
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    var string0 = "";
    var int9 = 0;
    [int4, int5, int6, int7, int8, string0, int9] = script7434(int3);
    var int0 = MAX((int0 - int1), 0);
    var int10 = (IF_GETWIDTH(int4) - IF_GETWIDTH(int5));
    int0 = MIN(int0, int10);
    script7433((int6 + SCALE(int0, int10, (int7 - int6))), int3, 1);
    return;
}