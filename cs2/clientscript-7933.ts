//
function script7933(int0: component, int1: int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        CC_GRID_SETLAYOUTPARAMS(int2, int3, int4);
        stack(int5);
        CC_SETCHILDSPACING();
    };
    return;
}