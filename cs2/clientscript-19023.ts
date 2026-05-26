//
function script19023(): void {
    if (((varplayer_11775 <= 0) || (varclient_7786 <= CLIENTCLOCK()))) {
        IF_SETHIDE(true, comp(994, 5));
        IF_SETTRANS(255, comp(994, 5));
        IF_SETONTIMER(callback(), comp(994, 1));
        return;
    };
    IF_SETHIDE(false, comp(994, 5));
    if (((varclient_7786 - CLIENTCLOCK()) < 30)) {
        IF_SETTRANS((255 - SCALE((varclient_7786 - CLIENTCLOCK()), 30, 255)), comp(994, 5));
    } else {
        IF_SETTRANS(0, comp(994, 5));
    };
    IF_SETONTIMER(callback(script19023), comp(994, 1));
    return;
}