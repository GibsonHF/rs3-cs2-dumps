//
function script2683(): void {
    if ((varbitplayer_38845 == 1)) {
        IF_SETONTIMER(callback(script13800, -2147483645, MODULO(DATE_MINUTES(), 60)), comp(1477, 20));  // toplevel_v2:five_min_warning_message_listener
    } else {
        IF_SETONTIMER(callback(), comp(1477, 20));  // toplevel_v2:five_min_warning_message_listener
    };
    return;
}