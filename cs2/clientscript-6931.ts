//
function script6931(int0: component, int1: int): void {
    var int2 = (CLIENTCLOCK() - script6932(int0));
    if (((int2 >= 255) || (int2 < 0))) {
        if ((CC_FIND[1](int0, int1) == 1)) {
            CC_SETHIDE[1](true);
        };
        return;
    };
    if ((CC_FIND[1](int0, int1) == 1)) {
        CC_SETHIDE[1](false);
        if ((MODULO(int2, 40) > 20)) {
            CC_SETTRANS[1](255);
        } else {
            CC_SETTRANS[1](int2);
        };
    };
    return;
}