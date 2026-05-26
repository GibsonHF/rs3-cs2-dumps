//
function script11219(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    CC_CREATE(int0, 4, int1);
    CC_SETSIZE((int2 * 2), 18, 1, 0);
    CC_SETPOSITION(int2, int3, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETMAXLINES(1);
    script11024(0);
    return;
}