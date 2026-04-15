//
function script969(int0: component, int1: int): void {
    var int2 = MODULO(CLIENTCLOCK(), 32);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((script970(int1) == 0)) {
            if ((CC_GETTRANS() != 0)) {
                CC_SETTRANS(0);
            } else {
                CC_SETONTIMER(callback());
            };
        } else if ((int2 < 8)) {
            CC_SETTRANS(0);
        } else if ((int2 < 16)) {
            CC_SETTRANS(85);
        } else if ((int2 < 24)) {
            CC_SETTRANS(255);
        } else {
            CC_SETTRANS(85);
        };
    };
    return;
}