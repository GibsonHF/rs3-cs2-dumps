//
function script13775(): void {
    var string0 = "The gold accumulator is currently disabled.";
    if ((varbitplayer_38662 == 1)) {
        stack(13165);
        stack(127402071);
        IF_SETGRAPHIC();
        string0 = "The gold accumulator is currently enabled.";
    } else {
        stack(13166);
        stack(127402071);
        IF_SETGRAPHIC();
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 127402071);
    return;
}