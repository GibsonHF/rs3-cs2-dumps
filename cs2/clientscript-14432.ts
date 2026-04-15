//
function script14432(int0: dbrow, int1: struct): void {
    CC_DELETEALL(comp(1253, 448));
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    script15957(comp(1253, 448), 0, int2, 0, 0, 0, 0, 0, 0, 1, 1, 4471 as dbrow, true);
    var int7 = -1 as graphic;
    [int7, int3, int5] = dbrow_getfield(int0, 639008, 0);
    var string0 = dbrow_getfield(int0, 638992, 0);
    script15938(comp(1253, 448), 1, int2++, 0, 10, 1, 0, 20, 0, 1, 0);
    var int8 = CC_GETWIDTH();
    int4 = script15891(string0, (int8 - int3), 56 as fontmetrics, -1);
    CC_SETSIZE(20, MAX(int5, (int4 + 25)), 1, 0);
    int6 = ((CC_GETHEIGHT() + 10) + 5);
    if ((int7 != -1 as graphic)) {
        script7918(1, int2++, 0, 0, 0, 1, int3, int5, 0, 0, int7);
    };
    script10485(1, int2++, int3, 0, 0, 0, (int3 + 10), 18, 1, 0, 1897 as dbrow, dbrow_getfield(int0, 638976, 0));
    CC_SETTEXTALIGN(0, 1, 0);
    script10485(1, int2++, int3, 25, 0, 0, (int8 - int3), int4, 0, 0, 2141 as dbrow, string0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXTALIGN(0, 0, 0);
    int2 = 0;
    var int9 = -1;
    var int10 = DB_GETFIELDCOUNT(int0, 639040);
    int4 = 19;
    string0 = `- Promotion Type: ${enum_getvalue(0, 36, 1455 as cs2enum, dbrow_getfield(int0, 639024, 0))}`;
    if ((int10 > 0)) {
        while ((++int9 < int10)) {
            string0 = strconcat(string0, `<br>- ${dbrow_getfield(int0, 639040, int9)}`);
        };
        int4 = script15891(string0, (int8 - (20 * 2)), 207 as fontmetrics, 19);
    };
    script15938(comp(1253, 448), 2, int2++, 0, int6, 1, 0, 20, (int4 + 20), 1, 0);
    int6 = (int6 + ((int4 + 20) + 10));
    script10033(2, int2++, 0, 0, 1, 0, 0, 0, 1, 1, 4127 as dbrow);
    script10485(2, int2++, 0, 10, 1, 0, 20, 0, 1, 1, 2100 as dbrow, string0);
    CC_SETTEXTALIGN(0, 0, 19);
    CC_SETCOLOUR(16777215);
    int2 = 0;
    string0 = dbrow_getfield(int0, 639056, 0);
    if ((STRING_LENGTH(string0) > 0)) {
        int4 = script15891(string0, (int8 - 20), 207 as fontmetrics, 19);
        script15938(comp(1253, 448), 3, int2++, 0, int6, 1, 0, 20, ((int4 + 17) + 20), 1, 0);
        int6 = (int6 + (((int4 + 10) + 17) + 20));
        script10033(3, int2++, 0, 0, 1, 0, 0, 0, 1, 1, 4127 as dbrow);
        script10485(3, int2++, 10, 10, 0, 0, 20, 17, 1, 0, 2141 as dbrow, "How to Play");
        CC_SETCOLOUR(script10495(0));
        CC_SETTEXTALIGN(0, 0, 0);
        script10485(3, int2++, 10, (20 + 10), 0, 0, 20, int4, 1, 0, 2100 as dbrow, string0);
        CC_SETTEXTALIGN(0, 0, 19);
        CC_SETCOLOUR(16777215);
        int2 = 0;
    };
    string0 = dbrow_getfield(int0, 639088, 0);
    if (((STRING_LENGTH(string0) > 0) && ((PLAYERMEMBER() == true) || (dbrow_getfield(int0, 639104, 0) == false)))) {
        int4 = script15891(string0, (int8 - 20), 207 as fontmetrics, 19);
        script15938(comp(1253, 448), 4, int2++, 0, int6, 1, 0, 20, ((int4 + 17) + 20), 1, 0);
        script10033(4, int2++, 0, 0, 1, 0, 0, 0, 1, 1, 4127 as dbrow);
        script10485(4, int2++, 10, 10, 0, 0, 20, 17, 1, 0, 2141 as dbrow, dbrow_getfield(int0, 639072, 0));
        CC_SETCOLOUR(script10495(0));
        CC_SETTEXTALIGN(0, 0, 0);
        script10485(4, int2++, 10, (20 + 10), 0, 0, 20, int4, 1, 0, 2100 as dbrow, string0);
        CC_SETTEXTALIGN(0, 0, 19);
        CC_SETCOLOUR(16777215);
        int2 = 0;
    };
    script15938(comp(1253, 448), 5, int2++, 0, 55, 1, 2, 20, 17, 1, 0);
    script10485(5, int2++, 0, 0, 0, 0, 8200, 0, 2, 1, 2141 as dbrow, "Ends in: ");
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXTALIGN(2, 1, 0);
    script10485(5, int2, 0, 0, 2, 0, 8184, 0, 2, 1, 2100 as dbrow, "");
    if ((int1 == 38726 as struct)) {
        CC_SETONTIMER(callback(script14055, int2));
    } else {
        CC_SETONTIMER(callback(script15692, int2));
    };
    int2 = 0;
    script7857(comp(1253, 448), 6, int2++, 0, 15, 1, 2, 175, 35, 0, 0, 17062 as dbrow, "Play");
    CC_SETOP(1, "Play");
    CC_SETONOP(callback(script17421));
    return;
}