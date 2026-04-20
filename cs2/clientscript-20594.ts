//
function script20594(): void {
    if ((script20612() == 0)) {
        IF_SETHIDE(false, comp(1494, 21));
        script1106();
        script1108();
        return;
    };
    IF_SETHIDE(true, comp(1494, 21));
    var int0 = -1;
    var int1 = -1 as dbrow;
    var int2 = -1 as dbrow;
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = comp(1494, 15);
    var int9 = -1;
    var string0 = "";
    var int10 = -1 as graphic;
    var int11 = -1 as struct;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = -1;
    var int16 = -1;
    var string1 = "null";
    var string2 = "";
    var int17 = 0;
    var int18 = -1 as graphic;
    var int19 = false;
    var int20 = false;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 1;
    var int26 = 0;
    var int27 = -1 as dbrow;
    var int28 = false;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    varclient_8377 = "";
    CC_DELETEALL(comp(1494, 15));
    CC_DELETEALL(comp(1494, 16));
    CC_DELETEALL(comp(1494, 17));
    CC_DELETEALL(comp(1494, 18));
    while ((enum_getvalue(0, 74, 9903 as cs2enum, ++int0) != -1 as dbrow)) {
        int1 = enum_getvalue(0, 74, 9903 as cs2enum, int0);
        int19 = dbrow_getfield(int1, 1417440, 0);
        int20 = dbrow_getfield(int1, 1417424, 0);
        int28 = dbrow_getfield(int1, 1417472, 0);
        [int25, int26] = script20463(int1);
        int2 = dbrow_getfield(int1, 1417360, 0);
        if ((int2 != -1 as dbrow)) {
            int12 = dbrow_getfield(int2, 1425520, 0);
            int11 = dbrow_getfield(int2, 1425504, 0);
            int13 = script20458(int11, int12);
        };
        if (((int14 < 4) && ((int25 == 1) || ((int26 == 1) && (int28 == false))))) {
            if ((int19 == false)) {
                if (((int20 == false) || ((int20 == true) && (PLAYERMEMBER() == true)))) {
                    if ((int4 == 0)) {
                        int4 = 1;
                        int8 = comp(1494, 15);
                        int14 = (int14 + 1);
                    } else if ((int5 == 0)) {
                        int5 = 1;
                        int8 = comp(1494, 16);
                        int14 = (int14 + 1);
                    } else if ((int6 == 0)) {
                        int6 = 1;
                        int8 = comp(1494, 17);
                        int14 = (int14 + 1);
                    } else if ((int7 == 0)) {
                        int7 = 1;
                        int8 = comp(1494, 18);
                        int14 = (int14 + 1);
                        if ((varbitplayer_20806 == 0)) {
                            int1 = 17529 as dbrow;
                            int2 = -1 as dbrow;
                            int25 = 1;
                            int26 = -1;
                        };
                    };
                    script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                    int18 = dbrow_getfield(int1, 1417264, 0);
                    if ((int2 != -1 as dbrow)) {
                        int9 = dbrow_getfield(int2, 1425408, 0);
                        string0 = dbrow_getfield(int2, 1425456, 0);
                        int10 = script20474(int2);
                        int13 = script20458(int11, int12);
                        if (((int11 != -1 as struct) && (struct_getparam(int11, 4717) != -1 as cs2enum))) {
                            int29 = 1;
                        } else {
                            int29 = 0;
                        };
                        if (((int13 == 0) && (int12 != 1))) {
                            int28 = true;
                        } else {
                            int28 = false;
                        };
                        string2 = script20466(int13, -1 as dbrow, int12);
                        script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128 as dbrow);
                        if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                            int3 = dbrow_getfield(int2, 1425568, 0);
                        };
                        if (((int26 == 1) || (varplayer_12587 == int11))) {
                            CC_SETOP(1, "");
                        } else {
                            CC_SETOP(1, "Preview");
                        };
                        script20616(int8, string0, int10, string2, int12, "", 6, 6, 1, 1, int25, int28, script20658(int11), int29);
                        if (((int26 == 1) || (varplayer_12587 == int11))) {
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127 as dbrow);
                            CC_SETCOLOUR(986381);
                            CC_SETTRANS(75);
                            script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, "Owned");
                            CC_SETTEXTALIGN(1, 1, 0);
                            CC_SETCOLOUR(16777215);
                        };
                    } else {
                        if ((int18 == -1 as graphic)) {
                            script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                            int1 = 17529 as dbrow;
                        };
                        script20617(int8, dbrow_getfield(int1, 1417216, 0), int18, 0, 0, 1, 1, int25);
                        IF_SETOP(1, "Select", int8);
                        IF_SETONOP(callback(script20596, int8, 0), int8);
                    };
                };
            } else if ((((int19 == true) && (PLAYERMEMBER() == false)) && ((int20 == false) || ((int20 == true) && (PLAYERMEMBER() == true))))) {
                if ((int4 == 0)) {
                    int4 = 1;
                    int8 = comp(1494, 15);
                    int14 = (int14 + 1);
                } else if ((int5 == 0)) {
                    int5 = 1;
                    int8 = comp(1494, 16);
                    int14 = (int14 + 1);
                } else if ((int6 == 0)) {
                    int6 = 1;
                    int8 = comp(1494, 17);
                    int14 = (int14 + 1);
                } else if ((int7 == 0)) {
                    int7 = 1;
                    int8 = comp(1494, 18);
                    int14 = (int14 + 1);
                    if ((varbitplayer_20806 == 0)) {
                        int1 = 17529 as dbrow;
                        int2 = -1 as dbrow;
                        int25 = 1;
                        int26 = -1;
                    };
                };
                script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                int18 = dbrow_getfield(int1, 1417264, 0);
                if ((int2 != -1 as dbrow)) {
                    int9 = dbrow_getfield(int2, 1425408, 0);
                    string0 = dbrow_getfield(int2, 1425456, 0);
                    int10 = script20474(int2);
                    int13 = script20458(int11, int12);
                    if (((int11 != -1 as struct) && (struct_getparam(int11, 4717) != -1 as cs2enum))) {
                        int29 = 1;
                    } else {
                        int29 = 0;
                    };
                    if (((int13 == 0) && (int12 != 1))) {
                        int28 = true;
                    } else {
                        int28 = false;
                    };
                    string2 = script20466(int13, -1 as dbrow, int12);
                    script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128 as dbrow);
                    if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                        int3 = dbrow_getfield(int2, 1425568, 0);
                    };
                    if (((int26 == 1) || (varplayer_12587 == int11))) {
                        CC_SETOP(1, "");
                    } else {
                        CC_SETOP(1, "Preview");
                    };
                    script20616(int8, string0, int10, string2, int12, "", 6, 6, 1, 1, int25, int28, script20658(int11), int29);
                    if (((int26 == 1) || (varplayer_12587 == int11))) {
                        script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127 as dbrow);
                        CC_SETCOLOUR(986381);
                        CC_SETTRANS(75);
                        script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195 as dbrow, "Owned");
                        CC_SETTEXTALIGN(1, 1, 0);
                        CC_SETCOLOUR(16777215);
                    };
                } else {
                    if ((int18 == -1 as graphic)) {
                        script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                        int1 = 17529 as dbrow;
                    };
                    script20617(int8, dbrow_getfield(int1, 1417216, 0), int18, 0, 0, 1, 1, int25);
                    IF_SETOP(1, "Select", int8);
                    IF_SETONOP(callback(script20596, int8, 0), int8);
                };
            };
        };
    };
    int0 = -1;
    while ((enum_getvalue(0, 74, 9966 as cs2enum, ++int0) != -1 as dbrow)) {
        int1 = enum_getvalue(0, 74, 9966 as cs2enum, int0);
        int19 = dbrow_getfield(int1, 1417440, 0);
        int20 = dbrow_getfield(int1, 1417424, 0);
        int30 = dbrow_getfield(int1, 1417392, 0);
        int31 = dbrow_getfield(int1, 1417408, 0);
        if ((((int1 != -1 as dbrow) && (int21 < 3)) && ((int19 == false) || ((int19 == true) && (PLAYERMEMBER() == false))))) {
            if ((int20 == false)) {
            } else if (((((int20 == true) && (PLAYERMEMBER() == true)) && (DATE_RUNEDAY() >= int30)) && (DATE_RUNEDAY() <= int31))) {
                if ((int22 == 0)) {
                    int27 = int1;
                    int22 = 1;
                    int8 = comp(1494, 3);
                    int21 = (int21 + 1);
                } else if ((int23 == 0)) {
                    int23 = 1;
                    int8 = comp(1494, 4);
                    int21 = (int21 + 1);
                } else if ((int24 == 0)) {
                    int24 = 1;
                    int8 = comp(1494, 5);
                    int21 = (int21 + 1);
                };
                script20598(int8, int1);
            };
        };
    };
    if ((int21 == 2)) {
        int1 = int27;
        int8 = comp(1494, 5);
        script20598(int8, int1);
    };
    if ((int21 == 1)) {
        IF_SETHIDE(true, comp(1494, 2));
        IF_SETHIDE(false, comp(1494, 12));
        script20598(comp(1494, 12), int27);
        script20595();
    };
    return;
}