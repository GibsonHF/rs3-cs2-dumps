//
function script8467(int0: number, int1: number): void {
    if ((int1 < 0)) {
        var int1 = 0;
    };
    if ((int0 == 102170649)) {
        if ((varbitplayer_27696 == 1)) {
            IF_SETHIDE(false, comp(1559, 129));  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_disabled_layer
            if ((int1 == 2)) {
                int1 = 0;
            };
        } else {
            IF_SETHIDE(true, comp(1559, 129));  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_disabled_layer
        };
        varclient_4664 = int1;
        switch (int1) {
            case 0: {
                IF_SETHIDE(false, comp(1559, 86));  // toplevel_v2_inspect_worn_stats:main_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1559, 94));  // toplevel_v2_inspect_worn_stats:off_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1559, 127));  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_selected_layer
                IF_SETHIDE(false, comp(1559, 34));  // toplevel_v2_inspect_worn_stats:main_weapon_stats
                IF_SETHIDE(true, comp(1559, 56));  // toplevel_v2_inspect_worn_stats:off_weapon_stats
                IF_SETHIDE(true, comp(1559, 132));  // toplevel_v2_inspect_worn_stats:abilities_weapon_stats
                break;
            }
            case 1: {
                IF_SETHIDE(true, comp(1559, 86));  // toplevel_v2_inspect_worn_stats:main_weapon_button_selected_layer
                IF_SETHIDE(false, comp(1559, 94));  // toplevel_v2_inspect_worn_stats:off_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1559, 127));  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1559, 34));  // toplevel_v2_inspect_worn_stats:main_weapon_stats
                IF_SETHIDE(false, comp(1559, 56));  // toplevel_v2_inspect_worn_stats:off_weapon_stats
                IF_SETHIDE(true, comp(1559, 132));  // toplevel_v2_inspect_worn_stats:abilities_weapon_stats
                break;
            }
            case 2: {
                IF_SETHIDE(true, comp(1559, 86));  // toplevel_v2_inspect_worn_stats:main_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1559, 94));  // toplevel_v2_inspect_worn_stats:off_weapon_button_selected_layer
                IF_SETHIDE(false, comp(1559, 127));  // toplevel_v2_inspect_worn_stats:abilities_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1559, 34));  // toplevel_v2_inspect_worn_stats:main_weapon_stats
                IF_SETHIDE(true, comp(1559, 56));  // toplevel_v2_inspect_worn_stats:off_weapon_stats
                IF_SETHIDE(false, comp(1559, 132));  // toplevel_v2_inspect_worn_stats:abilities_weapon_stats
                break;
            }
        };
    } else {
        if ((varbitplayer_27168 == 1)) {
            IF_SETHIDE(false, comp(1463, 204));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_button_disabled_layer
            if ((int1 == 2)) {
                int1 = 0;
            };
        } else {
            IF_SETHIDE(true, comp(1463, 204));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_button_disabled_layer
        };
        varclient_2762 = int1;
        switch (int1) {
            case 0: {
                IF_SETHIDE(false, comp(1463, 166));  // toplevel_v2_parent_suboverlay_worn_stats:main_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1463, 174));  // toplevel_v2_parent_suboverlay_worn_stats:off_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1463, 202));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_button_selected_layer
                IF_SETHIDE(false, comp(1463, 39));  // toplevel_v2_parent_suboverlay_worn_stats:main_weapon_stats
                IF_SETHIDE(true, comp(1463, 61));  // toplevel_v2_parent_suboverlay_worn_stats:off_weapon_stats
                IF_SETHIDE(true, comp(1463, 207));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_stats
                break;
            }
            case 1: {
                IF_SETHIDE(true, comp(1463, 166));  // toplevel_v2_parent_suboverlay_worn_stats:main_weapon_button_selected_layer
                IF_SETHIDE(false, comp(1463, 174));  // toplevel_v2_parent_suboverlay_worn_stats:off_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1463, 202));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1463, 39));  // toplevel_v2_parent_suboverlay_worn_stats:main_weapon_stats
                IF_SETHIDE(false, comp(1463, 61));  // toplevel_v2_parent_suboverlay_worn_stats:off_weapon_stats
                IF_SETHIDE(true, comp(1463, 207));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_stats
                break;
            }
            case 2: {
                IF_SETHIDE(true, comp(1463, 166));  // toplevel_v2_parent_suboverlay_worn_stats:main_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1463, 174));  // toplevel_v2_parent_suboverlay_worn_stats:off_weapon_button_selected_layer
                IF_SETHIDE(false, comp(1463, 202));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_button_selected_layer
                IF_SETHIDE(true, comp(1463, 39));  // toplevel_v2_parent_suboverlay_worn_stats:main_weapon_stats
                IF_SETHIDE(true, comp(1463, 61));  // toplevel_v2_parent_suboverlay_worn_stats:off_weapon_stats
                IF_SETHIDE(false, comp(1463, 207));  // toplevel_v2_parent_suboverlay_worn_stats:abilities_weapon_stats
                break;
            }
        };
    };
    return;
}