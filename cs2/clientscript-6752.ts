//
function script6752(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    [string0, string1, int0] = script10611(script6341());
    IF_SETTEXT(string0, 88145928);
    IF_SETGRAPHIC(int0, 88145926);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145925);
    IF_SETONMOUSELEAVE(callback(script8805), 88145925);
    return;
}