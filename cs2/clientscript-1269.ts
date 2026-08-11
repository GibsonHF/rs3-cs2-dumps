//
function script1269(int0: number, int1: number, int2: number): void {
    if ((MODULO(int0, 3000) == 0)) {
        var int1 = (int1 - 1);
        if ((int1 <= 0)) {
            IF_SETONTIMER(callback(), int2);
            IF_SETTEXT("", comp(1234, 11));  // clock_wrapper:alert_text
            IF_SETTEXT("", comp(1465, 36));  // toplevel_v2_minimap:slayer_counter_background
            if ((int2 != comp(1234, 4))) {  // clock_wrapper:event_alert_layer
                IF_SETHIDE(true, int2);
            };
            if ((int2 != comp(1465, 30))) {  // toplevel_v2_minimap:clock_text
                IF_SETHIDE(true, int2);
            };
            return;
        };
    };
    IF_SETONTIMER(callback(script1269, (int0 + 1), int1, int2), int2);
    return;
}