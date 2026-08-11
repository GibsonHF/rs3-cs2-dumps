//
function script11099(string0: string, string1: string): void {
    var int0 = (PARAHEIGHT(string0, 196, 27 as fontmetrics) * 14);
    var int1 = (PARAHEIGHT(string1, 196, 27 as fontmetrics) * 14);
    CC_CREATE(comp(530, 1), 4, 0);  // qip_soa_varrock_herald_newspaper:back_page_scroll_left
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, int0, 1, 0);
    CC_SETCOLOUR(65793);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(string0);
    if ((int0 <= 196)) {
        IF_SETHIDE(true, comp(530, 2));  // qip_soa_varrock_herald_newspaper:scroll_left
    } else {
        IF_SETHIDE(false, comp(530, 2));  // qip_soa_varrock_herald_newspaper:scroll_left
        IF_SETSCROLLSIZE(0, int0, comp(530, 1));  // qip_soa_varrock_herald_newspaper:back_page_scroll_left
        script31(34734082, 34734081, 792, 789, 790, 791, 773, 788);
    };
    CC_CREATE(comp(530, 4), 4, 0);  // qip_soa_varrock_herald_newspaper:back_page_scroll_right
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, int1, 1, 0);
    CC_SETCOLOUR(65793);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(string1);
    if ((int1 <= 196)) {
        IF_SETHIDE(true, comp(530, 3));  // qip_soa_varrock_herald_newspaper:scroll_right
    } else {
        IF_SETHIDE(false, comp(530, 3));  // qip_soa_varrock_herald_newspaper:scroll_right
        IF_SETSCROLLSIZE(0, int1, comp(530, 4));  // qip_soa_varrock_herald_newspaper:back_page_scroll_right
        script31(34734083, 34734084, 792, 789, 790, 791, 773, 788);
    };
    return;
}