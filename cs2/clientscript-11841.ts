//
function script11841(): void {
    var int0 = IF_GETWIDTH(comp(1683, 4));
    if ((varbitplayer_29511 >= 200)) {
        stack(14495);
        stack(110297095);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_29511 >= 500)) {
        stack(14817);
        stack(110297096);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_29511 >= 1000)) {
        stack(14819);
        stack(110297097);
        IF_SETGRAPHIC();
    };
    var string0 = "Unlock the ability to win the scrimshaw of aggression.<br>Dark lamps and stars will grant 20% more XP than standard prismatics.";
    var string1 = "Unlock the ability to win the scrimshaw of sacrifice and a greater chance to win the scrimshaw of aggression.<br>Dark lamps and stars will grant 30% more XP than standard prismatics.";
    var string2 = "Unlock the ability to win the scrimshaw of corruption, the helm of corruption and a greater chance to win the previous scrimshaws.<br>Dark lamps and stars will grant 40% more XP than standard prismatics.";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 110297095);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 110297096);
    IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -1), 110297097);
    IF_SETSIZE(1, 0, 0, 1, 110297093);
    if ((varbitplayer_29511 == 0)) {
        IF_SETSIZE(1, 0, 0, 1, comp(1683, 5));
    } else {
        IF_SETSIZE(SCALE(int0, 1000, varbitplayer_29511), 0, 0, 1, comp(1683, 5));
    };
    IF_SETONVARTRANSMIT(callback(script11842, 5704, 1), comp(1683, 5));
    return;
}