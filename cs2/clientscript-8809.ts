//
function script8809(): void {
    if ((PLAYERMEMBER() == false)) {
        IF_SETOBJECT(29933 as obj, 1, comp(246, 31));
        IF_SETTEXT("Small<br>Rebuildathon<br>lamp", comp(246, 29));
        IF_SETOBJECT(29934 as obj, 1, comp(246, 62));
        IF_SETTEXT("Medium<br>Rebuildathon<br>lamp", comp(246, 60));
    } else {
        IF_SETOBJECT(29934 as obj, 1, comp(246, 31));
        IF_SETTEXT("Medium<br>Rebuildathon<br>lamp", comp(246, 29));
        IF_SETOBJECT(29935 as obj, 1, comp(246, 62));
        IF_SETTEXT("Large<br>Rebuildathon<br>lamp", comp(246, 60));
    };
    IF_SETOBJECT(29929 as obj, 1, comp(246, 75));
    if ((varbitplayer_20702 == 1)) {
        switch (varbitplayer_20714) {
            case 1: {
                IF_SETHIDE(false, comp(246, 23));
                IF_SETHIDE(true, comp(246, 17));
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(246, 23));
                IF_SETHIDE(true, comp(246, 17));
                IF_SETHIDE(false, comp(246, 22));
                IF_SETHIDE(true, comp(246, 15));
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(246, 23));
                IF_SETHIDE(true, comp(246, 17));
                IF_SETHIDE(false, comp(246, 22));
                IF_SETHIDE(true, comp(246, 15));
                IF_SETHIDE(false, comp(246, 21));
                IF_SETHIDE(true, comp(246, 13));
                break;
            }
        };
    };
    if ((varbitplayer_20713 < 150)) {
        IF_SETHIDE(true, comp(246, 38));
        IF_SETHIDE(false, comp(246, 39));
    };
    if ((varbitplayer_20713 < 300)) {
        IF_SETHIDE(true, comp(246, 67));
        IF_SETHIDE(false, comp(246, 68));
    };
    if (((varbitplayer_20703 == 1) && (varbitplayer_20724 != 1))) {
        IF_SETHIDE(true, comp(246, 80));
        IF_SETHIDE(false, comp(246, 81));
        IF_SETTEXT("Claimed", comp(246, 83));
    };
    if ((varbitplayer_20704 == 1)) {
        IF_SETHIDE(true, comp(246, 93));
        IF_SETHIDE(false, comp(246, 94));
        IF_SETTEXT("Claimed", comp(246, 96));
    };
    if ((varbitplayer_20705 == 1)) {
        IF_SETHIDE(true, comp(246, 106));
        IF_SETHIDE(false, comp(246, 107));
        IF_SETTEXT("Claimed", comp(246, 109));
    };
    IF_SETTEXT(`Your contribution points: ${inttostring(varbitplayer_20713, 10)}`, comp(246, 20));
    return;
}