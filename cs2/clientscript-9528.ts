//
function script9528(int0: number, int1: number): void {
    if (((CC_FIND(int0, 0) == 1) && (cc_getparam(3995) != -1))) {
        cc_setparam(3996, MIN(MAX(int1, cc_getparam(3995)), 100));
    };
    return;
}