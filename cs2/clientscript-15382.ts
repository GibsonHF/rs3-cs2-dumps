//
function script15382(int0: component, string0: string, string1: string): void {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(60, 0, 1, 1);
    CC_SETPOSITION(50, 0, 0, 0);
    CC_SETTEXT(script2519(string0, string1));
    CC_SETCOLOUR(script10495(2));
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 17);
    CC_SETTEXTSHADOW(true);
    CC_SETNOCLICKTHROUGH(false);
    return;
}