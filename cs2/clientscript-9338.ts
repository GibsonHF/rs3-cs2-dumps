//
function script9338(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int): void {
    if (((int4 == 1) && (CC_FIND(comp(517, 205), int2) == 1))) {
        CC_SETPOSITION((int0 - 8), int1, 0, 0);
        CC_SETSIZE((int0 - 8), 32, 1, 0);
        CC_SETHIDE(false);
    };
    if ((CC_FIND(comp(517, 206), int2) == 1)) {
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