//
function script4858(): void {
    var int0 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        IF_SETHIDE(true, comp(1261, 84));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_walls
        IF_SETHIDE(true, comp(1261, 89));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_warehouse
        IF_SETHIDE(true, comp(1261, 94));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_battlefield
        int0 = script4948(varbitplayer_6677);
        if ((int0 <= 0)) {
            return;
        };
        IF_SETHIDE(true, script4968(int0));
        if (((varbitclan_6663 >= 4) && (varbitclan_6663 != 4))) {
            IF_SETHIDE(true, comp(1261, 24));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_1
        };
        if (((varbitclan_6664 >= 4) && (varbitclan_6664 != 5))) {
            IF_SETHIDE(true, comp(1261, 29));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_2
        };
        if (((varbitclan_6665 >= 4) && (varbitclan_6665 != 6))) {
            IF_SETHIDE(true, comp(1261, 34));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_3
        };
        if (((varbitclan_6666 >= 4) && (varbitclan_6666 != 7))) {
            IF_SETHIDE(true, comp(1261, 39));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_4
        };
        if (((varbitclan_6667 >= 4) && (varbitclan_6667 != 8))) {
            IF_SETHIDE(true, comp(1261, 44));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_5
        };
        if (((varbitclan_6668 >= 4) && (varbitclan_6668 != 9))) {
            IF_SETHIDE(true, comp(1261, 49));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_6
        };
        if (((varbitclan_6669 >= 4) && (varbitclan_6669 != 10))) {
            IF_SETHIDE(true, comp(1261, 54));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_7
        };
        if (((varbitclan_6670 >= 4) && (varbitclan_6670 != 11))) {
            IF_SETHIDE(true, comp(1261, 59));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_8
        };
        if (((varbitclan_6671 >= 4) && (varbitclan_6671 != 12))) {
            IF_SETHIDE(true, comp(1261, 64));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_9
        };
        if (((varbitclan_6672 >= 4) && (varbitclan_6672 != 13))) {
            IF_SETHIDE(true, comp(1261, 69));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_10
        };
        if (((varbitclan_6673 >= 4) && (varbitclan_6673 != 14))) {
            IF_SETHIDE(true, comp(1261, 74));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_11
        };
        if (((varbitclan_6674 >= 4) && (varbitclan_6674 != 15))) {
            IF_SETHIDE(true, comp(1261, 79));  // clan_stronghold_main_buildings:skill_plot_button_parent_layer_12
        };
    };
    return;
}