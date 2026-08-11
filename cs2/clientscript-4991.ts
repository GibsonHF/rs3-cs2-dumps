//
function script4991(): void {
    script4993();
    script4994();
    var int0 = -1;
    var int1 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int0 = varbitclan_6507;
        IF_SETHIDE(false, comp(1261, 255));  // clan_stronghold_main_buildings:building_button_walls_layer
        IF_SETHIDE(false, comp(1261, 264));  // clan_stronghold_main_buildings:building_button_warehouse_layer
        IF_SETHIDE(false, comp(1261, 273));  // clan_stronghold_main_buildings:building_button_battlefield_layer
        IF_SETHIDE(false, comp(1261, 282));  // clan_stronghold_main_buildings:building_button_woodcutting_layer
        int1 = 4;
        if ((int0 >= 2)) {
            IF_SETHIDE(false, comp(1261, 291));  // clan_stronghold_main_buildings:building_button_mining_layer
            int1 = (int1 + 1);
        };
        if ((int0 >= 3)) {
            IF_SETHIDE(false, comp(1261, 300));  // clan_stronghold_main_buildings:building_button_firemaking_layer
            IF_SETHIDE(false, comp(1261, 309));  // clan_stronghold_main_buildings:building_button_smithing_layer
            int1 = (int1 + 2);
        };
        if ((int0 >= 5)) {
            IF_SETHIDE(false, comp(1261, 327));  // clan_stronghold_main_buildings:building_button_summoning_layer
            IF_SETHIDE(false, comp(1261, 336));  // clan_stronghold_main_buildings:building_button_crafting_layer
            int1 = (int1 + 2);
        };
        if ((int0 >= 6)) {
            IF_SETHIDE(false, comp(1261, 318));  // clan_stronghold_main_buildings:building_button_cooking_layer
            int1 = (int1 + 1);
        };
        if ((MODULO(int1, 2) != 0)) {
            int1 = (int1 + 1);
        };
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1261, 254)), (((int1 / 2) * 58) + 6), comp(1261, 254));  // clan_stronghold_main_buildings:building_button_scrolling_layer
        script31(82641149, 82641150, 5666, 5663, 5664, 5665, 5686, 5685);
    };
    return;
}