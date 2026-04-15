//
function script11397(int0: int, int1: unknown_int): void {
    if ((int1 != 1)) {
        return;
    };
    if ((CC_FIND(comp(1621, 25), (varplayer_5406 - 1)) == 1)) {
        CC_SETOUTLINE(0);
    };
    if ((CC_FIND(comp(1621, 25), int0) == 1)) {
        CC_SETOUTLINE(2);
    };
    varplayer_5406 = (int0 + 1);
    script11398(int0);
    return;
}