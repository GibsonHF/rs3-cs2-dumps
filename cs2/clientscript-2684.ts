//
function script2684(): void {
    CC_DELETEALL(comp(324, 29));  // graphics_options_v2_client_mobile:non_adv_options_build
    CC_DELETEALL(comp(324, 30));  // graphics_options_v2_client_mobile:non_adv_options_click
    CC_DELETEALL(comp(324, 31));  // graphics_options_v2_client_mobile:non_adv_options_value
    if (((varclient_6502 < 0) || (varclient_6502 > 1))) {
        varclient_6502 = 0;
    };
    var int0 = 0;
    int0 = script2970(21233693, 21233694, 21233695, 1292, 0, int0, IF_GETWIDTH(comp(324, 19)));  // graphics_options_v2_client_mobile:non_adv_options
    var int1 = comp(324, 19);  // graphics_options_v2_client_mobile:non_adv_options
    IF_SETSIZE(16, int0, 1, 0, int1);
    IF_SETPOSITION(0, ((5 + IF_GETY(int1)) + IF_GETHEIGHT(int1)), 0, 0, comp(324, 20));  // graphics_options_v2_client_mobile:advanced_toggle_layer
    int0 = IF_GETWIDTH(comp(324, 25));  // graphics_options_v2_client_mobile:info_wrapper
    int1 = comp(324, 27);  // graphics_options_v2_client_mobile:advanced_text
    var int2 = STRINGWIDTH(IF_GETTEXT(int1), IF_GETFONTMETRICS(int1));
    IF_SETSIZE(int2, IF_GETHEIGHT(int1), 0, 0, int1);
    int2 = (int2 + 18);
    int2 = (int2 + 5);
    int0 = (int0 / 2);
    int2 = (int2 / 2);
    int0 = (int0 - int2);
    IF_SETPOSITION(int0, IF_GETY(int1), 0, 0, int1);
    IF_SETPOSITION(((5 + IF_GETX(int1)) + IF_GETWIDTH(int1)), IF_GETY(comp(324, 28)), 0, 0, comp(324, 28));  // graphics_options_v2_client_mobile:adv_checkbox_build
    script2685();
    int1 = comp(324, 20);  // graphics_options_v2_client_mobile:advanced_toggle_layer
    int0 = ((5 + IF_GETY(int1)) + IF_GETHEIGHT(int1));
    if ((int0 > IF_GETHEIGHT(comp(324, 13)))) {  // graphics_options_v2_client_mobile:scrolling_layer
        IF_SETHIDE(false, comp(324, 14));  // graphics_options_v2_client_mobile:scrollbar_layer
        IF_SETSCROLLSIZE(0, int0, comp(324, 13));  // graphics_options_v2_client_mobile:scrolling_layer
        script7791(21233678, 21233677);
    };
    script2710();
    return;
}