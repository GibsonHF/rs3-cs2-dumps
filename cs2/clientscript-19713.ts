//
function script19713(): void {
    if ((IF_GETHIDE(comp(1495, 29)) == true)) {  // marketplace_preview:recolour_buttons_background
        IF_SETHIDE(false, comp(1495, 29));  // marketplace_preview:recolour_buttons_background
        IF_SETOP(1, "Minimise", comp(1495, 27));  // marketplace_preview:recolour_button_graphic
    } else {
        IF_SETHIDE(true, comp(1495, 29));  // marketplace_preview:recolour_buttons_background
        IF_SETOP(1, "Maximise", comp(1495, 27));  // marketplace_preview:recolour_button_graphic
    };
    return;
}