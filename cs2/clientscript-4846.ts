//
function script4846(int0: number): void {
    IF_SETHIDE(true, comp(1258, 523));  // clan_stronghold_main_decor:custom_basic_tab_selected
    IF_SETHIDE(true, comp(1258, 514));  // clan_stronghold_main_decor:custom_upgrade_tab_selected
    IF_SETHIDE(true, comp(1258, 505));  // clan_stronghold_main_decor:custom_grand_tab_selected
    IF_SETHIDE(true, comp(1258, 425));  // clan_stronghold_main_decor:custom_details_scrolling_layer_1
    IF_SETHIDE(true, comp(1258, 344));  // clan_stronghold_main_decor:custom_details_scrolling_layer_2
    IF_SETHIDE(true, comp(1258, 257));  // clan_stronghold_main_decor:custom_details_scrolling_layer_3
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1258, 523));  // clan_stronghold_main_decor:custom_basic_tab_selected
            IF_SETHIDE(false, comp(1258, 425));  // clan_stronghold_main_decor:custom_details_scrolling_layer_1
            IF_SETGRAPHIC(7287 as graphic, comp(1258, 539));  // clan_stronghold_main_decor:custom_tooltip_border
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1258, 514));  // clan_stronghold_main_decor:custom_upgrade_tab_selected
            IF_SETHIDE(false, comp(1258, 344));  // clan_stronghold_main_decor:custom_details_scrolling_layer_2
            IF_SETGRAPHIC(7288 as graphic, comp(1258, 539));  // clan_stronghold_main_decor:custom_tooltip_border
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1258, 505));  // clan_stronghold_main_decor:custom_grand_tab_selected
            IF_SETHIDE(false, comp(1258, 257));  // clan_stronghold_main_decor:custom_details_scrolling_layer_3
            IF_SETGRAPHIC(7289 as graphic, comp(1258, 539));  // clan_stronghold_main_decor:custom_tooltip_border
            break;
        }
    };
    script4838();
    script4810();
    script4840();
    script4814();
    return;
}