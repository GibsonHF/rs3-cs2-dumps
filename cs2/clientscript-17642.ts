//
function script17642(int0: number, int1: number, int2: number, int3: number): void {
    CC_SETENABLED(int0);
    CC_RADIOGROUP_SETSELECTIONLIMITS(int2, int3);
    if ((int1 == -1)) {
        return;
    };
    CC_RADIOGROUP_SETOPTIONS(int1);
    return;
}