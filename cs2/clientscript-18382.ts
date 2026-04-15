//
function script18382(int0: unknown_int): void {
    if ((script6431() == true)) {
        return;
    };
    var string0 = "Open the Advent Calendar.";
    IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
    IF_SETONMOUSEOVER(callback(script18385, string0, int0), int0);
    IF_SETONMOUSELEAVE(callback(script18386), int0);
    return;
}