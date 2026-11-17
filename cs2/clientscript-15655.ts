//
function script15655(): void {
    if ((IF_GETHIDE(comp(744, 208)) == true)) {  // loginscreen:mobile_settings_bg
        IF_SETHIDE(false, comp(744, 208));  // loginscreen:mobile_settings_bg
        if ((PLATFORMTYPE() == 0)) {
            IF_SETENABLED(true, comp(744, 243));  // loginscreen:tncs_bottom_layer_popup
            IF_SETHIDE(false, comp(744, 243));  // loginscreen:tncs_bottom_layer_popup
            IF_SETPOSITION(0, 240, 1, 0, comp(744, 243));  // loginscreen:tncs_bottom_layer_popup
            IF_SETPOSITION(0, 294, 1, 0, comp(744, 245));  // loginscreen:tncs_bottom_content
            IF_SETSIZE(300, 333, 0, 0, comp(744, 227));  // loginscreen:background_dropdown
        } else {
            IF_SETENABLED(false, comp(744, 243));  // loginscreen:tncs_bottom_layer_popup
            IF_SETHIDE(true, comp(744, 243));  // loginscreen:tncs_bottom_layer_popup
            IF_SETPOSITION(0, 240, 1, 0, comp(744, 245));  // loginscreen:tncs_bottom_content
            IF_SETSIZE(300, 279, 0, 0, comp(744, 227));  // loginscreen:background_dropdown
        };
    } else {
        IF_SETHIDE(true, comp(744, 208));  // loginscreen:mobile_settings_bg
    };
    return;
}