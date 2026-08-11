//
function script14786(): void {
    var int0 = IF_GETWIDTH(comp(1122, 41));  // hcape_interface:customisation_layer
    IF_SETPOSITION(int0, 0, 0, 0, comp(1122, 46));  // hcape_interface:tabs_content_main
    IF_SETPOSITION((int0 * 2), 0, 0, 0, comp(1122, 47));  // hcape_interface:tabs_content_crest
    IF_SETSCROLLSIZE((int0 * 3), 0, comp(1122, 60));  // hcape_interface:scroller
    return;
}