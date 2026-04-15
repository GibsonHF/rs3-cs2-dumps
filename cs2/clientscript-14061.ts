//
function script14061(int0: int): void {
    if ((int0 == 0)) {
        stack(13214);
        stack(107413508);
        IF_SETGRAPHIC();
        IF_SETTEXT(script16090(), 107413515);
        IF_SETTEXT(TOSTRING_LOCALISED(script9031(), 1), 107413514);
        IF_SETTEXT("Slayer points:", 107413521);
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_9071, 1), 107413522);
        IF_SETTEXT(TOSTRING_LOCALISED(varplayer_10077, 1), 107413524);
        IF_SETOP(2, "Reaper", 107413510);
    } else {
        stack(23991);
        stack(107413508);
        IF_SETGRAPHIC();
        IF_SETTEXT(script14060(), 107413515);
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_22902, 1), 107413514);
        IF_SETTEXT("Reaper points:", 107413521);
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_22905, 1), 107413522);
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_23260, 1), 107413524);
        IF_SETOP(2, "Slayer", 107413510);
    };
    IF_SETONMOUSEREPEAT(callback(script11607, -2147483645, int0), comp(1639, 10));
    return;
}