//
function script18438(): void {
    var int0 = script18417();
    script18439(int0);
    script18444();
    script18452();
    script18441(int0);
    script18459();
    if ((varbitplayer_54956 == 0)) {
        script18457(int0);
    } else {
        IF_SETHIDE(true, comp(1280, 36));  // buff_select_event:popup_layer
        IF_SETHIDE(true, comp(1280, 39));  // buff_select_event:tutorial_window_layer
        IF_SETHIDE(true, comp(1280, 38));  // buff_select_event:buff_confirm_window_layer
    };
    if (((varbitplayer_54957 == 0) && (varbitplayer_54952 >= script18421(int0)))) {
        IF_SETHIDE(false, comp(1280, 24));  // buff_select_event:reward_popup_layer
        script18454();
    };
    return;
}