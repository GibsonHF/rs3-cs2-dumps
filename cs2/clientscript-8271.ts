//
function script8271(int0: component): void {
    var string0 = script4693(varplayer_3285, varbitplayer_34341);
    var int1 = 59 as fontmetrics;
    IF_SETTEXT(string0, int0);
    if ((PARAHEIGHT(string0, IF_GETWIDTH(int0), 59 as fontmetrics) > 2)) {
        int1 = 55 as fontmetrics;
    };
    IF_SETTEXTFONT(int1, int0);
    IF_SETCOLOUR(script10495(0), int0);
    return;
}