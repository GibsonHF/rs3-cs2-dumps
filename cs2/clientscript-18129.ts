//
function script18129(): void {
    var string0 = "";
    var string1 = "";
    var int0 = -1;
    var int1 = 0;
    if ((script17853() != -1)) {
        string0 = dbrow_getfield(script17853(), 991232, 0);
        string1 = "Level up in the Hero Pass to unlock epic rewards!";
        int0 = 4116;
        IF_SETHIDE(true, comp(1345, 14));  // featured_main:combat_title
        IF_SETHIDE(true, comp(1345, 13));  // featured_main:combat_label
        IF_SETTEXT("Hero Pass", comp(1345, 10));  // featured_main:hero_pass_title_layer
        IF_SETGRAPHIC(int0, comp(1345, 12));  // featured_main:combat_graphic
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 11));  // featured_main:hero_pass_layer
        IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 11));  // featured_main:hero_pass_layer
    } else {
        [int1, string0, string1, int0] = script18235();
        IF_SETHIDE(int1, comp(1345, 16));  // featured_main:combat_daily_stamp
        IF_SETTEXT(string0, comp(1345, 14));  // featured_main:combat_title
        IF_SETTEXT("", comp(1345, 10));  // featured_main:hero_pass_title_layer
        IF_SETGRAPHIC(int0, comp(1345, 12));  // featured_main:combat_graphic
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1345, 11));  // featured_main:hero_pass_layer
        IF_SETONMOUSELEAVE(callback(script8805), comp(1345, 11));  // featured_main:hero_pass_layer
    };
    return;
}