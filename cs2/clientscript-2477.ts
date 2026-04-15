//
function script2477(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = comp(309, 4);
    var int3 = 5;
    var string0 = "";
    var int4 = 0;
    while ((int0 < 15)) {
        int1 = script2261(int0);
        if ((int1 != -1 as obj)) {
            CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETOBJECT(int1, -1);
            CC_SETPOSITION(7, int3, 0, 0);
            int4 = script2388(int0);
            if ((int4 == 0)) {
                string0 = "Not stored";
                CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                CC_SETCOLOUR(11119017);
            };
            CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(440, 30, 0, 0);
            if ((int4 == 1)) {
                CC_SETTEXT(OC_NAME(int1));
            } else {
                CC_SETTEXT(`${OC_NAME(int1)} - Not stored`);
            };
            CC_SETPOSITION((10 + 36), int3, 0, 0);
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETCOLOUR(16777215);
            CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(410, 30, 0, 0);
            CC_SETTEXT(item_getparam(int1, 7511));
            CC_SETTEXTSHADOW(true);
            CC_SETPOSITION((10 + 36), (int3 + 18), 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(3));
            int3 = (int3 + 45);
        };
        int0 = (int0 + 1);
    };
    int3 = (int3 + 5);
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int2), int3), int2);
    script7791(comp(309, 0), int2);
    return;
}