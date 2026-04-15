//
function script6521(): void {
    var string0 = "";
    if ((varbitplayer_45911 == 0)) {
        script13960(comp(517, 51), 28222 as struct, false, 0);
        stack(16395);
        stack(33882164);
        IF_SETGRAPHIC();
        string0 = "Toggle to prevent automatic tab switching";
    } else {
        script13960(comp(517, 51), 28222 as struct, false, 1);
        stack(16396);
        stack(33882164);
        IF_SETGRAPHIC();
        string0 = "Toggle to allow automatic tab switching";
    };
    IF_SETOP(1, string0, comp(517, 51));
    IF_SETONMOUSEREPEAT(callback(script10009, string0, -2147483645, -2147483643), 33882163);
    return;
}