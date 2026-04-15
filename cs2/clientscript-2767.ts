//
function script2767(int0: int, int1: component): void {
    var int2 = 0;
    if ((CC_FIND(int1, 0) == 1)) {
        int2 = (int0 - CLIENTCLOCK());
        if ((int2 <= 0)) {
            CC_SETTRANS(0);
            CC_SETONTIMER(callback());
            return;
        };
        CC_SETTRANS(MAX((CC_GETTRANS() - (CC_GETTRANS() / int2)), 1));
    };
    return;
}