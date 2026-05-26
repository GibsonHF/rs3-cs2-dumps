//
function script12730(int0: number, int1: number): void {
    if ((script11747(34277) != 1)) {
        return;
    };
    if (((IF_GETHIDE(82116873) == 0) || (IF_GETHIDE(117047324) == 0))) {
        return;
    };
    if (((IF_FIND(int1) == 1) && (cc_getparam(5946) < CLIENTCLOCK()))) {
        cc_setparam(5946, (CLIENTCLOCK() + 25));
        switch (int0) {
            case 2: {
                IF_TRIGGEROP(82117164, -1, 1);
                break;
            }
            case 6: {
                IF_TRIGGEROP(82117164, -1, 2);
                break;
            }
        };
    };
    return;
}