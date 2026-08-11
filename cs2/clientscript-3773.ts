//
function script3773(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(574, 58));  // share_actionbar_accept:share_checkbox_selected_layer
        IF_SETHIDE(false, comp(574, 60));  // share_actionbar_accept:share_checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(574, 58));  // share_actionbar_accept:share_checkbox_selected_layer
        IF_SETHIDE(true, comp(574, 60));  // share_actionbar_accept:share_checkbox_deselected_layer
    };
    return;
}