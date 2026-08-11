//
function script10243(): void {
    var int0 = IF_GETSCROLLHEIGHT(comp(517, 168));  // bank:tabs_dynamic
    var int1 = IF_GETHEIGHT(comp(517, 158));  // bank:tabs
    if (((int0 + 48) < int1)) {
        IF_SETHIDE(true, comp(517, 159));  // bank:tabs_scroll_up
        IF_SETHIDE(true, comp(517, 162));  // bank:tabs_scroll_down
        IF_SETPOSITION(0, 0, 0, 0, comp(517, 165));  // bank:tabs_all_button
        IF_SETPOSITION(0, 48, 0, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETSIZE(38, 48, 0, 1, comp(517, 168));  // bank:tabs_dynamic
        IF_SETPOSITION(0, (48 - 4), 0, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETSIZE(38, (48 + 12), 0, 1, comp(517, 171));  // bank:tabs_spacers
        IF_SETSCROLLPOS(0, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETSCROLLPOS(0, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETONSCROLLWHEEL(callback(), comp(517, 158));  // bank:tabs
        IF_SETONVERTICALSWIPE(callback(), comp(517, 158));  // bank:tabs
        IF_SETONHORIZONTALSWIPE(callback(), comp(517, 158));  // bank:tabs
    } else {
        IF_SETHIDE(false, comp(517, 159));  // bank:tabs_scroll_up
        IF_SETHIDE(false, comp(517, 162));  // bank:tabs_scroll_down
        IF_SETPOSITION(0, 24, 0, 0, comp(517, 165));  // bank:tabs_all_button
        IF_SETPOSITION(0, (48 + 24), 0, 0, comp(517, 168));  // bank:tabs_dynamic
        IF_SETSIZE(38, (48 * 2), 0, 1, comp(517, 168));  // bank:tabs_dynamic
        IF_SETPOSITION(0, ((48 + 24) - 4), 0, 0, comp(517, 171));  // bank:tabs_spacers
        IF_SETSIZE(38, ((48 + 24) + 12), 0, 1, comp(517, 171));  // bank:tabs_spacers
        IF_SETONSCROLLWHEEL(callback(script10471, -2147483646), comp(517, 158));  // bank:tabs
        IF_SETONVERTICALSWIPE(callback(script10471, -2147483646), comp(517, 158));  // bank:tabs
        IF_SETONHORIZONTALSWIPE(callback(), comp(517, 158));  // bank:tabs
    };
    IF_SETSIZE(36, 0, 1, 1, comp(517, 157));  // bank:bank_items_layer
    IF_SETSIZE(38, 8, 0, 1, comp(517, 158));  // bank:tabs
    IF_SETPOSITION(0, 0, 0, 1, comp(517, 158));  // bank:tabs
    IF_SETPOSITION(0, 7, 0, 0, comp(517, 167));  // bank:all_tab_icon
    IF_SETSIZE(1, (24 - 1), 1, 0, comp(517, 159));  // bank:tabs_scroll_up
    IF_SETSIZE(1, (24 - 1), 1, 0, comp(517, 162));  // bank:tabs_scroll_down
    IF_SETPOSITION(0, 0, 0, 2, comp(517, 162));  // bank:tabs_scroll_down
    IF_SETOP(1, "Scroll Up", comp(517, 159));  // bank:tabs_scroll_up
    IF_SETOP(1, "Scroll Down", comp(517, 162));  // bank:tabs_scroll_down
    IF_SETSIZE(18, 11, 0, 0, comp(517, 161));  // bank:tabs_scroll_up_icon
    IF_SETSIZE(18, 11, 0, 0, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETGRAPHIC(8085 as graphic, comp(517, 161));  // bank:tabs_scroll_up_icon
    IF_SETGRAPHIC(8085 as graphic, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETVFLIP(1, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETGRAPHIC(0 as graphic, comp(517, 164));  // bank:tabs_scroll_down_icon
    IF_SETSIZE(38, 48, 0, 0, comp(517, 165));  // bank:tabs_all_button
    return;
}