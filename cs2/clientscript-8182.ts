//
function script8182(): void {
    if ((varclient_6524 > 0)) {
        return;
    };
    if ((IF_GETHIDE(comp(1477, 806)) == true)) {  // toplevel_v2:escape_menu_background
        script8177();
    } else {
        script8179();
    };
    varclient_6524 = 2;
    IF_SETONTIMER(callback(script2038), comp(1477, 9));  // toplevel_v2:skin_redraw_listener
    return;
}