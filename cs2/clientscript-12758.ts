//
function script12758(int0: number): void {
    if ((int0 > 30000)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script12758, int0), comp(1787, 24));  // cruc_dm_overlay:game_timer
        return;
    };
    var int1 = (int0 / 50);
    var int2 = (int1 / 60);
    int1 = MODULO(int1, 60);
    if ((int1 > 9)) {
        IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int1, 10)}`, comp(1787, 27));  // cruc_dm_overlay:game_time_text
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int1, 10)}`, comp(1787, 27));  // cruc_dm_overlay:game_time_text
    };
    if (((int2 == 0) && (int1 <= 10))) {
        if ((MODULO((int0 / 20), 2) > 0)) {
            IF_SETHIDE(true, comp(1787, 27));  // cruc_dm_overlay:game_time_text
        } else {
            IF_SETHIDE(false, comp(1787, 27));  // cruc_dm_overlay:game_time_text
        };
    };
    int0 = (int0 - 1);
    if ((int0 <= 0)) {
        IF_SETONTIMER(callback(), comp(1787, 24));  // cruc_dm_overlay:game_timer
        IF_SETHIDE(true, comp(1787, 24));  // cruc_dm_overlay:game_timer
    } else {
        IF_SETONTIMER(callback(script12758, int0), comp(1787, 24));  // cruc_dm_overlay:game_timer
    };
    return;
}