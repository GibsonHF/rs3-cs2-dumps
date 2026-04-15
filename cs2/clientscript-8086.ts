//
function script8086(int0: int, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script10900(int0);
    IF_SETTEXT(script10901(int2, int3, 1), int1);
    IF_SETONTIMER(callback(script10902, int2, int3, CLIENTCLOCK(), int1), int1);
    return;
}