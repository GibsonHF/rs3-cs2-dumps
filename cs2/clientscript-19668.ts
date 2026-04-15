//
function script19668(): void {
    var string0 = "The current promotional reward(s), available for a limited time.";
    var int0 = comp(935, 92);
    if ((script6431() == false)) {
        IF_SETONMOUSEREPEAT(callback(script8801, string0, int0, -2147483643, 0, 1, 12), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
    } else {
        IF_SETOP(1, "Info", int0);
        IF_SETONOP(callback(script7774, string0, int0, -2147483643, 0), int0);
    };
    return;
}