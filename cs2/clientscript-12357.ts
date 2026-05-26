//
function script12357(): void {
    var int0 = (IF_GETWIDTH(114360321) - 2);
    var int1 = script12362(varplayer_6200);
    if ((int1 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, 114360324);
    } else {
        IF_SETSIZE(SCALE(int0, 32, int1), 0, 0, 1, 114360324);
    };
    IF_SETHIDE(1, 82116616);
    IF_SETHIDE(1, 82116779);
    IF_SETHIDE(1, 82116697);
    if ((int1 == 32)) {
        IF_SETGRAPHIC(27053, 114360327);
        IF_SETGRAPHIC(27053, 114360328);
        IF_SETHIDE(1, 114360355);
    } else {
        IF_SETGRAPHIC(27052, 114360327);
        IF_SETGRAPHIC(27052, 114360328);
        IF_SETHIDE(0, 114360355);
    };
    IF_SETGRAPHIC(27051, 82116613);
    return;
}