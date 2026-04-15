//
function script11822(int0: unknown_int): void {
    if ((int0 == 1)) {
        if ((varplayer_5883 == 0)) {
            IF_SETONTIMER(callback(script12595), comp(1477, 15));
        } else {
            IF_SETONTIMER(callback(), comp(1477, 15));
        };
        return;
    };
    if ((varplayer_5884 != 1 as telemetry_interval)) {
        IF_SETHIDE(true, comp(1588, 38));
        IF_SETHIDE(true, comp(1588, 37));
        IF_SETHIDE(true, comp(1588, 36));
        IF_SETHIDE(true, comp(1588, 34));
        IF_SETHIDE(true, comp(1681, 65));
        IF_SETHIDE(true, comp(1681, 58));
        IF_SETHIDE(true, comp(1681, 51));
        IF_SETHIDE(true, comp(1681, 44));
        return;
    };
    varclient_5078 = 0;
    IF_SETONTIMER(callback(), comp(1477, 15));
    return;
}