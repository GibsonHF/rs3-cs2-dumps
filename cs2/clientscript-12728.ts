//
function script12728(int0: unknown_int, int1: component): void {
    if ((script11747(34277 as struct) != 1)) {
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