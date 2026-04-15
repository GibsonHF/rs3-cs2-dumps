//
function script12159(int0: component, int1: int, int2: int, string0: string): void {
    CC_CREATE[1](int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE[1](int1, 30, 1, 0);
    CC_SETPOSITION[1](int1, int2, 0, 0);
    CC_SETTEXTALIGN[1](0, 1, 0);
    CC_SETTEXT[1](string0);
    script12108(0);
    CC_SETTEXTFONT[1](57 as fontmetrics);
    return;
}