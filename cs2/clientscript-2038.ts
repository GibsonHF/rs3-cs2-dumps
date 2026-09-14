//
function script2038(): void {
    varclient_6524 = (varclient_6524 - 1);
    if ((varclient_6524 <= 0)) {
        IF_SETONTIMER(callback(), comp(1477, 9));  // toplevel_v2:skin_redraw_listener
    };
    return;
}