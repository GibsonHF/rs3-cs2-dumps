//
function script20775(): void {
    var int0 = CC_GETMODELXOF();
    var int1 = CC_GETMODELYOF();
    var int2 = CC_GETMODELZOOM();
    CC_GETMODELANGLE_X();
    var int3 = [];
    var int4 = CC_GETMODELANGLE_Y();
    var int5 = CC_GETMODELANGLE_Z();
    CC_SETMODELANGLE(int0, int1, int3, MODULO((int4 + 8), 2047), int5, int2);
    return;
}