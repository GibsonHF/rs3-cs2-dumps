//
function script17322(): void {
    IF_SETHIDE(true, comp(1152, 36));  // trh192_overlay:trueshot_progress_1
    IF_SETHIDE(true, comp(1152, 37));  // trh192_overlay:trueshot_progress_2
    IF_SETHIDE(true, comp(1152, 38));  // trh192_overlay:trueshot_progress_3
    IF_SETHIDE(true, comp(1152, 39));  // trh192_overlay:trueshot_progress_4
    IF_SETHIDE(true, comp(1152, 40));  // trh192_overlay:trueshot_progress_5
    IF_SETHIDE(true, comp(1152, 41));  // trh192_overlay:trueshot_progress_6
    IF_SETHIDE(true, comp(1152, 42));  // trh192_overlay:trueshot_progress_7
    IF_SETHIDE(true, comp(1152, 43));  // trh192_overlay:trueshot_progress_full
    if ((varbitplayer_52886 == 8)) {
        IF_SETHIDE(false, comp(1152, 43));  // trh192_overlay:trueshot_progress_full
        return;
    };
    if ((varbitplayer_52886 >= 1)) {
        IF_SETHIDE(false, comp(1152, 36));  // trh192_overlay:trueshot_progress_1
    };
    if ((varbitplayer_52886 >= 2)) {
        IF_SETHIDE(false, comp(1152, 37));  // trh192_overlay:trueshot_progress_2
    };
    if ((varbitplayer_52886 >= 3)) {
        IF_SETHIDE(false, comp(1152, 38));  // trh192_overlay:trueshot_progress_3
    };
    if ((varbitplayer_52886 >= 4)) {
        IF_SETHIDE(false, comp(1152, 39));  // trh192_overlay:trueshot_progress_4
    };
    if ((varbitplayer_52886 >= 5)) {
        IF_SETHIDE(false, comp(1152, 40));  // trh192_overlay:trueshot_progress_5
    };
    if ((varbitplayer_52886 >= 6)) {
        IF_SETHIDE(false, comp(1152, 41));  // trh192_overlay:trueshot_progress_6
    };
    if ((varbitplayer_52886 >= 7)) {
        IF_SETHIDE(false, comp(1152, 42));  // trh192_overlay:trueshot_progress_7
    };
    return;
}