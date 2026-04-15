//
function script4079(int0: int): void {
    if ((CC_FIND(comp(1064, 2), 0) == 1)) {
        if ((int0 <= 30)) {
            CC_SETSIZE((int0 * 8), 8, 0, 0);
        };
    } else {
        CC_CREATE(comp(1064, 2), 3, 0);
        CC_SETPOSITION(44, 44, 0, 0);
        CC_SETSIZE((8 * 30), 8, 0, 0);
        CC_SETCOLOUR(13200446);
        CC_SETFILL(1);
    };
    return;
}