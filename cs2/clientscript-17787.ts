//
function script17787(): void {
    var int0 = comp(1224, 39);  // necro_ritual_recipe_selection:filter_layer
    if ((IF_GETHIDE(int0) == true)) {
        IF_SETHIDE(false, int0);
        IF_SETGRAPHIC(24448 as graphic, comp(1224, 47));  // necro_ritual_recipe_selection:sort_filter_button_graphic
    } else {
        IF_SETHIDE(true, int0);
        IF_SETGRAPHIC(24449 as graphic, comp(1224, 47));  // necro_ritual_recipe_selection:sort_filter_button_graphic
    };
    return;
}