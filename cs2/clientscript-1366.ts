//
function script1366(int0: number, int1: number): void {
    if ((varplayer_1417 == 23)) {
        IF_SETTEXT("Time until next game starts: 0", int0);
        IF_SETHIDE(1, int1);
    } else if ((varplayer_1417 > 0)) {
        IF_SETTEXT(`Time until next game starts: ${inttostring(varplayer_1417, 10)}`, int0);
        if (((varplayer_1417 <= 13) && (varplayer_1417 >= 4))) {
            IF_SETHIDE(0, int1);
        } else {
            IF_SETHIDE(1, int1);
        };
    } else {
        IF_SETTEXT("Waiting for players to join the other team.", int0);
        IF_SETHIDE(1, int1);
    };
    return;
}