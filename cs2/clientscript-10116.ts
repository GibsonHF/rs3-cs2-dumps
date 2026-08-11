//
function script10116(): void {
    var string0 = varclient_4285;
    var string1 = varclient_4287;
    varclient_4287 = "";
    IF_SETTEXT("", comp(232, 93));  // toplevel_v2_parent_suboverlay_twitch:login_password
    var int0 = 0;
    if (((STRING_LENGTH(string0) > 0) && (STRING_LENGTH(string1) > 0))) {
        int0 = TTV_LOGIN(string0, string1);
        IF_SETHIDE(true, comp(232, 64));  // toplevel_v2_parent_suboverlay_twitch:api_check
        IF_SETHIDE(true, comp(232, 72));  // toplevel_v2_parent_suboverlay_twitch:twitch_login
        IF_SETHIDE(true, comp(232, 73));  // toplevel_v2_parent_suboverlay_twitch:twitch_setup
        IF_SETHIDE(true, comp(232, 66));  // toplevel_v2_parent_suboverlay_twitch:autosetup
        IF_SETHIDE(false, comp(232, 69));  // toplevel_v2_parent_suboverlay_twitch:logging_in
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    return;
}