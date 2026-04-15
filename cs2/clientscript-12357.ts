//
function script12357(): void {
    var int0 = (IF_GETWIDTH(comp(1745, 1)) - 2);
    var int1 = script12362(varplayer_6200);
    if ((int1 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1745, 4));
    } else {
        IF_SETSIZE(SCALE(int0, 32, int1), 0, 0, 1, comp(1745, 4));
    };
    IF_SETHIDE(true, comp(1253, 8));
    IF_SETHIDE(true, comp(1253, 171));
    IF_SETHIDE(true, comp(1253, 89));
    if ((int1 == 32)) {
        stack(27053);
        stack(114360327);
        IF_SETGRAPHIC();
        stack(27053);
        stack(114360328);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 114360355);
    } else {
        stack(27052);
        stack(114360327);
        IF_SETGRAPHIC();
        stack(27052);
        stack(114360328);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 114360355);
    };
    stack(27051);
    stack(82116613);
    IF_SETGRAPHIC();
    return;
}