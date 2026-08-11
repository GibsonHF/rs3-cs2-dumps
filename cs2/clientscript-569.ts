//
function script569(): void {
    script381();
    script5695();
    script20389();
    var int0 = 3874090;
    if ((varbitplayer_22875 == 1)) {
        int0 = 1775893;
    } else if ((varbitplayer_22875 == 0)) {
        int0 = 6962208;
    };
    IF_SETCOLOUR(int0, comp(327, 12));  // chat_v3:left_name_box
    IF_SETCOLOUR(int0, comp(327, 9));  // chat_v3:right_name_box
    IF_SETCOLOUR(int0, comp(327, 13));  // chat_v3:left_name_box_1
    IF_SETCOLOUR(int0, comp(327, 10));  // chat_v3:right_name_box_1
    IF_SETCOLOUR(int0, comp(416, 9));  // chat_v3_overlay:left_name_box
    IF_SETCOLOUR(int0, comp(416, 6));  // chat_v3_overlay:right_name_box
    IF_SETCOLOUR(int0, comp(416, 10));  // chat_v3_overlay:left_name_box_1
    IF_SETCOLOUR(int0, comp(416, 7));  // chat_v3_overlay:right_name_box_1
    IF_SETCOLOUR(int0, comp(387, 12));  // chat_v3_choice:right_name_box
    IF_SETCOLOUR(int0, comp(387, 13));  // chat_v3_choice:right_name_box_1
    IF_SETCOLOUR(65536, comp(327, 2));  // chat_v3:fade_to_black
    IF_SETCOLOUR(65536, comp(387, 3));  // chat_v3_choice:fade_to_black
    if ((varbitplayer_44635 == 1)) {
        IF_SETHIDE(true, comp(327, 2));  // chat_v3:fade_to_black
        IF_SETHIDE(true, comp(387, 3));  // chat_v3_choice:fade_to_black
    } else {
        IF_SETHIDE(false, comp(327, 2));  // chat_v3:fade_to_black
        IF_SETHIDE(false, comp(387, 3));  // chat_v3_choice:fade_to_black
    };
    return;
}