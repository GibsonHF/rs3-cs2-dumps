//
function script11895(int0: component): void {
    if ((varbitplayer_29799 == 0)) {
        IF_SETTRANS(255, int0);
        return;
    };
    if ((varbitplayer_29799 == 255)) {
        IF_SETTRANS(40, int0);
        return;
    };
    var int1 = SCALE(varbitplayer_29799, 255, 100);
    var int2 = (40 + (215 - SCALE(215, 100, int1)));
    IF_SETTRANS(int2, int0);
    return;
}