//
function script20621(int0: number, int1: number, string0: string): void {
    var int2 = 0;
    var int3 = 16;
    var int4 = PARAWIDTH(string0, 176, 274 as fontmetrics);
    var int5 = 30;
    var int6 = ((int3 * 2) + int4);
    var int7 = 0;
    var int8 = 25944;
    var int9 = 25945;
    var int10 = 27352;
    if ((int1 == 1)) {
        int8 = 25912;
        int9 = 25913;
        int10 = 25914;
    };
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int7, 5, 0, 0, int3, int5, 0, 0, int8);
    int7 = (int7 + int3);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int7, 5, 0, 0, int4, int5, 0, 0, int9);
    int7 = (int7 + int4);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int7, 5, 0, 0, int3, int5, 0, 0, int10);
    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), 0, 4, 0, 0, (int6 - 6), int5, 0, 0, -1, string0);
    CC_SETTEXTFONT(274 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}