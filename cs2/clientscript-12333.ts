//
function script12333(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int4, int5, int4] = script12343(33122 as struct, script12293(1738 as overlayinterface));
    CC_CREATE(int0, 4, int2++);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXT("Tips");
    CC_SETPOSITION(0, int1, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int5, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETCOLOUR(script10495(0));
    int1 = (int1 + (CC_GETHEIGHT() + 6));
    var string0 = "- ";
    CC_CREATE(int0, 4, int2++);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(`${string0}The xp/h displayed in the metrics window is based on the five minute rolling average.`);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int5, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETPOSITION(0, int1, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int1 = (int1 + (CC_GETHEIGHT() + 4));
    CC_CREATE(int0, 4, int2++);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(`${string0}${script9465(12)}`);
    CC_SETSIZE(0, script7593(CC_GETTEXT(), int5, CC_GETFONTMETRICS(), 0), 1, 0);
    CC_SETPOSITION(0, int1, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    int1 = (int1 + (CC_GETHEIGHT() + 4));
    return;
}