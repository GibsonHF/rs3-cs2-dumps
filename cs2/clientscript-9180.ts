//
function script9180(int0: number, int1: number, int2: number, int3: number, string0: string): number {
    IF_SETHIDE(false, int2);
    IF_SETTEXT(string0, int2);
    IF_SETTEXTFONT(26 as fontmetrics, int2);
    IF_SETTEXTALIGN(0, 1, 0, int2);
    var int4 = IF_GETWIDTH(int3);
    var int5 = 0;
    var int6 = (16 * PARAHEIGHT(string0, int4, 26 as fontmetrics));
    IF_SETSIZE(int4, int6, 0, 0, int2);
    IF_SETPOSITION(0, int1, 0, 0, int2);
    return (int1 + int6);
}