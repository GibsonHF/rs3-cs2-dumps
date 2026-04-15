//
function script16618(int0: dbrow): void {
    var int1 = 0;
    script14391(comp(1253, 3), 3, 8, 93, 2, 1, 296, 121, 0, 0);
    script7920(comp(1253, 3), 4, int1++, 0, 3, 0, 0, 1, 1, 0, 0, 1, 1, 19519 as graphic);
    script16612(dbrow_getfield(int0, 749600, 0));
    var int2 = 0;
    var int3 = 0;
    script7920(comp(1253, 3), 4, int1++, 0, 3, -96, -5, 1, 1, 91, 1, 0, 4, dbrow_getfield(int0, 749632, 0));
    if ((DB_GETFIELDCOUNT(int0, 749648) > 0)) {
        [int2, int3] = dbrow_getfield(int0, 749648, 0);
        CC_SETSIZE(SCALE(91, 100, int2), SCALE(91, 100, int3), 0, 0);
    };
    script10507(comp(1253, 3), 4, int1++, 0, 3, 10, 15, 2, 0, 176, 40, 0, 0, 1314 as dbrow, dbrow_getfield(int0, 749584, 0));
    CC_SETCOLOUR(8363435);
    CC_SETTEXTFONT(57 as fontmetrics);
    var string0 = "";
    if ((varbitplayer_47420 != 0)) {
        string0 = script16625(varbitplayer_47420, 59);
    } else {
        string0 = script16625(dbrow_getfield(int0, 749616, 0), 59);
    };
    script10507(comp(1253, 3), 4, int1++, 0, 3, 10, 20, 2, 2, 176, 30, 0, 0, 1314 as dbrow, string0);
    CC_SETCOLOUR(1585728);
    CC_SETTEXTFONT(60 as fontmetrics);
    CC_SETTEXTSHADOW(false);
    script10507(comp(1253, 3), 4, int1++, 0, 3, -96, 20, 1, 2, 91, 30, 0, 0, 1314 as dbrow, "Next");
    CC_SETCOLOUR(16777215);
    return;
}