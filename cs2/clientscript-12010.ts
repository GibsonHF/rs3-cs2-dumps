//
function script12010(): void {
    script8411(2007, 0);
    if ((varbitplayer_38842 == 1)) {
        IF_SETHIDE(true, comp(1490, 29));  // toplevel_v2_target_info:docking_padlock
        IF_SETHIDE(false, comp(1490, 0));  // toplevel_v2_target_info:swipe_layer
        IF_SETPOSITION(0, 0, 0, 0, comp(1490, 13));  // toplevel_v2_target_info:universe
        IF_SETSIZE(0, 0, 1, 1, comp(1490, 13));  // toplevel_v2_target_info:universe
        IF_SETPOSITION(0, ((100 - 92) / 2), 0, 0, comp(1490, 14));  // toplevel_v2_target_info:visible_info
        IF_SETHIDE(true, comp(1490, 29));  // toplevel_v2_target_info:docking_padlock
    } else {
        IF_SETHIDE(false, comp(1490, 29));  // toplevel_v2_target_info:docking_padlock
        IF_SETHIDE(true, comp(1490, 0));  // toplevel_v2_target_info:swipe_layer
    };
    script14243(97648640);
    return;
}