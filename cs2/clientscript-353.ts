//
function script353(): void {
    if ((varbitplayer_29340 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1675, 56));
    } else {
        IF_SETTEXT("Owned", comp(1675, 56));
        IF_SETHIDE(false, comp(1675, 53));
    };
    if ((varbitplayer_29341 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1675, 66));
    } else {
        IF_SETTEXT("Owned", comp(1675, 66));
        IF_SETHIDE(false, comp(1675, 63));
    };
    if ((varbitplayer_29342 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), comp(1675, 96));
    } else {
        IF_SETTEXT("Owned", comp(1675, 96));
        IF_SETHIDE(false, comp(1675, 93));
    };
    if ((varbitplayer_29343 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), comp(1675, 108));
    } else {
        IF_SETTEXT("Owned", comp(1675, 108));
        IF_SETHIDE(false, comp(1675, 104));
    };
    if ((varbitplayer_29344 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 118));
    } else {
        IF_SETTEXT("Owned", comp(1675, 118));
        IF_SETHIDE(false, comp(1675, 115));
    };
    if ((varbitplayer_18348 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 129));
    } else {
        IF_SETTEXT("Owned", comp(1675, 129));
        IF_SETHIDE(false, comp(1675, 126));
    };
    if ((varbitplayer_29345 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1675, 76));
    } else {
        IF_SETTEXT("Owned", comp(1675, 76));
        IF_SETHIDE(false, comp(1675, 73));
    };
    if ((varbitplayer_29346 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1675, 86));
    } else {
        IF_SETTEXT("Owned", comp(1675, 86));
        IF_SETHIDE(false, comp(1675, 83));
    };
    if ((varbitplayer_29347 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), comp(1675, 140));
    } else {
        IF_SETTEXT("Owned", comp(1675, 140));
        IF_SETHIDE(false, comp(1675, 136));
    };
    if ((varbitplayer_29348 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), comp(1675, 151));
    } else {
        IF_SETTEXT("Owned", comp(1675, 151));
        IF_SETHIDE(false, comp(1675, 147));
    };
    if ((varbitplayer_29349 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 162));
    } else {
        IF_SETTEXT("Owned", comp(1675, 162));
        IF_SETHIDE(false, comp(1675, 158));
    };
    if ((varbitplayer_18349 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 172));
    } else {
        IF_SETTEXT("Owned", comp(1675, 172));
        IF_SETHIDE(false, comp(1675, 169));
    };
    if ((varbitplayer_29350 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1675, 182));
    } else {
        IF_SETTEXT("Owned", comp(1675, 182));
        IF_SETHIDE(false, comp(1675, 179));
    };
    if ((varbitplayer_29351 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1675, 192));
    } else {
        IF_SETTEXT("Owned", comp(1675, 192));
        IF_SETHIDE(false, comp(1675, 189));
    };
    if ((varbitplayer_29352 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(4000, 1), comp(1675, 203));
    } else {
        IF_SETTEXT("Owned", comp(1675, 203));
        IF_SETHIDE(false, comp(1675, 199));
    };
    if ((varbitplayer_29353 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(6000, 1), comp(1675, 214));
    } else {
        IF_SETTEXT("Owned", comp(1675, 214));
        IF_SETHIDE(false, comp(1675, 210));
    };
    if ((varbitplayer_29354 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 225));
    } else {
        IF_SETTEXT("Owned", comp(1675, 225));
        IF_SETHIDE(false, comp(1675, 221));
    };
    if ((varbitplayer_18350 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 235));
    } else {
        IF_SETTEXT("Owned", comp(1675, 235));
        IF_SETHIDE(false, comp(1675, 232));
    };
    if ((varbitplayer_29355 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(10000, 1), comp(1675, 256));
    } else {
        IF_SETTEXT("Owned", comp(1675, 256));
        IF_SETHIDE(false, comp(1675, 252));
    };
    IF_SETTEXT(TOSTRING_LOCALISED(2500, 1), comp(1675, 245));
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
        IF_SETHIDE(false, comp(1675, 254));
        IF_SETTEXT(string0, comp(1675, 298));
    };
    if ((DATE_RUNEDAY() < 4945)) {
        if ((DATE_RUNEDAY() < 4943)) {
            string1 = "Unlocked<br>soon";
        } else if ((DATE_RUNEDAY() == 4943)) {
            string1 = "Unlocked<br>in two days";
        };
        IF_SETHIDE(false, comp(1675, 117));
        IF_SETTEXT(string1, comp(1675, 284));
        IF_SETHIDE(false, comp(1675, 160));
        IF_SETTEXT(string1, comp(1675, 290));
        IF_SETHIDE(false, comp(1675, 223));
        IF_SETTEXT(string1, comp(1675, 296));
    };
    if ((DATE_RUNEDAY() < 4944)) {
        IF_SETHIDE(false, comp(1675, 95));
        IF_SETHIDE(false, comp(1675, 106));
        IF_SETHIDE(false, comp(1675, 138));
        IF_SETHIDE(false, comp(1675, 149));
        IF_SETHIDE(false, comp(1675, 201));
        IF_SETHIDE(false, comp(1675, 212));
        if ((DATE_RUNEDAY() < 4943)) {
            IF_SETTEXT(string2, comp(1675, 1));
            IF_SETTEXT(string2, comp(1675, 282));
            IF_SETTEXT(string2, comp(1675, 286));
            IF_SETTEXT(string2, comp(1675, 288));
            IF_SETTEXT(string2, comp(1675, 292));
            IF_SETTEXT(string2, comp(1675, 294));
        };
    };
    return;
}