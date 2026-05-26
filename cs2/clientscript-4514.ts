//
function script4514(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    while ((int3 < int2)) {
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETHIDE(true);
        } else {
            int3 = int2;
        };
        int3 = (int3 + 1);
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETHIDE(false);
    };
    return;
}