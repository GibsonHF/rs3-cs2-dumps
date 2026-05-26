//
function script8011(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    if ((IF_FIND(int1) == 1)) {
        int3 = (int0 - CLIENTCLOCK());
        if ((int3 <= 0)) {
            CC_SETTRANS(0);
            IF_SETONTIMER(callback(), int2);
            return;
        };
        CC_SETTRANS(MAX((CC_GETTRANS() - (CC_GETTRANS() / int3)), 1));
    };
    return;
}