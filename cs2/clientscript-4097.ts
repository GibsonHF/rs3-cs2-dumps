//
function script4097(int0: number, int1: number, string0: string): void {
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, int1, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(4514);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(8, int1, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETGRAPHIC(4516);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(16, int1, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETGRAPHIC(4515);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(20, int1, 1, 0);
    CC_SETPOSITION(0, 1, 1, 0);
    CC_SETTEXTFONT(66);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(0);
    CC_SETTEXTSHADOW(0);
    CC_SETTEXT(string0);
    IF_SETHIDE(0, int0);
    return;
}