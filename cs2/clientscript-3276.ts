//
function script3276(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 100;
    var int9 = 25;
    var int10 = 25;
    var int11 = 50;
    var int12 = 25;
    var int13 = 25;
    var int14 = 50;
    var int15 = 25;
    var int16 = 25;
    var int17 = 50;
    var int18 = 100;
    var int19 = 50;
    var int20 = 25;
    var int21 = 150;
    var int22 = 25;
    var int23 = 100;
    var int24 = 25;
    var int25 = 100;
    var int26 = 25;
    var int27 = 50;
    var int28 = 25;
    var int29 = 50;
    var int30 = 25;
    var int31 = 25;
    var int32 = 25;
    var int33 = 150;
    var int34 = 100;
    var int35 = 200;
    var int36 = 100;
    varclient_1186 = 2000;
    varclient_1185 = MAX((varclient_1185 - 2), 0);
    IF_SETTRANS(varclient_1185, comp(933, 1));  // rand_dungeon_rewards_v2:fade
    IF_SETTRANS(0, comp(933, 173));  // rand_dungeon_rewards_v2:title_hide_1
    IF_SETTRANS(0, comp(933, 174));  // rand_dungeon_rewards_v2:title_hide_2
    IF_SETTRANS(0, comp(933, 175));  // rand_dungeon_rewards_v2:title_hide_3
    var int37 = 0;
    switch (varclient_1188) {
        case 3: {
            int37 = 50000;
            break;
        }
        case 2: {
            int37 = 25000;
            break;
        }
        default: {
            int37 = 0;
            break;
        }
    };
    var int38 = 0;
    switch (varclient_1188) {
        case 3: {
            int38 = SCALE(varclient_1195, 10000, 36000);
            break;
        }
        case 2: {
            int38 = SCALE(varclient_1195, 10000, 11000);
            break;
        }
        default: {
            int38 = SCALE(varclient_1195, 10000, 6000);
            break;
        }
    };
    [int3, int4, int5] = script3273();
    var int39 = int5;
    var int40 = script3274();
    var int41 = 600;
    var int42 = (10000 - (MIN(varbitplayer_2365, 4) * int41));
    if ((varclient_8415 > 0)) {
        int42 = MIN(10000, (int42 + ((varclient_8415 * 1) * 100)));
    };
    if (((script12953() == 1) || (script14608(2899) == 1))) {
        int42 = 10000;
    };
    IF_SETHIDE(false, comp(933, 28));  // rand_dungeon_rewards_v2:base_title_layer
    IF_SETHIDE(false, comp(933, 6));  // rand_dungeon_rewards_v2:base_layer
    IF_SETHIDE(false, comp(933, 20));  // rand_dungeon_rewards_v2:floor_layer
    IF_SETHIDE(false, comp(933, 211));  // rand_dungeon_rewards_v2:floor_val
    IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, comp(933, 211));  // rand_dungeon_rewards_v2:floor_val
    IF_SETHIDE(false, comp(933, 102));  // rand_dungeon_rewards_v2:floorflashbutton_layer
    IF_SETSIZE((IF_GETWIDTH(comp(933, 103)) + 5), (IF_GETHEIGHT(comp(933, 103)) + 5), 0, 0, comp(933, 103));  // rand_dungeon_rewards_v2:floorflashbutton
    SOUND_SYNTH(27367, 1, 0);
    IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 103)) + 30)), comp(933, 103));  // rand_dungeon_rewards_v2:floorflashbutton
    IF_SETHIDE(false, comp(933, 212));  // rand_dungeon_rewards_v2:floor_xp_val
    IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), comp(933, 212));  // rand_dungeon_rewards_v2:floor_xp_val
    IF_SETHIDE(false, comp(933, 26));  // rand_dungeon_rewards_v2:floor_to_level_arrow
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 26));  // rand_dungeon_rewards_v2:floor_to_level_arrow
    IF_SETHIDE(false, comp(933, 22));  // rand_dungeon_rewards_v2:level_layer
    IF_SETHIDE(false, comp(933, 223));  // rand_dungeon_rewards_v2:level
    IF_SETTEXT(`Level ${inttostring(varclient_8412, 10)}:`, comp(933, 223));  // rand_dungeon_rewards_v2:level
    IF_SETHIDE(false, comp(933, 100));  // rand_dungeon_rewards_v2:levelflashbutton_layer
    IF_SETSIZE((IF_GETWIDTH(comp(933, 101)) + 5), (IF_GETHEIGHT(comp(933, 101)) + 5), 0, 0, comp(933, 101));  // rand_dungeon_rewards_v2:levelflashbutton
    IF_SETTRANS(255, comp(933, 101));  // rand_dungeon_rewards_v2:levelflashbutton
    IF_SETHIDE(false, comp(933, 224));  // rand_dungeon_rewards_v2:level_xp_val
    IF_SETTEXT(inttostring(SCALE(((varclient_8411 + 5) / 10), 100, int8), 10), comp(933, 224));  // rand_dungeon_rewards_v2:level_xp_val
    IF_SETHIDE(false, comp(933, 27));  // rand_dungeon_rewards_v2:level_to_total_arrow
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 27));  // rand_dungeon_rewards_v2:level_to_total_arrow
    IF_SETHIDE(false, comp(933, 24));  // rand_dungeon_rewards_v2:total_base_layer
    IF_SETHIDE(false, comp(933, 235));  // rand_dungeon_rewards_v2:total_floor_base
    IF_SETHIDE(false, comp(933, 98));  // rand_dungeon_rewards_v2:totalflashbutton_layer
    IF_SETSIZE((IF_GETWIDTH(comp(933, 99)) + 5), (IF_GETHEIGHT(comp(933, 99)) + 5), 0, 0, comp(933, 99));  // rand_dungeon_rewards_v2:totalflashbutton
    IF_SETTRANS(0, comp(933, 99));  // rand_dungeon_rewards_v2:totalflashbutton
    IF_SETHIDE(false, comp(933, 236));  // rand_dungeon_rewards_v2:total_base_xp_val
    IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 236));  // rand_dungeon_rewards_v2:total_base_xp_val
    IF_SETHIDE(true, comp(933, 19));  // rand_dungeon_rewards_v2:base_flash
    IF_SETHIDE(false, comp(933, 96));  // rand_dungeon_rewards_v2:total_layer
    IF_SETTEXT(TOSTRING_LOCALISED(SCALE(((varclient_1239 + 5) / 10), 100, int8), 1), comp(933, 308));  // rand_dungeon_rewards_v2:xp_value
    IF_SETTRANS(255, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
    IF_SETHIDE(false, comp(933, 86));  // rand_dungeon_rewards_v2:modifiers_title_layer
    IF_SETHIDE(false, comp(933, 39));  // rand_dungeon_rewards_v2:modifiers_layer
    IF_SETHIDE(false, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
    IF_SETHIDE(false, comp(933, 43));  // rand_dungeon_rewards_v2:dungeon_size_text
    IF_SETHIDE(false, comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
    IF_SETHIDE(false, comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
    IF_SETHIDE(false, comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
    IF_SETHIDE(false, comp(933, 47));  // rand_dungeon_rewards_v2:small_dungeon_text
    IF_SETHIDE(false, comp(933, 48));  // rand_dungeon_rewards_v2:medium_dungeon_text
    IF_SETHIDE(false, comp(933, 49));  // rand_dungeon_rewards_v2:large_dungeon_text
    IF_SETHIDE(false, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
    [int3, int4, int5] = script3273();
    if ((varclient_1188 == 1)) {
        IF_SETTRANS(0, comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
        IF_SETTEXT(`+${inttostring((0 / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
    } else if ((varclient_1188 == 2)) {
        IF_SETTRANS(0, comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
        IF_SETTEXT(`+${inttostring((25000 / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
    } else if ((varclient_1188 == 3)) {
        IF_SETTRANS(0, comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
        IF_SETTEXT(`+${inttostring((50000 / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
    };
    IF_SETHIDE(false, comp(933, 52));  // rand_dungeon_rewards_v2:bonus_rooms_text
    IF_SETHIDE(false, comp(933, 53));  // rand_dungeon_rewards_v2:bonus_rooms_bar_layer
    IF_SETHIDE(false, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
    IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, comp(933, 256));  // rand_dungeon_rewards_v2:bonus_rooms_bar
    int0 = (10000 + int37);
    int1 = ((10000 + int37) + int38);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
    };
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
    IF_SETHIDE(false, comp(933, 56));  // rand_dungeon_rewards_v2:difficulty_text
    IF_SETHIDE(false, comp(933, 57));  // rand_dungeon_rewards_v2:difficulty_setting
    IF_SETHIDE(false, comp(933, 58));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow
    IF_SETHIDE(false, comp(933, 59));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow_1
    IF_SETHIDE(false, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 58));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 59));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow_1
    [int3, int4, int5] = script3273();
    IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, comp(933, 57));  // rand_dungeon_rewards_v2:difficulty_setting
    int0 = ((10000 + int37) + int38);
    int1 = (((10000 + int37) + int38) + int39);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
    };
    IF_SETHIDE(false, comp(933, 61));  // rand_dungeon_rewards_v2:mobs_killed_text
    IF_SETHIDE(false, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
    int0 = (((10000 + int37) + int38) + int39);
    int1 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
    } else {
        IF_SETTEXT(`${inttostring(((SCALE(int8, 100, (int1 - int0)) - 50) / 100), 10)}%`, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
    };
    IF_SETHIDE(false, comp(933, 68));  // rand_dungeon_rewards_v2:floor_buff_text
    IF_SETHIDE(false, comp(933, 69));  // rand_dungeon_rewards_v2:floor_buff_val
    var int43 = ((varclient_8416 * 25) * 100);
    int0 = ((((10000 + int37) + int38) + int39) + varclient_1236);
    int1 = (((((10000 + int37) + int38) + int39) + varclient_1236) + int43);
    IF_SETTEXT(`+${inttostring((varclient_8416 * 25), 10)}%`, comp(933, 69));  // rand_dungeon_rewards_v2:floor_buff_val
    IF_SETHIDE(false, comp(933, 63));  // rand_dungeon_rewards_v2:complexity_text
    IF_SETHIDE(false, comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
    IF_SETHIDE(false, comp(933, 65));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow
    IF_SETHIDE(false, comp(933, 66));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow_1
    IF_SETHIDE(false, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 65));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow
    IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 66));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow_1
    if ((varclient_1320 == 2)) {
        IF_SETTEXT("High", comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
    } else {
        IF_SETTEXT("Low", comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
    };
    int0 = (((((10000 + int37) + int38) + int39) + varclient_1236) + int43);
    int1 = SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
    } else {
        IF_SETTEXT(`${inttostring(((int40 - 10000) / 100), 10)}%`, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
    };
    IF_SETHIDE(false, comp(933, 70));  // rand_dungeon_rewards_v2:deaths_text
    IF_SETHIDE(false, comp(933, 71));  // rand_dungeon_rewards_v2:deaths_container
    IF_SETHIDE(false, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
    if ((varbitplayer_2365 != 0)) {
        switch (varbitplayer_2365) {
            case 1: {
                IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                IF_SETGRAPHIC(2849 as graphic, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                IF_SETGRAPHIC(2850 as graphic, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                IF_SETGRAPHIC(2849 as graphic, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                IF_SETHIDE(false, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                IF_SETGRAPHIC(2850 as graphic, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                IF_SETGRAPHIC(2849 as graphic, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                IF_SETHIDE(false, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                IF_SETHIDE(false, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                IF_SETGRAPHIC(2850 as graphic, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                IF_SETGRAPHIC(2849 as graphic, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                IF_SETHIDE(false, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                IF_SETHIDE(false, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                IF_SETGRAPHIC(2850 as graphic, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                break;
            }
        };
    } else {
        IF_SETTEXT("No deaths.", comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
        varclient_1186 = (varclient_1186 + 2);
    };
    int0 = SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40);
    int1 = SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42);
    if ((int1 >= int0)) {
        IF_SETTEXT(`+${inttostring(((SCALE(int8, 100, (int1 - int0)) + 50) / 100), 10)}%`, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
    } else {
        IF_SETTEXT(`${inttostring(((int42 - 10000) / 100), 10)}%`, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
    };
    IF_SETHIDE(true, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
    if ((varclient_1321 > 0)) {
        IF_SETHIDE(false, comp(933, 88));  // rand_dungeon_rewards_v2:xp_nerf_layer
        IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, comp(933, 268));  // rand_dungeon_rewards_v2:xp_nerf_text
    };
    int0 = SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42);
    int1 = SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321));
    IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
    var int44 = (8192 + (((int1 - 10000) * 8192) / 60000));
    int44 = (8192 - (((int44 - 8192) * (83 - int8)) / 83));
    IF_SETSIZE(int44, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
    script949(0);
    IF_SETTEXT(TOSTRING_LOCALISED(varclient_1239, 1), comp(933, 308));  // rand_dungeon_rewards_v2:xp_value
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    if (((MODULO(int8, 5) == 0) && (IF_GETY(comp(933, 88)) != 138))) {  // rand_dungeon_rewards_v2:xp_nerf_layer
        IF_SETPOSITION(IF_GETX(comp(933, 88)), (IF_GETY(comp(933, 88)) + 1), 0, 0, comp(933, 88));  // rand_dungeon_rewards_v2:xp_nerf_layer
    };
    IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, comp(933, 294));  // rand_dungeon_rewards_v2:total_modifier_drainer_effect
    IF_SETTEXT(`${TOSTRING_LOCALISED((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 1)}%`, comp(933, 308));  // rand_dungeon_rewards_v2:xp_value
    int0 = varclient_1239;
    int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int37) + int38) + int39) + varclient_1236) + int43), 10000, int40), 10000, int42), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
    var int45 = ((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) * 2);
    if ((varclient_6516 == true)) {
        if (((2147483647 - int45) >= 0)) {
            int45 = (int45 * 2);
        } else {
            int45 = 2147483647;
        };
    };
    if ((varplayer_1097 < 2000000000)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int45, 1)}%`, comp(933, 310));  // rand_dungeon_rewards_v2:tokens_count
    } else {
        IF_SETTEXT("Max tokens", comp(933, 310));  // rand_dungeon_rewards_v2:tokens_count
    };
    IF_SETHIDE(true, comp(933, 98));  // rand_dungeon_rewards_v2:totalflashbutton_layer
    IF_SETHIDE(true, comp(933, 100));  // rand_dungeon_rewards_v2:levelflashbutton_layer
    IF_SETHIDE(true, comp(933, 102));  // rand_dungeon_rewards_v2:floorflashbutton_layer
    return;
}