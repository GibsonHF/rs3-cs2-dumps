//
function script9877(): void {
    var string0 = "Auto-retaliate disabled";
    var string1 = "Auto-retaliate<br>(off)";
    var int0 = 655;
    var int1 = 9193;
    if ((varplayer_462 != 1)) {
        string0 = "Auto-retaliate enabled";
        string1 = "Auto-retaliate<br>(on)";
        int0 = 656;
        int1 = 9194;
    };
    IF_SETTEXT(string1, comp(1503, 52));
    stack(int0);
    stack(98500659);
    IF_SETGRAPHIC();
    IF_SETONMOUSEOVER(callback(script44, -2147483645, int1), 98500659);
    IF_SETONMOUSELEAVE(callback(script44, -2147483645, int0), 98500659);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 98500658);
    script8808();
    return;
}