//
function script15696(): void {
    if ((STRING_LENGTH(varclient_2576) > 0)) {
        if ((STRING_LENGTH(varclient_2577) > 0)) {
            IF_SETHIDE(true, comp(744, 134));  // loginscreen:login_button_disabled
        } else {
            IF_SETHIDE(false, comp(744, 134));  // loginscreen:login_button_disabled
        };
    } else {
        IF_SETHIDE(false, comp(744, 134));  // loginscreen:login_button_disabled
    };
    return;
}