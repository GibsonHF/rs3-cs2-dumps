//
function script19525(int0: number, int1: number): void {
    if (((int0 > int1) || (int1 > 20))) {
        return;
    };
    var int2 = int0;
    while ((int2 <= int1)) {
        if ((CC_FIND(86048844, int2) == 1)) {
            CC_SETHIDE(1);
        };
        if ((CC_FIND(86048845, int2) == 1)) {
            CC_SETHIDE(1);
        };
        int2 = (int2 + 1);
    };
    return;
}