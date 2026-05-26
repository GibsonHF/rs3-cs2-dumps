//
function script1427(int0: number): void {
    if ((varbitplayer_3028 == 1)) {
        IF_SETHIDE(1, int0);
        return;
    };
    if ((varbitplayer_44635 == 1)) {
        return;
    };
    var int1 = script2042();
    if ((varplayer_8181 == 1)) {
        if ((int1 < 140)) {
            IF_SETGRAPHIC(20453, int0);
        } else {
            IF_SETGRAPHIC(20925, int0);
        };
        IF_SETTRANS(125, int0);
        return;
    };
    varplayer_8181 = 1;
    IF_SETONTIMER(callback(script1952, int0, 0), int0);
    return;
}