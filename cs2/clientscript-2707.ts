//
function script2707(): void {
    CC_DELETEALL(comp(324, 43));  // graphics_options_v2_client_mobile:min_button_build
    CC_DELETEALL(comp(324, 42));  // graphics_options_v2_client_mobile:rec_button_build
    IF_SETHIDE(false, comp(324, 45));  // graphics_options_v2_client_mobile:rec_button_click
    IF_SETHIDE(true, comp(324, 16));  // graphics_options_v2_client_mobile:prevent_click_through_layer
    IF_SETHIDE(true, comp(324, 15));  // graphics_options_v2_client_mobile:auto_setup_in_progress
    var int0 = comp(324, 7);  // graphics_options_v2_client_mobile:topbar_bg_layer
    script6204(int0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, 1, 28680);
    int0 = comp(324, 18);  // graphics_options_v2_client_mobile:topbar_desc_bg_layer
    script6204(int0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, 1, 28680);
    var int1 = 0;
    var int2 = 0;
    if ((AUTOSETUP_GETLEVEL() == 2)) {
        int1 = 1;
    } else if (((varclient_6503 == 0) && (AUTOSETUP_GETLEVEL() == 0))) {
        int2 = 1;
    };
    script13972(21233707, -1, 41838, "POWER SAVE", int1);
    script13972(21233706, -1, 41838, "BALANCED", varclient_6503);
    if ((int1 == 0)) {
        IF_SETTRANS(128, comp(324, 34));  // graphics_options_v2_client_mobile:min_desc_graphic
        IF_SETTRANS(128, comp(324, 35));  // graphics_options_v2_client_mobile:min_desc_text
    } else {
        IF_SETTRANS(0, comp(324, 34));  // graphics_options_v2_client_mobile:min_desc_graphic
        IF_SETTRANS(0, comp(324, 35));  // graphics_options_v2_client_mobile:min_desc_text
    };
    if ((varclient_6503 == 0)) {
        IF_SETTRANS(128, comp(324, 38));  // graphics_options_v2_client_mobile:rec_desc_graphic
        IF_SETTRANS(128, comp(324, 39));  // graphics_options_v2_client_mobile:rec_desc_text
    } else {
        IF_SETTRANS(0, comp(324, 38));  // graphics_options_v2_client_mobile:rec_desc_graphic
        IF_SETTRANS(0, comp(324, 39));  // graphics_options_v2_client_mobile:rec_desc_text
    };
    if ((int2 == 0)) {
        IF_SETTEXT("Your settings have not been customised", comp(324, 41));  // graphics_options_v2_client_mobile:adv_desc_text
    } else {
        IF_SETTEXT("Your settings have been customised", comp(324, 41));  // graphics_options_v2_client_mobile:adv_desc_text
    };
    script1191(21233676, int2, 1);
    return;
}