//
function script6755(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1 as graphic;
    [string0, string1, int0] = script10617();
    IF_SETTEXT(string0, comp(1345, 21));
    IF_SETGRAPHIC(int0, comp(1345, 19));
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145938);
    IF_SETONMOUSELEAVE(callback(script8805), 88145938);
    return;
}