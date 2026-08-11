//
function script274(): void {
    IF_SETSIZE(IF_GETWIDTH(comp(919, 30)), 95, 0, 0, comp(919, 30));  // fishcomp_overlay:fishcomp_right_panel
    CC_DELETEALL(comp(919, 35));  // fishcomp_overlay:history_scrollbar
    IF_SETVFLIP(1, comp(919, 43));  // fishcomp_overlay:show_history_arrow_left
    IF_SETVFLIP(1, comp(919, 44));  // fishcomp_overlay:show_history_arrow_right
    IF_SETSCROLLPOS(0, 0, comp(919, 34));  // fishcomp_overlay:history_scrolllayer
    return;
}