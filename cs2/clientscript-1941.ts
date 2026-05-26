//
function script1941(): void {
    var int0 = (((varplayer_1596 + varplayer_1598) + varplayer_1601) + (2 * (varplayer_1597 - varplayer_1599)));
    IF_SETTEXT(`Score: ${inttostring(int0, 10)}`, 53018629);
    if ((varclient_556 == 0)) {
        return;
    };
    var int1 = (varclient_556 - CLIENTCLOCK());
    var int2 = (int1 / 3000);
    var int3 = MODULO((int1 / 50), 60);
    if (((int2 < 0) || (int3 < 0))) {
        IF_SETTEXT("Game ending", 53018627);
        IF_SETTEXTSHADOW(1, 53018627);
        script1942();
    } else if (((int2 == 0) && (int3 == 0))) {
        IF_SETTEXT("Game ending", 53018627);
    } else if ((int3 < 10)) {
        IF_SETTEXT(`${inttostring(int2, 10)}:0${inttostring(int3, 10)}`, 53018627);
    } else {
        IF_SETTEXT(`${inttostring(int2, 10)}:${inttostring(int3, 10)}`, 53018627);
    };
    if ((int2 < 1)) {
        IF_SETCOLOUR(16711680, 53018627);
        IF_SETTEXTSHADOW(1, 53018627);
        script1942();
    } else if ((IF_GETHIDE(53018631) == 0)) {
        IF_SETHIDE(1, 53018631);
    };
    return;
}