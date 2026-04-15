//
function script17642(int0: boolean, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    CC_SETENABLED(int0);
    CC_RADIOGROUP_SETSELECTIONLIMITS(int2, int3);
    if ((int1 == -1)) {
        return;
    };
    CC_RADIOGROUP_SETOPTIONS(int1);
    return;
}