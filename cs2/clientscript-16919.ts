//
function script16919(): void {
    if ((MAP_WORLD() <= 0)) {
        IF_SETTEXT("World: Auto", 59375679);
        IF_SETHIDE(1, 59375680);
        IF_SETCOLOUR(15777401, 59375679);
        IF_SETTEXTALIGN(1, 1, 0, 59375679);
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
        IF_SETHIDE(0, 59375680);
    };
    IF_SETTEXT(`World ${inttostring(MAP_WORLD(), 10)}`, 59375679);
    script3064(1);
    return;
}