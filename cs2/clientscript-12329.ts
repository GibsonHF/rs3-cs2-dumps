//
function script12329(): void {
    if ((varplayer_5884 != 1 as telemetry_interval)) {
        varclient_5078 = 0;
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
    IF_SETHIDE(false, comp(1588, 38));  // telemetry:stopwatch_time
    IF_SETHIDE(false, comp(1588, 34));  // telemetry:reset_button_layer
    IF_SETHIDE(false, comp(1681, 65));  // toplevel_v2_parent_suboverlay_telemetry:stopwatch_time
    IF_SETHIDE(false, comp(1681, 44));  // toplevel_v2_parent_suboverlay_telemetry:reset_button_layer
    if ((varplayer_5883 == 1)) {
        IF_SETHIDE(true, comp(1588, 37));  // telemetry:play_button_layer
        IF_SETHIDE(false, comp(1588, 36));  // telemetry:pause_button_layer
        IF_SETHIDE(true, comp(1681, 58));  // toplevel_v2_parent_suboverlay_telemetry:play_button_layer
        IF_SETHIDE(false, comp(1681, 51));  // toplevel_v2_parent_suboverlay_telemetry:pause_button_layer
    } else {
        IF_SETHIDE(false, comp(1588, 37));  // telemetry:play_button_layer
        IF_SETHIDE(true, comp(1588, 36));  // telemetry:pause_button_layer
        IF_SETHIDE(false, comp(1681, 58));  // toplevel_v2_parent_suboverlay_telemetry:play_button_layer
        IF_SETHIDE(true, comp(1681, 51));  // toplevel_v2_parent_suboverlay_telemetry:pause_button_layer
    };
    return;
}