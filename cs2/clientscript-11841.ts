//
function script11841(): void {
    var int0 = IF_GETWIDTH(comp(1683, 4));  // trh70_overlay:progress_bar_foreground_layer
    if ((varbitplayer_29511 >= 200)) {
        IF_SETGRAPHIC(14495 as graphic, comp(1683, 7));  // trh70_overlay:reward_1
    };
    if ((varbitplayer_29511 >= 500)) {
        IF_SETGRAPHIC(14817 as graphic, comp(1683, 8));  // trh70_overlay:reward_2
    };
    if ((varbitplayer_29511 >= 1000)) {
        IF_SETGRAPHIC(14819 as graphic, comp(1683, 9));  // trh70_overlay:red_gem
    };
    var string0 = "Unlock the ability to win the scrimshaw of aggression.<br>Dark lamps and stars will grant 20% more XP than standard prismatics.";
    var string1 = "Unlock the ability to win the scrimshaw of sacrifice and a greater chance to win the scrimshaw of aggression.<br>Dark lamps and stars will grant 30% more XP than standard prismatics.";
    var string2 = "Unlock the ability to win the scrimshaw of corruption, the helm of corruption and a greater chance to win the previous scrimshaws.<br>Dark lamps and stars will grant 40% more XP than standard prismatics.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), comp(1683, 7));  // trh70_overlay:reward_1
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), comp(1683, 8));  // trh70_overlay:reward_2
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), comp(1683, 9));  // trh70_overlay:red_gem
    IF_SETSIZE(1, 0, 0, 1, comp(1683, 5));  // trh70_overlay:progress_bar
    if ((varbitplayer_29511 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1683, 5));  // trh70_overlay:progress_bar
    } else {
        IF_SETSIZE(SCALE(int0, 1000, varbitplayer_29511), 0, 0, 1, comp(1683, 5));  // trh70_overlay:progress_bar
    };
    IF_SETONVARTRANSMIT(callback(script11842, 5704, 1), comp(1683, 5));  // trh70_overlay:progress_bar
    return;
}