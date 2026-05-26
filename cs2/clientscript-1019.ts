//
function script1019(int0: number): void {
    if ((script6431() == 1)) {
        IF_SETTEXTFONT(31 as fontmetrics, int0);
    } else {
        IF_SETTEXTFONT(26 as fontmetrics, int0);
    };
    IF_SETTEXT(inttostring(RUNENERGY_VISIBLE(), 10), int0);
    return;
}