//
function script19522(int0: number, int1: number, string0: string): void {
    if ((CC_FIND(comp(1313, 76), int0) == 1)) {  // group_ironman_storage:separators
        CC_SETPOSITION(0, int1, 0, 0);
        CC_SETTEXT(string0);
        script6888(1);
        CC_SETHIDE(false);
    };
    if ((CC_FIND(comp(1313, 77), int0) == 1)) {  // group_ironman_storage:dividers
        CC_SETPOSITION(0, (int1 + 13), 0, 0);
        CC_SETHIDE(false);
    };
    return;
}