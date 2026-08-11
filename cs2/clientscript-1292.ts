//
function script1292(int0: number): void {
    IF_SETHIDE(false, comp(64, 86));  // no_displayname_v2:confirm_button_disabled
    IF_SETHIDE(false, comp(64, 67));  // no_displayname_v2:random_name_button_graphic_disabled
    if ((int0 == 1)) {
        IF_SETTEXT("please wait...", comp(64, 90));  // no_displayname_v2:displayname_confirm_button_text
    } else {
        IF_SETTEXT("generating...", comp(64, 71));  // no_displayname_v2:random_name_button_text
    };
    IF_SETONKEY(callback(), comp(64, 35));  // no_displayname_v2:name_input_group
    IF_SETONCLICK(callback(), comp(64, 51));  // no_displayname_v2:name_input_text
    return;
}