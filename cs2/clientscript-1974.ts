//
function script1974(int0: number, int1: number, int2: number): void {
    IF_SETMODELANGLE(0, 0, IF_GETMODELANGLE_X(int0), IF_GETMODELANGLE_Y(int0), IF_GETMODELANGLE_Y(int0), int2, int0);
    IF_SETOBJECT(int1, 1, int0);
    return;
}