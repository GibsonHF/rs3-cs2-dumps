//
function script1251(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(64, 7));  // no_displayname_v2:information_layer
    IF_SETHIDE(true, comp(64, 7));  // no_displayname_v2:information_layer
    IF_SETONMOUSEOVER(callback(script1249), comp(64, 31));  // no_displayname_v2:name_icon_layer
    IF_SETONMOUSEREPEAT(callback(), comp(64, 31));  // no_displayname_v2:name_icon_layer
    return;
}