//
function script3267(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
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
    var int37 = 0;
    varclient_1185 = MAX((varclient_1185 - 2), 0);
    IF_SETTRANS(varclient_1185, comp(933, 1));  // rand_dungeon_rewards_v2:fade
    IF_SETTRANS((255 - varclient_1185), comp(933, 173));  // rand_dungeon_rewards_v2:title_hide_1
    IF_SETTRANS((255 - varclient_1185), comp(933, 174));  // rand_dungeon_rewards_v2:title_hide_2
    IF_SETTRANS((255 - varclient_1185), comp(933, 175));  // rand_dungeon_rewards_v2:title_hide_3
    var int38 = 0;
    switch (varclient_1188) {
        case 3: {
            int38 = 50000;
            break;
        }
        case 2: {
            int38 = 25000;
            break;
        }
        default: {
            int38 = 0;
            break;
        }
    };
    var int39 = 0;
    switch (varclient_1188) {
        case 3: {
            int39 = SCALE(varclient_1195, 10000, 36000);
            break;
        }
        case 2: {
            int39 = SCALE(varclient_1195, 10000, 11000);
            break;
        }
        default: {
            int39 = SCALE(varclient_1195, 10000, 6000);
            break;
        }
    };
    [int3, int4, int5] = script3273();
    var int40 = int5;
    var int41 = script3274();
    var int42 = ((varclient_8416 * 25) * 100);
    var int43 = 600;
    var int44 = (10000 - (MIN(varbitplayer_2365, 4) * int43));
    if ((varclient_8415 > 0)) {
        int44 = MIN(10000, (int44 + ((varclient_8415 * 1) * 100)));
    };
    if (((script12953() == 1) || (script14608(2899) == 1))) {
        int44 = 10000;
    };
    var int45 = 0;
    var int46 = 0;
    if (((varclient_1185 == 0) && (varclient_1192 != 0))) {
        if ((varclient_1186 < 350)) {
            if ((IF_GETTRANS(comp(933, 19)) <= 31)) {  // rand_dungeon_rewards_v2:base_flash
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 19)) > 220)) {  // rand_dungeon_rewards_v2:base_flash
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 19)) + varclient_1189), comp(933, 19));  // rand_dungeon_rewards_v2:base_flash
        } else if ((varclient_1186 >= 350)) {
            if ((varclient_1186 < 400)) {
                if ((varclient_1186 == 350)) {
                    IF_SETTRANS(255, comp(933, 19));  // rand_dungeon_rewards_v2:base_flash
                };
                if ((IF_GETTRANS(comp(933, 306)) <= 31)) {  // rand_dungeon_rewards_v2:total_flash
                    varclient_1189 = 7;
                } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {  // rand_dungeon_rewards_v2:total_flash
                    varclient_1189 = -7;
                };
                IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
            } else if ((varclient_1186 >= 400)) {
                if ((varclient_1186 < 1350)) {
                    if ((varclient_1186 == 400)) {
                        IF_SETTRANS(255, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
                    };
                    if ((IF_GETTRANS(comp(933, 42)) <= 31)) {  // rand_dungeon_rewards_v2:modifiers_flash
                        varclient_1189 = 7;
                    } else if ((IF_GETTRANS(comp(933, 42)) > 220)) {  // rand_dungeon_rewards_v2:modifiers_flash
                        varclient_1189 = -7;
                    };
                    IF_SETTRANS((IF_GETTRANS(comp(933, 42)) + varclient_1189), comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
                } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
                    if ((varclient_1186 == 1350)) {
                        IF_SETTRANS(255, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
                    };
                    if ((IF_GETTRANS(comp(933, 306)) <= 31)) {  // rand_dungeon_rewards_v2:total_flash
                        varclient_1189 = 7;
                    } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {  // rand_dungeon_rewards_v2:total_flash
                        varclient_1189 = -7;
                    };
                    IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
                };
            } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
                if ((varclient_1186 == 1350)) {
                    IF_SETTRANS(255, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
                };
                if ((IF_GETTRANS(comp(933, 306)) <= 31)) {  // rand_dungeon_rewards_v2:total_flash
                    varclient_1189 = 7;
                } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {  // rand_dungeon_rewards_v2:total_flash
                    varclient_1189 = -7;
                };
                IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
            };
        } else if ((varclient_1186 >= 400)) {
            if ((varclient_1186 < 1350)) {
                if ((varclient_1186 == 400)) {
                    IF_SETTRANS(255, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
                };
                if ((IF_GETTRANS(comp(933, 42)) <= 31)) {  // rand_dungeon_rewards_v2:modifiers_flash
                    varclient_1189 = 7;
                } else if ((IF_GETTRANS(comp(933, 42)) > 220)) {  // rand_dungeon_rewards_v2:modifiers_flash
                    varclient_1189 = -7;
                };
                IF_SETTRANS((IF_GETTRANS(comp(933, 42)) + varclient_1189), comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
            } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
                if ((varclient_1186 == 1350)) {
                    IF_SETTRANS(255, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
                };
                if ((IF_GETTRANS(comp(933, 306)) <= 31)) {  // rand_dungeon_rewards_v2:total_flash
                    varclient_1189 = 7;
                } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {  // rand_dungeon_rewards_v2:total_flash
                    varclient_1189 = -7;
                };
                IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
            };
        } else if (((varclient_1186 >= 1350) && (varclient_1186 < 1600))) {
            if ((varclient_1186 == 1350)) {
                IF_SETTRANS(255, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
            };
            if ((IF_GETTRANS(comp(933, 306)) <= 31)) {  // rand_dungeon_rewards_v2:total_flash
                varclient_1189 = 7;
            } else if ((IF_GETTRANS(comp(933, 306)) > 220)) {  // rand_dungeon_rewards_v2:total_flash
                varclient_1189 = -7;
            };
            IF_SETTRANS((IF_GETTRANS(comp(933, 306)) + varclient_1189), comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
        };
        if ((varclient_1186 < int9)) {
            IF_SETHIDE(false, comp(933, 28));  // rand_dungeon_rewards_v2:base_title_layer
            IF_SETHIDE(false, comp(933, 6));  // rand_dungeon_rewards_v2:base_layer
            if ((varclient_1186 == 0)) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (int9 + int10))) {
            IF_SETHIDE(false, comp(933, 20));  // rand_dungeon_rewards_v2:floor_layer
            IF_SETHIDE(false, comp(933, 211));  // rand_dungeon_rewards_v2:floor_val
            IF_SETTEXT(`Floor ${inttostring(varclient_1319, 10)}:`, comp(933, 211));  // rand_dungeon_rewards_v2:floor_val
            IF_SETHIDE(false, comp(933, 102));  // rand_dungeon_rewards_v2:floorflashbutton_layer
            IF_SETSIZE((IF_GETWIDTH(comp(933, 103)) + 5), (IF_GETHEIGHT(comp(933, 103)) + 5), 0, 0, comp(933, 103));  // rand_dungeon_rewards_v2:floorflashbutton
            if ((varclient_1186 == int9)) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 103)) + 30)), comp(933, 103));  // rand_dungeon_rewards_v2:floorflashbutton
        } else if ((varclient_1186 < ((int9 + int10) + int11))) {
            int8 = SCALE(((varclient_1186 - (int9 + int10)) + 1), int11, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 212));  // rand_dungeon_rewards_v2:floor_xp_val
            IF_SETTEXT(inttostring(SCALE(((varclient_1237 + 5) / 10), 100, int8), 10), comp(933, 212));  // rand_dungeon_rewards_v2:floor_xp_val
            if ((SCALE(((varclient_1237 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1237 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((int9 + int10) + int11) + int12))) {
            IF_SETHIDE(false, comp(933, 26));  // rand_dungeon_rewards_v2:floor_to_level_arrow
            int8 = SCALE(((varclient_1186 - ((int9 + int10) + int11)) + 1), int12, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 26));  // rand_dungeon_rewards_v2:floor_to_level_arrow
        } else if ((varclient_1186 < ((((int9 + int10) + int11) + int12) + int13))) {
            IF_SETHIDE(false, comp(933, 22));  // rand_dungeon_rewards_v2:level_layer
            IF_SETHIDE(false, comp(933, 223));  // rand_dungeon_rewards_v2:level
            IF_SETTEXT(`Level ${inttostring(varclient_8412, 10)}:`, comp(933, 223));  // rand_dungeon_rewards_v2:level
            IF_SETHIDE(false, comp(933, 100));  // rand_dungeon_rewards_v2:levelflashbutton_layer
            IF_SETSIZE((IF_GETWIDTH(comp(933, 101)) + 5), (IF_GETHEIGHT(comp(933, 101)) + 5), 0, 0, comp(933, 101));  // rand_dungeon_rewards_v2:levelflashbutton
            if ((varclient_1186 == (((int9 + int10) + int11) + int12))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 101)) + 30)), comp(933, 101));  // rand_dungeon_rewards_v2:levelflashbutton
        } else if ((varclient_1186 < (((((int9 + int10) + int11) + int12) + int13) + int14))) {
            int8 = SCALE(((varclient_1186 - ((((int9 + int10) + int11) + int12) + int13)) + 1), int14, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 224));  // rand_dungeon_rewards_v2:level_xp_val
            IF_SETTEXT(inttostring(SCALE(((varclient_8411 + 5) / 10), 100, int8), 10), comp(933, 224));  // rand_dungeon_rewards_v2:level_xp_val
            if ((SCALE(((varclient_8411 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_8411 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
            IF_SETHIDE(false, comp(933, 27));  // rand_dungeon_rewards_v2:level_to_total_arrow
            int8 = SCALE(((varclient_1186 - (((((int9 + int10) + int11) + int12) + int13) + int14)) + 1), int15, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 27));  // rand_dungeon_rewards_v2:level_to_total_arrow
        } else if ((varclient_1186 < (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16))) {
            int8 = SCALE(((varclient_1186 - ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15)) + 1), int16, 100);
            IF_SETHIDE(false, comp(933, 24));  // rand_dungeon_rewards_v2:total_base_layer
            IF_SETHIDE(false, comp(933, 235));  // rand_dungeon_rewards_v2:total_floor_base
            IF_SETHIDE(false, comp(933, 98));  // rand_dungeon_rewards_v2:totalflashbutton_layer
            IF_SETSIZE((IF_GETWIDTH(comp(933, 99)) + 5), (IF_GETHEIGHT(comp(933, 99)) + 5), 0, 0, comp(933, 99));  // rand_dungeon_rewards_v2:totalflashbutton
            if ((varclient_1186 == ((((((int9 + int10) + int11) + int12) + int13) + int14) + int15))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(933, 99)) + 30)), comp(933, 99));  // rand_dungeon_rewards_v2:totalflashbutton
        } else if ((varclient_1186 < ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17))) {
            int8 = SCALE(((varclient_1186 - (((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16)) + 1), int17, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 236));  // rand_dungeon_rewards_v2:total_base_xp_val
            IF_SETTEXT(inttostring(SCALE(((varclient_1239 + 5) / 10), 100, int8), 10), comp(933, 236));  // rand_dungeon_rewards_v2:total_base_xp_val
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
            IF_SETHIDE(true, comp(933, 19));  // rand_dungeon_rewards_v2:base_flash
            int8 = SCALE(((varclient_1186 - ((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17)) + 1), int18, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            IF_SETHIDE(false, comp(933, 96));  // rand_dungeon_rewards_v2:total_layer
            IF_SETTEXT(TOSTRING_LOCALISED(SCALE(((varclient_1239 + 5) / 10), 100, int8), 1), comp(933, 308));  // rand_dungeon_rewards_v2:xp_value
            if ((SCALE(((varclient_1239 + 5) / 10), 100, int8) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = SCALE(((varclient_1239 + 5) / 10), 100, int8);
            };
        } else if ((varclient_1186 < ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
            IF_SETTRANS(255, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
            IF_SETHIDE(false, comp(933, 86));  // rand_dungeon_rewards_v2:modifiers_title_layer
            IF_SETHIDE(false, comp(933, 39));  // rand_dungeon_rewards_v2:modifiers_layer
            IF_SETHIDE(false, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
            if ((varclient_1186 == (((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20))) {
            IF_SETHIDE(false, comp(933, 43));  // rand_dungeon_rewards_v2:dungeon_size_text
            if ((varclient_1186 == ((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
            IF_SETHIDE(false, comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
            IF_SETHIDE(false, comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
            IF_SETHIDE(false, comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
            IF_SETHIDE(false, comp(933, 47));  // rand_dungeon_rewards_v2:small_dungeon_text
            IF_SETHIDE(false, comp(933, 48));  // rand_dungeon_rewards_v2:medium_dungeon_text
            IF_SETHIDE(false, comp(933, 49));  // rand_dungeon_rewards_v2:large_dungeon_text
            IF_SETHIDE(false, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
            if ((varclient_1186 == (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20))) {
                SOUND_SYNTH(32188, 1, 0);
            };
            if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
                SOUND_SYNTH(27367, 1, 0);
            };
            [int3, int4, int5] = script3273();
            int8 = SCALE(((varclient_1186 - (((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20)) + 1), (int21 / 3), 100);
            if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + (int21 / 3)))) {
                if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + (int21 / 3)))) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                int0 = 10000;
                int1 = (10000 + 0);
                if ((int8 == 33)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
                if (((((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 1) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 1)) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
                if ((varclient_1186 == 475)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            } else if ((varclient_1186 < ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2)))) {
                if ((varclient_1188 > 1)) {
                    if (((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + ((int21 / 3) * 2))) && (varclient_1188 > 1))) {
                        SOUND_SYNTH(27367, 1, 0);
                    };
                    int0 = (10000 + 0);
                    int1 = (10000 + 25000);
                    if ((int8 == 33)) {
                        varclient_1270 = int0;
                        SOUND_SYNTH(32430, 1, 0);
                    };
                    IF_SETTRANS(MIN(200, (((int8 / 2) * 255) / 100)), comp(933, 44));  // rand_dungeon_rewards_v2:small_dungeon_graphic
                    IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
                    IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
                    if (((((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100) != varclient_1270)) {
                        SOUND_SYNTH(32188, 1, 0);
                        varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 2) + 50) / 100);
                    };
                    IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 2)) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
                    int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                    int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                    IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
                    if ((varclient_1186 == 525)) {
                        SOUND_SYNTH(32430, 1, 0);
                    };
                } else if ((varclient_1188 > 2)) {
                    int0 = (10000 + 25000);
                    int1 = (10000 + 50000);
                    if ((int8 == 66)) {
                        varclient_1270 = int0;
                        SOUND_SYNTH(32430, 1, 0);
                    };
                    IF_SETTRANS(MIN(200, (((int8 / 3) * 255) / 100)), comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
                    IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
                    IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
                    if (((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100) != varclient_1270)) {
                        SOUND_SYNTH(32188, 1, 0);
                        varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
                    };
                    IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 3)) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
                    int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                    int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                    IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
                    if ((varclient_1186 == 575)) {
                        SOUND_SYNTH(32430, 1, 0);
                    };
                };
            } else if ((varclient_1188 > 2)) {
                int0 = (10000 + 25000);
                int1 = (10000 + 50000);
                if ((int8 == 66)) {
                    varclient_1270 = int0;
                    SOUND_SYNTH(32430, 1, 0);
                };
                IF_SETTRANS(MIN(200, (((int8 / 3) * 255) / 100)), comp(933, 45));  // rand_dungeon_rewards_v2:medium_dungeon_graphic
                IF_SETTRANS(MIN(200, (255 - ((int8 * 255) / 100))), comp(933, 46));  // rand_dungeon_rewards_v2:large_dungeon_graphic
                IF_SETTEXT(`+${inttostring((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100), 10)}%`, comp(933, 51));  // rand_dungeon_rewards_v2:dungeon_size_val
                if (((((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
                };
                IF_SETTEXT(`${inttostring((((int0 + (SCALE(int8, 100, (int1 - int0)) / 3)) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
                int46 = (8192 + (((int1 - 10000) * 8192) / 60000));
                int46 = (8192 - (((int46 - 8192) * (83 - int8)) / 83));
                IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
                if ((varclient_1186 == 575)) {
                    SOUND_SYNTH(32430, 1, 0);
                };
            };
        } else if ((varclient_1186 < (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22))) {
            IF_SETHIDE(false, comp(933, 52));  // rand_dungeon_rewards_v2:bonus_rooms_text
            if ((varclient_1186 == ((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
            int8 = SCALE(((varclient_1186 - (((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22)) + 1), int23, 100);
            IF_SETHIDE(false, comp(933, 53));  // rand_dungeon_rewards_v2:bonus_rooms_bar_layer
            IF_SETHIDE(false, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
            IF_SETSIZE(SCALE(SCALE(varclient_1195, 10000, 16384), 100, int8), 16384, 2, 2, comp(933, 256));  // rand_dungeon_rewards_v2:bonus_rooms_bar
            int0 = (10000 + int38);
            int1 = ((10000 + int38) + int39);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 55));  // rand_dungeon_rewards_v2:bonus_rooms_val
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 + (((((int1 - int0) * 8192) / 60000) * int8) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24))) {
            IF_SETHIDE(false, comp(933, 56));  // rand_dungeon_rewards_v2:difficulty_text
            if ((varclient_1186 == ((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
            IF_SETHIDE(false, comp(933, 57));  // rand_dungeon_rewards_v2:difficulty_setting
            IF_SETHIDE(false, comp(933, 58));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow
            IF_SETHIDE(false, comp(933, 59));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow_1
            IF_SETHIDE(false, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
            int8 = SCALE(((varclient_1186 - (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24)) + 1), int25, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 58));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 59));  // rand_dungeon_rewards_v2:difficulty_to_percentage_arrow_1
            [int3, int4, int5] = script3273();
            IF_SETTEXT(`${inttostring(int3, 10)} : ${inttostring(int4, 10)}`, comp(933, 57));  // rand_dungeon_rewards_v2:difficulty_setting
            if ((varclient_1186 == (((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24))) {
                SOUND_SYNTH(32188, 1, 0);
            };
            int0 = ((10000 + int38) + int39);
            int1 = (((10000 + int38) + int39) + int40);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 60));  // rand_dungeon_rewards_v2:difficulty_val
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26))) {
            IF_SETHIDE(false, comp(933, 61));  // rand_dungeon_rewards_v2:mobs_killed_text
            if ((varclient_1186 == ((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
            IF_SETHIDE(false, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
            int8 = SCALE(((varclient_1186 - (((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26)) + 1), int27, 100);
            int0 = (((10000 + int38) + int39) + int40);
            int1 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int37 = SCALE(int8, 100, (int1 - int0));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 62));  // rand_dungeon_rewards_v2:mobs_killed_val
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28))) {
            IF_SETHIDE(false, comp(933, 63));  // rand_dungeon_rewards_v2:complexity_text
            if ((varclient_1186 == ((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
            IF_SETHIDE(false, comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
            IF_SETHIDE(false, comp(933, 65));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow
            IF_SETHIDE(false, comp(933, 66));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow_1
            IF_SETHIDE(false, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28)) + 1), int29, 100);
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 65));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow
            IF_SETTRANS((255 - ((int8 * 255) / 100)), comp(933, 66));  // rand_dungeon_rewards_v2:complexity_to_percentage_arrow_1
            if ((varclient_1320 == 2)) {
                IF_SETTEXT("High", comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
            } else {
                IF_SETTEXT("Low", comp(933, 64));  // rand_dungeon_rewards_v2:complexity_setting
            };
            if ((SCALE(varclient_1320, 100, int8) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = SCALE(varclient_1320, 100, int8);
            };
            int0 = ((((10000 + int38) + int39) + int40) + varclient_1236);
            int1 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int37 = SCALE(int8, 100, (int41 - 10000));
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 67));  // rand_dungeon_rewards_v2:complexity_val
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30))) {
            IF_SETHIDE(false, comp(933, 68));  // rand_dungeon_rewards_v2:floor_buff_text
            if ((varclient_1186 == ((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
            IF_SETHIDE(false, comp(933, 69));  // rand_dungeon_rewards_v2:floor_buff_val
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30)) + 1), int31, 100);
            int0 = SCALE(((((10000 + int38) + int39) + int40) + varclient_1236), 10000, int41);
            int1 = SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41);
            int37 = SCALE(int8, 100, int42);
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 69));  // rand_dungeon_rewards_v2:floor_buff_val
                if ((((int37 + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = ((int37 + 50) / 100);
                };
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 69));  // rand_dungeon_rewards_v2:floor_buff_val
            };
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((SCALE(int8, 100, (int1 - 10000)) / 3) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32))) {
            IF_SETHIDE(false, comp(933, 70));  // rand_dungeon_rewards_v2:deaths_text
            if ((varclient_1186 == ((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31))) {
                SOUND_SYNTH(27367, 1, 0);
            };
        } else if ((varclient_1186 < ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33))) {
            IF_SETHIDE(false, comp(933, 71));  // rand_dungeon_rewards_v2:deaths_container
            IF_SETHIDE(false, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)) + 1), int33, 100);
            if ((varbitplayer_2365 != 0)) {
                [int6, int7] = script3266((varclient_1186 - (((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32)));
                if ((int6 == 1)) {
                    switch (int7) {
                        case 0: {
                            IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            IF_SETGRAPHIC(2849 as graphic, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            break;
                        }
                        case 1: {
                            IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                            IF_SETGRAPHIC(2850 as graphic, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            IF_SETGRAPHIC(2849 as graphic, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                            break;
                        }
                        case 2: {
                            IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                            IF_SETHIDE(false, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                            IF_SETGRAPHIC(2850 as graphic, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                            IF_SETGRAPHIC(2849 as graphic, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                            break;
                        }
                        case 3: {
                            IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                            IF_SETHIDE(false, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                            IF_SETHIDE(false, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                            IF_SETGRAPHIC(2850 as graphic, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                            IF_SETGRAPHIC(2849 as graphic, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                            break;
                        }
                        case 4: {
                            IF_SETHIDE(false, comp(933, 81));  // rand_dungeon_rewards_v2:skull_1
                            IF_SETHIDE(false, comp(933, 82));  // rand_dungeon_rewards_v2:skull_2
                            IF_SETHIDE(false, comp(933, 83));  // rand_dungeon_rewards_v2:skull_3
                            IF_SETHIDE(false, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                            IF_SETGRAPHIC(2850 as graphic, comp(933, 84));  // rand_dungeon_rewards_v2:skull_4
                            break;
                        }
                    };
                };
            } else {
                IF_SETTEXT("No deaths.", comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41);
            int1 = SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44);
            int37 = SCALE(int8, 100, (int44 - 10000));
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((int1 >= int0)) {
                IF_SETTEXT(`+${inttostring(((int37 + 50) / 100), 10)}%`, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
            } else {
                IF_SETTEXT(`${inttostring(((int37 - 50) / 100), 10)}%`, comp(933, 85));  // rand_dungeon_rewards_v2:deaths_val
            };
            IF_SETTEXT(`${inttostring((((int0 + int37) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            if (((((int0 + int37) + 50) / 100) != varclient_1270)) {
                SOUND_SYNTH(32188, 1, 0);
                varclient_1270 = (((int0 + int37) + 50) / 100);
            };
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34))) {
            IF_SETHIDE(true, comp(933, 42));  // rand_dungeon_rewards_v2:modifiers_flash
            IF_SETHIDE(false, comp(933, 306));  // rand_dungeon_rewards_v2:total_flash
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33)) + 1), int34, 100);
            if ((int8 == 0)) {
                varclient_1270 = 0;
            };
            if ((varclient_1321 > 0)) {
                IF_SETHIDE(false, comp(933, 88));  // rand_dungeon_rewards_v2:xp_nerf_layer
                if ((int8 == 1)) {
                    SOUND_SYNTH(27367, 1, 0);
                };
                IF_SETTEXT(`Unbalanced party penalty: x${inttostring((((10000 - varclient_1321) + 50) / 100), 10)}%`, comp(933, 268));  // rand_dungeon_rewards_v2:xp_nerf_text
                if (((((10000 - varclient_1321) + 50) / 100) != varclient_1270)) {
                    SOUND_SYNTH(32188, 1, 0);
                    varclient_1270 = (((10000 - varclient_1321) + 50) / 100);
                };
            } else {
                varclient_1186 = (varclient_1186 + 2);
            };
            int0 = SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44);
            int1 = SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321));
            IF_SETTEXT(`${inttostring((((int0 + SCALE(int8, 100, (int1 - int0))) + 50) / 100), 10)}%`, comp(933, 95));  // rand_dungeon_rewards_v2:total_modifier_val
            int46 = (8192 + (((int0 - 10000) * 8192) / 60000));
            int46 = (int46 - (((((int1 - int0) * 8192) * (83 - int8)) / 60000) / 83));
            IF_SETSIZE(int46, 16384, 2, 2, comp(933, 276));  // rand_dungeon_rewards_v2:total_modifier_bar
        } else if ((varclient_1186 < ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35))) {
            script949(0);
            IF_SETTEXT(TOSTRING_LOCALISED(varclient_1239, 1), comp(933, 308));  // rand_dungeon_rewards_v2:xp_value
            int8 = SCALE(((varclient_1186 - (((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34)) + 1), int35, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if (((MODULO(int8, 5) == 0) && (IF_GETY(comp(933, 88)) != 138))) {  // rand_dungeon_rewards_v2:xp_nerf_layer
                IF_SETPOSITION(IF_GETX(comp(933, 88)), (IF_GETY(comp(933, 88)) + 1), 0, 0, comp(933, 88));  // rand_dungeon_rewards_v2:xp_nerf_layer
            };
            IF_SETSIZE(183, SCALE(80, 100, int8), 0, 0, comp(933, 294));  // rand_dungeon_rewards_v2:total_modifier_drainer_effect
            IF_SETTEXT(`${TOSTRING_LOCALISED((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10), 1)}%`, comp(933, 308));  // rand_dungeon_rewards_v2:xp_value
            if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10) != varclient_1270)) {
                SOUND_SYNTH(31378, 1, 0);
                varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 10);
            };
        } else if ((varclient_1186 < (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36))) {
            int8 = SCALE(((varclient_1186 - ((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35)) + 1), int36, 100);
            int0 = varclient_1239;
            int1 = SCALE(SCALE(SCALE(SCALE((((((10000 + int38) + int39) + int40) + varclient_1236) + int42), 10000, int41), 10000, int44), 10000, (10000 - varclient_1321)), 10000, varclient_1239);
            int45 = ((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) * 2);
            if ((varclient_6516 == true)) {
                if (((2147483647 - int45) >= 0)) {
                    int45 = (int45 * 2);
                } else {
                    int45 = 2147483647;
                };
            };
            if ((int8 == 0)) {
                varclient_1270 = int0;
            };
            if ((varplayer_1097 < 2000000000)) {
                IF_SETTEXT(`${TOSTRING_LOCALISED(int45, 1)}%`, comp(933, 310));  // rand_dungeon_rewards_v2:tokens_count
                if (((((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100) != varclient_1270)) {
                    SOUND_SYNTH(26960, 1, 0);
                    varclient_1270 = (((int0 + SCALE(int8, 100, (int1 - int0))) + 5) / 100);
                };
            } else {
                IF_SETTEXT("Max tokens", comp(933, 310));  // rand_dungeon_rewards_v2:tokens_count
            };
        };
        varclient_1186 = MIN((script3265() + (((((((((((((((((((((((((((int9 + int10) + int11) + int12) + int13) + int14) + int15) + int16) + int17) + int18) + int19) + int20) + int21) + int22) + int23) + int24) + int25) + int26) + int27) + int28) + int29) + int30) + int31) + int32) + int33) + int34) + int35) + int36)), (varclient_1186 + 1));
    };
    script3268();
    return;
}