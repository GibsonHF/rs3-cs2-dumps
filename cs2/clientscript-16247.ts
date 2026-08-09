//
function script16247(int0: number, int1: number): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            if ((script6431() == 1)) {
                CC_SETONCLICK(callback());
            } else {
                CC_SETONMOUSEREPEAT(callback());
            };
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        if ((script6431() == 1)) {
            CC_SETONCLICK(callback());
        } else {
            CC_SETONMOUSEREPEAT(callback());
        };
    };
    return;
}