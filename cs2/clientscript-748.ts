//
function script748(): void {
    IF_SETONTIMER(callback(script749, 1179650, 0, 1179671), 1179671);
    IF_SETHIDE(1, 106496006);
    IF_SETSIZE(0, 23, 0, 0, 1179650);
    IF_SETCOLOUR(16777215, 1179667);
    IF_SETPOSITION(15, 2, 0, 0, 1179660);
    IF_SETONTIMER(callback(script936, CLIENTCLOCK()), 1179660);
    IF_SETSIZE(350, 0, 0, 0, 1179670);
    IF_SETHIDE(1, 1179668);
    IF_SETHIDE(1, 1179666);
    if ((varbitplayer_28168 > 0)) {
        IF_SETHIDE(true, comp(18, 13));
    };
    return;
}