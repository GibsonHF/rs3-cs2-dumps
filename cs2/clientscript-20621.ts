//
function script20621(int0: component, int1: int, int2: unknown_int, string0: string): void {
    var int3 = 0;
    var int4 = 10;
    var int5 = 5;
    var int6 = 37;
    var int7 = 29;
    var int8 = 20;
    var int9 = (((int4 + int5) + int6) + int8);
    var int10 = int1;
    int3 = PARAWIDTH(string0, 176, 206 as fontmetrics);
    while ((int3 > int9)) {
        int9 = (int9 + int5);
    };
    int5 = MAX(int5, ((int9 - int4) - int6));
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int1, 5, 0, 0, int4, int7, 0, 0, 14190 as graphic);
    var int1 = (int1 + int4);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int1, 5, 0, 0, int5, int7, 0, 0, 14191 as graphic);
    int1 = (int1 + int5);
    script7918(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int1, 5, 0, 0, int6, int7, 0, 0, 14192 as graphic);
    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int0)), UI_GETDYNID(IF_GETNEXTSUBID(int0)), int10, 2, 0, 0, int9, int7, 0, 0, 2101 as dbrow, string0);
    CC_SETTEXTALIGN(1, 1, 15);
    return;
}