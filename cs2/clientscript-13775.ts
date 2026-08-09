//
function script13775(): void {
    var string0 = "The gold accumulator is currently disabled.";
    if ((varbitplayer_38662 == 1)) {
        IF_SETGRAPHIC(13165 as graphic, comp(1944, 87));
        string0 = "The gold accumulator is currently enabled.";
    } else {
        IF_SETGRAPHIC(13166 as graphic, comp(1944, 87));
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1944, 87));
    return;
}