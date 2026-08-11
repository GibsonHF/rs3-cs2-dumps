//
function script6575(): void {
    stack(974848);
    stack(varbitplayer_54002);
    DB_FIND(0);
    var int0 = dbrow_findnext();
    if ((int0 == -1)) {
        script12478("Null dbrow");
        return;
    };
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var string0 = "";
    var int8 = -1;
    var int9 = -1;
    var int10 = 0;
    var int11 = 0;
    var int12 = DB_GETFIELDCOUNT(int0, 974896);
    var int13 = dbrow_getfield(int0, 974880, 0);
    var int14 = 0;
    while ((int14 < 4)) {
        int1 = script7480(int14);
        if ((int1 == -1)) {
            script12478(`Null progress bar data for ${inttostring(int14, 10)}`);
            return;
        };
        IF_SETTEXT(enum_getvalue(0, 36, 17001, (int13 + int14)), dbrow_getfield(int1, 978976, 0));
        int3 = dbrow_getfield(int1, 978960, 0);
        if ((int14 < int12)) {
            int2 = script11706(int0, int14);
        };
        if ((int2 != -1)) {
            [string0, int10, int11, int5, int6] = script11708(int2, int5, int6);
            IF_SETHIDE(false, int3);
            IF_SETTEXT(string0, dbrow_getfield(int1, 979008, 0));
            IF_SETSIZE(SCALE(int10, int11, 16384), 16384, 2, 2, dbrow_getfield(int1, 978992, 0));
            int7 = script8438(int0, int14);
            int8 = ACHIEVEMENT_SPRITE(int7);
            IF_SETGRAPHIC(int8, dbrow_getfield(int1, 979024, 0));
            int9 = script11707(int0, int14);
            int4 = dbrow_getfield(int1, 979040, 0);
            IF_SETOBJECT_NONUM(int9, 1, int4);
            IF_SETSIZE(36, 32, 0, 0, int4);
            IF_SETONOP(callback(script17834, int7, int9), int4);
        } else {
            IF_SETHIDE(true, int3);
        };
        int2 = -1;
        int14 = (int14 + 1);
    };
    if (((int5 == -1) && (int6 != -1))) {
        int5 = int6;
    };
    CC_DELETEALL(comp(755, 6));  // area_task_sub:recommended_task_pin_layer
    if ((int5 != -1)) {
        ACHIEVEMENT_FINDPARENTS(int5);
        int7 = ACHIEVEMENT_FINDNEXT();
        IF_SETTEXT(`Recommended Task: ${ACHIEVEMENT_GETNAME(int5)}`, comp(755, 4));  // area_task_sub:recommended_task_name
        IF_SETTEXT(`${ACHIEVEMENT_GETNAME(int7)}<br>Task Description: ${script15321(int5)}`, comp(755, 5));  // area_task_sub:recommended_task_desc
        IF_SETGRAPHIC(ACHIEVEMENT_SPRITE(int5), comp(755, 3));  // area_task_sub:recommended_task_graphic
        if ((IF_FIND(comp(755, 6)) == 1)) {  // area_task_sub:recommended_task_pin_layer
            CC_CREATE(comp(755, 6), 5, 0);  // area_task_sub:recommended_task_pin_layer
            CC_SETSIZE(14, 14, 0, 0);
            CC_SETNOCLICKTHROUGH(true);
            script13339(49479686, 0, int5);
        };
        IF_SETHIDE(false, comp(755, 6));  // area_task_sub:recommended_task_pin_layer
        IF_SETPOSITION(60, 4, 0, 0, comp(755, 4));  // area_task_sub:recommended_task_name
    } else {
        IF_SETTEXT("All tasks completed!", comp(755, 4));  // area_task_sub:recommended_task_name
        IF_SETTEXT("", comp(755, 5));  // area_task_sub:recommended_task_desc
        IF_SETGRAPHIC(int8, comp(755, 3));  // area_task_sub:recommended_task_graphic
        IF_SETHIDE(true, comp(755, 6));  // area_task_sub:recommended_task_pin_layer
        IF_SETPOSITION(45, 4, 0, 0, comp(755, 4));  // area_task_sub:recommended_task_name
    };
    var int15 = -1;
    int14 = int12;
    int7 = -1;
    int14 = (int14 - 1);
    while ((int14 >= 0)) {
        int7 = script8438(int0, int14);
        if ((ACHIEVEMENT_REQSTATE(int7) != -2)) {
            int15 = int14;
        };
    };
    if ((int15 == -1)) {
        int15 = (int12 - 1);
    };
    IF_SETTEXT(enum_getvalue(0, 36, 17002, (int15 + int13)), 49479759);
    script1025(49479759, -1, 209, 208, 207);
    int7 = script8438(int0, int15);
    int9 = script11707(int0, int15);
    IF_SETOBJECT_HIGHRES(int9, 49479761);
    IF_SETTEXT(script3509(int9), comp(755, 82));  // area_task_sub:reward_name
    IF_SETTEXT(script15321(int7), comp(755, 83));  // area_task_sub:reward_desc
    script1025(49479763, -1, 208, 207, 206);
    IF_SETONOP(callback(script17834, int7, int9), comp(755, 84));  // area_task_sub:reward_info_button
    return;
}