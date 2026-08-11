//
function script12911(): void {
    if ((IF_GETHIDE(comp(591, 31)) == true)) {  // pvpwildy_overlay:options_box_layer
        IF_SETHIDE(false, comp(591, 31));  // pvpwildy_overlay:options_box_layer
    } else {
        IF_SETHIDE(true, comp(591, 31));  // pvpwildy_overlay:options_box_layer
    };
    return;
}