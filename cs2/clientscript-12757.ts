//
function script12757(int0: number): void {
    var int0 = (int0 * 30);
    IF_SETHIDE(false, comp(1787, 24));  // cruc_dm_overlay:game_timer
    IF_SETTEXT("", comp(1787, 27));  // cruc_dm_overlay:game_time_text
    IF_SETONTIMER(callback(script12758, int0), comp(1787, 24));  // cruc_dm_overlay:game_timer
    return;
}