//
function script12089(int0: component, int1: int, int2: int, string0: string): int {
    var int3 = (IF_GETWIDTH(int0) - int1);
    var int4 = script7593(string0, int3, 26 as fontmetrics, -1);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int3, int4, 0, 0);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    return ((int2 + int4) + 2);
}