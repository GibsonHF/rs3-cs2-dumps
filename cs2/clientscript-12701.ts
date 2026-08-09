//
function script12701(int0: number, int1: number): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            cc_setparam(5941, 0);
            cc_setparam(5839, 100);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        cc_setparam(5941, 0);
        cc_setparam(5839, 100);
    };
    return;
}