//
function script19464(): void {
    var int0 = 0;
    var int1 = enum_getvalue(0, 131, 5984 as cs2enum, int0++);
    var int2 = -1 as dbrow;
    while (((int2 == -1 as dbrow) && (int1 != -1 as achievement))) {
        stack(1253392);
        stack(int1);
        DB_FIND(0);
        dbrow_findnext();
        int2 = stack();
        if ((ACHIEVEMENT_REQSTATE(int1) == -2)) {
            if ((script19337(int2) == 1)) {
                int2 = -1 as dbrow;
            };
            int1 = enum_getvalue(0, 131, 5984 as cs2enum, int0++);
        };
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as graphic;
    var int10 = -1 as graphic;
    var int11 = 0;
    var int12 = 0;
    var string0 = "";
    var int13 = -1 as struct;
    var int14 = -1 as dbrow;
    if ((int2 == -1 as dbrow)) {
        script19444(comp(1302, 24), comp(1302, 23), comp(1302, 22), comp(1302, 27), comp(1302, 26), comp(1302, 25));
        IF_SETHIDE(false, comp(1302, 24));
        IF_SETNPCMODEL(31413 as npc, comp(1302, 24));
        IF_SETMODELANIM(27114 as seq, comp(1302, 24));
        IF_SETMODELANGLE(0, 100, 0, 0, 0, 700, comp(1302, 24));
        IF_SETHIDE(false, comp(1302, 23));
        IF_SETNPCMODEL(31414 as npc, comp(1302, 23));
        IF_SETMODELANIM(20949 as seq, comp(1302, 23));
        IF_SETMODELANGLE(-80, 60, 0, 0, 0, 800, comp(1302, 23));
        IF_SETHIDE(false, comp(1302, 22));
        IF_SETNPCMODEL(31413 as npc, comp(1302, 22));
        IF_SETMODELANIM(20949 as seq, comp(1302, 22));
        IF_SETMODELANGLE(80, 60, 0, 0, 0, 800, comp(1302, 22));
        string0 = "Congratulations - you have completed all the Group Ironman Journey Achievements!";
        IF_SETHIDE(true, comp(1302, 20));
    } else {
        int3 = DB_GETFIELDCOUNT(int2, 1253408);
        int4 = DB_GETFIELDCOUNT(int2, 1253440);
        int5 = DB_GETFIELDCOUNT(int2, 1253424);
        int6 = ((int3 + int4) + int5);
        if ((int6 > 0)) {
            int7 = RANDOM(int6);
            while ((int8 < int3)) {
                if ((int7 == 0)) {
                    stack(dbrow_getfield(int2, 1253408, int8));
                    [int9, int10, int11, int12, string0] = stack();
                    script19441(int10, -1 as struct, -1 as dbrow, string0, int11, int12);
                };
                int8 = (int8 + 1);
                int7 = (int7 - 1);
            };
            int8 = 0;
            while ((int8 < int4)) {
                if ((int7 == 0)) {
                    int13 = script19338(int2, int8, varbitplayer_56614);
                    script19441(-1 as graphic, int13, -1 as dbrow, "", -1, -1);
                    if ((int13 != -1 as struct)) {
                        if (((int13 == 50688 as struct) && (GENDER() == 1))) {
                            int13 = 50689 as struct;
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
                    script19441(-1 as graphic, -1 as struct, int14, "", -1, -1);
                    string0 = script18200(int14);
                };
                int8 = (int8 + 1);
                int7 = (int7 - 1);
            };
        } else {
            script19450();
        };
    };
    int11 = IF_GETWIDTH(comp(1302, 28));
    int12 = MAX(30, (10 + script15891(string0, int11, 41 as fontmetrics, 0)));
    IF_SETTEXT(string0, comp(1302, 30));
    IF_SETSIZE(0, int12, 1, 0, comp(1302, 28));
    return;
}