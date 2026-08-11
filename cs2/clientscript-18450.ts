//
function script18450(): void {
    if ((varbitplayer_54956 == 1)) {
        SOUND_VORBIS_RATE(RANDOM_SOUND_PITCH(36959 as vorbis, 1, 0, 255, 25, 25));
        IF_SETHIDE(true, comp(1280, 36));  // buff_select_event:popup_layer
        IF_SETHIDE(true, comp(1280, 39));  // buff_select_event:tutorial_window_layer
        IF_SETHIDE(true, comp(1280, 38));  // buff_select_event:buff_confirm_window_layer
    };
    return;
}