//
function script10154(): void {
    var int0 = -1;
    var string0 = "";
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        int0 = TTV_STREAM_GETQUALITY();
        if ((int0 == 1)) {
            string0 = "Your internet connection and/or computer is having minor difficulty broadcasting. If this persists, we recommend that you lower the bandwidth usage setting and try again.";
            IF_SETHIDE(0, 15138816);
            IF_SETHIDE(1, 15138817);
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 15138816, -1), 15138816);
        } else if ((int0 == 2)) {
            IF_SETHIDE(1, 15138816);
            IF_SETHIDE(0, 15138817);
            string0 = "Your internet connection and/or computer is unable to broadcast and may stop broadcasting entirely. We recommend that you lower the bandwidth usage setting and try again.";
            IF_SETONMOUSEREPEAT(callback(script8799, string0, 15138817, -1), 15138817);
        } else {
            IF_SETHIDE(1, 15138816);
            IF_SETHIDE(1, 15138817);
        };
    };
    return;
}