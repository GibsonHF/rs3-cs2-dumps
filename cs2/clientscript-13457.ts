//
function script13457(): void {
    var int0 = comp(-1, 65535);
    var string0 = "City";
    int0 = comp(1875, 95);
    CC_DELETEALL(int0);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(0, -6, 1, 1);
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT(string0);
    return;
}