//
function script10153(int0: number): void {
    var int1 = 0;
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        IF_SETHIDE(false, comp(231, 6));  // twitch_stream:countdown_text
        IF_SETONTIMER(callback(), comp(231, 4));  // twitch_stream:webcam_buttons
        IF_SETHIDE(true, comp(231, 5));  // twitch_stream:live_status
        var int0 = (int0 - 1);
        if ((int0 >= 0)) {
            IF_SETONTIMER(callback(script10153, int0), comp(231, 4));  // twitch_stream:webcam_buttons
            IF_SETTEXT(inttostring(int0, 10), comp(231, 6));  // twitch_stream:countdown_text
        } else {
            IF_SETONTIMER(callback(), comp(231, 4));  // twitch_stream:webcam_buttons
            IF_SETTEXT("initialising", comp(231, 6));  // twitch_stream:countdown_text
            int1 = script3110();
            IF_SETHIDE(true, comp(231, 6));  // twitch_stream:countdown_text
            if ((int1 == 1)) {
                IF_SETONTIMER(callback(script10154), comp(231, 7));  // twitch_stream:quality_listener_layer
                IF_SETHIDE(false, comp(231, 5));  // twitch_stream:live_status
                IF_SETTEXT("Stop Broadcast", comp(232, 150));  // toplevel_v2_parent_suboverlay_twitch:start_broadcast_button
            } else {
                varbitclient_23079 = 0;
                IF_SETTEXT("Start Broadcast", comp(232, 150));  // toplevel_v2_parent_suboverlay_twitch:start_broadcast_button
                IF_SETGRAPHIC(23641 as graphic, comp(231, 15));  // twitch_stream:stream_status
            };
        };
    };
    return;
}