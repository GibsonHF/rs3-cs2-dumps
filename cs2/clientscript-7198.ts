//
function script7198(): void {
    script7997();
    IF_SETHIDE(1, 31129610);
    IF_SETHIDE(1, 31129611);
    IF_SETHIDE(1, 31129612);
    IF_SETHIDE(0, 31129613);
    IF_SETHIDE(0, 31129608);
    IF_SETHIDE(0, 31129625);
    IF_SETONTIMER(callback(script2870, -2147483645, (CLIENTCLOCK() + 150)), 31129625);
    script3455();
    IF_SETONTIMER(callback(script7940, -2147483645), 96796710);
    script12446();
    if ((varbitplayer_27169 == 1)) {
        IF_SETHIDE(1, 96796764);
        IF_SETHIDE(1, 96796739);
        IF_SETHIDE(1, 96796733);
        IF_SETHIDE(1, 96797310);
    };
    if ((varclient_4667 < 64)) {
        varclient_4667 = (64 + ((1024 - 64) / 2));
    };
    if ((varclient_4668 < 1)) {
        varclient_4668 = (1 + ((50 - 1) / 2));
    };
    script8776();
    script8836(7693);
    IF_SETONVARCTRANSMIT(callback(script3008, COORD(), 4718, 1), 96796710);
    return;
}