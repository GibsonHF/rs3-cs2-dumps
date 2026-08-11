//
function script15655(): void {
    if ((IF_GETHIDE(comp(744, 208)) == true)) {  // loginscreen:mobile_settings_bg
        IF_SETHIDE(false, comp(744, 208));  // loginscreen:mobile_settings_bg
    } else {
        IF_SETHIDE(true, comp(744, 208));  // loginscreen:mobile_settings_bg
    };
    return;
}