//
function script7198(): void {
    script7997();
    IF_SETHIDE(true, comp(475, 10));  // machinima_livecamera:info0
    IF_SETHIDE(true, comp(475, 11));  // machinima_livecamera:info1
    IF_SETHIDE(true, comp(475, 12));  // machinima_livecamera:info2
    IF_SETHIDE(false, comp(475, 13));  // machinima_livecamera:info3
    IF_SETHIDE(false, comp(475, 8));  // machinima_livecamera:ui
    IF_SETHIDE(false, comp(475, 25));  // machinima_livecamera:exithint
    IF_SETONTIMER(callback(script2870, -2147483645, (CLIENTCLOCK() + 150)), comp(475, 25));  // machinima_livecamera:exithint
    script3455();
    IF_SETONTIMER(callback(script7940, -2147483645), comp(1477, 38));  // toplevel_v2:machinima_camera
    script12446();
    if ((varbitplayer_27169 == 1)) {
        IF_SETHIDE(true, comp(1477, 92));  // toplevel_v2:minimap_window
        IF_SETHIDE(true, comp(1477, 67));  // toplevel_v2:action_window
        IF_SETHIDE(true, comp(1477, 61));  // toplevel_v2:buttons_window
        IF_SETHIDE(true, comp(1477, 638));  // toplevel_v2:hud_window
    };
    if ((varclient_4667 < 64)) {
        varclient_4667 = (64 + ((1024 - 64) / 2));
    };
    if ((varclient_4668 < 1)) {
        varclient_4668 = (1 + ((50 - 1) / 2));
    };
    script8776();
    script8836(7693);
    IF_SETONVARCTRANSMIT(callback(script3008, COORD(), 4718, 1), comp(1477, 38));  // toplevel_v2:machinima_camera
    return;
}