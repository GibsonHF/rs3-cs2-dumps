//
function script11099(string0: string, string1: string): void {
    var int0 = (PARAHEIGHT(string0, 196, 27) * 14);
    var int1 = (PARAHEIGHT(string1, 196, 27) * 14);
    CC_CREATE(34734081, 4, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, int0, 1, 0);
    CC_SETCOLOUR(65793);
    CC_SETTEXTFONT(27);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(string0);
    if ((int0 <= 196)) {
        IF_SETHIDE(1, 34734082);
    } else {
        IF_SETHIDE(0, 34734082);
        IF_SETSCROLLSIZE(0, int0, 34734081);
        script31(34734082, 34734081, 792, 789, 790, 791, 773, 788);
    };
    CC_CREATE(34734084, 4, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, int1, 1, 0);
    CC_SETCOLOUR(65793);
    CC_SETTEXTFONT(27);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXT(string1);
    if ((int1 <= 196)) {
        IF_SETHIDE(1, 34734083);
    } else {
        IF_SETHIDE(0, 34734083);
        IF_SETSCROLLSIZE(0, int1, 34734084);
        script31(34734083, 34734084, 792, 789, 790, 791, 773, 788);
    };
    return;
}