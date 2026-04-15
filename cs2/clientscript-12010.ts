//
function script12010(): void {
    script8411(2007, 0);
    if ((varbitplayer_38842 == 1)) {
        IF_SETHIDE(true, comp(1490, 29));
        IF_SETHIDE(false, comp(1490, 0));
        IF_SETPOSITION(0, 0, 0, 0, comp(1490, 13));
        IF_SETSIZE(0, 0, 1, 1, comp(1490, 13));
        IF_SETPOSITION(0, ((100 - 92) / 2), 0, 0, comp(1490, 14));
        IF_SETHIDE(true, comp(1490, 29));
    } else {
        IF_SETHIDE(false, comp(1490, 29));
        IF_SETHIDE(true, comp(1490, 0));
    };
    script14243(comp(1490, 0));
    return;
}