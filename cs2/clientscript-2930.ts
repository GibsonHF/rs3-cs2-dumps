//
function script2930(int0: int): void {
    var int1 = script20386();
    var int2 = script20385();
    if ((int0 == int1)) {
        return;
    };
    if ((int0 == int2)) {
        varclient_6501 = (1 - varclient_6501);
    } else {
        varclient_6501 = 0;
    };
    IF_SETTEXT("", comp(365, 2));
    script2514(int0);
    if ((script8292(9, 6) == 1)) {
        script2957(varbitplayer_60062, varbitplayer_60061, 1);
    } else {
        script2957(varbitplayer_42102, varbitplayer_42101, 1);
    };
    return;
}