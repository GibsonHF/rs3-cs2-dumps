//
function script8809(): void {
    if ((PLAYERMEMBER() == 0)) {
        IF_SETOBJECT(29933, 1, 16121887);
        IF_SETTEXT("Small<br>Rebuildathon<br>lamp", 16121885);
        IF_SETOBJECT(29934, 1, 16121918);
        IF_SETTEXT("Medium<br>Rebuildathon<br>lamp", 16121916);
    } else {
        IF_SETOBJECT(29934, 1, 16121887);
        IF_SETTEXT("Medium<br>Rebuildathon<br>lamp", 16121885);
        IF_SETOBJECT(29935, 1, 16121918);
        IF_SETTEXT("Large<br>Rebuildathon<br>lamp", 16121916);
    };
    IF_SETOBJECT(29929, 1, 16121931);
    if ((varbitplayer_20702 == 1)) {
        switch (varbitplayer_20714) {
            case 1: {
                IF_SETHIDE(0, 16121879);
                IF_SETHIDE(1, 16121873);
                break;
            }
            case 2: {
                IF_SETHIDE(0, 16121879);
                IF_SETHIDE(1, 16121873);
                IF_SETHIDE(0, 16121878);
                IF_SETHIDE(1, 16121871);
                break;
            }
            case 3: {
                IF_SETHIDE(0, 16121879);
                IF_SETHIDE(1, 16121873);
                IF_SETHIDE(0, 16121878);
                IF_SETHIDE(1, 16121871);
                IF_SETHIDE(0, 16121877);
                IF_SETHIDE(1, 16121869);
                break;
            }
        };
    };
    if ((varbitplayer_20713 < 150)) {
        IF_SETHIDE(1, 16121894);
        IF_SETHIDE(0, 16121895);
    };
    if ((varbitplayer_20713 < 300)) {
        IF_SETHIDE(1, 16121923);
        IF_SETHIDE(0, 16121924);
    };
    if (((varbitplayer_20703 == 1) && (varbitplayer_20724 != 1))) {
        IF_SETHIDE(1, 16121936);
        IF_SETHIDE(0, 16121937);
        IF_SETTEXT("Claimed", 16121939);
    };
    if ((varbitplayer_20704 == 1)) {
        IF_SETHIDE(1, 16121949);
        IF_SETHIDE(0, 16121950);
        IF_SETTEXT("Claimed", 16121952);
    };
    if ((varbitplayer_20705 == 1)) {
        IF_SETHIDE(1, 16121962);
        IF_SETHIDE(0, 16121963);
        IF_SETTEXT("Claimed", 16121965);
    };
    IF_SETTEXT(`Your contribution points: ${inttostring(varbitplayer_20713, 10)}`, 16121876);
    return;
}