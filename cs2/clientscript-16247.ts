//
function script16247(int0: component, int1: int): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((script6431() == true)) {
            CC_SETONCLICK(callback());
        } else {
            CC_SETONMOUSEREPEAT(callback());
        };
    };
    return;
}