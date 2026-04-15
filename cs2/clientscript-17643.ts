//
function script17643(int0: component, int1: int, int2: boolean, int3: unknown_int, int4: unknown_int, int5: unknown_int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        CC_RADIOGROUP_CLEAROPTIONS();
        script17642(int2, int3, int4, int5);
    };
    return;
}