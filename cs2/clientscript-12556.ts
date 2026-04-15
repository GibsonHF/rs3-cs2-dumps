//
function script12556(int0: int): void {
    var int1 = script623(int0);
    var int2 = script10(int0);
    CC_DELETEALL(int1);
    var int3 = IF_GETWIDTH(int1);
    var int4 = IF_GETHEIGHT(int1);
    var int5 = 0;
    var int6 = 2;
    var int7 = 0;
    var int8 = 1381 as obj;
    var int9 = varbitplayer_32447;
    if (((item_getparam(int8, 3758) != -1 as obj) && (int5 == 0))) {
        int8 = item_getparam(int8, 3758);
    };
    var string0 = "Buy";
    script7794(int2, 21362 as struct);
    CC_CREATE(int1, 3, 0);
    CC_SETSIZE(int3, int4, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(16777215);
    CC_SETTRANS(255);
    script584(int1, string0);
    var int10 = IF_GETNEXTSUBID(int1);
    IF_SETONMOUSEOVER(callback(script629, int0), int1);
    IF_SETONMOUSELEAVE(callback(script631, int0), int1);
    var string1 = TOSTRING_LOCALISED(int6, 1);
    var string2 = TOSTRING_LOCALISED(int9, 1);
    var string3 = script11601(int9, 1);
    var int11 = 0;
    var int12 = 0;
    var int13 = script627(int0);
    IF_SETHIDE(1, int13);
    var string4 = "";
    var int14 = 0;
    var int15 = 0;
    int11 = 7;
    int12 = (int4 - 30);
    script652(int11, int12, (int3 - 14), 15, int0, int1, int10, 0, 1, 1);
    int10 = IF_GETNEXTSUBID(int1);
    CC_CREATE(int1, 5, int10);
    int10 = (int10 + 1);
    CC_SETPOSITION(6, 30, 0, 0);
    CC_SETSIZE(40, 36, 0, 0);
    CC_SETGRAPHIC(18266);
    CC_CREATE(int1, 5, int10);
    CC_SETPOSITION(8, 32, 0, 0);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETOBJECT(int8, int6);
    string0 = TOSTRING_LOCALISED(int6, 1);
    CC_SETONMOUSEREPEAT(callback(script5495, int8));
    CC_SETONMOUSELEAVE(callback(script5495, -1));
    int10 = (int10 + 1);
    CC_CREATE(int1, 4, int10);
    CC_SETPOSITION(48, 30, 0, 0);
    string0 = script18300(int8);
    int15 = (int3 - 53);
    int14 = PARAWIDTH(string0, int15, 27);
    if ((int14 > int15)) {
        int11 = STRING_LENGTH(string0);
        while (((int14 > int15) && (int11 > 0))) {
            int11 = (int11 - 1);
            string0 = `${SUBSTRING(string0, 0, int11)}...`;
            int14 = PARAWIDTH(string0, int15, 27 as fontmetrics);
        };
    };
    int10 = (int10 + 1);
    int4 = (PARAHEIGHT(string0, int15, 27 as fontmetrics) * 14);
    if ((int4 < 22)) {
        int4 = 22;
    };
    CC_SETSIZE(int15, int4, 0, 0);
    CC_SETCOLOUR(15777401);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(string0);
    CC_CREATE(int1, 4, int10);
    CC_SETPOSITION(48, MIN(64, (32 + int4)), 0, 0);
    CC_SETSIZE((int3 - 53), 15, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 15);
    CC_SETTEXTSHADOW(true);
    if ((int9 < 10000)) {
        CC_SETTEXT(`${string2} coins`);
    } else {
        CC_SETTEXT(`${string3} coins`);
        CC_SETONMOUSEREPEAT(callback(script8799, string2, int1, int10));
    };
    int10 = (int10 + 1);
    CC_CREATE(int1, 5, int10);
    CC_SETPOSITION(4, 2, 2, 0);
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETGRAPHIC(-1 as graphic);
    int10 = (int10 + 1);
    return;
}