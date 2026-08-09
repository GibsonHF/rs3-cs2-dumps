//
function script18236(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1 as graphic;
    var int1 = false;
    [int1, string0, string1, int0] = script18237();
    IF_SETHIDE(int1, comp(1345, 28));
    IF_SETTEXT(string0, comp(1345, 26));
    IF_SETGRAPHIC(int0, comp(1345, 24));
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 23));
    IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 23));
    return;
}