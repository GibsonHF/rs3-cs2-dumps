//
function script19525(int0: int, int1: int): void {
    if (((int0 > int1) || (int1 > 20))) {
        return;
    };
    var int2 = int0;
    while ((int2 <= int1)) {
        if ((CC_FIND(comp(1313, 76), int2) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(comp(1313, 77), int2) == 1)) {
            CC_SETHIDE(true);
        };
        int2 = (int2 + 1);
    };
    return;
}