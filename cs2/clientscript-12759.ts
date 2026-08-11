//
function script12759(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1787, 29));  // cruc_dm_overlay:pickup_timer
    IF_SETGRAPHIC(int0, comp(1787, 17));  // cruc_dm_overlay:pickup_icon
    var int1 = (int1 * 30);
    IF_SETONTIMER(callback(script12760, int1), comp(1787, 29));  // cruc_dm_overlay:pickup_timer
    return;
}