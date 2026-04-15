//
function script14954(int0: component, int1: int, int2: int, string0: string): void {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(int1, 30, 1, 0);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(57 as fontmetrics);
    script11024(0);
    return;
}