//
function script14920(int0: dbrow): void {
    var int1 = comp(694, 40);
    var int2 = comp(694, 41);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int3 = dbrow_getfield(int0, 364640, 0);
    var int4 = db_find_with_count(344272, int3, 0);
    if ((int4 > 0)) {
        int4 = DB_FIND_REFINE(344096, 2, 0);
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as dbrow;
    var int8 = 16777215;
    var int9 = 0;
    var int10 = -1;
    if ((int4 == 0)) {
        script152(int1, (IF_GETWIDTH(int1) - (2 * 4)), (IF_GETHEIGHT(int1) - (2 * 4)), 4, 4, 26 as fontmetrics, "There are no collectors currently interested in this artefact.", 16777215);
        CC_SETTEXTALIGN(1, 1, 0);
    } else {
        while ((++int10 < int4)) {
            dbrow_findnext();
            int7 = stack();
            if ((int7 != -1)) {
                if ((script14499(int7, int3) > 0)) {
                    int8 = 16777215;
                } else {
                    int8 = script10495(5);
                };
                int5 = (((IF_GETWIDTH(int1) - (4 * 4)) - 50) - 26);
                int6 = MAX(36, ((2 * 4) + script7593(dbrow_getfield(int7, 344128, 0), int5, 26 as fontmetrics, enum_getvalue(25, 0, 8584 as cs2enum, 26 as fontmetrics))));
                script10066(int1, IF_GETNEXTSUBID(int1), IF_GETWIDTH(int1), int6, 0, int9, 0, 1, 0);
                script10010(28680 as struct);
                script152(int1, int5, (int6 - (2 * 4)), 4, (int9 + 4), 26 as fontmetrics, dbrow_getfield(int7, 344128, 0), int8);
                CC_SETTEXTALIGN(0, 1, 0);
                if ((script14502(int7) == 2)) {
                    script7924(int1, IF_GETNEXTSUBID(int1), 26, 26, (((IF_GETWIDTH(int1) - (2 * 4)) - 50) - 26), (int9 + 4), 28293 as graphic, false, false, false, 0);
                    script3537(`${inttostring(script14504(int7), 10)}/${inttostring(DB_GETFIELDCOUNT(int7, 344272), 10)}`);
                } else {
                    script152(int1, 26, 26, (((IF_GETWIDTH(int1) - (2 * 4)) - 50) - 26), (int9 + 4), 26 as fontmetrics, `${inttostring(script14504(int7), 10)}/${inttostring(DB_GETFIELDCOUNT(int7, 344272), 10)}`, 16777215);
                    CC_SETTEXTALIGN(1, 1, 0);
                };
                script10410(int1, int2, 28556 as struct, ((IF_GETWIDTH(int1) - 4) - 50), (int9 + 4), 50, (36 - (2 * 4)), int10, false, "Info");
                if ((CC_FIND(int2, int10) == 1)) {
                    CC_SETONOP(callback(script14921, int7));
                };
                int9 = (int9 + (int6 + 4));
            };
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(694, 38)), (int9 - 4)), comp(694, 38));
    IF_SETSCROLLPOS(0, 0, comp(694, 38));
    script7791(comp(694, 39), comp(694, 38));
    return;
}