//
function script12728(int0: number, int1: number): void {
    if ((script11747(34277) != 1)) {
        return;
    };
    if (((IF_GETHIDE(comp(1253, 265)) == false) || (IF_GETHIDE(comp(1786, 28)) == false))) {
        return;
    };
    if (((IF_FIND(int1) == 1) && (cc_getparam(5946) < CLIENTCLOCK()))) {
        cc_setparam(5946, (CLIENTCLOCK() + 25));
    };
    return;
}