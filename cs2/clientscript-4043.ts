//[clientscript,warguild_tag_tick]
function script4043(): void {
    if ((varbitplayer_15418 == 0)) {
        IF_SETHIDE(true, comp(1057, 35));  // warguild_token_overlay:tick_1
    } else {
        IF_SETHIDE(false, comp(1057, 35));  // warguild_token_overlay:tick_1
    };
    if ((varbitplayer_15419 == 0)) {
        IF_SETHIDE(true, comp(1057, 36));  // warguild_token_overlay:tick_2
    } else {
        IF_SETHIDE(false, comp(1057, 36));  // warguild_token_overlay:tick_2
    };
    if ((varbitplayer_15420 == 0)) {
        IF_SETHIDE(true, comp(1057, 37));  // warguild_token_overlay:tick_3
    } else {
        IF_SETHIDE(false, comp(1057, 37));  // warguild_token_overlay:tick_3
    };
    if ((varbitplayer_15421 == 0)) {
        IF_SETHIDE(true, comp(1057, 38));  // warguild_token_overlay:tick_4
    } else {
        IF_SETHIDE(false, comp(1057, 38));  // warguild_token_overlay:tick_4
    };
    if ((varbitplayer_15422 == 0)) {
        IF_SETHIDE(true, comp(1057, 39));  // warguild_token_overlay:tick_5
    } else {
        IF_SETHIDE(false, comp(1057, 39));  // warguild_token_overlay:tick_5
    };
    return;
}