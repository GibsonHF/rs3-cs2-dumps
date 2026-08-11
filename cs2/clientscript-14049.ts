//
function script14049(): void {
    var int0 = MIN(500, MAX(150, PARAWIDTH(IF_GETTEXT(comp(1938, 0)), 500, IF_GETFONTMETRICS(comp(1938, 0)))));  // deep_sea_generic_fish_overlay:title_text
    if ((int0 > 150)) {
        int0 = (int0 + 6);
    };
    IF_SETSIZE(int0, IF_GETHEIGHT(comp(1938, 5)), 0, 0, comp(1938, 5));  // deep_sea_generic_fish_overlay:bespoke_window
    var string0 = "Your streak increases as you fling fish in quick succession.<br>This will reset if you idle for too long.";
    var string1 = "Your bonus increases as you reach streak milestones.<br>This will reset if you idle for too long.";
    IF_SETONVARTRANSMIT(callback(script14050, 7814, 8269, 8269, 3), comp(1938, 5));  // deep_sea_generic_fish_overlay:bespoke_window
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), comp(1938, 1));  // deep_sea_generic_fish_overlay:streak_label
    IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -1), comp(1938, 3));  // deep_sea_generic_fish_overlay:bonus_label
    return;
}