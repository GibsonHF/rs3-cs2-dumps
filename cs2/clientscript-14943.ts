//
function script14943(int0: component, int1: int, int2: int, string0: string, string1: string): void {
    var int3 = 0;
    var int4 = 5;
    CC_DELETEALL(int0);
    CC_CREATE(int0, 4, int3);
    CC_SETTEXT(string0);
    var int5 = script15891(string0, 175, 57 as fontmetrics, 16);
    CC_SETPOSITION(125, int4, 0, 0);
    CC_SETSIZE(175, int5, 0, 0);
    CC_SETTEXTALIGN(0, 1, 16);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(16764215);
    int4 = (int4 + (int5 + 5));
    int3 = (int3 + 1);
    CC_CREATE(int0, 4, int3);
    CC_SETTEXT(string1);
    CC_SETPOSITION(125, int4, 0, 0);
    int5 = script15891(string1, 175, 27 as fontmetrics, 0);
    CC_SETSIZE(175, int5, 0, 0);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(13492735);
    int4 = (int4 + (int5 + 5));
    int3 = (int3 + 1);
    if (((int1 == 1) && (int4 < 114))) {
        CC_CREATE(int0, 4, int3);
        CC_SETTEXT("Members Object");
        CC_SETPOSITION(125, 114, 0, 0);
        CC_SETSIZE(175, 16, 0, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(29 as fontmetrics);
        CC_SETCOLOUR(16777215);
        int3 = (int3 + 1);
    };
    if (((int2 != 0) && (int4 < 132))) {
        CC_CREATE(int0, 4, int3);
        CC_SETTEXT(`Category: ${enum_getvalue(0, 36, 16539 as cs2enum, int2)}`);
        CC_SETPOSITION(125, 132, 0, 0);
        CC_SETSIZE(175, 15, 0, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(16777215);
        if ((CC_GETWIDTH() < PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS()))) {
            CC_SETONMOUSEREPEAT(callback(script3876, CC_GETTEXT(), -2147483645, -2147483643));
            CC_SETTEXT(script3930(CC_GETTEXT(), CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
        };
        int3 = (int3 + 1);
    };
    return;
}