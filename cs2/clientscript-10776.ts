//
function script10776(int0: number): void {
    if (((int0 < 0) || ((4 * 2) < int0))) {
        var int0 = 0;
    };
    IF_SETHIDE(true, comp(1560, 30));  // player_inspect:left_ragdoll_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 39));  // player_inspect:left_combat_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 48));  // player_inspect:left_stats_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 57));  // player_inspect:left_social_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 111));  // player_inspect:left_cheevo_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 84));  // player_inspect:right_combat_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 75));  // player_inspect:right_stats_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 66));  // player_inspect:right_social_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 120));  // player_inspect:right_cheevo_tab_selected_layer
    IF_SETHIDE(true, comp(1560, 17));  // player_inspect:ragdoll_layer
    IF_SETHIDE(true, comp(1560, 18));  // player_inspect:combat_layer
    IF_SETHIDE(true, comp(1560, 19));  // player_inspect:stats_layer
    IF_SETHIDE(true, comp(1560, 20));  // player_inspect:social_layer
    IF_SETHIDE(true, comp(1560, 22));  // player_inspect:cheevo_layer
    if ((varclient_4665 == 1)) {
        IF_SETHIDE(false, comp(1560, 32));  // player_inspect:left_ragdoll_tab_disabled_layer
        IF_SETHIDE(false, comp(1560, 17));  // player_inspect:ragdoll_layer
        if ((int0 > 4)) {
            varclient_4666 = int0;
        } else if ((int0 != 0)) {
            int0 = (4 + int0);
            varclient_4666 = int0;
        } else if ((varclient_4666 <= 0)) {
            int0 = (4 + 1);
            varclient_4666 = int0;
        } else {
            int0 = ((MODULO((varclient_4666 - 1), 4) + 4) + 1);
            varclient_4666 = int0;
        };
        if ((varplayer_4985 == 1)) {
            IF_SETHIDE(false, comp(1560, 86));  // player_inspect:right_combat_tab_disabled_layer
            IF_SETHIDE(false, comp(1560, 77));  // player_inspect:right_stats_tab_disabled_layer
            IF_SETHIDE(false, comp(1560, 122));  // player_inspect:right_cheevo_tab_disabled_layer
            int0 = 5;
        } else {
            IF_SETHIDE(true, comp(1560, 86));  // player_inspect:right_combat_tab_disabled_layer
            IF_SETHIDE(true, comp(1560, 77));  // player_inspect:right_stats_tab_disabled_layer
            IF_SETHIDE(true, comp(1560, 122));  // player_inspect:right_cheevo_tab_disabled_layer
        };
    } else {
        IF_SETHIDE(true, comp(1560, 32));  // player_inspect:left_ragdoll_tab_disabled_layer
        if ((int0 > 4)) {
            int0 = 0;
        } else {
            varclient_4666 = int0;
        };
        if ((varplayer_4985 == 1)) {
            IF_SETHIDE(false, comp(1560, 41));  // player_inspect:left_combat_tab_disabled_layer
            IF_SETHIDE(false, comp(1560, 50));  // player_inspect:left_stats_tab_disabled_layer
            IF_SETHIDE(false, comp(1560, 113));  // player_inspect:left_cheevo_tab_disabled_layer
            if ((int0 > 1)) {
                int0 = 0;
            };
        } else {
            IF_SETHIDE(true, comp(1560, 41));  // player_inspect:left_combat_tab_disabled_layer
            IF_SETHIDE(true, comp(1560, 50));  // player_inspect:left_stats_tab_disabled_layer
            IF_SETHIDE(true, comp(1560, 113));  // player_inspect:left_cheevo_tab_disabled_layer
        };
    };
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1560, 30));  // player_inspect:left_ragdoll_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 17));  // player_inspect:ragdoll_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1560, 39));  // player_inspect:left_combat_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 18));  // player_inspect:combat_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1560, 48));  // player_inspect:left_stats_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 19));  // player_inspect:stats_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1560, 57));  // player_inspect:left_social_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 20));  // player_inspect:social_layer
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1560, 111));  // player_inspect:left_cheevo_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 22));  // player_inspect:cheevo_layer
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(1560, 84));  // player_inspect:right_combat_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 18));  // player_inspect:combat_layer
            break;
        }
        case 7: {
            IF_SETHIDE(false, comp(1560, 75));  // player_inspect:right_stats_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 19));  // player_inspect:stats_layer
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1560, 66));  // player_inspect:right_social_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 20));  // player_inspect:social_layer
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1560, 120));  // player_inspect:right_cheevo_tab_selected_layer
            IF_SETHIDE(false, comp(1560, 22));  // player_inspect:cheevo_layer
            break;
        }
    };
    return;
}