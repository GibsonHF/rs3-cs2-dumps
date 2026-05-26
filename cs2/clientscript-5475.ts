//
function script5475(int0: number, int1: number, int2: number, string0: string): void {
    var int3 = 0;
    IF_SETSCROLLPOS(0, 0, int1);
    int3 = PARAHEIGHT(string0, IF_GETWIDTH(int0), 26 as fontmetrics);
    int3 = (int3 * 14);
    int3 = (int3 + 14);
    IF_SETSCROLLSIZE(0, int3, int1);
    if ((int3 > IF_GETHEIGHT(int1))) {
        IF_SETHIDE(false, int2);
        script31(int2, int1, 8383, 8380, 8381, 8382, 8375, 8374);
    } else {
        IF_SETHIDE(true, int2);
    };
    return;
}