//
function script1955(int0: component, int1: int, int2: int): void {
    if ((MODULO((CLIENTCLOCK() + int2), 50) > 0)) {
        return;
    };
    var int3 = IF_GETTRANS(int0);
    var int4 = (200 / int1);
    IF_SETTRANS(MIN(240, (int3 + int4)), int0);
    if ((IF_GETTRANS(int0) == 240)) {
        IF_SETTRANS(255, int0);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}