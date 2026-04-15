//
function script10186(int0: int, int1: int): void {
    if (((int0 > int1) || (int1 > 20))) {
        return;
    };
    var int2 = int0;
    while ((int2 <= int1)) {
        if (((int2 <= 15) && (CC_FIND(comp(517, 200), int2) == 1))) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(comp(517, 203), int2) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(comp(517, 204), int2) == 1)) {
            CC_SETHIDE(true);
        };
        int2 = (int2 + 1);
    };
    return;
}