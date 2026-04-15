//
function script11347(int0: component, int1: component): void {
    var string0 = `Special Attack (${inttostring((varplayer_679 / 10), 10)}%)`;
    if (((varbitplayer_4766 == 3) && (varbitplayer_4846 == 1))) {
        string0 = `Portal Energy (${inttostring((varplayer_679 / 10), 10)}%)`;
    };
    if (((PARAHEIGHT(string0, IF_GETWIDTH(int1), 18 as fontmetrics) > 1) || (PARAWIDTH(string0, IF_GETWIDTH(int1), 18 as fontmetrics) > IF_GETWIDTH(int1)))) {
        string0 = `${inttostring((varplayer_679 / 10), 10)}%`;
    };
    script4542(SCALE(varplayer_679, 1000, 100), int0, int1);
    var int2 = 14014931;
    if ((varplayer_680 > 0)) {
        int2 = 16750623;
    };
    script4212(int1, string0, 18 as fontmetrics, int2, 0);
    return;
}