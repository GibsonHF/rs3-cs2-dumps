//
function script19022(): void {
    var int0 = script2915();
    if (((varbitplayer_29531 == 0) || (SCALE(varbitplayer_1668, int0, 100) > 20))) {
        IF_SETHIDE(1, 65142787);
        IF_SETTRANS(255, 65142787);
        return;
    };
    IF_SETHIDE(0, 65142787);
    IF_SETTRANS((255 - (120 - (SCALE(varbitplayer_1668, int0, 100) * 5))), 65142787);
    return;
}