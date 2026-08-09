//
function script20594(): void {
    if ((script20612() == 0)) {
        IF_SETHIDE(false, comp(1494, 31));
        script1106();
        script1108();
        return;
    };
    IF_SETHIDE(true, comp(1494, 31));
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 97910809;
    var int9 = -1;
    var string0 = "";
    var int10 = -1;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = -1;
    var int19 = -1;
    var string1 = "null";
    var string2 = "";
    var int20 = 0;
    var int21 = -1;
    var int22 = -1;
    var int23 = -1;
    var int24 = 0;
    var int25 = -1;
    var int26 = -1;
    var int27 = -1;
    var int28 = 1;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var string3 = "";
    var string4 = "";
    var int34 = 0;
    var int35 = 0;
    var int36 = 1;
    varclient_8377 = "";
    CC_DELETEALL(comp(1494, 25));
    CC_DELETEALL(comp(1494, 26));
    CC_DELETEALL(comp(1494, 27));
    CC_DELETEALL(comp(1494, 28));
    stack(0);
    stack(74);
    stack(9903);
    int0 = (int0 + 1);
    while ((enum_getvalue(int0) != -1)) {
        int1 = enum_getvalue(0, 74, 9903 as cs2enum, int0);
        int22 = dbrow_getfield(int1, 1417440, 0);
        int23 = dbrow_getfield(int1, 1417424, 0);
        int30 = dbrow_getfield(int1, 1417472, 0);
        [int28, int29] = script20463(int1);
        int2 = dbrow_getfield(int1, 1417360, 0);
        if ((int2 != -1)) {
            int12 = dbrow_getfield(int2, 1425520, 0);
            int11 = dbrow_getfield(int2, 1425504, 0);
            int13 = script20465(int11, int12);
        };
        if ((int17 < 4)) {
            if (((int28 == 1) || (int29 == 3))) {
                if ((int22 == 0)) {
                    if ((int23 == 0)) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    } else if (((int23 == 1) && (PLAYERMEMBER() == true))) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    };
                } else if (((int22 == 1) && (PLAYERMEMBER() == false))) {
                    if ((int23 == 0)) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    } else if (((int23 == 1) && (PLAYERMEMBER() == true))) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    };
                };
            } else if (((int29 == 1) && (int30 == 0))) {
                if ((int22 == 0)) {
                    if ((int23 == 0)) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    } else if (((int23 == 1) && (PLAYERMEMBER() == true))) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    };
                } else if (((int22 == 1) && (PLAYERMEMBER() == false))) {
                    if ((int23 == 0)) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    } else if (((int23 == 1) && (PLAYERMEMBER() == true))) {
                        if ((int4 == 0)) {
                            int4 = 1;
                            int8 = 97910809;
                            int17 = (int17 + 1);
                        } else if ((int5 == 0)) {
                            int5 = 1;
                            int8 = 97910810;
                            int17 = (int17 + 1);
                        } else if ((int6 == 0)) {
                            int6 = 1;
                            int8 = 97910811;
                            int17 = (int17 + 1);
                        } else if ((int7 == 0)) {
                            int7 = 1;
                            int8 = comp(1494, 28);
                            int17 = (int17 + 1);
                            if ((varbitplayer_20806 == 0)) {
                                int1 = 17529;
                                int2 = -1;
                                int28 = 1;
                                int29 = -1;
                            };
                        };
                        script15938(int8, UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1);
                        int21 = dbrow_getfield(int1, 1417264, 0);
                        if ((int2 != -1)) {
                            int9 = dbrow_getfield(int2, 1425408, 0);
                            string0 = dbrow_getfield(int2, 1425456, 0);
                            int10 = script20474(int2);
                            [int13, int14, int15, int16] = script20844(int11, int12);
                            if ((int11 != -1)) {
                                if ((struct_getparam(int11, 4717) != -1)) {
                                    int31 = 1;
                                } else {
                                    int31 = 0;
                                };
                            } else {
                                int31 = 0;
                            };
                            if ((int13 == 0)) {
                                if ((int12 != 1)) {
                                    int30 = 1;
                                } else {
                                    int30 = 0;
                                };
                            } else {
                                int30 = 0;
                            };
                            if ((DB_GETFIELDCOUNT(int2, 1425568) > 0)) {
                                int3 = dbrow_getfield(int2, 1425568, 0);
                            };
                            string2 = script20466(int13, int3, int12);
                            script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 1, 1, 0, 0, 1, 1, 4128);
                            int35 = dbrow_getfield(int2, 1425728, 0);
                            int34 = script20846(int11, int12);
                            if ((int30 == 0)) {
                                if ((int34 == 1)) {
                                    string3 = `-${TOSTRING_LOCALISED(int16, 1)}%`;
                                    string4 = script20845(int13, int15, int12);
                                } else {
                                    string3 = "";
                                    string4 = "";
                                };
                            } else {
                                string3 = "";
                                string4 = "";
                            };
                            if ((int29 == 1)) {
                                CC_SETOP(1, "");
                                int36 = 0;
                            } else {
                                CC_SETOP(1, "Preview");
                                int36 = 1;
                            };
                            script20616(int8, string0, int10, string2, int12, string3, int34, 6, 6, 1, 1, int36, int30, script20658(int11), int31, string4, int35);
                            if ((int29 == 1)) {
                                script10033(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 4127);
                                CC_SETCOLOUR(986381);
                                CC_SETTRANS(75);
                                script10485(UI_GETCATEGORY(IF_GETNEXTSUBID(int8)), UI_GETDYNID(IF_GETNEXTSUBID(int8)), 0, 0, 0, 0, 0, 0, 1, 1, 2195, "Owned");
                                CC_SETTEXTALIGN(1, 1, 0);
                                CC_SETCOLOUR(16777215);
                            };
                        } else {
                            if ((int21 == -1)) {
                                script12478(`Featured item in position ${inttostring(int0, 10)} has no store item or graphic provided. Defaulting.`);
                                int1 = 17529;
                            };
                            script20617(int8, dbrow_getfield(int1, 1417216, 0), int21, 0, 0, 1, 1, int28);
                            IF_SETOP(1, "Select", int8);
                            IF_SETONOP(callback(script20596, int8, 0), int8);
                        };
                    };
                };
            };
        };
    };
    int0 = -1;
    stack(0);
    stack(74);
    stack(9966);
    int0 = (int0 + 1);
    while ((enum_getvalue(int0) != -1)) {
        int1 = enum_getvalue(0, 74, 9966, int0);
        if ((int1 != -1)) {
            if ((script20843(int1) == 1)) {
                if ((int26 == -1)) {
                    int26 = int1;
                } else if ((int27 == -1)) {
                    int27 = int1;
                } else {
                    int25 = int1;
                };
                int24 = (int24 + 1);
            } else if ((int1 == -1)) {
                unk11016(`no dbrow found for featured carousel item ${inttostring(int0, 10)}. Skipping.`);
            };
        } else if ((int1 == -1)) {
            unk11016(`no dbrow found for featured carousel item ${inttostring(int0, 10)}. Skipping.`);
        };
    };
    if ((int25 != -1)) {
        script20598(97910787, int25);
    };
    if ((int26 != -1)) {
        script20598(97910789, int26);
    };
    if ((int27 != -1)) {
        script20598(97910790, int27);
    };
    if ((int24 > 1)) {
        if ((int24 == 2)) {
            script20598(97910787, int27);
        };
        script20850(int24);
        IF_SETHIDE(false, comp(1494, 2));
        IF_SETHIDE(true, comp(1494, 22));
    } else {
        IF_SETHIDE(true, comp(1494, 2));
        IF_SETHIDE(false, comp(1494, 22));
        script20598(97910806, int26);
    };
    script20595();
    return;
}