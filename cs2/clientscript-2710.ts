//
function script2710(): void {
    script2707();
    CC_DELETEALL(comp(324, 47));  // graphics_options_v2_client_mobile:adv_options_build
    CC_DELETEALL(comp(324, 48));  // graphics_options_v2_client_mobile:adv_options_click
    CC_DELETEALL(comp(324, 49));  // graphics_options_v2_client_mobile:adv_options_value
    IF_SETHIDE(true, comp(324, 21));  // graphics_options_v2_client_mobile:adv_options
    var int0 = comp(-1, 65535);
    var int1 = 0;
    if ((varclient_6502 == 1)) {
        IF_SETPOSITION(0, ((5 + IF_GETY(comp(324, 20) /*graphics_options_v2_client_mobile:advanced_toggle_layer*/)) + IF_GETHEIGHT(comp(324, 20) /*graphics_options_v2_client_mobile:advanced_toggle_layer*/)), 0, 0, comp(324, 21) /*graphics_options_v2_client_mobile:adv_options*/);
        int0 = comp(324, 23);  // graphics_options_v2_client_mobile:warning_text
        int1 = script7593(IF_GETTEXT(int0), IF_GETWIDTH(int0), IF_GETFONTMETRICS(int0), -1);
        IF_SETSIZE(0, (3 + int1), 1, 0, comp(324, 22));  // graphics_options_v2_client_mobile:warning_layer
        IF_SETPOSITION(0, (5 + IF_GETHEIGHT(comp(324, 22) /*graphics_options_v2_client_mobile:warning_layer*/)), 0, 0, comp(324, 46) /*graphics_options_v2_client_mobile:warning_controls*/);
        int1 = script2970(21233711, 21233712, 21233713, 1293, 0, 0, IF_GETWIDTH(comp(324, 21)));  // graphics_options_v2_client_mobile:adv_options
        IF_SETSIZE(0, int1, 1, 0, comp(324, 46));  // graphics_options_v2_client_mobile:warning_controls
        IF_SETSIZE(16, (IF_GETY(comp(324, 46) /*graphics_options_v2_client_mobile:warning_controls*/) + IF_GETHEIGHT(comp(324, 46) /*graphics_options_v2_client_mobile:warning_controls*/)), 1, 0, comp(324, 21) /*graphics_options_v2_client_mobile:adv_options*/);
        int1 = (IF_GETY(comp(324, 21)) + IF_GETHEIGHT(comp(324, 21)));  // graphics_options_v2_client_mobile:adv_options
        IF_SETSCROLLSIZE(0, int1, comp(324, 13));  // graphics_options_v2_client_mobile:scrolling_layer
        script7791(21233678, 21233677);
        IF_SETHIDE(false, comp(324, 21));  // graphics_options_v2_client_mobile:adv_options
        IF_SETHIDE(false, comp(324, 14));  // graphics_options_v2_client_mobile:scrollbar_layer
    } else {
        int0 = comp(324, 20);  // graphics_options_v2_client_mobile:advanced_toggle_layer
        int1 = ((5 + IF_GETY(int0)) + IF_GETHEIGHT(int0));
        IF_SETSCROLLPOS(0, MAX(0, MIN(int1, IF_GETSCROLLY(comp(324, 13)))), comp(324, 13));  // graphics_options_v2_client_mobile:scrolling_layer
        if ((int1 > IF_GETHEIGHT(comp(324, 13)))) {  // graphics_options_v2_client_mobile:scrolling_layer
            IF_SETHIDE(false, comp(324, 14));  // graphics_options_v2_client_mobile:scrollbar_layer
            IF_SETSCROLLSIZE(0, int1, comp(324, 13));  // graphics_options_v2_client_mobile:scrolling_layer
            script7791(21233678, 21233677);
        } else {
            IF_SETHIDE(true, comp(324, 14));  // graphics_options_v2_client_mobile:scrollbar_layer
            IF_SETSCROLLSIZE(0, 0, comp(324, 13));  // graphics_options_v2_client_mobile:scrolling_layer
        };
    };
    return;
}