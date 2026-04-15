//
function script13756(int0: component, int1: int, string0: string): void {
    if ((int1 != 0)) {
        script78(int0, 0, int1, 700);
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETTEXT(string0);
    CC_SETSIZE(640, 100, 0, 0);
    CC_SETTEXTALIGN(0, 0, 20);
    CC_SETPOSITION(5, (int1 + 7), 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(28 as fontmetrics);
    return;
}