//
function script16638(string0: unknown_string): void {
    var string1 = "Press here to hide the Yak Track notification.<br>You can open Yak Track at any time from the Events Tab.<br>Drag this button anywhere on the screen.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 82051073, -1), 82051073);
    IF_SETONMOUSEOVER(callback(script1093, 82051097, 1236), 82051073);
    IF_SETONMOUSELEAVE(callback(script1093, 82051097, 9210), 82051073);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, 82051091, -1), 82051091);
    return;
}