//
function script6342(int0: number, int1: number): void {
    var int2 = 28 as fontmetrics;
    if ((MAP_LANG() == 2)) {
        if ((script6431() == 1)) {
            int2 = 29 as fontmetrics;
        } else {
            int2 = 26 as fontmetrics;
        };
    } else if ((script6431() == 1)) {
        int2 = 31 as fontmetrics;
    };
    IF_SETTEXTFONT(int2, int0);
    script2731(int0, int1, 2);
    return;
}