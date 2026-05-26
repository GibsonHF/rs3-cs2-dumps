//
function script8758(int0: number, int1: number, int2: number, string0: string): void {
    if ((MODULO(int2, 2) == 0)) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETGRAPHIC(11438);
        CC_SETPOSITION(0, int1, 0, 0);
        CC_SETSIZE(286, 42, 0, 0);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(5, (int1 + 10), 0, 0);
    CC_SETSIZE(260, 23, 0, 0);
    CC_SETGRAPHIC(11442);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(5, (int1 + 10), 0, 0);
    CC_SETSIZE(260, 23, 0, 0);
    CC_SETCOLOUR(14734449);
    CC_SETTEXTFONT(56);
    CC_SETTEXT(string0);
    return;
}