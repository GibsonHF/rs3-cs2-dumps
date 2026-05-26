//
function script2247(string0: string): void {
    var int0 = 116;
    var int1 = (16 * PARAHEIGHT(string0, 355, 27));
    var int2 = 65077262;
    var int3 = 65077264;
    if ((int0 < int1)) {
        IF_SETHIDE(0, int3);
        IF_SETSCROLLSIZE(0, int1, int2);
        script7791(int3, int2);
    } else {
        IF_SETHIDE(1, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    return;
}