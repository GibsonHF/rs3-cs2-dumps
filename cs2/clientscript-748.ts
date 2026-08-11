//
function script748(): void {
    IF_SETONTIMER(callback(script749, 1179650, 0, 1179671), comp(18, 23));  // tuska_island_overlay:top_panel
    IF_SETHIDE(true, comp(1625, 6));  // tuska_effects:ghost_effect
    IF_SETSIZE(0, 23, 0, 0, comp(18, 2));  // tuska_island_overlay:progress_1
    IF_SETCOLOUR(16777215, comp(18, 19));  // tuska_island_overlay:prog1_m
    IF_SETPOSITION(15, 2, 0, 0, comp(18, 12));  // tuska_island_overlay:position_pulse
    IF_SETONTIMER(callback(script936, CLIENTCLOCK()), comp(18, 12));  // tuska_island_overlay:position_pulse
    IF_SETSIZE(350, 0, 0, 0, comp(18, 22));  // tuska_island_overlay:tutorial_panel
    IF_SETHIDE(true, comp(18, 20));  // tuska_island_overlay:progress_full_power
    IF_SETHIDE(true, comp(18, 18));  // tuska_island_overlay:percent_complete
    if ((varbitplayer_28168 > 0)) {
        IF_SETHIDE(true, comp(18, 13));  // tuska_island_overlay:help_button_effect
    };
    return;
}