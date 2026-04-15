//
function script6752(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1 as graphic;
    [string0, string1, int0] = script10611(script6341());
    IF_SETTEXT(string0, comp(1345, 8));
    stack(int0);
    stack(88145926);
    IF_SETGRAPHIC();
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145925);
    IF_SETONMOUSELEAVE(callback(script8805), 88145925);
    return;
}