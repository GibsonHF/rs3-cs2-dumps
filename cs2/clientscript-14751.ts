//
function script14751(int0: component, int1: int, int2: int, string0: string): int {
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int4 = 28 as fontmetrics;
    };
    CC_CREATE(int0, 4, int3);
    CC_SETPOSITION(4, int1, 0, 0);
    CC_SETTEXT(string0);
    CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int2 - (2 * 4)), int4, 0), 1, 0);
    CC_SETTEXTFONT(int4);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    var int1 = (int1 + (CC_GETHEIGHT() + 8));
    return int1;
}