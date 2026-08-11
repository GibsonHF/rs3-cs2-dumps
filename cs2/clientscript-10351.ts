//
function script10351(): void {
    var int0 = IF_GETSCROLLWIDTH(comp(517, 168));  // bank:tabs_dynamic
    var int1 = IF_GETWIDTH(comp(517, 158));  // bank:tabs
    if (((int0 + 48) < int1)) {
        IF_SETHIDE(true, comp(517, 159));  // bank:tabs_scroll_up
        IF_SETHIDE(true, comp(517, 162));  // bank:tabs_scroll_down
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 165));  // bank:tabs_all_button
        IF_SETPOSITION(48, 0, 0, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETSIZE(48, 38, 1, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETPOSITION((48 - 4), 0, 0, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETSIZE(48, (38 + 12), 1, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETSCROLLPOS(0, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETSCROLLPOS(0, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETONSCROLLWHEEL(callback(), comp(517, 158));  // bank:tabs
    } else {
        IF_SETHIDE(false, comp(517, 159));  // bank:tabs_scroll_up
        IF_SETHIDE(false, comp(517, 162));  // bank:tabs_scroll_down
        IF_SETPOSITION(24, 0, 0, 0, comp(517, 165));  // bank:tabs_all_button
        IF_SETPOSITION((48 + 24), 0, 0, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETSIZE((48 * 2), 38, 1, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETPOSITION(((48 + 24) - 4), 0, 0, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETSIZE(((48 + 24) + 12), 38, 1, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETONSCROLLWHEEL(callback(script10471, -2147483646), comp(517, 158));  // bank:tabs
    };
    IF_SETSIZE(0, 36, 1, 1, comp(517, 157));  // bank:bank_items_layer
    IF_SETSIZE(8, 38, 1, 0, comp(517, 158));  // bank:tabs
    IF_SETPOSITION(0, 0, 1, 0, comp(517, 158));  // bank:tabs
    IF_SETPOSITION(5, 2, 0, 0, comp(517, 167));  // bank:all_tab_icon
    IF_SETSIZE((24 - 1), 1, 0, 1, comp(517, 159));  // bank:tabs_scroll_up
    IF_SETSIZE((24 - 1), 1, 0, 1, comp(517, 162));  // bank:tabs_scroll_down
    IF_SETPOSITION(0, 0, 2, 0, comp(517, 162));  // bank:tabs_scroll_down
    IF_SETOP(1, "Scroll Left", comp(517, 159));  // bank:tabs_scroll_up
    IF_SETOP(1, "Scroll Right", comp(517, 162));  // bank:tabs_scroll_down
    IF_SETSIZE(11, 18, 0, 0, comp(517, 161));  // bank:tabs_scroll_up_icon
    IF_SETSIZE(11, 18, 0, 0, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETGRAPHIC(21244 as graphic, comp(517, 161));  // bank:tabs_scroll_up_icon
    IF_SETGRAPHIC(21244 as graphic, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETVFLIP(0, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETGRAPHIC(1 as graphic, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETSIZE(48, 38, 0, 0, comp(517, 165));  // bank:tabs_all_button
    return;
}