//
function script5817(int0: component, int1: component, int2: int, int3: int, string0: string, string1: string): [int, int] {
    CC_CREATE(int0, 4, int3);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETSIZE(IF_GETWIDTH(int0), 14, 0, 0);
    CC_SETMAXLINES(1);
    CC_SETTEXTFONT(207 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    script2731(int0, int3, 3);
    CC_SETTEXT(string1);
    CC_CREATE(int1, 4, int3);
    CC_SETPOSITION(0, int2, 2, 0);
    CC_SETSIZE(IF_GETWIDTH(int1), 14, 0, 0);
    CC_SETMAXLINES(1);
    CC_SETTEXTFONT(207 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    script2731(int1, int3, 3);
    CC_SETTEXT(string0);
    return [(int2 + 14), (int3 + 1)];
}