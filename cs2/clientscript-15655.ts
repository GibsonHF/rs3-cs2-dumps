//
function script15655(): void {
    if ((IF_GETHIDE(comp(744, 204)) == true)) {  // loginscreen:settings_layer
        IF_SETHIDE(false, comp(744, 204));  // loginscreen:settings_layer
    } else {
        IF_SETHIDE(true, comp(744, 204));  // loginscreen:settings_layer
    };
    return;
}