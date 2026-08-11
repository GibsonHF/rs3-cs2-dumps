//
function script9387(int0: number): void {
    IF_SETHIDE(true, comp(703, 18));  // 6awe2_buildings:faction_banner_button_selected_layer
    IF_SETHIDE(true, comp(703, 23));  // 6awe2_buildings:spiderhole_button_selected_layer
    IF_SETHIDE(true, comp(703, 28));  // 6awe2_buildings:siphon_button_selected_layer
    IF_SETHIDE(true, comp(703, 2));  // 6awe2_buildings:pvp_building_button_selected_layer
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(703, 18));  // 6awe2_buildings:faction_banner_button_selected_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(703, 23));  // 6awe2_buildings:spiderhole_button_selected_layer
            break;
        }
        case 6: {
            IF_SETHIDE(false, comp(703, 28));  // 6awe2_buildings:siphon_button_selected_layer
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(703, 2));  // 6awe2_buildings:pvp_building_button_selected_layer
            break;
        }
    };
    return;
}