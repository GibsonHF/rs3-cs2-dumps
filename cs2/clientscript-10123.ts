//
function script10123(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        if ((TTV_STREAM_GETSTATE() == 0)) {
            IF_SETONTIMER(callback(), comp(231, 13));  // twitch_stream:viewer_count
            IF_SETTEXT("0", comp(231, 13));  // twitch_stream:viewer_count
            return;
        };
        IF_SETTEXT(inttostring(TTV_STREAM_GETVIEWERS(), 10), comp(231, 13));  // twitch_stream:viewer_count
        if ((varbitplayer_27169 == 1)) {
            if ((GETWINDOWMODE() > 1)) {
                IF_SETHIDE(true, comp(231, 12));  // twitch_stream:viewers
            } else {
                IF_SETHIDE(false, comp(231, 12));  // twitch_stream:viewers
            };
        } else {
            IF_SETHIDE(false, comp(231, 12));  // twitch_stream:viewers
        };
    };
    return;
}