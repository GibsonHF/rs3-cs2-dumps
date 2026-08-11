//
function script18439(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((int0 == 48881)) {
        script18440(int0);
    } else {
        IF_SETHIDE(true, comp(1280, 3));  // buff_select_event:event_title_text_1
        IF_SETHIDE(true, comp(1280, 4));  // buff_select_event:event_title_text_2
        IF_SETHIDE(false, comp(1280, 5));  // buff_select_event:event_title_text
        IF_SETTEXT(struct_getparam(int0, 6135), comp(1280, 5));  // buff_select_event:event_title_text
        script16925(83886085, 16355, 3, 28, 14);
    };
    var string0 = "Activate one of three unique buffs. The effects of each will apply for 2 hours.<br><br>Three new buffs will be available every day.";
    if ((IF_FIND(comp(1280, 7)) == 1)) {  // buff_select_event:event_info
        if ((script18412() == 1)) {
            string0 = strconcat(string0, struct_getparam(int0, 9068));
        } else if ((script1526() == 1)) {
            string0 = strconcat(string0, struct_getparam(int0, 9069));
        } else {
            string0 = strconcat(string0, struct_getparam(int0, 9067));
        };
        CC_SETTEXT(string0);
        script16926(16356, 0, 12, 10);
    };
    return;
}