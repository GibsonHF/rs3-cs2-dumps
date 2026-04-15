//
function script8758(int0: component, int1: int, int2: int, string0: string): void {
    if ((MODULO(int2, 2) == 0)) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETGRAPHIC(11438 as graphic);
        CC_SETPOSITION(0, int1, 0, 0);
        CC_SETSIZE(286, 42, 0, 0);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(5, (int1 + 10), 0, 0);
    CC_SETSIZE(260, 23, 0, 0);
    CC_SETGRAPHIC(11442 as graphic);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(5, (int1 + 10), 0, 0);
    CC_SETSIZE(260, 23, 0, 0);
    CC_SETCOLOUR(14734449);
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETTEXT(string0);
    return;
}