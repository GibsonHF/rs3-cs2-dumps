//
function script5441(): void {
    IF_SETHIDE(false, comp(1168, 10));  // dom_free:boss_info_layer
    IF_SETHIDE(false, comp(1168, 13));  // dom_free:scroll_layer_boss_info
    IF_SETHIDE(true, comp(1168, 11));  // dom_free:handicaps_info_layer
    IF_SETHIDE(true, comp(1168, 12));  // dom_free:scroll_layer_handicaps
    if ((IF_GETSCROLLHEIGHT(comp(1168, 10)) > IF_GETHEIGHT(comp(1168, 10)))) {  // dom_free:boss_info_layer
        IF_SETHIDE(false, comp(1168, 13));  // dom_free:scroll_layer_boss_info
    };
    IF_SETCOLOUR(16777215, comp(1168, 79));  // dom_free:boss_details_tab_text
    IF_SETCOLOUR(16101953, comp(1168, 78));  // dom_free:handicaps_tab_text
    varclient_1682 = 0;
    return;
}