//
function script14729(int0: number): void {
    switch (int0) {
        case 18: {
            if ((script9571(691) == 1)) {
                if ((IF_GETHIDE(comp(691, 73)) == false)) {  // arch_relic_management:popup_window
                    IF_SETHIDE(true, comp(691, 73));  // arch_relic_management:popup_window
                    return;
                };
            } else if ((script9571(693) == 1)) {
                if ((IF_GETHIDE(comp(693, 117)) == false)) {  // arch_research_management:popup_build_layer
                    IF_TRIGGEROP(comp(693, 118), 0, 1);  // arch_research_management:popup_control_layer
                    return;
                };
                if ((IF_GETHIDE(comp(693, 30)) == false)) {  // arch_research_management:panel_background_layer
                    script14890();
                    return;
                };
            };
            if (((script4550(168) == 1) && (IF_GETHIDE(comp(168, 37)) == false))) {  // reward_chest:abandon_confirm
                IF_TRIGGEROP(comp(848, 32), -1, 1);  // modal_confirm_overlay:mainmodal_window_close_button
                return;
            };
            if ((script9571(422) == 1)) {
                IF_TRIGGEROP(comp(422, 41), -1, 1);  // slayer_dungeon:window_close_button
                return;
            };
            if (((script9571(1222) == 1) && (IF_GETHIDE(comp(1222, 5)) == false))) {  // skill_tree:popup_window
                script17753();
                return;
            };
            if ((script9571(1318) == 1)) {
                IF_TRIGGEROP(comp(1318, 1), -1, 1);  // xmas23:mainmodal_window_close_listener
            };
            if ((script9572(1485) == 1)) {
                IF_TRIGGEROP(comp(1485, 75), -1, 1);  // marketplace_bonus_xp_redeem:preview_window_close_button
            };
            script675();
            break;
        }
        case 91:
        case 93: {
            script14797();
            break;
        }
        case 99: {
            script17815();
            break;
        }
        case 82: {
            if ((IF_GETHIDE(comp(105, 130)) == false)) {  // stockmarket:choosesell5_button_over_layer ?
                IF_TRIGGEROP(comp(105, 131), -1, 1);  // stockmarket:choosesell5_button_hit_layer ?
                return;
            };
            break;
        }
        case 95: {
            if ((IF_GETHIDE(comp(840, 7)) == false)) {  // free_trial_prompt:policy_popup
                script3196();
            } else if ((IF_GETHIDE(comp(840, 5)) == false)) {  // free_trial_prompt:close_confirm_popup
                IF_SETHIDE(true, comp(840, 5));  // free_trial_prompt:close_confirm_popup
            } else {
                IF_SETHIDE(false, comp(840, 5));  // free_trial_prompt:close_confirm_popup
            };
            break;
        }
        case 96: {
            if ((IF_GETHIDE(comp(860, 4)) == false)) {  // tut_options:skip_confirm_layer
                IF_SETHIDE(true, comp(860, 4));  // tut_options:skip_confirm_layer
            } else {
                IF_TRIGGEROP(comp(860, 51), -1, 1);  // tut_options:close_layer
            };
            break;
        }
        case 1: {
            script3555();
            break;
        }
    };
    return;
}