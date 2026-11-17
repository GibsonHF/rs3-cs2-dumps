//
function script15687(int0: number): void {
    IF_SETHIDE(true, comp(744, 147));  // loginscreen:auth_input_group_graphics
    IF_SETHIDE(true, comp(744, 83));  // loginscreen:single_sign_on
    IF_SETHIDE(true, comp(744, 93));  // loginscreen:username_input_group_graphic
    IF_SETHIDE(true, comp(744, 173));  // loginscreen:login_progress_popup_password
    IF_SETHIDE(true, comp(744, 62));  // loginscreen:oauth2_layer
    IF_SETHIDE(true, comp(744, 172));  // loginscreen:login_progress_popup_username_text
    switch (int0) {
        case 14: {
            IF_SETHIDE(false, comp(744, 147));  // loginscreen:auth_input_group_graphics
            break;
        }
        case 13: {
            IF_SETHIDE(false, comp(744, 83));  // loginscreen:single_sign_on
            break;
        }
        case 16: {
            IF_SETHIDE(false, comp(744, 62));  // loginscreen:oauth2_layer
            break;
        }
        case 102: {
            IF_SETHIDE(false, comp(744, 173));  // loginscreen:login_progress_popup_password
            break;
        }
        default: {
            if ((PLATFORMTYPE() == 1)) {
                IF_SETHIDE(false, comp(744, 172));  // loginscreen:login_progress_popup_username_text
            } else if ((script15214() == 1)) {
                IF_SETHIDE(false, comp(744, 62));  // loginscreen:oauth2_layer
            } else {
                IF_SETHIDE(false, comp(744, 93));  // loginscreen:username_input_group_graphic
            };
            break;
        }
    };
    return;
}