//
function script10743(string0: string): void {
    CC_DELETEALL(comp(1554, 14));
    CC_CREATE(comp(1554, 14), 4, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26 as fontmetrics);
    IF_SETTEXT("-", comp(1554, 15));
    IF_SETTEXT("Enhancer details", comp(1554, 16));
    IF_SETHIDE(false, comp(1554, 11));
    return;
}