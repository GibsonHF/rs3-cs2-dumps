//
function script14311(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1126, 40));  // tt2_noticeboard:details_layer
        IF_SETHIDE(false, comp(1126, 39));  // tt2_noticeboard:start_text
        return;
    };
    script14308();
    IF_SETHIDE(false, comp(1126, 40));  // tt2_noticeboard:details_layer
    var int1 = enum_getvalue(0, 73, 5033 as cs2enum, int0);
    IF_SETTEXT(struct_getparam(int1, 7278), comp(1126, 28));  // tt2_noticeboard:name_text
    var int2 = 0;
    switch (varbitplayer_4125) {
        case 1: {
            int2 = varbitplayer_4126;
            break;
        }
        case 2: {
            int2 = varbitplayer_4127;
            break;
        }
        case 3: {
            int2 = varbitplayer_4131;
            break;
        }
        case 4: {
            int2 = varbitplayer_4132;
            break;
        }
        case 5: {
            int2 = varbitplayer_4133;
            break;
        }
        case 6: {
            int2 = varbitplayer_4134;
            break;
        }
    };
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    while ((int3 != 100)) {
        int5 = enum_getvalue(0, 0, 5034 as cs2enum, int3);
        if ((int2 >= int5)) {
            int4 = int3;
        };
        int3 = (int3 + 1);
    };
    var int6 = enum_getvalue(0, 0, 5034, (int4 + 1));
    var int7 = (int6 - enum_getvalue(0, 0, 5034, int4));
    var int8 = (int6 - int2);
    var int9 = SCALE(int8, int7, 100);
    var int10 = (IF_GETWIDTH(comp(1126, 30)) - 12);  // tt2_noticeboard:bar_holder
    IF_SETSIZE(SCALE(int10, 100, int9), IF_GETHEIGHT(comp(1126, 46)), 0, 0, comp(1126, 46));  // tt2_noticeboard:xp_bar
    IF_SETTEXT(`Level: ${inttostring(int4, 10)}`, comp(1126, 29));  // tt2_noticeboard:npc_level_text
    switch (struct_getparam(int1, 1915)) {
        case 1: {
            IF_SETTEXT("Difficulty: Easy", comp(1126, 31));  // tt2_noticeboard:difficulty_text
            break;
        }
        case 2: {
            IF_SETTEXT("Difficulty: Medium", comp(1126, 31));  // tt2_noticeboard:difficulty_text
            break;
        }
        case 3: {
            IF_SETTEXT("Difficulty: Hard", comp(1126, 31));  // tt2_noticeboard:difficulty_text
            break;
        }
    };
    IF_SETTEXT(inttostring(struct_getparam(int1, 1898), 10), comp(1126, 4));  // tt2_noticeboard:unlock_level1
    IF_SETTEXT(inttostring(struct_getparam(int1, 1901), 10), comp(1126, 88));  // tt2_noticeboard:unlock_level2
    IF_SETTEXT(inttostring(struct_getparam(int1, 1904), 10), comp(1126, 91));  // tt2_noticeboard:unlock_level3
    IF_SETTEXT(inttostring(struct_getparam(int1, 1907), 10), comp(1126, 94));  // tt2_noticeboard:unlock_level4
    IF_SETTEXT(struct_getparam(int1, 1899), 73793541);
    IF_SETTEXT(struct_getparam(int1, 1902), 73793625);
    IF_SETTEXT(struct_getparam(int1, 1905), 73793628);
    IF_SETTEXT(struct_getparam(int1, 1908), 73793631);
    var int11 = script9054(int4, struct_getparam(int1, 1898), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 4));  // tt2_noticeboard:unlock_level1
    IF_SETCOLOUR(int11, comp(1126, 5));  // tt2_noticeboard:unlock_text1
    int11 = script9054(int4, struct_getparam(int1, 1901), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 88));  // tt2_noticeboard:unlock_level2
    IF_SETCOLOUR(int11, comp(1126, 89));  // tt2_noticeboard:unlock_text2
    int11 = script9054(int4, struct_getparam(int1, 1904), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 91));  // tt2_noticeboard:unlock_level3
    IF_SETCOLOUR(int11, comp(1126, 92));  // tt2_noticeboard:unlock_text3
    int11 = script9054(int4, struct_getparam(int1, 1907), 6610020, 14443620);
    IF_SETCOLOUR(int11, comp(1126, 94));  // tt2_noticeboard:unlock_level4
    IF_SETCOLOUR(int11, comp(1126, 95));  // tt2_noticeboard:unlock_text4
    IF_SETHIDE(true, comp(1126, 39));  // tt2_noticeboard:start_text
    return;
}