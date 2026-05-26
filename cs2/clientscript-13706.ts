//
function script13706(): void {
    var int0 = 5703;
    var int1 = 0;
    var string0 = "You have already completed this element of the bar crawl.";
    if ((varbitplayer_38438 == 2)) {
        IF_SETTEXT("Get the requested drink from each of the Inns before the 6th November to win 2 medium prismatic lamps. You will receive a small prismatic lamp for each task on the list you complete.", comp(1905, 126));
    };
    while ((int1 < 18)) {
        if ((script13707(int0) == 1)) {
            IF_SETHIDE(false, enum_getvalue(0, 9, 13211 as cs2enum, int1));
            if ((varbitplayer_38438 == 1)) {
                IF_SETHIDE(false, enum_getvalue(0, 9, 13214 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13215 as cs2enum, int1));
            } else {
                IF_SETHIDE(true, enum_getvalue(0, 9, 13214 as cs2enum, int1));
                IF_SETHIDE(false, enum_getvalue(0, 9, 13215 as cs2enum, int1));
            };
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), enum_getvalue(0, 9, 13211, int1));
        } else if ((varplayer_3079 < int0)) {
            string0 = "This element has not been unlocked yet. Come back later.";
            if ((varbitplayer_38438 == 1)) {
                IF_SETHIDE(false, enum_getvalue(0, 9, 13212 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13214 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13213 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13215 as cs2enum, int1));
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), enum_getvalue(0, 9, 13212, int1));
            } else {
                IF_SETHIDE(false, enum_getvalue(0, 9, 13213 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13215 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13212 as cs2enum, int1));
                IF_SETHIDE(true, enum_getvalue(0, 9, 13214 as cs2enum, int1));
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), enum_getvalue(0, 9, 13213, int1));
            };
        } else if ((varbitplayer_38438 == 1)) {
            string0 = enum_getvalue(0, 36, 13216 as cs2enum, int1);
            IF_SETHIDE(false, enum_getvalue(0, 9, 13214 as cs2enum, int1));
            IF_SETHIDE(true, enum_getvalue(0, 9, 13215 as cs2enum, int1));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), enum_getvalue(0, 9, 13214, int1));
        } else {
            string0 = enum_getvalue(0, 36, 13217 as cs2enum, int1);
            IF_SETHIDE(false, enum_getvalue(0, 9, 13215 as cs2enum, int1));
            IF_SETHIDE(true, enum_getvalue(0, 9, 13214 as cs2enum, int1));
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), enum_getvalue(0, 9, 13215, int1));
        };
        string0 = "You have already completed this element of the bar crawl.";
        int1 = (int1 + 1);
        int0 = (int0 + 1);
    };
    return;
}