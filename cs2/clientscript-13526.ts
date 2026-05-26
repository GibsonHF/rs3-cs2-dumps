//
function script13526(): void {
    IF_SETCOLOUR(script10495(0), comp(1639, 18));
    var string0 = `Slayer points: ${TOSTRING_LOCALISED(varbitplayer_9071, 1)}`;
    if ((varbitplayer_40059 == 1)) {
        string0 = `Reaper points: ${TOSTRING_LOCALISED(varbitplayer_22905, 1)}`;
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_22905, 1), comp(1639, 18));
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_9071, 1), comp(1639, 18));
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 107413521);
    return;
}