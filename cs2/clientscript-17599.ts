//
function script17599(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            CC_COMBO_CLEARENTRIES();
            script17598(int2, int3, int4, int5);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_COMBO_CLEARENTRIES();
        script17598(int2, int3, int4, int5);
    };
    return;
}