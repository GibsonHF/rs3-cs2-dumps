//
function script18416(): unknown_int {
    if ((script18410() == false)) {
        return 0;
    };
    var int0 = script18425(-1 as struct);
    if ((varbitplayer_54951 > int0)) {
        script12478("%buff_select_event_day_buff_activated is set in the future - you may need to reset %atlum_day_tracker");
        return 0;
    };
    if ((int0 > varbitplayer_54951)) {
        return 1;
    };
    return 0;
}