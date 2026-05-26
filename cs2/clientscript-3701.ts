//
function script3701(): void {
    var int0 = -1 as cs2enum;
    var string0 = "Do";
    var string1 = "anything!";
    if ((varbitplayer_5443 == 1)) {
        int0 = enum_getvalue(0, 26, 1768 as cs2enum, varbitplayer_5451);
        if ((int0 != -1 as cs2enum)) {
            string0 = enum_getvalue(0, 36, 8615 as cs2enum, varbitplayer_5451);
            string1 = enum_getvalue(0, 36, int0, varbitplayer_5455);
        };
    } else if ((varbitplayer_5445 == 1)) {
        int0 = enum_getvalue(0, 26, 1769 as cs2enum, varbitplayer_5451);
        if ((int0 != -1 as cs2enum)) {
            string0 = enum_getvalue(0, 36, 8616 as cs2enum, varbitplayer_5451);
            string1 = enum_getvalue(0, 36, int0, varbitplayer_5455);
        };
    } else if ((varbitplayer_5448 == 1)) {
        string0 = enum_getvalue(0, 36, 8617 as cs2enum, varbitplayer_5451);
        string1 = enum_getvalue(0, 36, 1778 as cs2enum, varbitplayer_5455);
    } else if ((varbitplayer_11728 == 1)) {
        string1 = enum_getvalue(0, 36, 5401 as cs2enum, varbitplayer_5455);
    } else if ((varbitplayer_11727 == 1)) {
        string1 = enum_getvalue(0, 36, 5400 as cs2enum, varbitplayer_5455);
    } else if ((varbitplayer_5450 == 1)) {
        string1 = enum_getvalue(0, 36, 6081 as cs2enum, varbitplayer_5455);
    };
    var string2 = strconcat(string0, " ");
    string2 = strconcat(string2, string1);
    IF_SETTEXT(string2, comp(570, 99));
    return;
}