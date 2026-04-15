//
function script20337(int0: int, int1: int, int2: int, int3: int, int4: fontmetrics, int5: int, string0: string): [int, int] {
    var int6 = script15891(string0, int3, int4, 0);
    script10485(int0, int1++, 0, int2, 0, 0, 0, int6, 1, 0, -1 as dbrow, string0);
    CC_SETTEXTFONT(int4);
    CC_SETCOLOUR(int5);
    return [int1, ((int2 + int6) + 4)];
}