//
function script1736(int0: component, int1: int): void {
    var int2 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((MODULO(CLIENTCLOCK(), 40) > 20)) {
            CC_SETTRANS(0);
        } else {
            CC_SETTRANS(255);
        };
    };
    return;
}