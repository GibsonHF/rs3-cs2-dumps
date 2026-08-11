//
function script5068(int0: number, string0: string): number {
    CC_CREATE(comp(1111, 27), 4, IF_GETNEXTSUBID(comp(1111, 27)));  // clan_field_editor:details
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(14667711);
    var int1 = ((PARAHEIGHT(string0, IF_GETWIDTH(comp(1111, 27)), 66 as fontmetrics) * 10) + 2);  // clan_field_editor:details
    CC_SETSIZE(0, int1, 1, 0);
    CC_SETTEXT(string0);
    CC_SETPOSITION(0, int0, 1, 0);
    return int1;
}