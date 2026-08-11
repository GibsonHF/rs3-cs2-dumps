//
function script7841(): void {
    switch (varclient_4194) {
        case 5: {
            IF_SETTEXT("Quickly sign-in to your existing account by linking with Google", comp(744, 80));  // loginscreen:oauth2_link_desc
            IF_SETHIDE(false, comp(744, 72));  // loginscreen:oauth2_link_buttons
            break;
        }
        case 6: {
            IF_SETTEXT("Quickly sign-in to your existing account by linking with Apple", comp(744, 80));  // loginscreen:oauth2_link_desc
            IF_SETHIDE(false, comp(744, 72));  // loginscreen:oauth2_link_buttons
            break;
        }
        default: {
            IF_SETHIDE(false, comp(744, 63));  // loginscreen:oauth2_selection_panel
            return;
        }
    };
    script7852(48758865, 0, 0, 0, 0, 0, 0, 0, 1, 1, 17061, "Link Account");
    CC_SETONBUTTONCLICK(callback(script7842, 2));
    return;
}