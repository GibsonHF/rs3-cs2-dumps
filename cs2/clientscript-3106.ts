//
function script3106(): void {
    var int0 = TTV_LIBRARY_REQUEST();
    var int1 = 0;
    if ((int0 == 3)) {
        IF_SETTEXT("Oops! Something went wrong. Please close the interface and try again in 5 minutes.", comp(232, 68));  // toplevel_v2_parent_suboverlay_twitch:twitch_dll_text
        script3147();
    } else if ((int0 == 100)) {
        IF_SETONTIMER(callback(), comp(232, 36));  // toplevel_v2_parent_suboverlay_twitch:main_layer
        script10118();
    } else {
        IF_SETTEXT("Fetching streaming updates...", comp(232, 68));  // toplevel_v2_parent_suboverlay_twitch:twitch_dll_text
        script9528(15204417, int0);
    };
    return;
}