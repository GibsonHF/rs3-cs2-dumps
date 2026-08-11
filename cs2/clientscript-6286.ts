//
function script6286(): void {
    if ((varclient_1929 < 0)) {
        varclient_1929 = 0;
    };
    if ((varclient_1929 == 0)) {
        varclient_1929 = 1;
        IF_SETHIDE(true, comp(1296, 22));  // cruc_battle_overlay:information_box
        IF_SETHIDE(false, comp(1296, 6));  // cruc_battle_overlay:minimised_layer
        IF_SETPOSITION(120, 2, 2, 0, comp(1296, 23));  // cruc_battle_overlay:min_max_button
    } else {
        varclient_1929 = 0;
        IF_SETHIDE(false, comp(1296, 22));  // cruc_battle_overlay:information_box
        IF_SETHIDE(true, comp(1296, 6));  // cruc_battle_overlay:minimised_layer
        IF_SETPOSITION(120, 60, 2, 0, comp(1296, 23));  // cruc_battle_overlay:min_max_button
    };
    return;
}