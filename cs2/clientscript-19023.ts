//
function script19023(): void {
    if (((varplayer_11775 <= 0) || (varclient_7786 <= CLIENTCLOCK()))) {
        IF_SETHIDE(1, 65142789);
        IF_SETTRANS(255, 65142789);
        IF_SETONTIMER(callback(), 65142785);
        return;
    };
    IF_SETHIDE(0, 65142789);
    if (((varclient_7786 - CLIENTCLOCK()) < 30)) {
        IF_SETTRANS((255 - SCALE((varclient_7786 - CLIENTCLOCK()), 30, 255)), 65142789);
    } else {
        IF_SETTRANS(0, 65142789);
    };
    IF_SETONTIMER(callback(script19023), 65142785);
    return;
}