//
function script18459(): void {
    var int0 = script18410();
    if (((int0 == true) && (varbitplayer_54961 > 0))) {
        int0 = false;
    };
    IF_SETHIDE(int0, comp(1280, 18));  // buff_select_event:buff_select_button
    IF_SETHIDE(script12585(int0), comp(1280, 19));  // buff_select_event:buff_expire_time_layer
    var string0 = script3382(-1, script4705(varbitplayer_54955), 5, 0);
    IF_SETTEXT(string0, comp(1280, 22));  // buff_select_event:buff_expire_time_text
    return;
}