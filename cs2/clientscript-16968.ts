//
function script16968(int0: unknown_int, int1: component, string0: unknown_string): void {
    if ((int0 > 0)) {
        if ((script6431() == true)) {
            if ((IF_FIND(int1) == 1)) {
                CC_SETONHOLD(callback(script7774, string0, -2147483645, -2147483643, 0));
            };
        } else {
            IF_SETONMOUSEREPEAT(callback(script3876, string0, int1, -1), int1);
            IF_SETONMOUSELEAVE(callback(script8805), int1);
        };
    } else {
        IF_SETONMOUSEREPEAT(callback(), int1);
        IF_SETONMOUSELEAVE(callback(), int1);
    };
    return;
}