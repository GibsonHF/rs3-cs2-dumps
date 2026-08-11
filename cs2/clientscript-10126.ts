//
function script10126(): void {
    if ((varbitclient_23079 == 1)) {
        IF_SETGRAPHIC(23644 as graphic, comp(231, 15));  // twitch_stream:stream_status
    } else {
        IF_SETHIDE(true, comp(231, 5));  // twitch_stream:live_status
        IF_SETGRAPHIC(23641 as graphic, comp(231, 15));  // twitch_stream:stream_status
    };
    var int0 = IF_GETWIDTH(comp(231, 4));  // twitch_stream:webcam_buttons
    if ((PARAWIDTH(CHAT_PLAYERNAME(), 2000, 28 as fontmetrics) > (int0 - (95 + PARAWIDTH(IF_GETTEXT(comp(231, 13)), 2000, 28 as fontmetrics))))) {  // twitch_stream:viewer_count
        if (((IF_GETHIDE(comp(231, 11)) == false) && (varbitclient_23071 == 0))) {  // twitch_stream:twitch_player_name
            IF_SETTRANS(0, comp(231, 11));  // twitch_stream:twitch_player_name
            IF_SETONTIMER(callback(script10127, 15138827, 1), comp(231, 11));  // twitch_stream:twitch_player_name
        };
    } else if ((IF_GETHIDE(comp(231, 11)) == true)) {  // twitch_stream:twitch_player_name
        IF_SETTRANS(255, comp(231, 11));  // twitch_stream:twitch_player_name
        IF_SETHIDE(false, comp(231, 11));  // twitch_stream:twitch_player_name
        IF_SETONTIMER(callback(script10127, 15138827, 0), comp(231, 11));  // twitch_stream:twitch_player_name
    };
    return;
}