//
function script6752(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1 as graphic;
    [string0, string1, int0] = script10611(script6341());
    IF_SETTEXT(string0, comp(1345, 8));  // featured_main:latest_title
    IF_SETGRAPHIC(int0, comp(1345, 6));  // featured_main:latest_graphic
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 5));  // featured_main:latest_layer
    IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 5));  // featured_main:latest_layer
    return;
}