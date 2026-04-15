//
function script10367(int0: component, int1: int, string0: string): int {
    var int2 = IF_GETWIDTH(int0);
    var int3 = script7593(string0, int2, 26 as fontmetrics, -1);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int2, int3, 0, 0);
    CC_SETPOSITION(0, int1, 0, 0);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(1));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    return ((int1 + int3) + 2);
}