//
function script12359(int0: unknown_int, int1: component): void {
    if ((script11747(33217 as struct) != 1)) {
        return;
    };
    if (((IF_GETHIDE(comp(1253, 265)) == false) || (IF_GETHIDE(comp(1745, 22)) == false))) {
        return;
    };
    if (((IF_FIND(int1) == 1) && (cc_getparam(5946) < CLIENTCLOCK()))) {
        cc_setparam(5946, (CLIENTCLOCK() + 25));
    };
    return;
}