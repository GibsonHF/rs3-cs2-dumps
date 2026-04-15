//
function script2137(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: component, int6: int): void {
    if ((CC_FIND(int5, int6) == 1)) {
        stack(int3);
        stack(int4);
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(stack(), AND((stack() + int0), 2047), AND((CC_GETMODELANGLE_Y() + int1), 2047), AND((CC_GETMODELANGLE_Z() + int2), 2047), CC_GETMODELZOOM());
    };
    return;
}