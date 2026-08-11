//
function script1249(): void {
    IF_SETHIDE(false, comp(64, 7));  // no_displayname_v2:information_layer
    IF_SETONMOUSEOVER(callback(), comp(64, 33));  // no_displayname_v2:name_input_status_icon
    IF_SETONMOUSEREPEAT(callback(script1250), comp(64, 33));  // no_displayname_v2:name_input_status_icon
    IF_SETONTIMER(callback(script1251, (CLIENTCLOCK() + 5)), comp(64, 7));  // no_displayname_v2:information_layer
    return;
}