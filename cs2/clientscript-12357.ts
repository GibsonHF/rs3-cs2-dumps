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
        IF_SETGRAPHIC(27053 as graphic, comp(1745, 7));
        IF_SETGRAPHIC(27053 as graphic, comp(1745, 8));
        IF_SETHIDE(true, comp(1745, 35));
    } else {
        IF_SETGRAPHIC(27052 as graphic, comp(1745, 7));
        IF_SETGRAPHIC(27052 as graphic, comp(1745, 8));
        IF_SETHIDE(false, comp(1745, 35));
    };
    IF_SETGRAPHIC(27051 as graphic, comp(1253, 5));
    return;
}