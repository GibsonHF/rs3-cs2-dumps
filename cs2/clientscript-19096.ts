//
function script19096(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1147, 69));  // trh199_overlay:crafting_button_disabled_graphic
        IF_SETHIDE(false, comp(1147, 68));  // trh199_overlay:crafting_button_graphic
    } else {
        IF_SETHIDE(false, comp(1147, 69));  // trh199_overlay:crafting_button_disabled_graphic
        IF_SETHIDE(true, comp(1147, 68));  // trh199_overlay:crafting_button_graphic
    };
    return;
}