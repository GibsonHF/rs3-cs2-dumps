//
function script10136(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    if ((int0 == comp(232, 123))) {  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_layer
        if ((varbitclient_23068 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            return;
        };
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    } else if ((int0 == comp(232, 137))) {  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_layer
        if ((varbitclient_23069 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            IF_SETHIDE(false, comp(232, 129));  // toplevel_v2_parent_suboverlay_twitch:webcam_list_layer
        } else {
            IF_SETHIDE(true, int0);
            IF_SETHIDE(false, int1);
            IF_SETHIDE(true, comp(232, 129));  // toplevel_v2_parent_suboverlay_twitch:webcam_list_layer
            script10150(0);
        };
    } else if ((int0 == comp(232, 181))) {  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_flip_vertical
        if ((varbitclient_23250 > 0)) {
            int3 = 1;
        };
        if ((varbitclient_23249 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            TTV_WEBCAM_FLIP(int3, 1);
            return;
        };
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
        TTV_WEBCAM_FLIP(int3, 0);
    } else if ((int0 == comp(232, 185))) {  // toplevel_v2_parent_suboverlay_twitch:webcam_checkbox_selected_flip_horizontal
        if ((varbitclient_23249 > 0)) {
            int2 = 1;
        };
        if ((varbitclient_23250 == 1)) {
            IF_SETHIDE(false, int0);
            IF_SETHIDE(true, int1);
            TTV_WEBCAM_FLIP(1, int2);
            return;
        };
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
        TTV_WEBCAM_FLIP(0, int2);
    };
    return;
}