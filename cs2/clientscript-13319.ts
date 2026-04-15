//
function script13319(): void {
    var int0 = comp(1486, 14);
    var string0 = cc_getparam(4262);
    var string1 = cc_getparam(4263);
    var int1 = 0;
    var int2 = 490;
    var int3 = 0;
    CC_CREATE(int0, 4, int1);
    CC_SETPOSITION(0, int3, 1, 0);
    CC_SETSIZE(PARAWIDTH(string0, int2, 29 as fontmetrics), script7593(string0, int2, 29 as fontmetrics, 0), 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETCOLOUR(15777401);
    CC_SETTEXTALIGN(1, 1, 0);
    int1 = (int1 + 1);
    int3 = ((int3 + CC_GETHEIGHT()) + 2);
    CC_CREATE[1](int0, 4, int1);
    CC_SETPOSITION[1](0, int3, 1, 0);
    CC_SETSIZE[1](PARAWIDTH(string1, int2, 26 as fontmetrics), script7593(string1, int2, 26 as fontmetrics, 0), 0, 0);
    CC_SETTEXT[1](string1);
    CC_SETTEXTFONT[1](26 as fontmetrics);
    CC_SETCOLOUR[1](16777215);
    CC_SETTEXTALIGN[1](1, 1, 0);
    int1 = (int1 + 1);
    int3 = ((int3 + CC_GETHEIGHT[1]()) + 2);
    IF_SETSIZE(MAX(CC_GETWIDTH(), CC_GETWIDTH[1]()), int3, 0, 0, int0);
    return;
}