//
function script2658(): void {
    varbitplayer_11164 = (varbitplayer_11164 + 1);
    if ((varbitplayer_11164 >= (SPLINE_LENGTH(0) - 1))) {
        varbitplayer_11164 = 0;
        IF_SETONCAMFINISHED(callback(), 57409536);
        return;
    };
    CAM_MOVEALONG(0, varbitplayer_11164, 600, 400, 1, varbitplayer_11164);
    IF_SETONCAMFINISHED(callback(script2658), 57409536);
    return;
}