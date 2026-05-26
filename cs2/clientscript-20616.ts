//
function script20616(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, string0: string, string1: string, string2: string): void {
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, 6, 6, 1, 1, 15216);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, int3, int4, int5, int6, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 2, 0, 100, 1, 0, 15410);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, 0, 0, 1, 1, 14974);
    if ((int7 == 1)) {
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, 15072));
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, 14974));
    };
    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 25, 1, 2, 16, 35, 1, 0, 2196, "");
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETTEXTALIGN(1, 2, 15);
    CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 2, CC_GETFONTMETRICS()));
    var int11 = script20620(int2);
    if ((int11 != -1)) {
        if ((int8 == 1)) {
            script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 5, 1, 2, 0, 20, 1, 0, 2099, "Free");
            CC_SETTEXTALIGN(1, 1, 13);
        } else if ((int2 == 2)) {
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), -10, 5, 1, 2, 20, 20, 0, 0, script20620(int2));
            script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 22, 5, 1, 2, 40, 20, 0, 0, 2099, string1);
            CC_SETTEXTALIGN(0, 1, 0);
        } else {
            script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), -16, 7, 1, 2, 15, 15, 0, 0, script20620(int2));
            script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 13, 7, 1, 2, 40, 15, 0, 0, 2099, string1);
            CC_SETTEXTALIGN(0, 1, 0);
        };
    } else {
        script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 7, 1, 2, 40, 15, 0, 0, 2099, string1);
        CC_SETTEXTALIGN(1, 1, 0);
    };
    var int12 = 6;
    var int13 = 7;
    if ((int9 == 1)) {
        if ((int10 == 1)) {
            int13 = 30;
        };
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int12, int13, 2, 0, 22, 22, 0, 0, 14152);
    };
    if ((STRING_LENGTH(string2) > 0)) {
        script20621(int0, string2, 0, 71);
    };
    return;
}