//
function script272(): void {
    IF_SETSIZE(IF_GETWIDTH(comp(919, 30)), 215, 0, 0, comp(919, 30));  // fishcomp_overlay:fishcomp_right_panel
    IF_SETSCROLLSIZE(0, 0, comp(919, 34));  // fishcomp_overlay:history_scrolllayer
    var int0 = IF_GETHEIGHT(comp(919, 36));  // fishcomp_overlay:history_habitat_layer
    if ((int0 > IF_GETHEIGHT(comp(919, 34)))) {  // fishcomp_overlay:history_scrolllayer
        IF_SETSCROLLSIZE(0, int0, comp(919, 34));  // fishcomp_overlay:history_scrolllayer
    };
    script7791(60227619, 60227618);
    IF_SETVFLIP(0, comp(919, 43));  // fishcomp_overlay:show_history_arrow_left
    IF_SETVFLIP(0, comp(919, 44));  // fishcomp_overlay:show_history_arrow_right
    return;
}