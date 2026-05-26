//
function script6521(): void {
    var string0 = "";
    if ((varbitplayer_45911 == 0)) {
        script13960(33882163, 28222, 0, 0);
        IF_SETGRAPHIC(16395 as graphic, comp(517, 52));
        string0 = "Toggle to prevent automatic tab switching";
    } else {
        script13960(33882163, 28222, 0, 1);
        IF_SETGRAPHIC(16396 as graphic, comp(517, 52));
        string0 = "Toggle to allow automatic tab switching";
    };
    IF_SETOP(1, string0, comp(517, 51));
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), 33882163);
    return;
}