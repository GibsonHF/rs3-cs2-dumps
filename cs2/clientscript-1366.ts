//
function script1366(int0: component, int1: component): void {
    if ((varplayer_1417 == 23)) {
        IF_SETTEXT("Time until next game starts: 0", int0);
        IF_SETHIDE(true, int1);
    } else if ((varplayer_1417 > 0)) {
        IF_SETTEXT(`Time until next game starts: ${inttostring(varplayer_1417, 10)}`, int0);
        if (((varplayer_1417 <= 13) && (varplayer_1417 >= 4))) {
            IF_SETHIDE(false, int1);
        } else {
            IF_SETHIDE(true, int1);
        };
    } else {
        IF_SETTEXT("Waiting for players to join the other team.", int0);
        IF_SETHIDE(true, int1);
    };
    return;
}