//
function script6747(int0: number): void {
    IF_SETHIDE(true, comp(1344, 37));  // minigames_main:time_in_spotlight
    IF_SETONMOUSEREPEAT(callback(), comp(1344, 36));  // minigames_main:info_icon_l
    IF_SETONMOUSEREPEAT(callback(), comp(1344, 37));  // minigames_main:time_in_spotlight
    var string0 = "";
    var int1 = struct_getparam(enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5420), 1268);
    var int2 = struct_getparam(enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5421), 1268);
    var int3 = struct_getparam(enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5422), 1268);
    var int4 = struct_getparam(enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5423), 1268);
    var int5 = 0;
    var int6 = struct_getparam(int0, 1268);
    if ((int1 == int6)) {
        IF_SETHIDE(false, comp(1344, 37));  // minigames_main:time_in_spotlight
        if ((varplayer_5419 != 1)) {
            IF_SETTEXT(`${inttostring(varplayer_5419, 10)} days left`, comp(1344, 37));  // minigames_main:time_in_spotlight
        } else {
            IF_SETTEXT(`${inttostring(varplayer_5419, 10)} day left`, comp(1344, 37));  // minigames_main:time_in_spotlight
        };
        string0 = "This minigame is currently in the Spotlight and will give thaler at 500% of the normal rate.<br>Find Stanley Limelight near the minigame to learn about thaler.";
        int5 = 1;
    } else if ((int2 == int6)) {
        if ((varplayer_5419 != 1)) {
            string0 = `This minigame will enter the Spotlight in ${inttostring(varplayer_5419, 10)} days.`;
        } else {
            string0 = `This minigame will enter the Spotlight in ${inttostring(varplayer_5419, 10)} day.`;
        };
        int5 = 1;
    } else if ((int3 == int6)) {
        string0 = `This minigame will enter the Spotlight in ${inttostring((varplayer_5419 + 3), 10)} days.`;
        int5 = 1;
    } else if ((int4 == int6)) {
        string0 = `This minigame will enter the Spotlight in ${inttostring((varplayer_5419 + (3 * 2)), 10)} days.`;
        int5 = 1;
    };
    if ((int5 == 1)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 88080420, -1), comp(1344, 36));  // minigames_main:info_icon_l
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 88080420, -1), comp(1344, 37));  // minigames_main:time_in_spotlight
    };
    IF_SETHIDE(false, comp(1344, 38));  // minigames_main:right_scrolling_layer
    IF_SETHIDE(true, comp(1344, 99));  // minigames_main:default_text
    IF_SETHIDE(false, comp(1344, 33));  // minigames_main:name_wrapper
    IF_SETHIDE(false, comp(1344, 34));  // minigames_main:fav_icon
    if ((script9178(int6) == 1)) {
        IF_SETGRAPHIC(21106 as graphic, comp(1344, 34));  // minigames_main:fav_icon
        IF_SETOP(1, "Remove Favourite", comp(1344, 34));  // minigames_main:fav_icon
    } else {
        IF_SETGRAPHIC(21105 as graphic, comp(1344, 34));  // minigames_main:fav_icon
        IF_SETOP(1, "Add Favourite", comp(1344, 34));  // minigames_main:fav_icon
    };
    IF_SETTEXT(struct_getparam(int0, 1266), comp(1344, 35));  // minigames_main:job_name
    if ((struct_getparam(int0, 3629) == 0)) {
        if ((int1 == int6)) {
            IF_SETGRAPHIC(7918 as graphic, comp(1344, 36));  // minigames_main:info_icon_l
        } else if ((int2 == int6)) {
            IF_SETGRAPHIC(7919 as graphic, comp(1344, 36));  // minigames_main:info_icon_l
        } else if ((int3 == int6)) {
            IF_SETGRAPHIC(16279 as graphic, comp(1344, 36));  // minigames_main:info_icon_l
        } else if ((int4 == int6)) {
            IF_SETGRAPHIC(16280 as graphic, comp(1344, 36));  // minigames_main:info_icon_l
        } else {
            IF_SETGRAPHIC(21099 as graphic, comp(1344, 36));  // minigames_main:info_icon_l
        };
    } else {
        IF_SETGRAPHIC(21100 as graphic, comp(1344, 36));  // minigames_main:info_icon_l
    };
    if ((strcmp(struct_getparam(int0, 3631), "") != 0)) {
        IF_SETTEXT(struct_getparam(int0, 3631), 88080477);
    } else {
        IF_SETTEXT(struct_getparam(int0, 1273), 88080477);
    };
    if ((strcmp(struct_getparam(int0, 1292), "") != 0)) {
        IF_SETTEXT(struct_getparam(int0, 1292), 88080481);
    } else {
        IF_SETTEXT("There are no rewards for this minigame.", comp(1344, 97));  // minigames_main:reward_text
    };
    script9181();
    var int7 = 80;
    if ((MAP_MEMBERS() == 0)) {
        if ((struct_getparam(int0, 1290) == 2)) {
            IF_SETHIDE(true, comp(1344, 52));  // minigames_main:accept_job_button
            IF_SETHIDE(true, comp(1344, 69));  // minigames_main:take_me_there_button
            IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
            IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
            IF_SETTEXT("Options", comp(1344, 68));  // minigames_main:options_label
            if ((PLAYERMEMBER() == 1)) {
                if ((int6 == 3004)) {
                    IF_SETTEXT("Crashed stars can sometimes be found around Gielinor.", comp(1344, 62));  // minigames_main:f2p_options
                } else {
                    IF_SETTEXT("This activity is a members only feature. Please log into a members' world to play.", comp(1344, 62));  // minigames_main:f2p_options
                };
            } else {
                if ((int6 == 3004)) {
                    IF_SETTEXT("Crashed stars can sometimes be found around Gielinor.", comp(1344, 62));  // minigames_main:f2p_options
                } else {
                    IF_SETTEXT("This activity is a members only feature.", comp(1344, 62));  // minigames_main:f2p_options
                };
                IF_SETHIDE(false, comp(1344, 77));  // minigames_main:subscribe_layer
            };
        } else if ((script3224(int6) == 0)) {
            IF_SETTEXT("Requirements", comp(1344, 68));  // minigames_main:options_label
            int7 = script9182(int0);
            IF_SETHIDE(true, comp(1344, 52));  // minigames_main:accept_job_button
            IF_SETHIDE(true, comp(1344, 69));  // minigames_main:take_me_there_button
            IF_SETTEXT("", comp(1344, 62));  // minigames_main:f2p_options
            IF_SETHIDE(true, comp(1344, 77));  // minigames_main:subscribe_layer
            IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
            IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
        } else {
            IF_SETTEXT("Options", comp(1344, 68));  // minigames_main:options_label
            IF_SETHIDE(false, comp(1344, 52));  // minigames_main:accept_job_button
            if ((script8229(6, enum_getreverseindex(73, 0, 6452 as cs2enum, int0, 0)) > -1)) {
                IF_SETOP(1, "Untrack", comp(1344, 56));  // minigames_main:accept_job_button_layer
                IF_SETTEXT("Untrack", comp(1344, 59));  // minigames_main:accept_job_button_label
            } else if ((script8230() == 0)) {
                IF_SETHIDE(true, comp(1344, 52));  // minigames_main:accept_job_button
            } else {
                IF_SETOP(1, "Track", comp(1344, 56));  // minigames_main:accept_job_button_layer
                IF_SETTEXT("Track", comp(1344, 59));  // minigames_main:accept_job_button_label
            };
            if ((struct_getparam(int0, 2700) == -1)) {
                if ((struct_getparam(int0, 2701) == -1)) {
                    IF_SETHIDE(true, comp(1344, 69));  // minigames_main:take_me_there_button
                } else {
                    IF_SETHIDE(false, comp(1344, 69));  // minigames_main:take_me_there_button
                    if ((varbitplayer_20797 == 1)) {
                        if ((struct_getparam(int0, 2701) > 0)) {
                            IF_SETHIDE(false, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                            IF_SETHIDE(true, comp(1344, 88));  // minigames_main:checkbox_deselected_layer_1
                            IF_SETHIDE(false, comp(1344, 87));  // minigames_main:checkbox_selected_layer_1
                            IF_SETHIDE(false, comp(1344, 89));  // minigames_main:teleport_message_text_2
                        } else {
                            IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                            IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                        };
                    } else {
                        IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                        IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                    };
                };
            } else {
                IF_SETHIDE(false, comp(1344, 69));  // minigames_main:take_me_there_button
                if ((varbitplayer_20797 == 1)) {
                    if ((struct_getparam(int0, 2701) > 0)) {
                        IF_SETHIDE(false, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                        IF_SETHIDE(true, comp(1344, 88));  // minigames_main:checkbox_deselected_layer_1
                        IF_SETHIDE(false, comp(1344, 87));  // minigames_main:checkbox_selected_layer_1
                        IF_SETHIDE(false, comp(1344, 89));  // minigames_main:teleport_message_text_2
                    } else {
                        IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                        IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                    };
                } else {
                    IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                    IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                };
            };
            IF_SETTEXT("", comp(1344, 62));  // minigames_main:f2p_options
            IF_SETHIDE(true, comp(1344, 77));  // minigames_main:subscribe_layer
        };
    } else if ((script3224(int6) == 0)) {
        IF_SETTEXT("Requirements", comp(1344, 68));  // minigames_main:options_label
        int7 = script9182(int0);
        IF_SETHIDE(true, comp(1344, 52));  // minigames_main:accept_job_button
        IF_SETHIDE(true, comp(1344, 69));  // minigames_main:take_me_there_button
        IF_SETTEXT("", comp(1344, 62));  // minigames_main:f2p_options
        IF_SETHIDE(true, comp(1344, 77));  // minigames_main:subscribe_layer
        IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
        IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
    } else {
        IF_SETTEXT("Options", comp(1344, 68));  // minigames_main:options_label
        IF_SETHIDE(false, comp(1344, 52));  // minigames_main:accept_job_button
        if ((script8229(6, enum_getreverseindex(73, 0, 6452 as cs2enum, int0, 0)) > -1)) {
            IF_SETOP(1, "Untrack", comp(1344, 56));  // minigames_main:accept_job_button_layer
            IF_SETTEXT("Untrack", comp(1344, 59));  // minigames_main:accept_job_button_label
        } else if ((script8230() == 0)) {
            IF_SETHIDE(true, comp(1344, 52));  // minigames_main:accept_job_button
        } else {
            IF_SETOP(1, "Track", comp(1344, 56));  // minigames_main:accept_job_button_layer
            IF_SETTEXT("Track", comp(1344, 59));  // minigames_main:accept_job_button_label
        };
        if ((struct_getparam(int0, 2700) == -1)) {
            if ((struct_getparam(int0, 2701) == -1)) {
                IF_SETHIDE(true, comp(1344, 69));  // minigames_main:take_me_there_button
            } else {
                IF_SETHIDE(false, comp(1344, 69));  // minigames_main:take_me_there_button
                if ((varbitplayer_20797 == 1)) {
                    if ((struct_getparam(int0, 2701) > 0)) {
                        IF_SETHIDE(false, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                        IF_SETHIDE(true, comp(1344, 88));  // minigames_main:checkbox_deselected_layer_1
                        IF_SETHIDE(false, comp(1344, 87));  // minigames_main:checkbox_selected_layer_1
                        IF_SETHIDE(false, comp(1344, 89));  // minigames_main:teleport_message_text_2
                    } else {
                        IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                        IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                    };
                } else {
                    IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                    IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                };
            };
        } else {
            IF_SETHIDE(false, comp(1344, 69));  // minigames_main:take_me_there_button
            if ((varbitplayer_20797 == 1)) {
                if ((struct_getparam(int0, 2701) > 0)) {
                    IF_SETHIDE(false, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                    IF_SETHIDE(true, comp(1344, 88));  // minigames_main:checkbox_deselected_layer_1
                    IF_SETHIDE(false, comp(1344, 87));  // minigames_main:checkbox_selected_layer_1
                    IF_SETHIDE(false, comp(1344, 89));  // minigames_main:teleport_message_text_2
                } else {
                    IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                    IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
                };
            } else {
                IF_SETHIDE(true, comp(1344, 86));  // minigames_main:switch_world_checkbox_main
                IF_SETHIDE(true, comp(1344, 89));  // minigames_main:teleport_message_text_2
            };
        };
        IF_SETTEXT("", comp(1344, 62));  // minigames_main:f2p_options
        IF_SETHIDE(true, comp(1344, 77));  // minigames_main:subscribe_layer
    };
    var int8 = script20477(88080477);
    var int9 = (32 + int8);
    IF_SETSIZE(2, int9, 1, 0, comp(1344, 90));  // minigames_main:objectives_wrapper
    IF_SETPOSITION(0, int9, 1, 0, comp(1344, 95));  // minigames_main:rewards_wrapper
    int8 = script20477(88080481);
    int9 = ((int9 + int8) + 32);
    IF_SETSIZE(0, (int8 + 32), 1, 0, comp(1344, 95));  // minigames_main:rewards_wrapper
    IF_SETPOSITION(0, int9, 1, 0, comp(1344, 51));  // minigames_main:controls_layer
    int9 = ((int9 + int7) + 5);
    IF_SETSIZE(0, (int7 + 5), 1, 0, comp(1344, 51));  // minigames_main:controls_layer
    IF_SETPOSITION(0, int9, 1, 0, comp(1344, 39));  // minigames_main:hints_wrapper
    var int10 = 0;
    var int11 = 4091;
    var string1 = script9133(int6);
    if ((strcmp(string1, "") != 0)) {
        int10 = script9180(1, int10, string1, 88080427, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 43));  // minigames_main:job_step_1
    };
    var string2 = struct_getparam(int0, 1274);
    if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (script6431() == 1))) {
        string2 = struct_getparam(int0, 8082);
    };
    if ((strcmp(string2, "") != 0)) {
        int10 = script9180(1, int10, string2, 88080428, 88080426);
    } else {
        IF_SETTEXT("There are no hints available for this task. Good luck!", comp(1344, 44));  // minigames_main:job_step_2
        IF_SETHIDE(false, comp(1344, 44));  // minigames_main:job_step_2
        IF_SETTEXTFONT(26 as fontmetrics, comp(1344, 44));  // minigames_main:job_step_2
        IF_SETTEXTALIGN(0, 1, 12, comp(1344, 44));  // minigames_main:job_step_2
        IF_SETPOSITION(0, int10, 0, 0, comp(1344, 44));  // minigames_main:job_step_2
    };
    if ((strcmp(struct_getparam(int0, 1275), "") != 0)) {
        int10 = script9180(2, int10, struct_getparam(int0, 1275), 88080429, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 45));  // minigames_main:job_step_3
    };
    if ((strcmp(struct_getparam(int0, 1276), "") != 0)) {
        int10 = script9180(3, int10, struct_getparam(int0, 1276), 88080430, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 46));  // minigames_main:job_step_4
    };
    if ((strcmp(struct_getparam(int0, 1277), "") != 0)) {
        int10 = script9180(4, int10, struct_getparam(int0, 1277), 88080431, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 47));  // minigames_main:job_step_5
    };
    if ((strcmp(struct_getparam(int0, 1278), "") != 0)) {
        int10 = script9180(5, int10, struct_getparam(int0, 1278), 88080432, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 48));  // minigames_main:job_step_6
    };
    if ((strcmp(struct_getparam(int0, 1279), "") != 0)) {
        int10 = script9180(6, int10, struct_getparam(int0, 1279), 88080433, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 49));  // minigames_main:job_step_7
    };
    if ((strcmp(struct_getparam(int0, 1280), "") != 0)) {
        int10 = script9180(7, int10, struct_getparam(int0, 1280), 88080434, 88080426);
    } else {
        IF_SETTEXT("", comp(1344, 50));  // minigames_main:job_step_8
    };
    IF_SETSIZE(0, (int10 + 30), 1, 0, comp(1344, 39));  // minigames_main:hints_wrapper
    CC_DELETEALL(comp(1344, 100));  // minigames_main:right_scroll
    IF_SETSCROLLSIZE(0, ((int9 + int10) + 30), comp(1344, 38));  // minigames_main:right_scrolling_layer
    IF_SETSCROLLPOS(0, 0, comp(1344, 38));  // minigames_main:right_scrolling_layer
    if ((IF_GETSCROLLHEIGHT(comp(1344, 38)) > IF_GETHEIGHT(comp(1344, 38)))) {  // minigames_main:right_scrolling_layer
        script7791(88080484, 88080422);
    };
    return;
}