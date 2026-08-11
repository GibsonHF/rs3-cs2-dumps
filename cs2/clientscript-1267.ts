//
function script1267(int0: number, string0: string): void {
    var int1 = comp(1234, 11);  // clock_wrapper:alert_text
    if (((varbitplayer_26696 == 1) || (varbitplayer_27169 == 1))) {
        int1 = comp(1465, 36);  // toplevel_v2_minimap:slayer_counter_background
    };
    if ((strcmp(string0, IF_GETTEXT(int1)) == 0)) {
        return;
    };
    IF_SETTEXT(string0, comp(1234, 11));  // clock_wrapper:alert_text
    IF_SETTEXT(string0, comp(1465, 36));  // toplevel_v2_minimap:slayer_counter_background
    IF_SETHIDE(false, comp(1234, 4));  // clock_wrapper:event_alert_layer
    IF_SETHIDE(false, comp(1465, 30));  // toplevel_v2_minimap:clock_text
    IF_SETONTIMER(callback(), comp(1234, 4));  // clock_wrapper:event_alert_layer
    IF_SETONTIMER(callback(), comp(1465, 30));  // toplevel_v2_minimap:clock_text
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), comp(1234, 4));  // clock_wrapper:event_alert_layer
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), comp(1465, 30));  // toplevel_v2_minimap:clock_text
    return;
}