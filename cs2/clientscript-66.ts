//[clientscript,spinner]
function script66(int0: int, int1: int, int2: int, int3: component): void {
    IF_SETMODELANGLE(0, 0, AND((IF_GETMODELANGLE_X(int3) + int0), 2047), AND((IF_GETMODELANGLE_Y(int3) + int1), 2047), AND((IF_GETMODELANGLE_Z(int3) + int2), 2047), IF_GETMODELZOOM(int3), int3);
    return;
}