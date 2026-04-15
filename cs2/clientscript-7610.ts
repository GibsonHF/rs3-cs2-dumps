//
function script7610(string0: string): void {
    CC_DELETEALL(comp(1555, 7));
    CC_CREATE(comp(1555, 7), 4, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXT(string0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTFONT(26 as fontmetrics);
    IF_SETTEXT("-", comp(1555, 15));
    IF_SETTEXT("Recipe details", comp(1555, 16));
    IF_SETHIDE(false, comp(1555, 24));
    return;
}