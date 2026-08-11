//
function script10130(): void {
    var int0 = -1;
    var string0 = "";
    var string1 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    if ((STRING_LENGTH(varclient_4289) < 1)) {
        varclient_4289 = "Broadcast Title";
    };
    IF_SETTEXT(varclient_4289, 15204468);
    varclient_4290 = STRING_LENGTH(varclient_4289);
    script10121(15204468, -1, -1, 15204467);
    script10132();
    if ((varbitclient_23068 > 0)) {
        IF_SETHIDE(false, comp(232, 123));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_layer
        IF_SETHIDE(true, comp(232, 125));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_layer_1
        if ((varbitclient_23079 > 0)) {
            IF_SETHIDE(false, comp(232, 124));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_disabled_layer
        } else {
            IF_SETHIDE(true, comp(232, 124));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_disabled_layer
        };
    } else {
        IF_SETHIDE(true, comp(232, 123));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_layer
        IF_SETHIDE(false, comp(232, 125));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_layer_1
        if ((varbitclient_23079 > 0)) {
            IF_SETHIDE(false, comp(232, 126));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_deselected_disabled_layer
        } else {
            IF_SETHIDE(true, comp(232, 126));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_deselected_disabled_layer
        };
    };
    if ((varbitclient_23249 > 0)) {
        IF_SETHIDE(false, comp(232, 181));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_flip_vertical
        IF_SETHIDE(true, comp(232, 183));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_flip_vertical
        IF_SETHIDE(true, comp(232, 182));  // toplevel_v2_parent_suboverlay_twitch:checkbox_selected_disabled_flip_vertical
    } else {
        IF_SETHIDE(true, comp(232, 181));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_flip_vertical
        IF_SETHIDE(false, comp(232, 183));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_flip_vertical
        IF_SETHIDE(true, comp(232, 184));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_disabled_flip_vertical
    };
    if ((varbitclient_23250 > 0)) {
        IF_SETHIDE(false, comp(232, 185));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_flip_horizontal
        IF_SETHIDE(true, comp(232, 187));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_flip_horizontal
        IF_SETHIDE(true, comp(232, 186));  // toplevel_v2_parent_suboverlay_twitch:checkbox_selected_disabled_flip_horizontal
    } else {
        IF_SETHIDE(true, comp(232, 185));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_flip_horizontal
        IF_SETHIDE(false, comp(232, 187));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_flip_horizontal
        IF_SETHIDE(true, comp(232, 188));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_disabled_flip_horizontal
    };
    if ((STRING_LENGTH(varclient_4291) > 0)) {
        IF_SETHIDE(false, comp(232, 137));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_layer
        [int0, string0, string1] = TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(varclient_4291);
        if ((int0 != -1)) {
            [int3, int4, int5, int6, int7] = TTV_WEBCAM_GETCAP_BYUNIQUEID(int0, varclient_4292);
            IF_SETTEXT(string1, comp(232, 131));  // toplevel_v2_parent_suboverlay_twitch:webcam_name
            IF_SETHIDE(true, comp(232, 138));  // toplevel_v2_parent_suboverlay_twitch:checkbox_selected_disabled_layer
            IF_SETHIDE(false, comp(232, 129));  // toplevel_v2_parent_suboverlay_twitch:webcam_list_layer
            IF_SETTEXT(`${inttostring(int5, 10)} x ${inttostring(int6, 10)}, framerate: ${inttostring(int7, 10)}`, comp(232, 135));  // toplevel_v2_parent_suboverlay_twitch:webcam_options
            int2 = TTV_WEBCAM_GETDEVICE_COUNT();
            if ((int2 > 1)) {
                IF_SETHIDE(false, comp(232, 132));  // toplevel_v2_parent_suboverlay_twitch:webcam_name_right
                IF_SETHIDE(false, comp(232, 133));  // toplevel_v2_parent_suboverlay_twitch:webcam_name_left
            } else {
                IF_SETHIDE(true, comp(232, 132));  // toplevel_v2_parent_suboverlay_twitch:webcam_name_right
                IF_SETHIDE(true, comp(232, 133));  // toplevel_v2_parent_suboverlay_twitch:webcam_name_left
            };
        };
    };
    if ((varbitclient_23069 > 0)) {
        IF_SETHIDE(false, comp(232, 129));  // toplevel_v2_parent_suboverlay_twitch:webcam_list_layer
        IF_SETHIDE(true, comp(232, 139));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_layer
        IF_SETHIDE(false, comp(232, 137));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(232, 129));  // toplevel_v2_parent_suboverlay_twitch:webcam_list_layer
        IF_SETHIDE(false, comp(232, 139));  // toplevel_v2_parent_suboverlay_twitch:checkbox_deselected_layer
        IF_SETHIDE(true, comp(232, 137));  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_layer
    };
    if ((varbitclient_23079 > 0)) {
        IF_SETTEXT("Stop Broadcast", comp(232, 150));  // toplevel_v2_parent_suboverlay_twitch:start_broadcast_button
    };
    script7698();
    return;
}