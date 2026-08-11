//
function script19158(): void {
    IF_SETHIDE(false, comp(1288, 5));  // trh_academy_shared_overlay:vs
    IF_SETHIDE(false, comp(1288, 3));  // trh_academy_shared_overlay:swirly
    IF_SETHIDE(false, comp(1288, 51));  // trh_academy_shared_overlay:character_stats_holder
    IF_SETHIDE(false, comp(1288, 7));  // trh_academy_shared_overlay:attack_button_layer
    IF_SETHIDE(true, comp(1288, 10));  // trh_academy_shared_overlay:generic_interaction_button
    switch (MAP_LANG()) {
        case 0: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {  // trh_academy_shared_overlay:attack_button_graphic
                IF_SETGRAPHIC(25141 as graphic, comp(1288, 8));  // trh_academy_shared_overlay:attack_button_graphic
            };
            IF_SETGRAPHIC(20602 as graphic, comp(1288, 5));  // trh_academy_shared_overlay:vs
            break;
        }
        case 2: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {  // trh_academy_shared_overlay:attack_button_graphic
                IF_SETGRAPHIC(25167 as graphic, comp(1288, 8));  // trh_academy_shared_overlay:attack_button_graphic
            };
            IF_SETGRAPHIC(20602 as graphic, comp(1288, 5));  // trh_academy_shared_overlay:vs
            break;
        }
        case 1: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {  // trh_academy_shared_overlay:attack_button_graphic
                IF_SETGRAPHIC(25165 as graphic, comp(1288, 8));  // trh_academy_shared_overlay:attack_button_graphic
            };
            IF_SETGRAPHIC(20601 as graphic, comp(1288, 5));  // trh_academy_shared_overlay:vs
            break;
        }
        case 3: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {  // trh_academy_shared_overlay:attack_button_graphic
                IF_SETGRAPHIC(25233 as graphic, comp(1288, 8));  // trh_academy_shared_overlay:attack_button_graphic
            };
            IF_SETGRAPHIC(20601 as graphic, comp(1288, 5));  // trh_academy_shared_overlay:vs
            break;
        }
    };
    return;
}