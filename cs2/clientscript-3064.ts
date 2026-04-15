//
function script3064(int0: boolean): void {
    var int1 = WORLDLIST_SPECIFIC_THISWORLD();
    if ((TESTBIT(int1, 24) == 1)) {
        IF_SETTEXT("Play League", comp(906, 82));
        IF_SETTEXTFONT(58 as fontmetrics, comp(906, 82));
        IF_SETCOLOUR(0, comp(906, 82));
        IF_SETHIDE(true, comp(906, 66));
        IF_SETHIDE(true, comp(906, 75));
        IF_SETHIDE(false, comp(906, 78));
    } else {
        IF_SETTEXT("Play Now", comp(906, 82));
        IF_SETTEXTFONT(58 as fontmetrics, comp(906, 82));
        IF_SETCOLOUR(0, comp(906, 82));
        IF_SETHIDE(true, comp(906, 78));
        if ((script6431() == true)) {
            IF_SETHIDE(false, comp(906, 66));
            IF_SETHIDE(true, comp(906, 75));
        } else {
            IF_SETHIDE(true, comp(906, 66));
            IF_SETHIDE(false, comp(906, 75));
        };
    };
    IF_SETHIDE(int0, comp(906, 83));
    if ((int0 == true)) {
        IF_SETOP(1, "Play Now", comp(906, 81));
        IF_SETONOP(callback(script3061, -2147483645), comp(906, 81));
        IF_SETCOLOUR(16777215, 59375693);
        IF_SETCOLOUR(16777215, 59375692);
    } else {
        IF_CLEAROPS(comp(906, 81));
        IF_SETONOP(callback(), comp(906, 81));
        IF_SETCOLOUR(8224125, 59375693);
        IF_SETCOLOUR(8224125, 59375692);
    };
    script3065(int0);
    return;
}