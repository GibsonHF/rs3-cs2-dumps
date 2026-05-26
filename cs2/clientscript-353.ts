//
function script353(): void {
    if ((varbitplayer_29340 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), 109772856);
    } else {
        IF_SETTEXT("Owned", 109772856);
        IF_SETHIDE(0, 109772853);
    };
    if ((varbitplayer_29341 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), 109772866);
    } else {
        IF_SETTEXT("Owned", 109772866);
        IF_SETHIDE(0, 109772863);
    };
    if ((varbitplayer_29342 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), 109772896);
    } else {
        IF_SETTEXT("Owned", 109772896);
        IF_SETHIDE(0, 109772893);
    };
    if ((varbitplayer_29343 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), 109772908);
    } else {
        IF_SETTEXT("Owned", 109772908);
        IF_SETHIDE(0, 109772904);
    };
    if ((varbitplayer_29344 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109772918);
    } else {
        IF_SETTEXT("Owned", 109772918);
        IF_SETHIDE(0, 109772915);
    };
    if ((varbitplayer_18348 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109772929);
    } else {
        IF_SETTEXT("Owned", 109772929);
        IF_SETHIDE(0, 109772926);
    };
    if ((varbitplayer_29345 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), 109772876);
    } else {
        IF_SETTEXT("Owned", 109772876);
        IF_SETHIDE(0, 109772873);
    };
    if ((varbitplayer_29346 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), 109772886);
    } else {
        IF_SETTEXT("Owned", 109772886);
        IF_SETHIDE(0, 109772883);
    };
    if ((varbitplayer_29347 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), 109772940);
    } else {
        IF_SETTEXT("Owned", 109772940);
        IF_SETHIDE(0, 109772936);
    };
    if ((varbitplayer_29348 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), 109772951);
    } else {
        IF_SETTEXT("Owned", 109772951);
        IF_SETHIDE(0, 109772947);
    };
    if ((varbitplayer_29349 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109772962);
    } else {
        IF_SETTEXT("Owned", 109772962);
        IF_SETHIDE(0, 109772958);
    };
    if ((varbitplayer_18349 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109772972);
    } else {
        IF_SETTEXT("Owned", 109772972);
        IF_SETHIDE(0, 109772969);
    };
    if ((varbitplayer_29350 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), 109772982);
    } else {
        IF_SETTEXT("Owned", 109772982);
        IF_SETHIDE(0, 109772979);
    };
    if ((varbitplayer_29351 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), 109772992);
    } else {
        IF_SETTEXT("Owned", 109772992);
        IF_SETHIDE(0, 109772989);
    };
    if ((varbitplayer_29352 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), 109773003);
    } else {
        IF_SETTEXT("Owned", 109773003);
        IF_SETHIDE(0, 109772999);
    };
    if ((varbitplayer_29353 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), 109773014);
    } else {
        IF_SETTEXT("Owned", 109773014);
        IF_SETHIDE(0, 109773010);
    };
    if ((varbitplayer_29354 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109773025);
    } else {
        IF_SETTEXT("Owned", 109773025);
        IF_SETHIDE(0, 109773021);
    };
    if ((varbitplayer_18350 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109773035);
    } else {
        IF_SETTEXT("Owned", 109773035);
        IF_SETHIDE(0, 109773032);
    };
    if ((varbitplayer_29355 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), 109773056);
    } else {
        IF_SETTEXT("Owned", 109773056);
        IF_SETHIDE(0, 109773052);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(2500, 1), 109773045);
    var string0 = "Unlocked tomorrow";
    var string1 = "Unlocked tomorrow";
    var string2 = "Unlocked<br>soon";
    if ((DATE_RUNEDAY() < 4946)) {
        if ((DATE_RUNEDAY() < 4943)) {
            string0 = "Unlocked<br>soon";
        } else if ((DATE_RUNEDAY() == 4943)) {
            string0 = "Unlocked<br>in three days";
        } else if ((DATE_RUNEDAY() == 4944)) {
            string0 = "Unlocked<br>in two days";
        };
        IF_SETHIDE(0, 109773054);
        IF_SETTEXT(string0, 109773098);
    };
    if ((DATE_RUNEDAY() < 4945)) {
        if ((DATE_RUNEDAY() < 4943)) {
            string1 = "Unlocked<br>soon";
        } else if ((DATE_RUNEDAY() == 4943)) {
            string1 = "Unlocked<br>in two days";
        };
        IF_SETHIDE(0, 109772917);
        IF_SETTEXT(string1, 109773084);
        IF_SETHIDE(0, 109772960);
        IF_SETTEXT(string1, 109773090);
        IF_SETHIDE(0, 109773023);
        IF_SETTEXT(string1, 109773096);
    };
    if ((DATE_RUNEDAY() < 4944)) {
        IF_SETHIDE(0, 109772895);
        IF_SETHIDE(0, 109772906);
        IF_SETHIDE(0, 109772938);
        IF_SETHIDE(0, 109772949);
        IF_SETHIDE(0, 109773001);
        IF_SETHIDE(0, 109773012);
        if ((DATE_RUNEDAY() < 4943)) {
            IF_SETTEXT(string2, 109772801);
            IF_SETTEXT(string2, 109773082);
            IF_SETTEXT(string2, 109773086);
            IF_SETTEXT(string2, 109773088);
            IF_SETTEXT(string2, 109773092);
            IF_SETTEXT(string2, 109773094);
        };
    };
    return;
}