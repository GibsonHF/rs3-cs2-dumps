//
function script7488(int0: number): void {
    if ((int0 == 0)) {
        return;
    };
    if ((int0 == 1)) {
        varclient_1968 = 1;
    } else if (((int0 != 2) || (varclient_1966 != comp(1311, 172)))) {  // mtxmgt:subcat_list_1
        varclient_1968 = 0;
    };
    if ((int0 == 2)) {
        IF_SETHIDE(false, enum_getvalue(0, 9, 5961 as cs2enum, 20));
    };
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1311, 372));  // mtxmgt:chathead_mode
        IF_SETHIDE(false, comp(1311, 376));  // mtxmgt:makeover_mage_layer
    } else {
        IF_SETHIDE(true, comp(1311, 372));  // mtxmgt:chathead_mode
        IF_SETHIDE(true, comp(1311, 376));  // mtxmgt:makeover_mage_layer
    };
    script6443(0, 0, 10, 200, 1, 1);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(true, comp(1311, 447));  // mtxmgt:no_activate_layer
    IF_SETHIDE(true, comp(1311, 472));  // mtxmgt:toggle_button_layer
    IF_SETHIDE(true, comp(1311, 613));  // mtxmgt:recolour_colour_pane
    IF_SETHIDE(true, comp(1311, 196));  // mtxmgt:selected_item
    IF_SETHIDE(true, comp(1311, 380));  // mtxmgt:pet_panel
    IF_SETHIDE(true, comp(1311, 518));  // mtxmgt:pet_options
    IF_SETHIDE(true, comp(1311, 588));  // mtxmgt:menagerie_layer
    IF_SETHIDE(true, comp(1311, 593));  // mtxmgt:familiar_override_layer
    IF_SETHIDE(true, comp(1311, 603));  // mtxmgt:pet_cycle_layer
    IF_SETHIDE(true, comp(1311, 511));  // mtxmgt:title_options
    if ((int0 == 5)) {
        IF_SETHIDE(true, comp(1311, 380));  // mtxmgt:pet_panel
        IF_SETHIDE(true, comp(1311, 518));  // mtxmgt:pet_options
        IF_SETHIDE(true, comp(1311, 363));  // mtxmgt:recolour_layer
        IF_SETHIDE(true, comp(1311, 593));  // mtxmgt:familiar_override_layer
        IF_SETHIDE(true, comp(1311, 603));  // mtxmgt:pet_cycle_layer
        IF_SETHIDE(true, comp(1311, 588));  // mtxmgt:menagerie_layer
        IF_SETHIDE(true, comp(1311, 345));  // mtxmgt:preview_background_nw
        IF_SETHIDE(true, comp(1311, 346));  // mtxmgt:preview_background_ne
        IF_SETHIDE(true, comp(1311, 347));  // mtxmgt:preview_background_w
        IF_SETHIDE(true, comp(1311, 348));  // mtxmgt:preview_background_e
        IF_SETHIDE(true, comp(1311, 349));  // mtxmgt:preview_background_sw
        IF_SETHIDE(true, comp(1311, 350));  // mtxmgt:preview_background_se
        IF_SETHIDE(true, comp(1311, 469));  // mtxmgt:name_pane
        int1 = (IF_GETX(comp(1311, 380)) + 20);  // mtxmgt:pet_panel
        int2 = IF_GETY(comp(1311, 449));  // mtxmgt:warning_panel
        IF_SETPOSITION(int1, int2, 0, 0, comp(1311, 449));  // mtxmgt:warning_panel
        int3 = (IF_GETWIDTH(comp(1311, 380)) - 40);  // mtxmgt:pet_panel
        int4 = IF_GETHEIGHT(comp(1311, 449));  // mtxmgt:warning_panel
        IF_SETSIZE(int3, int4, 0, 0, comp(1311, 449));  // mtxmgt:warning_panel
    } else {
        IF_SETHIDE(false, comp(1311, 345));  // mtxmgt:preview_background_nw
        IF_SETHIDE(false, comp(1311, 346));  // mtxmgt:preview_background_ne
        IF_SETHIDE(false, comp(1311, 347));  // mtxmgt:preview_background_w
        IF_SETHIDE(false, comp(1311, 348));  // mtxmgt:preview_background_e
        IF_SETHIDE(false, comp(1311, 349));  // mtxmgt:preview_background_sw
        IF_SETHIDE(false, comp(1311, 350));  // mtxmgt:preview_background_se
        IF_SETHIDE(false, comp(1311, 469));  // mtxmgt:name_pane
    };
    IF_SETHIDE(false, comp(1311, 343));  // mtxmgt:preview_pane
    varclient_1966 = comp(-1, 65535);
    varclient_1964 = comp(-1, 65535);
    varclient_1965 = -1;
    varclient_4618 = 0;
    return;
}