//
function script18457(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    IF_SETHIDE(false, comp(1280, 36));
    IF_SETHIDE(false, comp(1280, 39));
    IF_SETHIDE(true, comp(1280, 38));
    var string0 = "";
    if ((IF_FIND(comp(1280, 41)) == 1)) {
        CC_SETTEXT(struct_getparam(int0, 6135));
    };
    var int1 = 0;
    var int2 = comp(1280, 43);
    var int3 = comp(1280, 42);
    if ((IF_FIND(comp(1280, 44)) == 1)) {
        string0 = struct_getparam(int0, 6136);
        if ((script18412() == 1)) {
            string0 = `${string0}<br><br>Ironman accounts cannot gain buffs from this event, but can log in each day to make progress toward unlocking the reward.`;
        } else if ((script1526() == 1)) {
            string0 = `${string0}<br><br>Free players cannot gain buffs from this event, but can log in each day to make progress toward unlocking the reward.`;
        };
        CC_SETTEXT(string0);
        int1 = script7593(string0, CC_GETWIDTH(), 207 as fontmetrics, 0);
        if ((int1 > IF_GETHEIGHT(int2))) {
            IF_SETHIDE(false, int3);
            IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int2), int1), int2);
            IF_SETSCROLLPOS(0, 0, int2);
            script7791(int3, int2);
        } else {
            IF_SETHIDE(true, int3);
        };
    };
    return;
}