//
function script17599(int0: component, int1: int, int2: boolean, int3: cs2enum, int4: int, int5: int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        CC_COMBO_CLEARENTRIES();
        script17598(int2, int3, int4, int5);
    };
    return;
}