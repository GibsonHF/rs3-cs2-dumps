//
function script666(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    if ((CC_FIND(int1, int2) == 1)) {
        int3 = (int0 - CLIENTCLOCK());
        if ((int3 <= 0)) {
            CC_SETTRANS(0);
            CC_SETONTIMER(callback());
            return;
        };
        CC_SETTRANS(MAX((CC_GETTRANS() - (CC_GETTRANS() / int3)), 1));
    };
    return;
}