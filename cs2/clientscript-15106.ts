//
function script15106(): void {
    var string0 = "";
    if ((varbitplayer_47707 == 0)) {
        script13960(comp(168, 70), 28222 as struct, false, 0);
        stack(1428);
        stack(11010119);
        IF_SETGRAPHIC();
        IF_SETTRANS(128, 11010119);
        string0 = "Switch to noted withdrawal mode.";
    } else {
        script13960(comp(168, 70), 28222 as struct, false, 1);
        stack(1427);
        stack(11010119);
        IF_SETGRAPHIC();
        IF_SETTRANS(0, 11010119);
        string0 = "Switch to item withdrawal mode.";
    };
    IF_SETOP(1, string0, comp(168, 70));
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), 11010118);
    return;
}