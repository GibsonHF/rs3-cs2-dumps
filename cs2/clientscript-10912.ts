//
function script10912(int0: number, int1: number, string0: string): void {
    var int2 = (int1 - CLIENTCLOCK());
    var int3 = 0;
    var int4 = 0;
    if ((int2 >= 0)) {
        int3 = (int2 / 50);
        int4 = MIN(99, (MODULO(int2, 50) * 2));
        if ((int4 < 10)) {
            IF_SETTEXT(`${string0}: ${inttostring(int3, 10)}.0${inttostring(int4, 10)}`, 103481378);
        } else {
            IF_SETTEXT(`${string0}: ${inttostring(int3, 10)}.${inttostring(int4, 10)}`, 103481378);
        };
    } else {
        IF_SETTEXT(`${string0}: 0.00`, 103481378);
        IF_SETONTIMER(callback(), 103481378);
    };
    return;
}