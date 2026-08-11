//
function script4856(): void {
    if ((CLANPROFILE_FIND() == 1)) {
        if ((varbitclan_6507 < 7)) {
            IF_SETHIDE(true, comp(1261, 64));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_9
            IF_SETHIDE(true, comp(1261, 69));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_10
            IF_SETHIDE(true, comp(1261, 74));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_11
            IF_SETHIDE(true, comp(1261, 79));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_12
        };
        if ((varbitclan_6507 < 5)) {
            IF_SETHIDE(true, comp(1261, 59));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_8
            IF_SETHIDE(true, comp(1261, 54));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_7
            IF_SETHIDE(true, comp(1261, 49));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_6
            IF_SETHIDE(true, comp(1261, 44));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_5
        };
        if ((varbitclan_6507 < 3)) {
            IF_SETHIDE(true, comp(1261, 39));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_4
            IF_SETHIDE(true, comp(1261, 34));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_3
        };
    };
    return;
}