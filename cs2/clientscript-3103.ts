//
function script3103(): void {
    var int0 = 0;
    if ((varbitclient_23064 == 1)) {
        int0 = TTV_LOGOUT();
        if ((int0 == 0)) {
            varbitclient_23064 = 0;
            script3147();
            script10118();
            script7698();
            IF_SETHIDE(false, comp(232, 38));  // toplevel_v2_parent_suboverlay_twitch:logout_btn_disable
            IF_SETHIDE(true, comp(232, 37));  // toplevel_v2_parent_suboverlay_twitch:logout_btn
            printmessage("You have successfully logged out from Twitch.");
            IF_SETONTIMER(callback(), comp(231, 4));  // twitch_stream:webcam_buttons
            IF_SETHIDE(true, comp(231, 0));  // twitch_stream:quality_warning
            IF_SETHIDE(true, comp(231, 1));  // twitch_stream:quality_error
            IF_SETHIDE(true, comp(231, 6));  // twitch_stream:countdown_text
            SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        };
    } else {
        printmessage("You are not logged in to Twitch.");
        SOUND_VORBIS_VOLUME(10046 as vorbis, 1, 0, 150);
    };
    return;
}