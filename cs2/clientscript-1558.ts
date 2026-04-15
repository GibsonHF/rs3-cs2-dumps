//
function script1558(int0: int, int1: unknown_int): void {
    if (((int0 <= 0) || (int0 == 1019))) {
        return;
    };
    if ((varbitplayer_27169 == 1)) {
    } else if ((((varbitplayer_38842 == 0) && (varbitplayer_60441 == 1)) && (int0 != 18))) {
        return;
    };
    var int2 = script8557(int0);
    var int3 = script8555(int0);
    var int4 = script8556(int0);
    var int5 = script8552(int0);
    var int6 = script8553(int0);
    var int7 = script8558(int0);
    var int8 = script8554(int0);
    var int9 = script19625(int0);
    var int10 = script8550(int0);
    IF_SETCOLOUR(16777215, int2);
    IF_SETTEXTSHADOW(1, int4);
    IF_SETCOLOUR(16777215, int4);
    var int11 = script6431();
    if ((((script11370() == 0) && (varplayer_1295 == 1000)) && (int0 != 24))) {
        script13797(int0);
        IF_SETTEXT("", int4);
        IF_SETONCLICK(callback(), int4);
        IF_SETONTIMER(callback(), int4);
        IF_SETHIDE(1, int2);
        IF_SETHIDE(1, int8);
        if ((int9 != -1)) {
            IF_SETHIDE(true, int9);
        };
        IF_SETHIDE(true, int4);
        IF_SETHIDE(true, int3);
        IF_SETPOSITION(0, 72, 0, 0, int5);
        IF_SETSIZE(488, 72, 0, 1, int5);
        IF_SETPOSITION(0, 72, 2, 0, int6);
        IF_SETSIZE(16, 72, 0, 1, int6);
        IF_SETHIDE(true, int4);
        IF_SETHIDE(false, int7);
        return;
    };
    IF_SETHIDE(false, int2);
    if ((script6431() == false)) {
        IF_SETHIDE(false, int8);
    };
    IF_SETHIDE(false, int4);
    IF_SETHIDE(false, int3);
    if (((varbitplayer_27169 == 1) || ((varbitplayer_38842 == 0) && (varbitplayer_60441 == 1)))) {
        IF_SETHIDE(true, script13539(int0));
        IF_SETHIDE(true, script13540(int0));
        IF_SETPOSITION(0, 29, 0, 2, IF_GETPARENTLAYER(int5));
        IF_SETSIZE(0, 31, 1, 1, IF_GETPARENTLAYER(int5));
    } else {
        IF_SETSIZE(16, 0, 0, 1, int6);
        IF_SETPOSITION(0, 0, 2, 2, int6);
    };
    if ((int7 != comp(-1, 65535))) {
        IF_SETHIDE(true, int7);
    };
    var string0 = `${CHAT_PLAYERNAME()}<img=3>:`;
    switch (script19312()) {
        case 3: {
            if ((script19320() == 1)) {
                string0 = `<img=17>${string0}`;
            } else {
                string0 = `<img=16>${string0}`;
            };
            break;
        }
        case 2: {
            string0 = `<img=13>${string0}`;
            break;
        }
        case 1: {
            string0 = `<img=11>${string0}`;
            break;
        }
    };
    var string1 = "";
    if (((varbitplayer_27169 == 0) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
        switch (int10) {
            case 100: {
                if ((STRING_LENGTH(varclient_2367) > 0)) {
                    string0 = `To ${varclient_2367}:`;
                };
                string1 = "Private Chat";
                break;
            }
            case 1: {
                string1 = "Friends Chat";
                break;
            }
            case 2: {
                string1 = "Clan Chat";
                break;
            }
            case 3: {
                string1 = "Guest Clan Chat";
                break;
            }
            case 6: {
                string1 = "Twitch Chat";
                break;
            }
            case 4: {
                string1 = "Group Chat";
                break;
            }
            case 5: {
                string1 = "Group Chat (Team)";
                break;
            }
            case 102: {
                string1 = "Group Ironman";
                break;
            }
            default: {
                if ((varclient_6858 == true)) {
                    string0 = `Search Wiki<img=3>:`;
                } else {
                    string1 = "Public Chat";
                };
                break;
            }
        };
    } else {
        switch (varbitplayer_22846) {
            case 3: {
                string1 = "Private Chat";
                break;
            }
            case 4: {
                string1 = "Friends Chat";
                break;
            }
            case 5: {
                string1 = "Clan Chat";
                break;
            }
            case 6: {
                string1 = "Guest Clan Chat";
                break;
            }
            case 10: {
                string1 = "Group Chat";
                break;
            }
            case 11: {
                string1 = "Group Ironman";
                break;
            }
            default: {
                if ((varclient_6858 == true)) {
                    string0 = `Search Wiki<img=3>:`;
                } else {
                    string1 = "Public Chat";
                };
                break;
            }
        };
        if (((STRING_LENGTH(varclient_2367) > 0) && (int10 == 100))) {
            string0 = `To ${varclient_2367}:`;
        };
    };
    IF_SETTEXT(string0, int8);
    if ((STRING_LENGTH(string1) > 0)) {
        string1 = `${string1} - `;
    };
    if ((int11 == false)) {
        IF_SETTEXTFONT(26 as fontmetrics, int4);
    } else {
        IF_SETTEXTFONT(30 as fontmetrics, int4);
    };
    IF_SETCOLOUR(8366591, int4);
    IF_SETTEXTFONT(26 as fontmetrics, int8);
    IF_SETCOLOUR(16777215, int8);
    IF_SETTEXTSHADOW(1, int8);
    IF_SETCOLOUR(16777215, int2);
    if (((STRING_LENGTH(script8521(int0)) > 0) || ((varclient_2873 == 8) && (varclient_2231 == int0)))) {
        IF_SETTEXT(ESCAPE(script8521(int0)), int4);
    } else {
        if ((varclient_2231 == int0)) {
            if ((int11 == true)) {
                IF_SETTEXT(`${string1}Enter Message`, int4);
            } else {
                IF_SETTEXT(`[${string1}Press Enter to Chat]`, int4);
            };
        } else {
            IF_SETTEXT(`[${string1}Press Enter to Chat]`, int4);
        };
        if ((int11 == false)) {
            IF_SETCOLOUR(9868950, int4);
        } else {
            IF_SETCOLOUR(script693(240, 240, 240), int4);
        };
    };
    script7172(int0);
    var int12 = 2;
    var int13 = STRINGWIDTH(IF_GETTEXT(int8), 26 as fontmetrics);
    if ((int11 == true)) {
        int12 = 1;
    };
    IF_SETPOSITION(5, 0, 0, int12, int8);
    IF_SETSIZE(int13, 2, 0, 1, int8);
    if ((int9 != comp(-1, 65535))) {
        IF_SETHIDE(script12585(script19316()), int9);
        IF_SETPOSITION(5, 0, 0, int12, int9);
        IF_SETSIZE(int13, 2, 0, 1, int9);
    };
    if ((int11 == false)) {
        IF_SETPOSITION(((4 + IF_GETX(int8)) + IF_GETWIDTH(int8)), 1, 0, 2, int3);
        IF_SETSIZE((IF_GETWIDTH(int8) + 5), 4, 1, 1, int3);
    };
    IF_SETONCLICK(callback(script1554, int0, -2147483647, 0), int4);
    var string2 = script8521(int0);
    varclient_1028 = MIN(varclient_1028, STRING_LENGTH(ESCAPE(string2)));
    varclient_1028 = MAX(varclient_1028, 0);
    script1555(int0, 0);
    if ((STRING_LENGTH(CHAT_PLAYERNAME()) > 0)) {
        IF_SETONTIMER(callback(), int5);
    } else {
        IF_SETONTIMER(callback(script4308, int0, int1), int5);
    };
    return;
}