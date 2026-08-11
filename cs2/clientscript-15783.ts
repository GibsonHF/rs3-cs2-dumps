//
function script15783(): void {
    var int0 = -1 as dbrow;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    if ((varplayer_9774 == true)) {
        if ((script15532(0) == 0)) {
            return;
        };
        script3123();
        switch (script15536()) {
            case 6: {
                [int0, int1, int2, int3, int4] = script15780();
                break;
            }
            case 7: {
                [int0, int1, int2, int3, int4] = script15787();
                break;
            }
            default: {
                script12478(`Unhandled ~tut_is=${inttostring(varbitplayer_49045, 10)}.`);
                return;
            }
        };
        if ((script6431() == 1)) {
            if ((int0 != -1 as dbrow)) {
                int5 = dbrow_getfield(int0, 507920, 0);
            };
            IF_SETHIDE(true, comp(279, 6));  // mobile_ribbon_left:chat_wrapper
            IF_SETHIDE(true, comp(1477, 420));  // toplevel_v2:chat_window_content
            IF_SETHIDE(true, comp(279, 3));  // mobile_ribbon_left:internal_notifications_escape_layer
            IF_SETHIDE(true, comp(274, 69));  // escape_menu_mobile:adventures_notification_layer
            IF_SETHIDE(true, comp(279, 10));  // mobile_ribbon_left:activity_tracker_wrapper
            IF_SETHIDE(true, comp(279, 15));  // mobile_ribbon_left:calendar_wrapper
            IF_SETHIDE(true, comp(279, 16));  // mobile_ribbon_left:event_hud_hide
            IF_SETHIDE(true, comp(279, 21));  // mobile_ribbon_left:secondary_event_hud_hide
            if ((varbitclient_44897 == 1)) {
                IF_SETHIDE(true, comp(1477, 385));  // toplevel_v2:cheevo_tracker_window
            } else {
                IF_SETHIDE(script6430(int1), comp(1477, 385));  // toplevel_v2:cheevo_tracker_window
            };
            [int8, int9, int10, int11] = script2956();
            if ((int2 == 1)) {
                IF_SETHIDE(true, comp(279, 1));  // mobile_ribbon_left:home_screen_button
                IF_SETHIDE(false, comp(276, 4));  // toplevel_v2_mobile:tutorial_settings_layer
                IF_SETPOSITION(int8, 0, 0, 0, comp(276, 5));  // toplevel_v2_mobile:tutorial_settings_button
            } else {
                IF_SETHIDE(true, comp(279, 1));  // mobile_ribbon_left:home_screen_button
                IF_SETHIDE(true, comp(276, 4));  // toplevel_v2_mobile:tutorial_settings_layer
            };
            IF_SETHIDE(true, comp(1376, 9));  // mobile_settings_button:world_map_button
            IF_SETHIDE(true, comp(1923, 0));  // toplevel_v2_combat_bar_mobile:combat_toggle
            if ((int3 == 1)) {
                IF_SETHIDE(false, comp(1376, 1));  // mobile_settings_button:minimap_tween_layer
                IF_SETHIDE(false, comp(1376, 7));  // mobile_settings_button:minimap_button
                IF_SETHIDE(false, comp(1376, 20));  // mobile_settings_button:compass_layer
            } else {
                IF_SETHIDE(true, comp(1376, 1));  // mobile_settings_button:minimap_tween_layer
                IF_SETHIDE(true, comp(1376, 7));  // mobile_settings_button:minimap_button
                IF_SETHIDE(true, comp(1376, 20));  // mobile_settings_button:compass_layer
            };
            if ((int4 == 1)) {
                IF_SETHIDE(false, comp(1376, 10));  // mobile_settings_button:home_teleport
            } else {
                IF_SETHIDE(true, comp(1376, 10));  // mobile_settings_button:home_teleport
            };
        } else {
            if ((int0 != -1 as dbrow)) {
                int5 = dbrow_getfield(int0, 507936, 0);
            };
            if ((varclient_2872 != 15457 as cs2enum)) {
                script8836(15457);
            };
            IF_SETHIDE(true, comp(1465, 11));  // toplevel_v2_minimap:compass_layer
            IF_SETHIDE(true, comp(1465, 28));  // toplevel_v2_minimap:clock_container_layer
            IF_SETHIDE(true, comp(1465, 26));  // toplevel_v2_minimap:telemetry
            IF_SETHIDE(true, comp(1319, 10));  // toplevel_v2_minimap_classic:xp_tracker
            IF_SETHIDE(true, comp(1319, 9));  // toplevel_v2_minimap_classic:slayer_counter
            if ((script9932(1003) == 1)) {
                int6 = script10405(1003);
            };
            if ((int6 != -1)) {
                int7 = struct_getparam(int6, 3503);
                if ((int7 != comp(-1, 65535))) {
                    IF_SETHIDE(true, int7);
                };
            };
            if ((int4 == 1)) {
                IF_SETHIDE(false, comp(1465, 34));  // toplevel_v2_minimap:com_34
            } else {
                IF_SETHIDE(true, comp(1465, 34));  // toplevel_v2_minimap:com_34
            };
        };
        if (((int5 != -1) && (varplayer_9773 != int0))) {
            varplayer_9773 = int0;
            script15373(int5);
        };
    };
    return;
}