//
function script8486(int0: number): void {
    var int1 = 0;
    var int2 = 0;
    if ((int0 == 1)) {
        script8844(1, script8825(20, 1), 96010251, -1);
        script8844(3, script8825(20, 5), 96010251, -1);
        script8844(1, script8825(20, 2), 96010274, -1);
        script8844(2, script8825(20, 4), 96010274, -1);
        script8844(1, script8825(20, 3), 96010255, -1);
        script8844(1, script8825(20, 6), 8978512, -1);
        script8844(5, script8825(20, 7), 96010251, -1);
        if ((CC_FIND(comp(1477, 65), 1) == 1)) {  // toplevel_v2:buttons_window_settings_button
            script8844(1, script8825(20, 0), 96796737, 1);
        } else {
            IF_SETONTIMER(callback(script8487, 96796737, 1, -2147483645), comp(1477, 61));  // toplevel_v2:buttons_window
        };
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1465, 11));  // toplevel_v2_minimap:compass_layer
        IF_SETOPKEY(3, 0, 0, comp(1465, 11));  // toplevel_v2_minimap:compass_layer
        IF_SETOPKEY(1, 0, 0, comp(1465, 34));  // toplevel_v2_minimap:com_34
        IF_SETOPKEY(2, 0, 0, comp(1465, 34));  // toplevel_v2_minimap:com_34
        IF_SETOPKEY(1, 0, 0, comp(1465, 15));  // toplevel_v2_minimap:run_circle
        IF_SETOPKEY(1, 0, 0, comp(137, 80));  // chatdefault:wiki_button_click
        IF_SETOPKEY(5, 0, 0, comp(1465, 11));  // toplevel_v2_minimap:compass_layer
        if ((CC_FIND(comp(1477, 65), 1) == 1)) {  // toplevel_v2:buttons_window_settings_button
            CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
    };
    return;
}