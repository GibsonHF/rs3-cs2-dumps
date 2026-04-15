//
function script4097(int0: component, int1: int, string0: string): void {
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, int1, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(4514 as graphic);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, int1, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(4516 as graphic);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, int1, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETGRAPHIC(4515 as graphic);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(20, int1, 1, 0);
    CC_SETPOSITION(0, 1, 1, 0);
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string0);
    IF_SETHIDE(false, int0);
    return;
}