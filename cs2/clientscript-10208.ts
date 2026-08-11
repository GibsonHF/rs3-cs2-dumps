//
function script10208(): void {
    if ((varbitplayer_23248 == 0)) {
        IF_SETHIDE(true, comp(916, 36));  // pop_ship:obsolete_checkbox_selected_layer
        IF_SETHIDE(false, comp(916, 38));  // pop_ship:obsolete_checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(916, 36));  // pop_ship:obsolete_checkbox_selected_layer
        IF_SETHIDE(true, comp(916, 38));  // pop_ship:obsolete_checkbox_deselected_layer
    };
    return;
}