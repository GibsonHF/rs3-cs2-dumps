//
function script11099(string0: string, string1: string): void {
    var int0 = (PARAHEIGHT(string0, 196, 27 as fontmetrics) * 14);
    var int1 = (PARAHEIGHT(string1, 196, 27 as fontmetrics) * 14);
    CC_CREATE(comp(530, 1), 4, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, int0, 1, 0);
    CC_SETCOLOUR(65793);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(string0);
    if ((int0 <= 196)) {
        IF_SETHIDE(true, comp(530, 2));
    } else {
        IF_SETHIDE(false, comp(530, 2));
        IF_SETSCROLLSIZE(0, int0, comp(530, 1));
        script31(comp(530, 2), comp(530, 1), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    CC_CREATE(comp(530, 4), 4, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, int1, 1, 0);
    CC_SETCOLOUR(65793);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(string1);
    if ((int1 <= 196)) {
        IF_SETHIDE(true, comp(530, 3));
    } else {
        IF_SETHIDE(false, comp(530, 3));
        IF_SETSCROLLSIZE(0, int1, comp(530, 4));
        script31(comp(530, 3), comp(530, 4), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return;
}