//
function script5475(int0: component, int1: component, int2: component, string0: string): void {
    var int3 = 0;
    IF_SETSCROLLPOS(0, 0, int1);
    int3 = PARAHEIGHT(string0, IF_GETWIDTH(int0), 26 as fontmetrics);
    int3 = (int3 * 14);
    int3 = (int3 + 14);
    IF_SETSCROLLSIZE(0, int3, int1);
    if ((int3 > IF_GETHEIGHT(int1))) {
        IF_SETHIDE(false, int2);
        script31(int2, int1, 8383 as graphic, 8380 as graphic, 8381 as graphic, 8382 as graphic, 8375 as graphic, 8374 as graphic);
    } else {
        IF_SETHIDE(true, int2);
    };
    return;
}