//
function script11074(): void {
    var string0 = struct_getparam(varclient_4485, 6411);
    var string1 = "";
    var string2 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(753, 28);
    var int4 = comp(753, 31);
    var int5 = comp(753, 30);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    if ((struct_getparam(varclient_4485, 4830) == 1)) {
        switch (varclient_4485) {
            case 24975: {
                string0 = strconcat(string0, "<br><br><col=FFFFFF>This encounter has mechanics that may change based on what day it is.<br><br>");
                string0 = strconcat(string0, `Current blocked tunnel: <col=FFFFFF>${script19824(0)}`);
                string0 = strconcat(string0, `<br>Current enrage: <col=FFFFFF>${inttostring((varbitplayer_23045 * 20), 10)}%`);
                if ((varplayer_12121 >= 3)) {
                    int2 = 1;
                };
                break;
            }
            case 28642: {
                int0 = script19847(0);
                string0 = strconcat(string0, "<br><br><col=FFFFFF>This boss has mechanics that may change based on what day it is.<br>Current brother positions:</col>");
                string1 = "<col=FFFFFF><br>West side: ";
                string2 = "<col=FFFFFF><br>East side: ";
                if ((TESTBIT(int0, 0) == 1)) {
                    string1 = strconcat(string1, "Ahrim ");
                } else {
                    string2 = strconcat(string2, "Ahrim ");
                };
                if ((TESTBIT(int0, 1) == 1)) {
                    string1 = strconcat(string1, "Dharok ");
                } else {
                    string2 = strconcat(string2, "Dharok ");
                };
                if ((TESTBIT(int0, 2) == 1)) {
                    string1 = strconcat(string1, "Guthan ");
                } else {
                    string2 = strconcat(string2, "Guthan ");
                };
                if ((TESTBIT(int0, 3) == 1)) {
                    string1 = strconcat(string1, "Karil ");
                } else {
                    string2 = strconcat(string2, "Karil ");
                };
                if ((TESTBIT(int0, 4) == 1)) {
                    string1 = strconcat(string1, "Torag ");
                } else {
                    string2 = strconcat(string2, "Torag ");
                };
                if ((TESTBIT(int0, 5) == 1)) {
                    string1 = strconcat(string1, "Verac ");
                } else {
                    string2 = strconcat(string2, "Verac ");
                };
                string1 = strconcat(string1, string2);
                string0 = strconcat(string0, string1);
                if ((varplayer_12121 >= 3)) {
                    int2 = 1;
                };
                break;
            }
            case 28659: {
                string0 = strconcat(string0, "<br><br><col=FFFFFF>This boss has mechanics that may change based on what day it is.<br><br>");
                string0 = strconcat(string0, `Current rotation: <col=FFFFFF>${script14604(0)}`);
                if ((varplayer_12121 >= 4)) {
                    int2 = 1;
                };
                break;
            }
            case 33661: {
                string0 = strconcat(string0, `<br><br>Current killstreak: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_32635, 1)}`);
                string0 = strconcat(string0, `<br>Highest killstreak: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_34272, 1)}`);
                string0 = strconcat(string0, `<br><br>Current enrage: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_32626, 1)}%`);
                string0 = strconcat(string0, `<br>Highest enrage: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_32627, 1)}%`);
                break;
            }
            case 45611: {
                string0 = strconcat(string0, "<br><br><col=FFFFFF>This encounter has mechanics that may change based on your decisions in the lobby.");
                string0 = strconcat(string0, `<br><br>Current hard mode killstreak: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_50186, 1)}`);
                string0 = strconcat(string0, `<br>Highest hard mode killstreak: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_50187, 1)}`);
                string0 = strconcat(string0, `<br><br>Current hard mode enrage: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_50177, 1)}%`);
                string0 = strconcat(string0, `<br>Highest hard mode enrage: <col=FFFFFF>${TOSTRING_LOCALISED(varbitplayer_50178, 1)}%`);
                break;
            }
        };
    };
    IF_SETTEXT(string0, comp(753, 29));
    int1 = (int1 + script15891(IF_GETTEXT(comp(753, 29)), IF_GETWIDTH(comp(753, 29)), IF_GETFONTMETRICS(comp(753, 29)), 0));
    if ((int2 == 1)) {
        int1 = (int1 + script19863(int3, int5, int1));
    };
    if ((int1 >= IF_GETHEIGHT(comp(753, 27)))) {
        IF_SETHIDE(false, int4);
        IF_SETSCROLLSIZE(0, int1, int3);
        IF_SETSCROLLPOS(0, 0, int3);
        script7791(int4, int3);
    } else {
        IF_SETHIDE(true, int4);
        IF_SETSCROLLSIZE(0, 0, int3);
        IF_SETSCROLLPOS(0, 0, int3);
    };
    return;
}