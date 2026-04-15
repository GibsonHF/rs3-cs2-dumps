//
function script4039(int0: component, int1: int, int2: unknown_int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int2 == 1)) {
            CC_SETCOLOUR(65535);
        } else if ((script7073(int1) == 2)) {
            CC_SETCOLOUR(65280);
        } else if ((script7073(int1) == 1)) {
            CC_SETCOLOUR(16776960);
        } else {
            CC_SETCOLOUR(16711680);
        };
    };
    return;
}