//
function script11822(int0: number): void {
    if ((int0 == 1)) {
        if ((varplayer_5883 == 0)) {
            IF_SETONTIMER(callback(script12595), 96796687);
        } else {
            IF_SETONTIMER(callback(), 96796687);
        };
        return;
    };
    if ((varplayer_5884 != 1 as telemetry_interval)) {
        IF_SETHIDE(1, 104071206);
        IF_SETHIDE(1, 104071205);
        IF_SETHIDE(1, 104071204);
        IF_SETHIDE(1, 104071202);
        IF_SETHIDE(1, 110166081);
        IF_SETHIDE(1, 110166074);
        IF_SETHIDE(1, 110166067);
        IF_SETHIDE(1, 110166060);
        return;
    };
    varclient_5078 = 0;
    IF_SETONTIMER(callback(), 96796687);
    return;
}