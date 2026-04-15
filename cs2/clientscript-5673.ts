//
function script5673(int0: component, int1: int, string0: string): void {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(15, 10, 1, 0);
    CC_SETPOSITION(15, (int1 - 1), 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTALIGN(0, 0, 0);
    return;
}