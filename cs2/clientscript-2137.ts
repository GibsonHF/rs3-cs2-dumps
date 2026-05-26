//
function script2137(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if ((CC_FIND(int5, int6) == 1)) {
        stack(int3);
        stack(int4);
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(stack(), AND((stack() + int0), 2047), AND((CC_GETMODELANGLE_Y() + int1), 2047), AND((CC_GETMODELANGLE_Z() + int2), 2047), CC_GETMODELZOOM());
    };
    return;
}