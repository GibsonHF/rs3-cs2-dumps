//
function script3116(): void {
    if ((MAP_WORLD() == -1)) {
        unk11060();
        script16919();
        return;
    };
    var int0 = WORLDLIST_SPECIFIC_THISWORLD();
    var int1 = script42(script16823());
    if ((script20334(int0, 30, 1, int1, 0) == 1)) {
        return;
    };
    if ((script20334(int0, 30, 0, int1, 1) == 1)) {
        return;
    };
    if ((script20334(int0, 24, 1, varbitplayer_58378, 0) == 1)) {
        return;
    };
    if ((script20334(int0, 24, 0, varbitplayer_58378, 1) == 1)) {
        return;
    };
    int0 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int0, 24) == 1)) {
        stack(35200);
        stack(59375680);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(15777401, 59375679);
    } else if ((TESTBIT(int0, 0) == 1)) {
        stack(23835);
        stack(59375680);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(15777401, 59375679);
    } else {
        stack(23837);
        stack(59375680);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(16777215, 59375679);
    };
    IF_SETHIDE(false, comp(906, 64));
    var string0 = `World ${inttostring(MAP_WORLD(), 10)}`;
    IF_SETTEXT(string0, comp(906, 63));
    IF_SETTEXTALIGN(1, 1, 0, comp(906, 63));
    IF_SETONMOUSEREPEAT(callback(script10072, MAP_WORLD(), -2147483645, -1), 59375679);
    script3064(1);
    return;
}