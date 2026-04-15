//
function script16919(): void {
    if ((MAP_WORLD() <= 0)) {
        IF_SETTEXT("World: Auto", comp(906, 63));
        IF_SETHIDE(true, comp(906, 64));
        IF_SETCOLOUR(15777401, comp(906, 63));
        IF_SETTEXTALIGN(1, 1, 0, comp(906, 63));
        return;
    };
    var int0 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int0, 24) == 1)) {
        stack(35200);
        stack(59375680);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 59375680);
    } else {
        if ((TESTBIT(int0, 0) == 1)) {
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
    };
    IF_SETTEXT(`World ${inttostring(MAP_WORLD(), 10)}`, comp(906, 63));
    script3064(true);
    return;
}