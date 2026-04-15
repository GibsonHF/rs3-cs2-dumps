//
function script16248(int0: component, int1: int, string0: string): void {
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        if ((script6431() == true)) {
            CC_SETONCLICK(callback());
        } else {
            CC_SETONMOUSEREPEAT(callback());
        };
        if ((STRING_LENGTH(string0) > 0)) {
            script3537(string0);
        };
    };
    return;
}