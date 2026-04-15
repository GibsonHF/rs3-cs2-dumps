//
function script2139(int0: unknown_int, int1: component, int2: unknown_int, int3: unknown_int, int4: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    if ((CC_FIND(int1, 3) == 1)) {
        stack(int3);
        stack(int4);
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(stack(), AND((stack() + 25), 2047), AND((CC_GETMODELANGLE_Y() + 25), 2047), AND((CC_GETMODELANGLE_Z() + 25), 2047), CC_GETMODELZOOM());
    };
    return;
}