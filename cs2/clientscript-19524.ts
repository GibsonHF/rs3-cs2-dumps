//
function script19524(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if (((int4 == 1) && (CC_FIND(comp(1313, 78), int2) == 1))) {  // group_ironman_storage:spacer_endrow
        CC_SETPOSITION((int0 - 8), int1, 0, 0);
        CC_SETSIZE((int0 - 8), 32, 1, 0);
        CC_SETHIDE(false);
    };
    if ((CC_FIND(comp(1313, 79), int2) == 1)) {  // group_ironman_storage:spacer_below
        CC_SETPOSITION(0, (int1 + 32), 0, 0);
        if ((int3 == 1)) {
            CC_SETSIZE(0, (int1 + 32), 1, 1);
        } else {
            CC_SETSIZE(0, 12, 1, 0);
        };
        CC_SETHIDE(false);
    };
    return;
}