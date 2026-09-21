//
function script15657(): void {
    var int0 = comp(744, 232);  // loginscreen:audio_cross
    switch (IF_GETTOP()) {
        case 906: {
            int0 = comp(911, 8);  // lobbyscreen_pane_options:audio_cross
            break;
        }
        case 744: {
            if ((script6431() == 1)) {
                int0 = comp(744, 215);  // loginscreen:mobile_mute_audio_cross
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