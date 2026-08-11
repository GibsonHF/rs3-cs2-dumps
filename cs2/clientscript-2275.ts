//
function script2275(): void {
    varclient_1184 = 0;
    varclient_1185 = 255;
    varclient_1186 = 0;
    IF_SETHIDE(true, comp(933, 96));  // rand_dungeon_rewards_v2:total_layer
    IF_SETHIDE(true, comp(933, 39));  // rand_dungeon_rewards_v2:modifiers_layer
    IF_SETHIDE(true, comp(933, 6));  // rand_dungeon_rewards_v2:base_layer
    IF_SETHIDE(true, comp(933, 20));  // rand_dungeon_rewards_v2:floor_layer
    IF_SETHIDE(true, comp(933, 211));  // rand_dungeon_rewards_v2:floor_val
    IF_SETHIDE(true, comp(933, 212));  // rand_dungeon_rewards_v2:floor_xp_val
    IF_SETHIDE(true, comp(933, 26));  // rand_dungeon_rewards_v2:floor_to_level_arrow
    IF_SETHIDE(true, comp(933, 22));  // rand_dungeon_rewards_v2:level_layer
    IF_SETHIDE(true, comp(933, 223));  // rand_dungeon_rewards_v2:level
    IF_SETHIDE(true, comp(933, 224));  // rand_dungeon_rewards_v2:level_xp_val
    IF_SETHIDE(true, comp(933, 27));  // rand_dungeon_rewards_v2:level_to_total_arrow
    IF_SETHIDE(true, comp(933, 24));  // rand_dungeon_rewards_v2:total_base_layer
    IF_SETHIDE(true, comp(933, 235));  // rand_dungeon_rewards_v2:total_floor_base
    IF_SETHIDE(true, comp(933, 236));  // rand_dungeon_rewards_v2:total_base_xp_val
    IF_SETHIDE(true, comp(933, 43));  // rand_dungeon_rewards_v2:dungeon_size_text
    IF_SETHIDE(true, comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
    IF_SETHIDE(true, comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
    IF_SETHIDE(true, comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
    IF_SETHIDE(true, comp(933, 47));  // rand_dungeon_rewards_v2:small_dungeon_text
    IF_SETHIDE(true, comp(933, 48));  // rand_dungeon_rewards_v2:medium_dungeon_text
    IF_SETHIDE(true, comp(933, 49));  // rand_dungeon_rewards_v2:large_dungeon_text
    IF_SETHIDE(true, comp(933, 50));  // rand_dungeon_rewards_v2:large_dungeon_lock
    IF_SETHIDE(true, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
    IF_SETTRANS(200, comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
    IF_SETTRANS(200, comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
    IF_SETTRANS(200, comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
    IF_SETHIDE(true, comp(933, 52));  // rand_dungeon_rewards_v2:bonus_rooms_text
    IF_SETHIDE(true, comp(933, 53));  // rand_dungeon_rewards_v2:bonus_rooms_bar_layer
    IF_SETHIDE(true, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
    IF_SETHIDE(true, comp(933, 56));  // rand_dungeon_rewards_v2:difficulty_text
    IF_SETHIDE(true, comp(933, 57));  // rand_dungeon_rewards_v2:difficulty_setting
    IF_SETHIDE(true, comp(933, 58));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow
    IF_SETHIDE(true, comp(933, 59));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow_1
    IF_SETHIDE(true, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
    IF_SETHIDE(true, comp(933, 61));  // rand_dungeon_rewards_v2:mobs_killed_text
    IF_SETHIDE(true, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
    IF_SETHIDE(true, comp(933, 63));  // rand_dungeon_rewards_v2:complexity_text
    IF_SETHIDE(true, comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
    IF_SETHIDE(true, comp(933, 65));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow
    IF_SETHIDE(true, comp(933, 66));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow_1
    IF_SETHIDE(true, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
    IF_SETHIDE(true, comp(933, 68));  // rand_dungeon_rewards_v2:floor_buff_text
    IF_SETHIDE(true, comp(933, 69));  // rand_dungeon_rewards_v2:floor_buff_val
    IF_SETHIDE(true, comp(933, 71));  // rand_dungeon_rewards_v2:deaths_container
    IF_SETHIDE(true, comp(933, 70));  // rand_dungeon_rewards_v2:deaths_text
    IF_SETHIDE(true, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
    IF_SETHIDE(true, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
    IF_SETHIDE(true, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
    IF_SETHIDE(true, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
    IF_SETHIDE(true, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
    IF_SETSIZE(8192, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
    IF_SETTEXT("100%", comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
    IF_SETHIDE(false, comp(933, 294));  // rand_dungeon_rewards_v2:total_modifier_drainer_effect
    IF_SETSIZE(183, 1, 0, 0, comp(933, 294));  // rand_dungeon_rewards_v2:total_modifier_drainer_effect
    IF_SETTRANS(0, comp(933, 173));  // rand_dungeon_rewards_v2:title_hide_1
    IF_SETTRANS(0, comp(933, 174));  // rand_dungeon_rewards_v2:title_hide_2
    IF_SETTRANS(0, comp(933, 175));  // rand_dungeon_rewards_v2:title_hide_3
    IF_SETHIDE(true, comp(933, 88));  // rand_dungeon_rewards_v2:xp_nerf_layer
    IF_SETPOSITION(IF_GETX(comp(933, 88)), 118, 0, 0, comp(933, 88));  // rand_dungeon_rewards_v2:xp_nerf_layer
    script949(1);
    script2278();
    script2938();
    script3184();
    script3248();
    script3257();
    varclient_1189 = 5;
    varclient_1190 = -10;
    IF_SETHIDE(true, comp(933, 28));  // rand_dungeon_rewards_v2:base_title_layer
    IF_SETHIDE(true, comp(933, 86));  // rand_dungeon_rewards_v2:modifiers_title_layer
    IF_SETHIDE(false, comp(933, 19));  // rand_dungeon_rewards_v2:base_flash
    IF_SETHIDE(false, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
    IF_SETHIDE(false, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
    IF_SETTRANS(255, comp(933, 19));  // rand_dungeon_rewards_v2:base_flash
    IF_SETTRANS(255, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
    IF_SETTRANS(255, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
    IF_SETHIDE(true, comp(933, 98));  // rand_dungeon_rewards_v2:totalflashbutton_layer
    IF_SETSIZE(90, 45, 0, 0, comp(933, 99));  // rand_dungeon_rewards_v2:totalflashbutton
    IF_SETTRANS(0, comp(933, 99));  // rand_dungeon_rewards_v2:totalflashbutton
    IF_SETHIDE(true, comp(933, 100));  // rand_dungeon_rewards_v2:levelflashbutton_layer
    IF_SETSIZE(90, 45, 0, 0, comp(933, 101));  // rand_dungeon_rewards_v2:levelflashbutton
    IF_SETTRANS(0, comp(933, 101));  // rand_dungeon_rewards_v2:levelflashbutton
    IF_SETHIDE(true, comp(933, 102));  // rand_dungeon_rewards_v2:floorflashbutton_layer
    IF_SETSIZE(90, 45, 0, 0, comp(933, 103));  // rand_dungeon_rewards_v2:floorflashbutton
    IF_SETTRANS(0, comp(933, 103));  // rand_dungeon_rewards_v2:floorflashbutton
    varclient_1397 = 0;
    varclient_1398 = 0;
    varclient_1399 = 0;
    varclient_1400 = 0;
    varclient_1401 = 0;
    IF_SETHIDE(false, comp(933, 189));  // rand_dungeon_rewards_v2:winterface_time
    IF_SETTEXT(script3930(IF_GETTEXT(comp(933, 68)), IF_GETWIDTH(comp(933, 68)), 1, IF_GETFONTMETRICS(comp(933, 68))), comp(933, 68));  // rand_dungeon_rewards_v2:floor_buff_text
    script4750();
    IF_SETONRESIZE(callback(script4749), comp(933, 0));  // rand_dungeon_rewards_v2:fade_layer
    return;
}