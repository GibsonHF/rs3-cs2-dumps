//
function script5461(): void {
    var int0 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var string2 = CHAT_PLAYERNAME();
    var int1 = 0;
    int0 = enum_getvalue(0, 73, 5332 as cs2enum, varbitplayer_3659);
    if ((int0 == -1 as struct)) {
        int0 = enum_getvalue(0, 73, 5213 as cs2enum, varbitplayer_3654);
    };
    varclient_1676 = 0;
    string0 = struct_getparam(int0, 2095);
    if ((varbitplayer_3659 == 7)) {
        IF_SETHIDE(false, comp(1159, 42));
    } else {
        IF_SETHIDE(true, comp(1159, 42));
    };
    varclient_1670 = 0;
    varclient_1671 = 0;
    IF_SETTEXT(string0, comp(1159, 41));
    IF_SETTEXT(string2, comp(1159, 40));
    var int2 = script6431();
    IF_SETHIDE(int2, comp(1159, 33));
    IF_SETHIDE(int2, comp(1159, 39));
    IF_SETHIDE(int2, comp(1159, 40));
    IF_SETHIDE(int2, comp(1159, 41));
    IF_SETHIDE(int2, comp(1159, 12));
    IF_SETHIDE(int2, comp(1159, 13));
    if ((varbitplayer_3655 > 0)) {
        string1 = `Climber. Floor ${inttostring(varbitplayer_3655, 10)}`;
    } else if ((varbitplayer_3656 > 0)) {
        string1 = `Endurance. Floor ${inttostring(varbitplayer_3656, 10)}`;
    } else if ((varbitplayer_3659 > 0)) {
        string1 = `Special. Fight: ${string0}`;
    } else if ((varbitplayer_3654 != 0)) {
        string1 = `Freestyle. Fight: ${string0}`;
    } else {
        string1 = "Unknown";
    };
    IF_SETTEXT(string1, comp(1159, 32));
    IF_SETSIZE(IF_GETWIDTH(comp(1159, 23)), 37, 0, 0, comp(1159, 23));
    IF_SETSIZE(IF_GETWIDTH(comp(1159, 31)), 1, 0, 0, comp(1159, 31));
    IF_SETSIZE((IF_GETWIDTH(comp(1159, 33)) - 10), IF_GETHEIGHT(comp(1159, 35)), 0, 0, comp(1159, 35));
    IF_SETSIZE((IF_GETWIDTH(comp(1159, 39)) - 10), IF_GETHEIGHT(comp(1159, 17)), 0, 0, comp(1159, 17));
    SOUND_VORBIS_VOLUME(8105 as vorbis, 1, 60, 255);
    if ((varbitplayer_3662 == 1)) {
        script5462(1, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3668 == 1)) {
        script5462(2, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3669 == 1)) {
        script5462(3, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3665 == 1)) {
        script5462(4, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3670 == 1)) {
        script5462(5, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3671 == 1)) {
        script5462(6, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3672 == 1)) {
        script5462(7, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3664 == 1)) {
        script5462(8, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3675 == 1)) {
        script5462(9, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3683 == 1)) {
        script5462(10, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3676 == 1)) {
        script5462(11, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3679 == 1)) {
        script5462(12, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3663 == 1)) {
        script5462(13, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3674 == 1)) {
        script5462(14, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3678 == 1)) {
        script5462(15, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3666 == 1)) {
        script5462(16, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3680 == 1)) {
        script5462(17, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3673 == 1)) {
        script5462(18, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3667 == 1)) {
        script5462(19, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3681 == 1)) {
        script5462(20, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3677 == 1)) {
        script5462(21, int1);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_3682 == 1)) {
        script5462(22, int1);
        int1 = (int1 + 1);
    };
    IF_SETONTIMER(callback(script5467), comp(1159, 30));
    varclient_1674 = -45;
    varclient_1675 = -75;
    IF_SETPOSITION(0, varclient_1674, 1, 0, 75956246);
    IF_SETPOSITION(3, varclient_1675, 2, 2, 75956247);
    return;
}