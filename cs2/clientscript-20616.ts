//
function script20616(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, string0: string, string1: string, string2: string, string3: string): void {
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, 6, 6, 1, 1, 15216);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, int4, int5, int6, int7, int1);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 2, 0, 100, 1, 0, 15410);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 0, 1, 1, 0, 0, 1, 1, 14974);
    if ((int8 == 1)) {
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, 15072));
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, 14974));
    };
    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 25, 1, 2, 16, 35, 1, 0, 2196, "");
    CC_SETTEXTFONT(56 as fontmetrics);
    CC_SETTEXTALIGN(1, 2, 15);
    CC_SETTEXT(script3930(string0, CC_GETWIDTH(), 2, CC_GETFONTMETRICS()));
    var int13 = script20620(int2);
    var int14 = UI_GETCATEGORY(IF_GETNEXTSUBID(int0));
    var int15 = UI_GETDYNID(IF_GETNEXTSUBID(int0));
    script15937(int14, int15, 0, 5, 1, 2, 0, 20, 1, 0);
    var int16 = 0;
    var int17 = 0;
    var int18 = 20;
    var int19 = 0;
    var int20 = 1;
    if ((int9 == 1)) {
        var string1 = "Free";
        int17 = PARAWIDTH(string1, IF_GETWIDTH(int0), 28 as fontmetrics);
        script10507(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int14, int15, 0, 0, 0, 1, int17, 0, 0, 1, 2099, string1);
        int16 = (int16 + int17);
    } else {
        if ((int13 != -1)) {
            script7920(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int14, int15, 0, int19, 0, 1, int18, int18, 0, 0, int13);
            int16 = (int16 + (int18 + int20));
        };
        if ((STRING_LENGTH(string3) > 0)) {
            var string3 = `<str=FF0000>${string3}</str>`;
            int17 = PARAWIDTH(string3, IF_GETWIDTH(int0), 28 as fontmetrics);
            script10507(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int14, int15, int16, 0, 0, 1, int17, 0, 0, 1, 2099, string3);
            CC_SETCOLOUR(11708833);
            int16 = (int16 + (int17 + 3));
        };
        int17 = PARAWIDTH(string1, IF_GETWIDTH(int0), 28 as fontmetrics);
        script10507(int0, UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int14, int15, int16, 0, 0, 1, int17, 0, 0, 1, 2099, string1);
        int16 = (int16 + int17);
    };
    if ((CC_FINDBYCATEGORY(int0, int14, int15) == 1)) {
        CC_SETSIZE(int16, 20, 0, 0);
    };
    CC_GETDYNAMICLAYER();
    var int21 = 6;
    var int22 = 7;
    if ((int11 == 1)) {
        int22 = 30;
    };
    if ((int10 == 1)) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int21, int22, 2, 0, 22, 22, 0, 0, 14152);
        int22 = (int22 + 25);
    };
    if ((int12 == 1)) {
        script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int21, int22, 2, 0, 22, 22, 0, 0, 36219);
    };
    if ((STRING_LENGTH(string2) > 0)) {
        script20621(int0, string2, int3);
    };
    return;
}