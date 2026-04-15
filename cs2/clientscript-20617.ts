//
function script20617(int0: component, int1: graphic, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int, string0: string): void {
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, 6, 6, 1, 1, 15216 as graphic);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 0, int2, int3, int4, int5, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 2, 0, 100, 1, 0, 15410 as graphic);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, 0, 0, 1, 1, 14974 as graphic);
    if ((int6 == 1)) {
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, 15072));
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, 14974));
    };
    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 25, 1, 2, 16, 35, 1, 0, 2196 as dbrow, "");
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETTEXTALIGN(1, 2, 15);
    CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 2, CC_GETFONTMETRICS()));
    return;
}