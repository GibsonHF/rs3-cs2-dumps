//
function script6755(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1 as graphic;
    [string0, string1, int0] = script10617();
    IF_SETTEXT(string0, comp(1345, 21));  // featured_main:quest_title
    IF_SETGRAPHIC(int0, comp(1345, 19));  // featured_main:quest_graphic
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 18));  // featured_main:quest_layer
    IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 18));  // featured_main:quest_layer
    return;
}