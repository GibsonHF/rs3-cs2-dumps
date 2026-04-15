//
function script13254(): void {
    CC_CREATE(comp(1311, 171), 4, IF_GETNEXTSUBID(comp(1311, 171)));
    CC_SETTEXT("There are no results.");
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETCOLOUR(script10495(6));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETSIZE(0, 32, 1, 0);
    CC_SETPOSITION(0, 0, 4, 4);
    IF_SETHIDE(true, comp(1311, 171));
    return;
}