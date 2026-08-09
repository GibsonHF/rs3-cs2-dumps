//
function script18172(int0: number, int1: number, string0: string): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            if ((script6431() == 1)) {
                CC_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0));
                CC_SETNOCLICKTHROUGH(true);
            } else {
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            };
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        if ((script6431() == 1)) {
            CC_SETONCLICK(callback(script7774, string0, -2147483645, -2147483643, 0));
            CC_SETNOCLICKTHROUGH(true);
        } else {
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        };
    };
    return;
}