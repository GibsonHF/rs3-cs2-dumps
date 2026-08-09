//
function script8131(int0: number): void {
    var string0 = "Auto-retaliate disabled";
    var int1 = 18617 as graphic;
    var int2 = 18853 as graphic;
    var int3 = 18854;
    if ((varplayer_462 != 1)) {
        string0 = "Auto-retaliate enabled";
        int1 = 18618 as graphic;
        int2 = 20253 as graphic;
        int3 = 20254;
    };
    IF_SETGRAPHIC(int1, int0);
    IF_SETGRAPHIC(int2, comp(1430, 59));
    IF_SETONMOUSEOVER(callback(script44, -2147483645, int3), comp(1430, 59));
    IF_SETONMOUSELEAVE(callback(script44, -2147483645, int2), comp(1430, 59));
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1430, 58));
    script8808();
    return;
}