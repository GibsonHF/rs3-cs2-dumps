//
function script13527(): void {
    IF_SETCOLOUR(script10495(0), 107413524);
    var string0 = `Task streak: ${TOSTRING_LOCALISED(varplayer_10077, 1)}`;
    if ((varbitplayer_40059 == 1)) {
        string0 = `Task streak: ${TOSTRING_LOCALISED(varbitplayer_23260, 1)}`;
        IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_23260, 1), 107413524);
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(varplayer_10077, 1), 107413524);
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 107413523);
    return;
}