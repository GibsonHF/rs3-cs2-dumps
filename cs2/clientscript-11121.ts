//
function script11121(): void {
    if ((IF_GETHIDE(comp(1598, 17)) == false)) {  // easter15_combine_overlay:key_layer
        MES_TYPED(109, 0, "The notebook overlay is already open.");
    } else {
        IF_SETHIDE(false, comp(1598, 17));  // easter15_combine_overlay:key_layer
        IF_SETHIDE(false, comp(1598, 50));  // easter15_combine_overlay:notebook_button_selected_layer
    };
    return;
}