//
function script11529(int0: number): void {
    if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1627, 23));  // mtxmgt_colour_overlay:prismatic_layer
        IF_SETHIDE(true, comp(1627, 17));  // mtxmgt_colour_overlay:button_layer
        IF_SETHIDE(true, comp(1627, 20));  // mtxmgt_colour_overlay:premium_colour_layer
    } else {
        IF_SETHIDE(true, comp(1627, 23));  // mtxmgt_colour_overlay:prismatic_layer
        IF_SETHIDE(false, comp(1627, 17));  // mtxmgt_colour_overlay:button_layer
        IF_SETHIDE(false, comp(1627, 20));  // mtxmgt_colour_overlay:premium_colour_layer
    };
    return;
}