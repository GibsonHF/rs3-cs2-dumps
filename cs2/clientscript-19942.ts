//
function script19942(): void {
    var int0 = script19933(17865);
    var int1 = script19933(17866);
    var int2 = script19933(17867);
    var int3 = script19933(15221);
    var int4 = script19933(15222);
    var int5 = dbrow_getfield(17865 as dbrow, 1302544, 0);
    var int6 = dbrow_getfield(17865 as dbrow, 1302576, 0);
    var int7 = MAX(0, (int6 - script12477()));
    var int8 = script10495(2);
    var int9 = script10495(0);
    var int10 = script10495(21);
    IF_SETTEXT("Hunt for the Golden Eggs", comp(1336, 3));  // easter_egg_hunt:header_text
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int8))}>Nougat Bunny has hidden a bunch of golden eggs around Gielinor for you to find!</col>`, comp(1336, 6));  // easter_egg_hunt:event_info_header_text
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int9))}${inttostring(PUSH_CONSTANT_INT[16](">Follow the clues</col><col=", int8))}> to find golden eggs in the Gielinor Egg Hunt.`, comp(1336, 7));  // easter_egg_hunt:event_info_text
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=2DBA14>Event runs:</col> <col=", int8))}>${script19937(int5)} - ${script19937(int6)}</col>`, comp(1336, 8));  // easter_egg_hunt:event_date_text
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=F99222>Time remaining:</col> <col=", int8))}>${inttostring(int7, 10)} ${script4583(int7, "day", "days")}</col>`, comp(1336, 9));  // easter_egg_hunt:event_time_text
    IF_SETTEXT("Gielinor Egg Hunt", comp(1336, 73));  // easter_egg_hunt:world_progress_header_text
    IF_SETTEXT("Week 1", comp(1336, 74));  // easter_egg_hunt:world_progress_week_1_text
    IF_SETTEXT("Week 2", comp(1336, 75));  // easter_egg_hunt:world_progress_week_2_text
    IF_SETTEXT("Week 3", comp(1336, 76));  // easter_egg_hunt:world_progress_week_3_text
    IF_SETTEXT(`${inttostring(int0, 10)} / ${inttostring(script19935(17865), 10)}`, comp(1336, 66));  // easter_egg_hunt:world_progress_bar_1_text
    IF_SETTEXT(`${inttostring(int1, 10)} / ${inttostring(script19935(17866), 10)}`, comp(1336, 71));  // easter_egg_hunt:world_progress_bar_2_text
    IF_SETTEXT(`${inttostring(int2, 10)} / ${inttostring(script19935(17867), 10)}`, comp(1336, 81));  // easter_egg_hunt:world_progress_bar_3_text
    if ((script7148() == 1)) {
        IF_SETTEXT("Community Egg Hunt", comp(1336, 50));  // easter_egg_hunt:community_progress_header_text
        IF_SETTEXT("Week 1", comp(1336, 51));  // easter_egg_hunt:community_progress_week_1_text
        IF_SETTEXT("Week 2", comp(1336, 52));  // easter_egg_hunt:community_progress_week_2_text
        IF_SETTEXT(`${inttostring(int3, 10)} / ${inttostring(script19935(15221), 10)}`, comp(1336, 48));  // easter_egg_hunt:community_progress_bar_1_text
        IF_SETTEXT(`${inttostring(int4, 10)} / ${inttostring(script19935(15222), 10)}`, comp(1336, 60));  // easter_egg_hunt:community_progress_bar_2_text
        IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int8))}${inttostring(PUSH_CONSTANT_INT[16](">Egg points:</col> <col=", int10))}>${inttostring(varbitplayer_55275, 10)}</col>`, comp(1336, 21));  // easter_egg_hunt:currency_text
    };
    var int11 = (IF_GETWIDTH(comp(1336, 64)) / 7);  // easter_egg_hunt:world_progress_bar_1_fill
    var int12 = (IF_GETWIDTH(comp(1336, 46)) / 5);  // easter_egg_hunt:community_progress_bar_1_fill
    var int13 = IF_GETHEIGHT(comp(1336, 64));  // easter_egg_hunt:world_progress_bar_1_fill
    IF_SETSIZE((int11 * int0), int13, 0, 0, comp(1336, 64));  // easter_egg_hunt:world_progress_bar_1_fill
    IF_SETSIZE((int11 * int1), int13, 0, 0, comp(1336, 69));  // easter_egg_hunt:world_progress_bar_2_fill
    IF_SETSIZE((int11 * int2), int13, 0, 0, comp(1336, 79));  // easter_egg_hunt:world_progress_bar_3_fill
    IF_SETSIZE((int12 * int3), int13, 0, 0, comp(1336, 46));  // easter_egg_hunt:community_progress_bar_1_fill
    IF_SETSIZE((int12 * int4), int13, 0, 0, comp(1336, 58));  // easter_egg_hunt:community_progress_bar_2_fill
    script19946();
    return;
}