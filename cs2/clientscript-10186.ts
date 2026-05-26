//
function script10186(int0: number, int1: number): void {
    if (((int0 > int1) || (int1 > 20))) {
        return;
    };
    var int2 = int0;
    while ((int2 <= int1)) {
        if (((int2 <= 15) && (CC_FIND(33882312, int2) == 1))) {
            CC_SETHIDE(1);
        };
        if ((CC_FIND(33882315, int2) == 1)) {
            CC_SETHIDE(1);
        };
        if ((CC_FIND(33882316, int2) == 1)) {
            CC_SETHIDE(1);
        };
        int2 = (int2 + 1);
    };
    return;
}