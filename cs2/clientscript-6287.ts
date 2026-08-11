//
function script6287(): void {
    if ((varclient_1931 < 0)) {
        varclient_1931 = 0;
    };
    if ((varclient_1931 == 0)) {
        varclient_1931 = 1;
        IF_SETHIDE(false, comp(1296, 1));  // cruc_battle_overlay:dropdown_list_layer
        IF_SET2DANGLE(32768, comp(1296, 4));  // cruc_battle_overlay:dropdown_arrow
    } else {
        varclient_1931 = 0;
        IF_SETHIDE(true, comp(1296, 1));  // cruc_battle_overlay:dropdown_list_layer
        IF_SET2DANGLE(0, comp(1296, 4));  // cruc_battle_overlay:dropdown_arrow
    };
    return;
}