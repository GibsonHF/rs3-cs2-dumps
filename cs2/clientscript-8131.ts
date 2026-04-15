//
function script8131(int0: unknown_int): void {
    var string0 = "Auto-retaliate disabled";
    var int1 = 18617;
    var int2 = 18853;
    var int3 = 18854;
    if ((varplayer_462 != 1)) {
        string0 = "Auto-retaliate enabled";
        int1 = 18618;
        int2 = 20253;
        int3 = 20254;
    };
    stack(int1);
    stack(int0);
    IF_SETGRAPHIC();
    stack(int2);
    stack(93716537);
    IF_SETGRAPHIC();
    IF_SETONMOUSEOVER(callback(script44, -2147483645, int3), 93716537);
    IF_SETONMOUSELEAVE(callback(script44, -2147483645, int2), 93716537);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 93716536);
    script8808();
    return;
}