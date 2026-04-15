//
function script6575(): void {
    stack(974848);
    stack(varbitplayer_54002);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    if ((int0 == -1)) {
        script12478("Null dbrow");
        return;
    };
    var int1 = -1 as dbrow;
    var int2 = -1 as category;
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1 as achievement;
    var int6 = -1 as achievement;
    var int7 = -1 as achievement;
    var string0 = "";
    var int8 = -1 as graphic;
    var int9 = -1 as obj;
    var int10 = 0;
    var int11 = 0;
    var int12 = DB_GETFIELDCOUNT(int0, 974896);
    var int13 = dbrow_getfield(int0, 974880, 0);
    var int14 = 0;
    while ((int14 < 4)) {
        int1 = script7480(int14);
        if ((int1 == -1 as dbrow)) {
            script12478(`Null progress bar data for ${inttostring(int14, 10)}`);
            return;
        };
        IF_SETTEXT(enum_getvalue(0, 36, 17001 as cs2enum, (int13 + int14)), dbrow_getfield(int1, 978976, 0));
        int3 = dbrow_getfield(int1, 978960, 0);
        if ((int14 < int12)) {
            int2 = script11706(int0, int14);
        };
        if ((int2 != -1 as category)) {
            [string0, int10, int11, int5, int6] = script11708(int2, int5, int6);
            IF_SETHIDE(false, int3);
            IF_SETTEXT(string0, dbrow_getfield(int1, 979008, 0));
            IF_SETSIZE(SCALE(int10, int11, 16384), 16384, 2, 2, dbrow_getfield(int1, 978992, 0));
            int7 = script8438(int0, int14);
            int8 = ACHIEVEMENT_SPRITE(int7);
            stack(int8);
            stack(dbrow_getfield(int1, 979024, 0));
            IF_SETGRAPHIC();
            int9 = script11707(int0, int14);
            stack(int1);
            stack(979040);
            stack(0);
            dbrow_getfield();
            int4 = stack();
            IF_SETOBJECT_NONUM(int9, 1, int4);
            IF_SETSIZE(36, 32, 0, 0, int4);
            IF_SETONOP(callback(script17834, int7, int9), int4);
        } else {
            IF_SETHIDE(true, int3);
        };
        int2 = -1 as category;
        int14 = (int14 + 1);
    };
    if (((int5 == -1 as achievement) && (int6 != -1 as achievement))) {
        int5 = int6;
    };
    CC_DELETEALL(comp(755, 6));
    if ((int5 != -1 as achievement)) {
        ACHIEVEMENT_FINDPARENTS(int5);
        int7 = ACHIEVEMENT_FINDNEXT();
        IF_SETTEXT(`Recommended Task: ${ACHIEVEMENT_GETNAME(int5)}`, comp(755, 4));
        IF_SETTEXT(`${ACHIEVEMENT_GETNAME(int7)}<br>Task Description: ${script15321(int5)}`, comp(755, 5));
        stack(ACHIEVEMENT_SPRITE(int5));
        stack(49479683);
        IF_SETGRAPHIC();
        if ((IF_FIND(49479686) == 1)) {
            CC_CREATE(comp(755, 6), 5, 0);
            CC_SETSIZE(14, 14, 0, 0);
            CC_SETNOCLICKTHROUGH(true);
            script13339(comp(755, 6), 0, int5);
        };
        IF_SETHIDE(false, comp(755, 6));
        IF_SETPOSITION(60, 4, 0, 0, comp(755, 4));
    } else {
        IF_SETTEXT("All tasks completed!", comp(755, 4));
        IF_SETTEXT("", comp(755, 5));
        stack(int8);
        stack(49479683);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 49479686);
        IF_SETPOSITION(45, 4, 0, 0, 49479684);
    };
    var int15 = -1;
    int14 = int12;
    int7 = -1 as achievement;
    while ((--int14 >= 0)) {
        int7 = script8438(int0, int14);
        if ((ACHIEVEMENT_REQSTATE(int7) != -2)) {
            int15 = int14;
        };
    };
    if ((int15 == -1)) {
        int15 = (int12 - 1);
    };
    IF_SETTEXT(enum_getvalue(0, 36, 17002 as cs2enum, (int15 + int13)), comp(755, 79));
    script1025(comp(755, 79), -1, 209 as fontmetrics, 208 as fontmetrics, 207 as fontmetrics);
    int7 = script8438(int0, int15);
    int9 = script11707(int0, int15);
    IF_SETOBJECT_HIGHRES(int9, comp(755, 81));
    IF_SETTEXT(script3509(int9), comp(755, 82));
    IF_SETTEXT(script15321(int7), comp(755, 83));
    script1025(comp(755, 83), -1, 208 as fontmetrics, 207 as fontmetrics, 206 as fontmetrics);
    IF_SETONOP(callback(script17834, int7, int9), comp(755, 84));
    return;
}