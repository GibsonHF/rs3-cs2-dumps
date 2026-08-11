//
function script10145(): void {
    if ((varbitclient_23079 == 1)) {
        printmessage("You can't change that while your broadcast is active");
        return;
    };
    IF_SETHIDE(false, comp(232, 138));  // toplevel_v2_parent_suboverlay_twitch:checkbox_selected_disabled_layer
    IF_SETHIDE(true, comp(232, 129));  // toplevel_v2_parent_suboverlay_twitch:webcam_list_layer
    varclient_4291 = "";
    varclient_4292 = -1;
    IF_SETHIDE(true, comp(232, 132));  // toplevel_v2_parent_suboverlay_twitch:webcam_name_right
    IF_SETHIDE(true, comp(232, 133));  // toplevel_v2_parent_suboverlay_twitch:webcam_name_left
    return;
}