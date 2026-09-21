//
function script15687(int0: number): void {
    IF_SETHIDE(true, comp(744, 143));  // loginscreen:auth_layer
    IF_SETHIDE(true, comp(744, 83));  // loginscreen:single_sign_on
    IF_SETHIDE(true, comp(744, 89));  // loginscreen:login
    IF_SETHIDE(true, comp(744, 169));  // loginscreen:login_progress_popup
    IF_SETHIDE(true, comp(744, 62));  // loginscreen:oauth2_layer
    IF_SETHIDE(true, comp(744, 168));  // loginscreen:steam
    switch (int0) {
        case 14: {
            IF_SETHIDE(false, comp(744, 143));  // loginscreen:auth_layer
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
            IF_SETHIDE(false, comp(744, 169));  // loginscreen:login_progress_popup
            break;
        }
        default: {
            if ((PLATFORMTYPE() == 1)) {
                IF_SETHIDE(false, comp(744, 168));  // loginscreen:steam
            } else if ((script15214() == 1)) {
                IF_SETHIDE(false, comp(744, 62));  // loginscreen:oauth2_layer
            } else {
                IF_SETHIDE(false, comp(744, 89));  // loginscreen:login
            };
            break;
        }
    };
    return;
}