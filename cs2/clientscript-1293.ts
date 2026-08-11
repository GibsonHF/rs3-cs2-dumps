//
function script1293(): void {
    IF_SETHIDE(true, comp(64, 86));  // no_displayname_v2:confirm_button_disabled
    IF_SETHIDE(true, comp(64, 67));  // no_displayname_v2:random_name_button_graphic_disabled
    IF_SETTEXT("confirm", comp(64, 90));  // no_displayname_v2:displayname_confirm_button_text
    IF_SETTEXT("randomise", comp(64, 71));  // no_displayname_v2:random_name_button_text
    IF_SETONKEY(callback(script1252, -2147483640, -2147483639, 0), comp(64, 35));  // no_displayname_v2:name_input_group
    IF_SETONCLICK(callback(script3217, -2147483647, 4194354, 4194355, 4194356, 111), comp(64, 51));  // no_displayname_v2:name_input_text
    return;
}