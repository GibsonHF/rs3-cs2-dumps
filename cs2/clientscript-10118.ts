//
function script10118(): void {
    var int0 = TTV_LIBRARY_GETSTATE();
    IF_SETHIDE(true, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
    IF_SETHIDE(true, comp(232, 72));  // toplevel_v2_parent_suboverlay_twitch:twitch_login
    IF_SETHIDE(true, comp(232, 73));  // toplevel_v2_parent_suboverlay_twitch:twitch_setup
    IF_SETHIDE(true, comp(232, 69));  // toplevel_v2_parent_suboverlay_twitch:logging_in
    IF_SETHIDE(true, comp(232, 64));  // toplevel_v2_parent_suboverlay_twitch:api_check
    IF_SETHIDE(true, comp(232, 66));  // toplevel_v2_parent_suboverlay_twitch:autosetup
    IF_SETHIDE(true, comp(232, 17));  // toplevel_v2_parent_suboverlay_twitch:install_text_layer
    IF_SETHIDE(true, comp(232, 22));  // toplevel_v2_parent_suboverlay_twitch:stream_list_layer
    if ((HAS_NXT() == 1)) {
        IF_SETTEXT("Twitch integration won't work in NXT.", comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
        IF_SETHIDE(false, comp(232, 17));  // toplevel_v2_parent_suboverlay_twitch:install_text_layer
        IF_SETHIDE(false, comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
        IF_SETHIDE(true, comp(232, 20));  // toplevel_v2_parent_suboverlay_twitch:windows_install_text
        IF_SETHIDE(true, comp(232, 21));  // toplevel_v2_parent_suboverlay_twitch:mac_install_text
        IF_SETHIDE(true, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
        return;
    };
    if ((USERDETAIL_QUICKCHAT() == 1)) {
        IF_SETTEXT("You can't access this feature.", comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
        IF_SETHIDE(false, comp(232, 17));  // toplevel_v2_parent_suboverlay_twitch:install_text_layer
        IF_SETHIDE(false, comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
        IF_SETHIDE(true, comp(232, 20));  // toplevel_v2_parent_suboverlay_twitch:windows_install_text
        IF_SETHIDE(true, comp(232, 21));  // toplevel_v2_parent_suboverlay_twitch:mac_install_text
        IF_SETHIDE(true, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
        return;
    };
    if (((TTV_HASPREREQUISITES() == 0) && (varbitclient_23076 == 0))) {
        if ((OS_ISWINDOWS() == 1)) {
            IF_SETHIDE(false, comp(232, 20));  // toplevel_v2_parent_suboverlay_twitch:windows_install_text
            IF_SETHIDE(true, comp(232, 21));  // toplevel_v2_parent_suboverlay_twitch:mac_install_text
            IF_SETTEXT("Before you can use Twitch features you must install additional software. Once you have done this, please restart your browser/client.", comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
            IF_SETHIDE(false, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
        } else if ((OS_ISMAC() == 1)) {
            IF_SETHIDE(true, comp(232, 20));  // toplevel_v2_parent_suboverlay_twitch:windows_install_text
            IF_SETHIDE(false, comp(232, 21));  // toplevel_v2_parent_suboverlay_twitch:mac_install_text
            IF_SETTEXT("Before you can use Twitch features you must install additional software. Once you have done this, please restart your browser/client.", comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
            IF_SETHIDE(false, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
        } else if ((OS_ISLINUX() == 1)) {
            IF_SETHIDE(true, comp(232, 20));  // toplevel_v2_parent_suboverlay_twitch:windows_install_text
            IF_SETHIDE(true, comp(232, 21));  // toplevel_v2_parent_suboverlay_twitch:mac_install_text
            IF_SETTEXT("Twitch integration requires additional software that is not available on Linux.", comp(232, 19));  // toplevel_v2_parent_suboverlay_twitch:install_text_body
            IF_SETHIDE(true, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
            return;
        };
        IF_SETHIDE(false, comp(232, 76));  // toplevel_v2_parent_suboverlay_twitch:start_here
        IF_SETTEXT("Before you begin:", comp(232, 23));  // toplevel_v2_parent_suboverlay_twitch:right_panel_title
        IF_SETHIDE(false, comp(232, 17));  // toplevel_v2_parent_suboverlay_twitch:install_text_layer
        return;
    };
    if ((int0 != 2)) {
        IF_SETONTIMER(callback(script3106), comp(232, 36));  // toplevel_v2_parent_suboverlay_twitch:main_layer
        IF_SETHIDE(false, comp(232, 64));  // toplevel_v2_parent_suboverlay_twitch:api_check
        return;
    };
    IF_SETTEXT("Watch current broadcasts", comp(232, 23));  // toplevel_v2_parent_suboverlay_twitch:right_panel_title
    IF_SETHIDE(true, comp(232, 17));  // toplevel_v2_parent_suboverlay_twitch:install_text_layer
    IF_SETHIDE(false, comp(232, 22));  // toplevel_v2_parent_suboverlay_twitch:stream_list_layer
    var int1 = TTV_LOGIN_GETSTATE();
    var int2 = 0;
    if ((int1 == 0)) {
        IF_SETHIDE(true, comp(232, 73));  // toplevel_v2_parent_suboverlay_twitch:twitch_setup
        IF_SETHIDE(false, comp(232, 72));  // toplevel_v2_parent_suboverlay_twitch:twitch_login
        if ((STRING_LENGTH(varclient_4285) > 0)) {
            IF_SETTEXT(varclient_4285, 15204439);
        };
        varclient_4287 = "";
        script10121(15204439, -1, -1, 15204438);
        IF_SETTEXT("", comp(232, 93));  // toplevel_v2_parent_suboverlay_twitch:login_password
        IF_SETHIDE(false, comp(232, 38));  // toplevel_v2_parent_suboverlay_twitch:logout_btn_disable
        IF_SETHIDE(true, comp(232, 37));  // toplevel_v2_parent_suboverlay_twitch:logout_btn
    } else {
        IF_SETHIDE(false, comp(232, 73));  // toplevel_v2_parent_suboverlay_twitch:twitch_setup
        IF_SETHIDE(true, comp(232, 72));  // toplevel_v2_parent_suboverlay_twitch:twitch_login
        script10130();
        IF_SETHIDE(true, comp(232, 38));  // toplevel_v2_parent_suboverlay_twitch:logout_btn_disable
        IF_SETHIDE(false, comp(232, 37));  // toplevel_v2_parent_suboverlay_twitch:logout_btn
    };
    int2 = TTV_LIVESTREAMS_UPDATE();
    return;
}