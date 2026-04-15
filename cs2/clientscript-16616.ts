//
function script16616(int0: dbrow): void {
    var int1 = 0;
    script14391(comp(1253, 3), 1, 5, -115, 2, 1, 402, 137, 0, 0);
    script7920(comp(1253, 3), 2, int1++, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 19518 as graphic);
    script16612(dbrow_getfield(int0, 749600, 0));
    var int2 = 0;
    var int3 = 0;
    script7920(comp(1253, 3), 2, int1++, 0, 1, -139, 0, 1, 1, 100, 1, 0, 4, dbrow_getfield(int0, 749632, 0));
    if ((DB_GETFIELDCOUNT(int0, 749648) > 0)) {
        [int2, int3] = dbrow_getfield(int0, 749648, 0);
        CC_SETSIZE(int2, int3, 0, 0);
    };
    script10507(comp(1253, 3), 2, int1++, 0, 1, 10, 20, 2, 0, 274, 60, 0, 0, 1314 as dbrow, dbrow_getfield(int0, 749584, 0));
    CC_SETCOLOUR(1585728);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXTSHADOW(false);
    script10507(comp(1253, 3), 2, int1, 0, 1, 10, 20, 2, 2, 274, 30, 0, 0, 1314 as dbrow, script16625(script16626(), varclient_4753));
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(60 as fontmetrics);
    CC_SETONTIMER(callback(script16623, 2, int1++));
    script10507(82116611, 2, int1++, 0, 1, -139, 15, 1, 2, 100, 30, 0, 0, 1314, "Now");
    CC_SETCOLOUR(16777215);
    return;
}