//
function script20435(): void {
    var int0 = comp(1802, 256);
    var int1 = 0;
    var string0 = "";
    var int2 = -1 as graphic;
    var int3 = false;
    var int4 = true;
    var string1 = "";
    var int5 = -1 as stat;
    var int6 = 0;
    var int7 = 17064 as dbrow;
    var int8 = 16777215;
    var int9 = script20447();
    var int10 = DB_LISTALL(343);
    var int11 = ((int10 / 3) + MIN(1, MODULO(int10, 3)));
    var int12 = ((36 * int11) + (8 * (int11 - 2)));
    dbrow_findnext();
    var int13 = stack();
    IF_SETSIZE(492, int12, 0, 0, int0);
    script7925(int0, 0, 0, 0, 0, 0, 0, int12, 1, 0, 0, 3, int11, 8);
    while ((int13 != -1 as dbrow)) {
        int1 = 1;
        int5 = dbrow_getfield(int13, 1404944, 0);
        int6 = dbrow_getfield(int13, 1404960, 0);
        string0 = dbrow_getfield(int13, 1404928, 0);
        int2 = enum_getvalue(0, 23, 745 as cs2enum, int6);
        [int4, int3, string1] = script20436(int13, string0);
        if ((int9 == 1)) {
            int7 = 17065 as dbrow;
            int8 = script10495(5);
        } else if ((varbitplayer_60369 == int6)) {
            int7 = 17064 as dbrow;
            int3 = true;
            int8 = script10495(0);
        } else if ((varplayer_12541 == int6)) {
            int7 = 17065 as dbrow;
            int3 = true;
            int8 = script10495(21);
        } else {
            int7 = 17065 as dbrow;
            if ((int4 == false)) {
                int8 = script10495(5);
            } else {
                int8 = script10495(19);
            };
        };
        IF_CREATENESTED(0, int6, 0, 0, 0, int0);
        CC_SETSIZE(0, 0, 1, 1);
        script7862(int6, int1++, 0, 0, 0, 0, 0, 0, 1, 1, int7, "", int4, 1, int4, int3);
        if ((STRING_LENGTH(string1) > 0)) {
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
        };
        CC_SETONBUTTONCLICK(callback(script20437, int13, int6));
        CC_SETOP(1, `Select ${string0}`);
        script7918(int6, int1++, 2, 0, 0, 1, 32, 32, 0, 0, int2);
        script10485(int6, int1++, 4, 0, 2, 1, 40, 0, 1, 1, 2141, string0);
        CC_SETCOLOUR(int8);
        CC_SETTEXTALIGN(0, 1, 0);
        dbrow_findnext();
        int13 = stack();
    };
    IF_SETSCROLLSIZE(0, (int12 + 4), comp(1802, 255));
    script7791(comp(1802, 259), comp(1802, 255));
    return;
}