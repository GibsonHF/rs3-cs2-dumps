//
function script3464(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        stack(CC_GETMODELXOF());
        stack(CC_GETMODELYOF());
        CC_GETMODELANGLE_X();
        CC_SETMODELANGLE(stack(), MODULO((CC_GETMODELANGLE_Y() + 2), 2028), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
    };
    return;
}