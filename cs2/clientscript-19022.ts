//
function script19022(): void {
    var int0 = script2915();
    if (((varbitplayer_29531 == 0) || (SCALE(varbitplayer_1668, int0, 100) > 20))) {
        IF_SETHIDE(true, comp(994, 3));
        IF_SETTRANS(255, comp(994, 3));
        return;
    };
    IF_SETHIDE(false, comp(994, 3));
    IF_SETTRANS((255 - (120 - (SCALE(varbitplayer_1668, int0, 100) * 5))), comp(994, 3));
    return;
}