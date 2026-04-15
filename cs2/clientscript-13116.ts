//
function script13116(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((CC_FIND(int0, 0) == 1)) {
        cc_setparam(3994, MAX(MIN(int1, 255), 0));
    };
    return;
}