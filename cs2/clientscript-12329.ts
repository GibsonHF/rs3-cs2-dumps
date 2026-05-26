//
function script12329(): void {
    if ((varplayer_5884 != 1 as telemetry_interval)) {
        varclient_5078 = 0;
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
    IF_SETHIDE(0, 104071206);
    IF_SETHIDE(0, 104071202);
    IF_SETHIDE(0, 110166081);
    IF_SETHIDE(0, 110166060);
    if ((varplayer_5883 == 1)) {
        IF_SETHIDE(1, 104071205);
        IF_SETHIDE(0, 104071204);
        IF_SETHIDE(1, 110166074);
        IF_SETHIDE(0, 110166067);
    } else {
        IF_SETHIDE(0, 104071205);
        IF_SETHIDE(1, 104071204);
        IF_SETHIDE(0, 110166074);
        IF_SETHIDE(1, 110166067);
    };
    return;
}