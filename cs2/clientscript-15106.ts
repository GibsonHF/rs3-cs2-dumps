//
function script15106(): void {
    var string0 = "";
    if ((varbitplayer_47707 == 0)) {
        script13960(11010118, 28222, 0, 0);
        IF_SETGRAPHIC(1428 as graphic, comp(168, 71));
        IF_SETTRANS(128, comp(168, 71));
        string0 = "Switch to noted withdrawal mode.";
    } else {
        script13960(11010118, 28222, 0, 1);
        IF_SETGRAPHIC(1427 as graphic, comp(168, 71));
        IF_SETTRANS(0, comp(168, 71));
        string0 = "Switch to item withdrawal mode.";
    };
    IF_SETOP(1, string0, comp(168, 70));
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), 11010118);
    return;
}