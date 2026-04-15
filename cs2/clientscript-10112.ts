//
function script10112(int0: int, int1: component, int2: int, string0: string, string1: string, string2: unknown_string): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(113, 47, 0, 0);
    CC_SETPOSITION(0, (int0 * 47), 0, 0);
    CC_SETFILL(1);
    if ((MODULO(int0, 2) == 0)) {
        CC_SETCOLOUR(464928);
    } else {
        CC_SETCOLOUR(1846324);
    };
    int3 = CC_GETID();
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXT(REMOVETAGS(string0));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(script693(174, 208, 224));
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(106, (47 - 5), 0, 0);
    CC_SETPOSITION(5, ((int0 * 47) - 2), 0, 0);
    CC_SETONCLICK(callback(script9547, string0));
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, (IF_GETNEXTSUBID(int1) - 1)));
    CC_SETONMOUSELEAVE(callback(script5586, int1, CC_GETID(), 0));
    CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(265, 47, 0, 0);
    CC_SETPOSITION(116, (int0 * 47), 0, 0);
    CC_SETFILL(1);
    if ((MODULO(int0, 2) == 0)) {
        CC_SETCOLOUR(464928);
    } else {
        CC_SETCOLOUR(1846324);
    };
    int4 = CC_GETID();
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    var string3 = SUBSTRING(string1, 0, MIN(STRING_LENGTH(string1), 80));
    CC_SETTEXT(REMOVETAGS(string3));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(script693(174, 208, 224));
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(258, (47 - 5), 0, 0);
    CC_SETPOSITION(122, ((int0 * 47) - 2), 0, 0);
    CC_SETONCLICK(callback(script9547, string0));
    CC_SETONMOUSEOVER(callback(script5586, int1, CC_GETID(), 1));
    CC_SETONMOUSELEAVE(callback(script5586, int1, CC_GETID(), 0));
    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, (IF_GETNEXTSUBID(int1) - 1)));
    CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
    CC_SETSIZE(72, 47, 0, 0);
    CC_SETPOSITION(384, (int0 * 47), 0, 0);
    CC_SETFILL(1);
    if ((MODULO(int0, 2) == 0)) {
        CC_SETCOLOUR(464928);
    } else {
        CC_SETCOLOUR(1846324);
    };
    int5 = CC_GETID();
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXT(inttostring(int2, 10));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(script693(174, 208, 224));
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(70, (47 - 5), 0, 0);
    CC_SETPOSITION(388, ((int0 * 47) - 2), 0, 0);
    CC_SETONCLICK(callback(script9547, string0));
    CC_SETONMOUSEREPEAT(callback(script8799, inttostring(int2, 10), -2147483645, (IF_GETNEXTSUBID(int1) - 1)));
    CC_SETONMOUSELEAVE(callback(script5586, int1, CC_GETID(), 0));
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETONCLICK(callback(script10113, int3, int4, int5));
    };
    if ((CC_FIND(int1, int4) == 1)) {
        CC_SETONCLICK(callback(script10113, int3, int4, int5));
    };
    if ((CC_FIND(int1, int5) == 1)) {
        CC_SETONCLICK(callback(script10113, int3, int4, int5));
    };
    return;
}