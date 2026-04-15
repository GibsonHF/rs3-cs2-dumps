//
function script18439(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    if ((int0 == 48881 as struct)) {
        script18440(int0);
    } else {
        IF_SETHIDE(true, comp(1280, 3));
        IF_SETHIDE(true, comp(1280, 4));
        IF_SETHIDE(false, comp(1280, 5));
        IF_SETTEXT(struct_getparam(int0, 6135), comp(1280, 5));
        script16925(comp(1280, 5), 16355 as cs2enum, 3, 28, 14);
    };
    var string0 = "Activate one of three unique buffs. The effects of each will apply for 2 hours.<br><br>Three new buffs will be available every day.";
    if ((IF_FIND(comp(1280, 7)) == 1)) {
        if ((script18412() == 1)) {
            string0 = strconcat(string0, struct_getparam(int0, 9068));
        } else if ((script1526() == 1)) {
            string0 = strconcat(string0, struct_getparam(int0, 9069));
        } else {
            string0 = strconcat(string0, struct_getparam(int0, 9067));
        };
        CC_SETTEXT(string0);
        script16926(16356 as cs2enum, 0, 12, 10);
    };
    return;
}