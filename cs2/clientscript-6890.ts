//
function script6890(int0: int, int1: component, int2: int, string0: string): int {
    var int3 = ((PARAHEIGHT(string0, IF_GETWIDTH(int1), 27 as fontmetrics) * 10) + 2);
    var int4 = (CLIENTCLOCK() - int2);
    if (((int2 > 0) && (int4 < 255))) {
        CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
        CC_SETSIZE(0, int3, 1, 0);
        CC_SETPOSITION(0, int0, 1, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(16711680);
        CC_SETTRANS(MAX(int4, 0));
        CC_SETONTIMER(callback(script6891, -2147483645, -2147483643));
    };
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(0, int3, 1, 0);
    CC_SETPOSITION(0, int0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT(string0);
    return ((int0 + int3) + 2);
}