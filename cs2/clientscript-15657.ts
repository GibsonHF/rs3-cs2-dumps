//
function script15657(): void {
    var int0 = comp(744, 236);  // loginscreen:toggle_remember_username
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(911, 8);  // lobbyscreen_pane_options:audio_cross
            break;
        }
        case 744: {
            if ((script6431() == 1)) {
                int0 = comp(744, 219);  // loginscreen:graphics_btn
            };
            break;
        }
    };
    if ((DETAILGET_LOGINVOL() > 0)) {
        IF_SETHIDE(true, int0);
    } else {
        IF_SETHIDE(false, int0);
    };
    return;
}