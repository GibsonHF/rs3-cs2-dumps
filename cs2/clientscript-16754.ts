//
function script16754(int0: component): void {
    var int1 = script16725();
    var string0 = `Trigger a gemfall every ${inttostring(int1, 10)} keys.`;
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