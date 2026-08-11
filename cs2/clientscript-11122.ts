//
function script11122(): void {
    if ((IF_GETHIDE(comp(1598, 17)) == false)) {  // easter15_combine_overlay:key_layer
        IF_SETHIDE(true, comp(1598, 17));  // easter15_combine_overlay:key_layer
        IF_SETHIDE(true, comp(1598, 50));  // easter15_combine_overlay:notebook_button_selected_layer
    } else {
        IF_SETHIDE(false, comp(1598, 17));  // easter15_combine_overlay:key_layer
        IF_SETHIDE(false, comp(1598, 50));  // easter15_combine_overlay:notebook_button_selected_layer
    };
    return;
}