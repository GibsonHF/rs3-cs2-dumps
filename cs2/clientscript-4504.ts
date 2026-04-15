//
function script4504(int0: component): void {
    var int1 = IF_GETNEXTSUBID(int0);
    var int2 = -1;
    var int3 = 84;
    var int4 = IF_GETHEIGHT(int0);
    var int5 = -1;
    var string0 = "";
    while ((++int2 < 7)) {
        int5 = ((int2 * 84) + (int2 * 4));
        CC_CREATE(int0, 3, int1);
        CC_SETSIZE(int3, int4, 0, 0);
        CC_SETPOSITION(int5, 0, 0, 0);
        if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
            CC_SETCOLOUR(3351837);
        } else {
            CC_SETCOLOUR(1846324);
        };
        CC_SETFILL(1);
        int1 = (int1 + 1);
        string0 = enum_getvalue(0, 36, 13931 as cs2enum, int2);
        CC_CREATE(int0, 4, int1);
        CC_SETSIZE(int3, int4, 0, 0);
        CC_SETPOSITION(int5, 0, 0, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        if (((varbitplayer_27169 == 1) || (varbitplayer_22875 == 1))) {
            CC_SETCOLOUR(16777215);
        } else {
            CC_SETCOLOUR(script10495(3));
        };
        CC_SETTEXTSHADOW(true);
        CC_SETTEXT(string0);
        int1 = (int1 + 1);
    };
    return;
}