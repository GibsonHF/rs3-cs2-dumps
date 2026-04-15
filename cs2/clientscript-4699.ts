//
function script4699(int0: unknown_int, int1: component, int2: component, string0: string, string1: string): void {
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETTEXTFONT(26 as fontmetrics);
    if ((script6431() == true)) {
        CC_SETTEXTFONT(28 as fontmetrics);
    };
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string0);
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETTEXTFONT(26 as fontmetrics);
    if ((script6431() == true)) {
        CC_SETTEXTFONT(28 as fontmetrics);
    };
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string1);
    return;
}