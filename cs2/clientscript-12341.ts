//
function script12341(int0: number, int1: number, int2: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((IF_FIND[1](int0) == 1)) {
        cc_setparam[1](5946, 1);
        cc_setparam[1](5947, (CLIENTCLOCK() + 5));
        if (((int1 != -1) && (CC_FIND(int0, int1) == 1))) {
            CC_SETCOLOUR(int2);
        };
    };
    return;
}