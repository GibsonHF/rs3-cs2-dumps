//
function script6342(int0: number, int1: number): void {
    var int2 = 28;
    if ((MAP_LANG() == 2)) {
        if ((script6431() == 1)) {
            int2 = 29;
        } else {
            int2 = 26;
        };
    } else if ((script6431() == 1)) {
        int2 = 31;
    };
    IF_SETTEXTFONT(int2, int0);
    script2731(int0, int1, 2);
    return;
}