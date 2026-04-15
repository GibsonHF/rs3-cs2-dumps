//
function script20642(int0: int): int {
    dbrow_findnext();
    var int1 = stack();
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var string1 = "";
    var string2 = "";
    var int9 = 1;
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    while ((int1 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int1, 1425504) > 0)) {
            int6 = dbrow_getfield(int1, 1425504, 0);
        };
        int7 = dbrow_getfield(int1, 1425520, 0);
        [int9, int10] = script20469(int6, int1, int7, 0);
        if (((int9 == 1) || ((int9 == 0) && (int10 == 1)))) {
            int3 = dbrow_getfield(int1, 1425408, 0);
            string0 = dbrow_getfield(int1, 1425456, 0);
            int4 = script20474(int1);
            if ((DB_GETFIELDCOUNT(int1, 1425568) > 0)) {
                int5 = dbrow_getfield(int1, 1425568, 0);
            };
            if ((CC_FIND(comp(1498, 2), int0) == 1)) {
                script15937(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 176, 176, 0, 0);
            };
            if ((int9 == 1)) {
                CC_SETOP(1, "Preview");
                CC_SETONOP(callback(script20643, int3));
            };
            if (((int6 != -1 as struct) && (struct_getparam(int6, 4717) != -1 as cs2enum))) {
                int12 = 1;
            };
            int8 = script20465(int6, int7);
            if (((int8 == 0) && (int7 != 1))) {
                int11 = true;
            } else {
                int11 = false;
            };
            string1 = script20466(int8, int5, int7);
            if ((DB_GETFIELDCOUNT(int1, 1425664) > 0)) {
                string2 = dbrow_getfield(int1, 1425664, 0);
            } else {
                string2 = "";
            };
            script20616(comp(1498, 2), string0, int4, string1, int7, string2, 6, 6, 1, 1, int9, int11, script20658(int6), int12);
            if ((int9 == 0)) {
                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 0, 0, 0, 0, 1, 1, 4127 as dbrow);
                CC_SETCOLOUR(986381);
                CC_SETTRANS(75);
                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, "Owned");
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETCOLOUR(16777215);
            };
            int2 = (int2 + 1);
        };
        dbrow_findnext();
        int1 = stack();
    };
    return int2;
}