//
function script18236(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = 0;
    [int1, string0, string1, int0] = script18237();
    IF_SETHIDE(int1, 88145948);
    IF_SETTEXT(string0, 88145946);
    stack(int0);
    stack(88145944);
    IF_SETGRAPHIC();
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 88145943);
    IF_SETONMOUSELEAVE(callback(script8805), 88145943);
    return;
}