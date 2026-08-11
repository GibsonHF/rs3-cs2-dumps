//
function script15784(): void {
    script3123();
    if ((script6431() == 1)) {
        IF_SETHIDE(false, comp(279, 1));  // mobile_ribbon_left:home_screen_button
        IF_SETHIDE(false, comp(279, 16));  // mobile_ribbon_left:event_hud_hide
        IF_SETHIDE(false, comp(279, 21));  // mobile_ribbon_left:secondary_event_hud_hide
        IF_SETHIDE(true, comp(276, 4));  // toplevel_v2_mobile:tutorial_settings_layer
        IF_SETHIDE(false, comp(279, 6));  // mobile_ribbon_left:chat_wrapper
        IF_SETHIDE(false, comp(1477, 420));  // toplevel_v2:chat_window_content
        IF_SETHIDE(false, comp(279, 3));  // mobile_ribbon_left:internal_notifications_escape_layer
        IF_SETHIDE(false, comp(274, 69));  // escape_menu_mobile:adventures_notification_layer
        IF_SETHIDE(false, comp(279, 10));  // mobile_ribbon_left:activity_tracker_wrapper
        IF_SETHIDE(false, comp(279, 15));  // mobile_ribbon_left:calendar_wrapper
        IF_SETHIDE(false, comp(1376, 9));  // mobile_settings_button:world_map_button
        IF_SETHIDE(false, comp(1376, 1));  // mobile_settings_button:minimap_tween_layer
        IF_SETHIDE(false, comp(1376, 7));  // mobile_settings_button:minimap_button
        IF_SETHIDE(false, comp(1376, 20));  // mobile_settings_button:compass_layer
        IF_SETHIDE(false, comp(1376, 10));  // mobile_settings_button:home_teleport
        IF_SETHIDE(false, comp(1923, 0));  // toplevel_v2_combat_bar_mobile:combat_toggle
    } else {
        IF_SETHIDE(false, comp(1465, 11));  // toplevel_v2_minimap:compass_layer
        IF_SETHIDE(false, comp(1465, 34));  // toplevel_v2_minimap:com_34
        script1998();
    };
    return;
}