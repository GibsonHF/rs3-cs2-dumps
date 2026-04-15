//
function script6244(): void {
    varclient_1923 = (varclient_1923 - (25000 / 50));
    var int0 = MAX(1, (100 - SCALE(varclient_1923, 25000, 100)));
    if ((varclient_1923 <= 0)) {
        varclient_1923 = 0;
        IF_SETONTIMER(callback(), comp(1285, 2));
        IF_SETHIDE(0, 84213792);
        IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), 84213792);
    } else {
        script4542(int0, comp(1285, 4), comp(-1, 65535));
        IF_SETHIDE(false, comp(1285, 32));
        IF_SETTEXT(TOSTRING_LOCALISED((25000 - varclient_1923), 1), comp(1285, 32));
    };
    return;
}