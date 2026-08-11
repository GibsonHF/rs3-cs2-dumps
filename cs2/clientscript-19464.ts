//
function script19464(): void {
    var int0 = 0;
    stack(0);
    stack(131);
    stack(5984);
    stack(int0);
    int0 = (int0 + 1);
    var int1 = enum_getvalue();
    var int2 = -1;
    while ((int2 == -1)) {
        if ((int1 != -1)) {
            stack(1253392);
            stack(int1);
            DB_FIND(0);
            int2 = dbrow_findnext();
            if ((ACHIEVEMENT_REQSTATE(int1) == -2)) {
                if ((script19337(int2) == 1)) {
                    int2 = -1;
                };
                stack(0);
                stack(131);
                stack(5984);
                stack(int0);
                int0 = (int0 + 1);
                int1 = enum_getvalue();
            };
        };
        var int3 = 0;
        var int4 = 0;
        var int5 = 0;
        var int6 = 0;
        var int7 = 0;
        var int8 = 0;
        var int9 = -1;
        var int10 = -1;
        var int11 = 0;
        var int12 = 0;
        var string0 = "";
        var int13 = -1;
        var int14 = -1;
        if ((int2 == -1)) {
            script19444(85327896, 85327895, 85327894, 85327899, 85327898, 85327897);
            IF_SETHIDE(false, comp(1302, 24));  // group_ironman_parent:rules_model_1
            IF_SETNPCMODEL(31413 as npc, comp(1302, 24));  // group_ironman_parent:rules_model_1
            IF_SETMODELANIM(27114 as seq, comp(1302, 24));  // group_ironman_parent:rules_model_1
            IF_SETMODELANGLE(0, 100, 0, 0, 0, 700, comp(1302, 24));  // group_ironman_parent:rules_model_1
            IF_SETHIDE(false, comp(1302, 23));  // group_ironman_parent:rules_model_2
            IF_SETNPCMODEL(31414 as npc, comp(1302, 23));  // group_ironman_parent:rules_model_2
            IF_SETMODELANIM(20949 as seq, comp(1302, 23));  // group_ironman_parent:rules_model_2
            IF_SETMODELANGLE(-80, 60, 0, 0, 0, 800, comp(1302, 23));  // group_ironman_parent:rules_model_2
            IF_SETHIDE(false, comp(1302, 22));  // group_ironman_parent:rules_model_3
            IF_SETNPCMODEL(31413 as npc, comp(1302, 22));  // group_ironman_parent:rules_model_3
            IF_SETMODELANIM(20949 as seq, comp(1302, 22));  // group_ironman_parent:rules_model_3
            IF_SETMODELANGLE(80, 60, 0, 0, 0, 800, comp(1302, 22));  // group_ironman_parent:rules_model_3
            string0 = "Congratulations - you have completed all the Group Ironman Journey Achievements!";
            IF_SETHIDE(true, comp(1302, 20));  // group_ironman_parent:rules_title_left
        } else {
            int3 = DB_GETFIELDCOUNT(int2, 1253408);
            int4 = DB_GETFIELDCOUNT(int2, 1253440);
            int5 = DB_GETFIELDCOUNT(int2, 1253424);
            int6 = ((int3 + int4) + int5);
            if ((int6 > 0)) {
                int7 = RANDOM(int6);
                while ((int8 < int3)) {
                    if ((int7 == 0)) {
                        [int9, int10, int11, int12, string0] = dbrow_getfield(int2, 1253408, int8);
                        script19441(int10, -1, -1, string0, int11, int12);
                    };
                    int8 = (int8 + 1);
                    int7 = (int7 - 1);
                };
                int8 = 0;
                while ((int8 < int4)) {
                    if ((int7 == 0)) {
                        int13 = script19338(int2, int8, varbitplayer_56614);
                        script19441(-1, int13, -1, "", -1, -1);
                        if ((int13 != -1)) {
                            if (((int13 == 50688) && (GENDER() == 1))) {
                                int13 = 50689;
                            };
                            string0 = struct_getparam(int13, 2533);
                        };
                    };
                    int8 = (int8 + 1);
                    int7 = (int7 - 1);
                };
                int8 = 0;
                while ((int8 < int5)) {
                    if ((int7 == 0)) {
                        int14 = script19339(int2, int8, varbitplayer_56614);
                        script19441(-1, -1, int14, "", -1, -1);
                        string0 = script18200(int14);
                    };
                    int8 = (int8 + 1);
                    int7 = (int7 - 1);
                };
            } else {
                script19450();
            };
        };
        int11 = IF_GETWIDTH(comp(1302, 28));  // group_ironman_parent:rules_reward_name_wrapper
        int12 = MAX(30, (10 + script15891(string0, int11, 41, 0)));
        IF_SETTEXT(string0, comp(1302, 30));  // group_ironman_parent:rules_reward_name
        IF_SETSIZE(0, int12, 1, 0, comp(1302, 28));  // group_ironman_parent:rules_reward_name_wrapper
        return;
    };
    int3 = 0;
    int4 = 0;
    int5 = 0;
    int6 = 0;
    int7 = 0;
    int8 = 0;
    int9 = -1;
    int10 = -1;
    int11 = 0;
    int12 = 0;
    string0 = "";
    int13 = -1;
    int14 = -1;
    if ((int2 == -1)) {
        script19444(85327896, 85327895, 85327894, 85327899, 85327898, 85327897);
        IF_SETHIDE(false, comp(1302, 24));  // group_ironman_parent:rules_model_1
        IF_SETNPCMODEL(31413 as npc, comp(1302, 24));  // group_ironman_parent:rules_model_1
        IF_SETMODELANIM(27114 as seq, comp(1302, 24));  // group_ironman_parent:rules_model_1
        IF_SETMODELANGLE(0, 100, 0, 0, 0, 700, comp(1302, 24));  // group_ironman_parent:rules_model_1
        IF_SETHIDE(false, comp(1302, 23));  // group_ironman_parent:rules_model_2
        IF_SETNPCMODEL(31414 as npc, comp(1302, 23));  // group_ironman_parent:rules_model_2
        IF_SETMODELANIM(20949 as seq, comp(1302, 23));  // group_ironman_parent:rules_model_2
        IF_SETMODELANGLE(-80, 60, 0, 0, 0, 800, comp(1302, 23));  // group_ironman_parent:rules_model_2
        IF_SETHIDE(false, comp(1302, 22));  // group_ironman_parent:rules_model_3
        IF_SETNPCMODEL(31413 as npc, comp(1302, 22));  // group_ironman_parent:rules_model_3
        IF_SETMODELANIM(20949 as seq, comp(1302, 22));  // group_ironman_parent:rules_model_3
        IF_SETMODELANGLE(80, 60, 0, 0, 0, 800, comp(1302, 22));  // group_ironman_parent:rules_model_3
        string0 = "Congratulations - you have completed all the Group Ironman Journey Achievements!";
        IF_SETHIDE(true, comp(1302, 20));  // group_ironman_parent:rules_title_left
    } else {
        int3 = DB_GETFIELDCOUNT(int2, 1253408);
        int4 = DB_GETFIELDCOUNT(int2, 1253440);
        int5 = DB_GETFIELDCOUNT(int2, 1253424);
        int6 = ((int3 + int4) + int5);
        if ((int6 > 0)) {
            int7 = RANDOM(int6);
            while ((int8 < int3)) {
                if ((int7 == 0)) {
                    [int9, int10, int11, int12, string0] = dbrow_getfield(int2, 1253408, int8);
                    script19441(int10, -1, -1, string0, int11, int12);
                };
                int8 = (int8 + 1);
                int7 = (int7 - 1);
            };
            int8 = 0;
            while ((int8 < int4)) {
                if ((int7 == 0)) {
                    int13 = script19338(int2, int8, varbitplayer_56614);
                    script19441(-1, int13, -1, "", -1, -1);
                    if ((int13 != -1)) {
                        if (((int13 == 50688) && (GENDER() == 1))) {
                            int13 = 50689;
                        };
                        string0 = struct_getparam(int13, 2533);
                    };
                };
                int8 = (int8 + 1);
                int7 = (int7 - 1);
            };
            int8 = 0;
            while ((int8 < int5)) {
                if ((int7 == 0)) {
                    int14 = script19339(int2, int8, varbitplayer_56614);
                    script19441(-1, -1, int14, "", -1, -1);
                    string0 = script18200(int14);
                };
                int8 = (int8 + 1);
                int7 = (int7 - 1);
            };
        } else {
            script19450();
        };
    };
    int11 = IF_GETWIDTH(comp(1302, 28));  // group_ironman_parent:rules_reward_name_wrapper
    int12 = MAX(30, (10 + script15891(string0, int11, 41, 0)));
    IF_SETTEXT(string0, comp(1302, 30));  // group_ironman_parent:rules_reward_name
    IF_SETSIZE(0, int12, 1, 0, comp(1302, 28));  // group_ironman_parent:rules_reward_name_wrapper
    return;
}