//
function script12359(int0: number, int1: number): void {
    if ((script11747(33217) != 1)) {
        return;
    };
    if (((IF_GETHIDE(82116873) == 0) || (IF_GETHIDE(114360342) == 0))) {
        return;
    };
    if (((IF_FIND(int1) == 1) && (cc_getparam(5946) < CLIENTCLOCK()))) {
        cc_setparam(5946, (CLIENTCLOCK() + 25));
    };
    return;
}