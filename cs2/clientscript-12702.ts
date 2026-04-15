//
function script12702(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        cc_setparam(5936, RANDOM(65536));
    };
    return;
}