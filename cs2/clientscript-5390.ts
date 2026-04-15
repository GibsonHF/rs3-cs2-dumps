//
function script5390(int0: component): void {
    var string0 = "Receive a guaranteed multiplier every 10, 20 and 30 keys.";
    if ((script6431() == true)) {
        if ((IF_FIND(int0) == 1)) {
            CC_SETONHOLD(callback(script7774, string0, int0, 0, 0));
        };
    } else {
        IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
    };
    return;
}