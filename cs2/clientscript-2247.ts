//
function script2247(string0: string): void {
    var int0 = 116;
    var int1 = (16 * PARAHEIGHT(string0, 355, 27 as fontmetrics));
    var int2 = comp(993, 14);
    var int3 = comp(993, 16);
    if ((int0 < int1)) {
        IF_SETHIDE(false, int3);
        IF_SETSCROLLSIZE(0, int1, int2);
        script7791(int3, int2);
    } else {
        IF_SETHIDE(true, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    return;
}