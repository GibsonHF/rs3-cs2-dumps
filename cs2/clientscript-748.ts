//
function script748(): void {
    IF_SETONTIMER(callback(script749, 1179650, 0, 1179671), comp(18, 23));
    IF_SETHIDE(true, comp(1625, 6));
    IF_SETSIZE(0, 23, 0, 0, comp(18, 2));
    IF_SETCOLOUR(16777215, comp(18, 19));
    IF_SETPOSITION(15, 2, 0, 0, comp(18, 12));
    IF_SETONTIMER(callback(script936, CLIENTCLOCK()), comp(18, 12));
    IF_SETSIZE(350, 0, 0, 0, comp(18, 22));
    IF_SETHIDE(true, comp(18, 20));
    IF_SETHIDE(true, comp(18, 18));
    if ((varbitplayer_28168 > 0)) {
        IF_SETHIDE(true, comp(18, 13));
    };
    return;
}