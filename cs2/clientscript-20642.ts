//
function script20642(int0: number, int1: number): number {
    var int2 = dbrow_findnext();
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int13 = 1;
    var int14 = -1;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 1;
    while ((int2 != -1)) {
        if ((DB_GETFIELDCOUNT(int2, 1425504) > 0)) {
            int7 = dbrow_getfield(int2, 1425504, 0);
        };
        int8 = dbrow_getfield(int2, 1425520, 0);
        if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
            int6 = dbrow_getfield(int2, 1425568, 0);
        };
        int17 = script20846(int7, int8);
        [int13, int14] = script20469(int7, int2, int8, 0);
        switch (int1) {
            case 1: {
                if ((int17 == 0)) {
                    int13 = 0;
                    int14 = 2;
                };
                break;
            }
            case 2: {
                if (((int17 == 1) || (varclient_8472 == true))) {
                    int13 = 0;
                    int14 = 2;
                };
                break;
            }
            case 0: {
                if (((varclient_8472 == true) && (int17 == 0))) {
                    int13 = 0;
                    int14 = 2;
                };
                break;
            }
        };
        if ((int13 == 1)) {
            int4 = dbrow_getfield(int2, 1425408, 0);
            string0 = dbrow_getfield(int2, 1425456, 0);
            int5 = script20474(int2);
            if ((CC_FIND(comp(1498, 2), int0) == 1)) {
                script15937(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 176, 176, 0, 0);
            };
            if (((int13 == 1) || (int14 == 3))) {
                CC_SETOP(1, "Preview");
                CC_SETONOP(callback(script20643, int4));
                int19 = 1;
            } else {
                int19 = 0;
            };
            if ((int7 != -1)) {
                if ((struct_getparam(int7, 4717) != -1)) {
                    int16 = 1;
                } else {
                    int16 = 0;
                };
            } else {
                int16 = 0;
            };
            [int9, int10, int11, int12] = script20844(int7, int8);
            if ((int9 == 0)) {
                if ((int8 != 1)) {
                    int15 = 1;
                } else {
                    int15 = 0;
                };
            } else {
                int15 = 0;
            };
            string1 = script20466(int9, int6, int8);
            int18 = dbrow_getfield(int2, 1425728, 0);
            string2 = "";
            if ((int15 == 0)) {
                if ((int17 == 1)) {
                    string3 = `-${TOSTRING_LOCALISED(int12, 1)}%`;
                    string2 = script20845(int9, int11, int8);
                } else if ((DB_GETFIELDCOUNT(int2, 1425680) > 0)) {
                    string3 = dbrow_getfield(int2, 1425680, 0);
                } else {
                    string3 = "";
                };
            } else if ((DB_GETFIELDCOUNT(int2, 1425680) > 0)) {
                string3 = dbrow_getfield(int2, 1425680, 0);
            } else {
                string3 = "";
            };
            script20616(98172930, string0, int5, string1, int8, string3, int17, 6, 6, 1, 1, int19, int15, script20658(int7), int16, string2, int18);
            if (((int13 == 0) && (int14 == 1))) {
                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                CC_SETCOLOUR(986381);
                CC_SETTRANS(75);
                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETCOLOUR(16777215);
            };
            int3 = (int3 + 1);
        } else if ((int13 == 0)) {
            if (((int14 == 1) || (int14 == 3))) {
                int4 = dbrow_getfield(int2, 1425408, 0);
                string0 = dbrow_getfield(int2, 1425456, 0);
                int5 = script20474(int2);
                if ((CC_FIND(comp(1498, 2), int0) == 1)) {
                    script15937(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 1, 0, 176, 176, 0, 0);
                };
                if (((int13 == 1) || (int14 == 3))) {
                    CC_SETOP(1, "Preview");
                    CC_SETONOP(callback(script20643, int4));
                    int19 = 1;
                } else {
                    int19 = 0;
                };
                if ((int7 != -1)) {
                    if ((struct_getparam(int7, 4717) != -1)) {
                        int16 = 1;
                    } else {
                        int16 = 0;
                    };
                } else {
                    int16 = 0;
                };
                [int9, int10, int11, int12] = script20844(int7, int8);
                if ((int9 == 0)) {
                    if ((int8 != 1)) {
                        int15 = 1;
                    } else {
                        int15 = 0;
                    };
                } else {
                    int15 = 0;
                };
                string1 = script20466(int9, int6, int8);
                int18 = dbrow_getfield(int2, 1425728, 0);
                string2 = "";
                if ((int15 == 0)) {
                    if ((int17 == 1)) {
                        string3 = `-${TOSTRING_LOCALISED(int12, 1)}%`;
                        string2 = script20845(int9, int11, int8);
                    } else if ((DB_GETFIELDCOUNT(int2, 1425680) > 0)) {
                        string3 = dbrow_getfield(int2, 1425680, 0);
                    } else {
                        string3 = "";
                    };
                } else if ((DB_GETFIELDCOUNT(int2, 1425680) > 0)) {
                    string3 = dbrow_getfield(int2, 1425680, 0);
                } else {
                    string3 = "";
                };
                script20616(98172930, string0, int5, string1, int8, string3, int17, 6, 6, 1, 1, int19, int15, script20658(int7), int16, string2, int18);
                if (((int13 == 0) && (int14 == 1))) {
                    script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                    CC_SETCOLOUR(986381);
                    CC_SETTRANS(75);
                    script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(comp(1498, 2))), UI_GETDYNID(IF_GETNEXTSUBID(comp(1498, 2))), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                    CC_SETTEXTALIGN(1, 1, 0);
                    CC_SETCOLOUR(16777215);
                };
                int3 = (int3 + 1);
            };
        };
        int2 = dbrow_findnext();
    };
    return int3;
}