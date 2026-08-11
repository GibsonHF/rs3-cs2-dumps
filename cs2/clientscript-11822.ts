//
function script11822(int0: number): void {
    if ((int0 == 1)) {
        if ((varplayer_5883 == 0)) {
            IF_SETONTIMER(callback(script12595), comp(1477, 15));  // toplevel_v2:telemetry_stopwatch_timer
        } else {
            IF_SETONTIMER(callback(), comp(1477, 15));  // toplevel_v2:telemetry_stopwatch_timer
        };
        return;
    };
    if ((varplayer_5884 != 1 as telemetry_interval)) {
        IF_SETHIDE(true, comp(1588, 38));  // telemetry:stopwatch_time
        IF_SETHIDE(true, comp(1588, 37));  // telemetry:play_button_layer
        IF_SETHIDE(true, comp(1588, 36));  // telemetry:pause_button_layer
        IF_SETHIDE(true, comp(1588, 34));  // telemetry:reset_button_layer
        IF_SETHIDE(true, comp(1681, 65));  // toplevel_v2_parent_suboverlay_telemetry:stopwatch_time
        IF_SETHIDE(true, comp(1681, 58));  // toplevel_v2_parent_suboverlay_telemetry:play_button_layer
        IF_SETHIDE(true, comp(1681, 51));  // toplevel_v2_parent_suboverlay_telemetry:pause_button_layer
        IF_SETHIDE(true, comp(1681, 44));  // toplevel_v2_parent_suboverlay_telemetry:reset_button_layer
        return;
    };
    varclient_5078 = 0;
    IF_SETONTIMER(callback(), comp(1477, 15));  // toplevel_v2:telemetry_stopwatch_timer
    return;
}