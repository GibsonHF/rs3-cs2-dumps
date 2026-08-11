//
function script18026(int0: number, int1: number, int2: number): void {
    if ((int1 > 0)) {
        IF_SETHIDE(false, comp(1227, 38));  // bp3_track_tab:reward_track_fade_left
    } else {
        IF_SETHIDE(true, comp(1227, 38));  // bp3_track_tab:reward_track_fade_left
    };
    if ((int1 >= int2)) {
        IF_SETHIDE(true, comp(1227, 37));  // bp3_track_tab:reward_track_fade_right
    } else {
        IF_SETHIDE(false, comp(1227, 37));  // bp3_track_tab:reward_track_fade_right
    };
    return;
}