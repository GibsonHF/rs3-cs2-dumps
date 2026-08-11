//
function script13893(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(13331 as cs2enum);
    var int5 = false;
    if (((int0 == 1) || (varclient_3693 == 1))) {
        int5 = true;
    };
    while ((int3 < int4)) {
        int2 = enum_getvalue(0, 0, 13331 as cs2enum, int3);
        int1 = script10405(int2);
        if ((int2 == 18)) {
            if ((IF_GETHIDE(comp(276, 27)) == false)) {  // toplevel_v2_mobile:chat_panel
                IF_SETHIDE(int5, comp(276, 27));  // toplevel_v2_mobile:chat_panel
                script15872();
            };
            int2 = enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443);
            if (((script383(int2) != 31) && (varclient_6910 == 0))) {
                IF_SETHIDE(int5, struct_getparam(int1, 3503));
            };
        } else {
            IF_SETHIDE(int5, struct_getparam(int1, 3503));
        };
        int3 = (int3 + 1);
    };
    IF_SETHIDE(int5, comp(276, 16));  // toplevel_v2_mobile:settings_mobile
    IF_SETHIDE(int5, comp(279, 1));  // mobile_ribbon_left:home_screen_button
    IF_SETHIDE(int5, comp(279, 6));  // mobile_ribbon_left:chat_wrapper
    IF_SETHIDE(int5, comp(279, 10));  // mobile_ribbon_left:activity_tracker_wrapper
    IF_SETHIDE(int5, comp(279, 15));  // mobile_ribbon_left:calendar_wrapper
    IF_SETHIDE(int5, comp(279, 16));  // mobile_ribbon_left:event_hud_hide
    IF_SETHIDE(int5, comp(279, 21));  // mobile_ribbon_left:secondary_event_hud_hide
    return;
}