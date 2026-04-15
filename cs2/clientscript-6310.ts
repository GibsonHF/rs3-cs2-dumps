//
function script6310(int0: component, int1: int, int2: unknown_int, string0: string): [int, int] {
    var int3 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int3 = 28 as fontmetrics;
    };
    var int4 = IF_GETWIDTH(int0);
    var int5 = script7593(string0, int4, int3, -1);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int4, int5, 0, 0);
    CC_SETPOSITION(0, int1, 0, 0);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(1));
    CC_SETTEXTFONT(int3);
    CC_SETTEXTALIGN(0, 0, 0);
    if ((int2 == 1)) {
        CC_SETOP(1, "Toggle");
    };
    return [((int1 + int5) + 2), IF_GETNEXTSUBID(int0)];
}