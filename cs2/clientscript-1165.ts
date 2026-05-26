//
function script1165(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((int1 == -1)) {
        int2 = IF_GETMODELXOF(49348648);
        int3 = IF_GETMODELYOF(49348648);
        int4 = IF_GETMODELZOOM(49348648);
        int5 = IF_GETMODELANGLE_X(49348648);
        int6 = (IF_GETMODELANGLE_Y(49348648) + 2);
        int7 = IF_GETMODELANGLE_Z(49348648);
        IF_SETMODELANGLE(int2, int3, int5, int6, int7, int4, int0);
    } else if ((CC_FIND(int0, int1) == 1)) {
        int2 = CC_GETMODELXOF();
        int3 = CC_GETMODELYOF();
        int4 = CC_GETMODELZOOM();
        CC_GETMODELANGLE_X();
        int5 = stack();
        int6 = (CC_GETMODELANGLE_Y() + 2);
        int7 = CC_GETMODELANGLE_Z();
        CC_SETMODELANGLE(int2, int3, int5, int6, int7, int4);
    };
    return;
}