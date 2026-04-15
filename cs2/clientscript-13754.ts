//
function script13754(int0: cs2enum, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    while ((int2 < 10)) {
        if ((int2 == 0)) {
            CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETTEXT[1]("Winner");
            CC_SETTEXTFONT[1](58 as fontmetrics);
            CC_SETCOLOUR[1](script10495(0));
            CC_SETTEXTALIGN[1](1, 1, 0);
            CC_SETSIZE[1](0, 32, 1, 0);
            CC_SETPOSITION[1](0, int3, 0, 0);
            int3 = (int3 + CC_GETHEIGHT[1]());
        } else if ((int2 == 1)) {
            int3 = (int3 + 32);
            CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETTEXT[1]("Runners Up");
            CC_SETTEXTFONT[1](58 as fontmetrics);
            CC_SETCOLOUR[1](script10495(0));
            CC_SETTEXTALIGN[1](1, 1, 0);
            CC_SETSIZE[1](0, 32, 1, 0);
            CC_SETPOSITION[1](0, int3, 0, 0);
            int4 = 0;
            int3 = (int3 + CC_GETHEIGHT[1]());
        } else if ((MODULO((int2 + 2), 3) == 0)) {
            int3 = (int3 + 32);
            int4 = 0;
        } else if ((MODULO((int2 + 2), 3) == 1)) {
            int4 = 1;
        } else {
            int4 = 2;
        };
        CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETTEXT(enum_getvalue(0, 36, int0, int2));
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE((IF_GETWIDTH(int1) / 3), 32, 0, 0);
        CC_SETPOSITION((CC_GETWIDTH() * int4), int3, 0, 0);
        int2 = (int2 + 1);
    };
    return;
}