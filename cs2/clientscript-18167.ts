//
function script18167(int0: unknown_int): void {
    var string0 = "";
    var string1 = "(Active)";
    var string2 = "(Active)";
    var int1 = 0;
    var int2 = 0;
    if (((varclient_6728 > 0) || (varclient_6727 > 0))) {
        int1 = 1;
    };
    if ((((varclient_7340 > 0) || (varclient_7339 > 0)) && (script15206() == 0))) {
        int2 = 1;
    };
    if (((((varbitplayer_54479 == 1) && (int2 == 1)) || (varbitplayer_47683 == 1)) || (int0 == 1))) {
        string1 = "(Paused)";
    };
    if (((((varbitplayer_54479 == 0) && (int1 == 1)) || (varbitplayer_47683 == 1)) || (int0 == 1))) {
        string2 = "(Paused)";
    };
    if ((int1 == 1)) {
        string0 = `${string0}Double XP time ${string1}: ${script5729((varclient_6727 / 60), MODULO(varclient_6727, 60), varclient_6728, true, true)}`;
    };
    if ((int2 == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = `${string0}<br>`;
        };
        string0 = `${string0}Double XP buff time ${string2}: ${script5729((varclient_7339 / 60), MODULO(varclient_7339, 60), varclient_7340, true, true)}`;
        string0 = `${string0}<br>Double XP buff days left: ${TOSTRING_LOCALISED((varbitplayer_54478 - DATE_RUNEDAY()), 1)}`;
    };
    script18172(string0, comp(584, 3), -1);
    return;
}