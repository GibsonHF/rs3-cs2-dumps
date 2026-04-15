//
function script12773(int0: int, int1: int, int2: int, int3: int, string0: string): void {
    var int4 = -1;
    var int5 = ((int0 - 1) * 35);
    CC_CREATE(comp(1788, 8), 3, IF_GETNEXTSUBID(comp(1788, 8)));
    CC_SETPOSITION(5, int5, 0, 0);
    CC_SETSIZE(0, 30, 1, 0);
    switch (int0) {
        case 1: {
            CC_SETCOLOUR(9464872);
            break;
        }
        case 2: {
            CC_SETCOLOUR(5201511);
            break;
        }
        case 3: {
            CC_SETCOLOUR(8930872);
            break;
        }
        default: {
            if ((MODULO(int0, 2) == 0)) {
                CC_SETCOLOUR(script10495(9));
            } else {
                CC_SETCOLOUR(script10495(12));
            };
            break;
        }
    };
    CC_SETFILL(1);
    CC_CREATE(comp(1788, 8), 4, IF_GETNEXTSUBID(comp(1788, 8)));
    CC_SETTEXT(inttostring(int0, 10));
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETPOSITION(5, int5, 0, 0);
    CC_SETSIZE(50, 30, 0, 0);
    script2731(comp(1788, 8), CC_GETID(), 3);
    CC_CREATE(comp(1788, 8), 4, IF_GETNEXTSUBID(comp(1788, 8)));
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(50, int5, 0, 0);
    CC_SETSIZE(250, 30, 0, 0);
    script2731(comp(1788, 8), CC_GETID(), 3);
    CC_CREATE(comp(1788, 8), 4, IF_GETNEXTSUBID(comp(1788, 8)));
    CC_SETTEXT(inttostring(int1, 10));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(120, int5, 2, 0);
    CC_SETSIZE(60, 30, 0, 0);
    script2731(comp(1788, 8), CC_GETID(), 3);
    CC_CREATE(comp(1788, 8), 4, IF_GETNEXTSUBID(comp(1788, 8)));
    CC_SETTEXT(inttostring(int2, 10));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(60, int5, 2, 0);
    CC_SETSIZE(60, 30, 0, 0);
    script2731(comp(1788, 8), CC_GETID(), 3);
    CC_CREATE(comp(1788, 8), 4, IF_GETNEXTSUBID(comp(1788, 8)));
    CC_SETTEXT(inttostring(int3, 10));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETPOSITION(5, int5, 2, 0);
    CC_SETSIZE(60, 30, 0, 0);
    script2731(comp(1788, 8), CC_GETID(), 3);
    return;
}