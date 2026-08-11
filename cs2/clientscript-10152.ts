//
function script10152(): void {
    var int0 = 0;
    if ((varbitclient_23079 == 1)) {
        TTV_STREAM_STOP();
        int0 = [];
        IF_SETHIDE(true, comp(231, 5));  // twitch_stream:live_status
        IF_SETTEXT("Start Broadcast", comp(232, 150));  // toplevel_v2_parent_suboverlay_twitch:start_broadcast_button
        IF_SETHIDE(true, comp(231, 6));  // twitch_stream:countdown_text
        varbitclient_23079 = 0;
        printmessage("Broadcast stopped.");
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        script7698();
        IF_SETGRAPHIC(23641 as graphic, comp(231, 15));  // twitch_stream:stream_status
        IF_SETONTIMER(callback(), comp(231, 7));  // twitch_stream:quality_listener_layer
        IF_SETONTIMER(callback(), comp(231, 4));  // twitch_stream:webcam_buttons
        IF_SETHIDE(true, comp(231, 0));  // twitch_stream:quality_warning
        IF_SETHIDE(true, comp(231, 1));  // twitch_stream:quality_error
        IF_SETHIDE(true, comp(232, 126));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_deselected_disabled_layer
        IF_SETHIDE(true, comp(232, 124));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_disabled_layer
    } else {
        varbitclient_23079 = 1;
        IF_SETHIDE(true, comp(231, 5));  // twitch_stream:live_status
        script8290(1);
        script7698();
        IF_SETGRAPHIC(23644 as graphic, comp(231, 15));  // twitch_stream:stream_status
        IF_SETONTIMER(callback(script10153, 10), comp(231, 4));  // twitch_stream:webcam_buttons
        if ((varbitclient_23068 > 0)) {
            IF_SETHIDE(false, comp(232, 124));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_selected_disabled_layer
        } else {
            IF_SETHIDE(false, comp(232, 126));  // toplevel_v2_parent_suboverlay_twitch:voice_checkbox_deselected_disabled_layer
        };
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    };
    return;
}