//
function script8371(int0: component, int1: int): int {
    if ((int1 < 0)) {
        return -1;
    };
    if ((CC_FIND(int0, script8373(int1)) == 1)) {
        return cc_getparam(3536);
    };
    return -1;
}