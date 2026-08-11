//
function script9119(): void {
    if ((varbitplayer_20862 == 0)) {
        IF_SETHIDE(true, comp(275, 37));  // confirm_donation:checkbox_selected_layer
        IF_SETHIDE(false, comp(275, 39));  // confirm_donation:checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(275, 37));  // confirm_donation:checkbox_selected_layer
        IF_SETHIDE(true, comp(275, 39));  // confirm_donation:checkbox_deselected_layer
    };
    if ((varbitplayer_20863 == 0)) {
        IF_SETHIDE(true, comp(275, 44));  // confirm_donation:donate_anon_checkbox_selected_layer
        IF_SETHIDE(false, comp(275, 46));  // confirm_donation:donate_anon_checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(275, 44));  // confirm_donation:donate_anon_checkbox_selected_layer
        IF_SETHIDE(true, comp(275, 46));  // confirm_donation:donate_anon_checkbox_deselected_layer
    };
    return;
}