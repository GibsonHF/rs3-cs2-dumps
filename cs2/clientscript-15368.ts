//
function script15368(string0: string): void {
    var int0 = comp(1851, 40);
    CC_DELETEALL(int0);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT(string0);
    script15341(int0, 0, 0);
    return;
}