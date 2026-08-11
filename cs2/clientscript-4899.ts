//
function script4899(int0: number): void {
    varbitplayer_6679 = int0;
    script4935();
    script4940();
    switch (int0) {
        case 0: {
            IF_SETHIDE(true, comp(1261, 23));  // clan_stronghold_main_buildings:map_skill_hotspot_layer
            IF_SETHIDE(true, comp(1258, 115));  // clan_stronghold_main_decor:map_custom_hotspot_layer
            IF_SETHIDE(true, comp(1258, 44));  // clan_stronghold_main_decor:map_custom_blanket_hotspot_layer
            IF_SETHIDE(false, comp(1259, 5));  // clan_stronghold_main_map:map_teleport_hotspot_layer
            IF_SETTEXT("", comp(1259, 150));  // clan_stronghold_main_map:left_info_layer_txt
            IF_SETHIDE(true, comp(1259, 147));  // clan_stronghold_main_map:left_info_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1261, 23));  // clan_stronghold_main_buildings:map_skill_hotspot_layer
            IF_SETHIDE(true, comp(1258, 115));  // clan_stronghold_main_decor:map_custom_hotspot_layer
            IF_SETHIDE(true, comp(1258, 44));  // clan_stronghold_main_decor:map_custom_blanket_hotspot_layer
            IF_SETTEXT("", comp(1261, 349));  // clan_stronghold_main_buildings:left_info_layer_txt
            IF_SETHIDE(true, comp(1261, 345));  // clan_stronghold_main_buildings:left_info_layer
            IF_SETHIDE(true, comp(1259, 5));  // clan_stronghold_main_map:map_teleport_hotspot_layer
            script5009();
            script5011();
            break;
        }
        case 2: {
            script4860();
            script4863();
            script4859();
            IF_SETHIDE(true, comp(1261, 23));  // clan_stronghold_main_buildings:map_skill_hotspot_layer
            IF_SETHIDE(false, comp(1258, 115));  // clan_stronghold_main_decor:map_custom_hotspot_layer
            IF_SETHIDE(false, comp(1258, 44));  // clan_stronghold_main_decor:map_custom_blanket_hotspot_layer
            IF_SETTEXT("", comp(1258, 596));  // clan_stronghold_main_decor:left_info_layer_txt
            IF_SETHIDE(true, comp(1258, 593));  // clan_stronghold_main_decor:left_info_layer
            IF_SETHIDE(true, comp(1259, 5));  // clan_stronghold_main_map:map_teleport_hotspot_layer
            script5009();
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1261, 23));  // clan_stronghold_main_buildings:map_skill_hotspot_layer
            IF_SETHIDE(true, comp(1258, 115));  // clan_stronghold_main_decor:map_custom_hotspot_layer
            IF_SETHIDE(true, comp(1258, 44));  // clan_stronghold_main_decor:map_custom_blanket_hotspot_layer
            IF_SETTEXT("Please select an available spot from the map.", comp(1261, 349));  // clan_stronghold_main_buildings:left_info_layer_txt
            IF_SETHIDE(false, comp(1261, 345));  // clan_stronghold_main_buildings:left_info_layer
            IF_SETHIDE(true, comp(1259, 5));  // clan_stronghold_main_map:map_teleport_hotspot_layer
            script5010();
            script4935();
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1261, 23));  // clan_stronghold_main_buildings:map_skill_hotspot_layer
            IF_SETHIDE(true, comp(1258, 115));  // clan_stronghold_main_decor:map_custom_hotspot_layer
            IF_SETHIDE(true, comp(1258, 44));  // clan_stronghold_main_decor:map_custom_blanket_hotspot_layer
            IF_SETTEXT("Please select a spot from the map.", comp(1261, 349));  // clan_stronghold_main_buildings:left_info_layer_txt
            IF_SETHIDE(false, comp(1261, 345));  // clan_stronghold_main_buildings:left_info_layer
            IF_SETHIDE(true, comp(1259, 5));  // clan_stronghold_main_map:map_teleport_hotspot_layer
            script5010();
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(1261, 23));  // clan_stronghold_main_buildings:map_skill_hotspot_layer
            IF_SETHIDE(false, comp(1258, 115));  // clan_stronghold_main_decor:map_custom_hotspot_layer
            IF_SETHIDE(false, comp(1258, 44));  // clan_stronghold_main_decor:map_custom_blanket_hotspot_layer
            IF_SETTEXT("Please select an available spot from the map.", comp(1258, 596));  // clan_stronghold_main_decor:left_info_layer_txt
            IF_SETHIDE(false, comp(1258, 593));  // clan_stronghold_main_decor:left_info_layer
            IF_SETHIDE(true, comp(1259, 5));  // clan_stronghold_main_map:map_teleport_hotspot_layer
            script5009();
            break;
        }
    };
    script4853();
    return;
}