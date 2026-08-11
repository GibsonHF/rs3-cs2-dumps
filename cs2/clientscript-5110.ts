//
function script5110(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1116, 560));  // clan_signpost:settings_tab_selected_layer
        IF_SETHIDE(true, comp(1116, 552));  // clan_signpost:details_tab_selected_layer
        IF_SETHIDE(false, comp(1116, 3));  // clan_signpost:edit_layer
        IF_SETHIDE(true, comp(1116, 4));  // clan_signpost:details_layer
    } else {
        IF_SETHIDE(true, comp(1116, 560));  // clan_signpost:settings_tab_selected_layer
        IF_SETHIDE(false, comp(1116, 552));  // clan_signpost:details_tab_selected_layer
        IF_SETHIDE(true, comp(1116, 3));  // clan_signpost:edit_layer
        IF_SETHIDE(false, comp(1116, 4));  // clan_signpost:details_layer
    };
    return;
}