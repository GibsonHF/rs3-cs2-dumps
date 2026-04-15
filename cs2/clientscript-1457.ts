//
function script1457(int0: component, int1: int): void {
    var int2 = ((int1 - CLIENTCLOCK()) / 50);
    if ((int2 < 0)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int3 = (int2 / 60);
    var int4 = MODULO(int2, 60);
    if ((int3 > 0)) {
        IF_SETTEXT(`Time remaining: ${inttostring(int3, 10)}m ${inttostring(int4, 10)}`, int0);
    } else {
        IF_SETTEXT(`Time remaining: ${inttostring(int2, 10)}`, int0);
    };
    return;
}