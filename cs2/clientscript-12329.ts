//
function script12329(): void {
    if ((varplayer_5884 != 1 as telemetry_interval)) {
        varclient_5078 = 0;
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
    IF_SETHIDE(false, comp(1588, 38));
    IF_SETHIDE(false, comp(1588, 34));
    IF_SETHIDE(false, comp(1681, 65));
    IF_SETHIDE(false, comp(1681, 44));
    if ((varplayer_5883 == 1)) {
        IF_SETHIDE(true, comp(1588, 37));
        IF_SETHIDE(false, comp(1588, 36));
        IF_SETHIDE(true, comp(1681, 58));
        IF_SETHIDE(false, comp(1681, 51));
    } else {
        IF_SETHIDE(false, comp(1588, 37));
        IF_SETHIDE(true, comp(1588, 36));
        IF_SETHIDE(false, comp(1681, 58));
        IF_SETHIDE(true, comp(1681, 51));
    };
    return;
}