//
function script2974(int0: component): void {
    var int1 = IF_GETMODELANGLE_Y(int0);
    var int2 = IF_GETMODELANGLE_X(int0);
    var int3 = IF_GETMODELANGLE_Z(int0);
    var int4 = IF_GETMODELZOOM(int0);
    var int5 = IF_GETMODELXOF(int0);
    var int6 = IF_GETMODELYOF(int0);
    var int7 = MODULO((int1 + 1), 2047);
    IF_SETMODELANGLE(int5, int6, int2, int7, int3, int4, int0);
    return;
}