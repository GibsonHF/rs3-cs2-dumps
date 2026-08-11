//
function script7693(int0: number, int1: number): void {
    varclient_2761 = int1;
    switch (int1) {
        case 0: {
            IF_SETHIDE(false, comp(1463, 93));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_button_on
            IF_SETHIDE(true, comp(1463, 96));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_button_off
            IF_SETHIDE(true, comp(1463, 114));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_button_on
            IF_SETHIDE(false, comp(1463, 117));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_button_off
            IF_SETHIDE(true, comp(1463, 138));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_button_on
            IF_SETHIDE(false, comp(1463, 141));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_button_off
            IF_SETHIDE(false, comp(1463, 99));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_stats
            IF_SETHIDE(true, comp(1463, 123));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_stats
            IF_SETHIDE(true, comp(1463, 144));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_stats
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(1463, 93));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_button_on
            IF_SETHIDE(false, comp(1463, 96));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_button_off
            IF_SETHIDE(false, comp(1463, 114));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_button_on
            IF_SETHIDE(true, comp(1463, 117));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_button_off
            IF_SETHIDE(true, comp(1463, 138));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_button_on
            IF_SETHIDE(false, comp(1463, 141));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_button_off
            IF_SETHIDE(true, comp(1463, 99));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_stats
            IF_SETHIDE(false, comp(1463, 123));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_stats
            IF_SETHIDE(true, comp(1463, 144));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_stats
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1463, 93));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_button_on
            IF_SETHIDE(false, comp(1463, 96));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_button_off
            IF_SETHIDE(true, comp(1463, 114));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_button_on
            IF_SETHIDE(false, comp(1463, 117));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_button_off
            IF_SETHIDE(false, comp(1463, 138));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_button_on
            IF_SETHIDE(true, comp(1463, 141));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_button_off
            IF_SETHIDE(true, comp(1463, 99));  // toplevel_v2_parent_suboverlay_worn_stats:main_vs_stats
            IF_SETHIDE(true, comp(1463, 123));  // toplevel_v2_parent_suboverlay_worn_stats:off_vs_stats
            IF_SETHIDE(false, comp(1463, 144));  // toplevel_v2_parent_suboverlay_worn_stats:armour_vs_stats
            break;
        }
    };
    script8454(int0);
    return;
}