//
function script6876(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1311, 501));  // mtxmgt:colours_container
        IF_SETHIDE(false, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETHIDE(false, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETHIDE(true, comp(1311, 13));  // mtxmgt:worn_slots_content
        IF_SETHIDE(true, comp(1311, 197));  // mtxmgt:filters_layer
        IF_SETHIDE(true, comp(1311, 511));  // mtxmgt:title_options
        IF_SETHIDE(false, comp(1311, 517));  // mtxmgt:hair_options
        IF_SETSIZE(384, 40, 1, 1, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETPOSITION(0, 0, 0, 0, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETSIZE(127, 40, 0, 1, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETSIZE(127, 24, 0, 0, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETPOSITION(150, IF_GETY(comp(1311, 170)), 0, 0, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(172, 8, 1, 1, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(20, 2, 0, 1, comp(1311, 341));  // mtxmgt:list_scrollbar
        IF_SETSIZE(300, 40, 0, 1, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETPOSITION(0, 0, 2, 0, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETHIDE(true, comp(1311, 351));  // mtxmgt:pets_bigger_background
    } else if ((int0 == 5)) {
        IF_SETHIDE(false, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETHIDE(false, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETHIDE(true, comp(1311, 13));  // mtxmgt:worn_slots_content
        IF_SETHIDE(true, comp(1311, 197));  // mtxmgt:filters_layer
        IF_SETHIDE(true, comp(1311, 511));  // mtxmgt:title_options
        IF_SETHIDE(true, comp(1311, 501));  // mtxmgt:colours_container
        IF_SETHIDE(true, comp(1311, 382));  // mtxmgt:pet_name_background
        IF_SETHIDE(true, comp(1311, 386));  // mtxmgt:pet_age_layer
        IF_SETSIZE(376, 48, 1, 1, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETPOSITION(0, 8, 0, 0, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETSIZE(142, 40, 0, 1, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETSIZE(142, 24, 0, 0, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETPOSITION(148, IF_GETY(comp(1311, 170)), 0, 0, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(163, 8, 1, 1, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(380, 45, 0, 1, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETPOSITION(0, 0, 2, 0, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETSIZE(383, 0, 1, 1, comp(1311, 609));  // mtxmgt:recolour_noclick_rect_1
        IF_SETSIZE(383, 40, 0, 0, comp(1311, 611));  // mtxmgt:recolour_no_click_rect_2
        IF_SETHIDE(false, comp(1311, 351));  // mtxmgt:pets_bigger_background
    } else if ((int0 == 2)) {
        if ((varclient_2699 == 3)) {
            IF_SETHIDE(false, comp(1311, 96));  // mtxmgt:filters_mainhand_button_layer
            IF_SETHIDE(true, comp(1311, 110));  // mtxmgt:filters_offhand_button_layer
            IF_SETHIDE(false, comp(1311, 197));  // mtxmgt:filters_layer
        } else if ((varclient_2699 == 5)) {
            IF_SETHIDE(true, comp(1311, 96));  // mtxmgt:filters_mainhand_button_layer
            IF_SETHIDE(false, comp(1311, 110));  // mtxmgt:filters_offhand_button_layer
            IF_SETHIDE(false, comp(1311, 197));  // mtxmgt:filters_layer
        } else {
            IF_SETHIDE(true, comp(1311, 96));  // mtxmgt:filters_mainhand_button_layer
            IF_SETHIDE(true, comp(1311, 110));  // mtxmgt:filters_offhand_button_layer
            IF_SETHIDE(true, comp(1311, 197));  // mtxmgt:filters_layer
        };
        if ((varclient_2699 == 19)) {
            IF_SETHIDE(false, comp(1311, 124));  // mtxmgt:keepsake_buy_button_layer
        } else {
            IF_SETHIDE(true, comp(1311, 124));  // mtxmgt:keepsake_buy_button_layer
        };
        IF_SETHIDE(true, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETHIDE(true, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETHIDE(false, comp(1311, 13));  // mtxmgt:worn_slots_content
        IF_SETHIDE(true, comp(1311, 511));  // mtxmgt:title_options
        IF_SETHIDE(true, comp(1311, 501));  // mtxmgt:colours_container
        IF_SETSIZE(300, 40, 1, 1, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETPOSITION(0, 0, 0, 0, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETPOSITION(138, IF_GETY(comp(1311, 170)), 0, 0, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(282, 8, 0, 1, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(20, 2, 0, 1, comp(1311, 341));  // mtxmgt:list_scrollbar
        IF_SETSIZE(300, 0, 1, 1, comp(1311, 609));  // mtxmgt:recolour_noclick_rect_1
        IF_SETSIZE(300, 40, 0, 0, comp(1311, 611));  // mtxmgt:recolour_no_click_rect_2
        IF_SETSIZE(300, 40, 0, 1, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETPOSITION(0, 0, 2, 0, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETHIDE(true, comp(1311, 351));  // mtxmgt:pets_bigger_background
    } else {
        if ((int0 == 3)) {
            IF_SETHIDE(false, comp(1311, 511));  // mtxmgt:title_options
        };
        IF_SETHIDE(false, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETHIDE(false, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETHIDE(true, comp(1311, 13));  // mtxmgt:worn_slots_content
        IF_SETHIDE(true, comp(1311, 197));  // mtxmgt:filters_layer
        IF_SETHIDE(true, comp(1311, 501));  // mtxmgt:colours_container
        IF_SETSIZE(300, 40, 1, 1, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETPOSITION(0, 0, 0, 0, comp(1311, 2));  // mtxmgt:list_pane
        IF_SETSIZE(177, 40, 0, 1, comp(1311, 146));  // mtxmgt:list_headers
        IF_SETSIZE(177, 24, 0, 0, comp(1311, 135));  // mtxmgt:search_layer
        IF_SETPOSITION(200, IF_GETY(comp(1311, 170)), 0, 0, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(222, 8, 1, 1, comp(1311, 170));  // mtxmgt:list_contents
        IF_SETSIZE(20, 2, 0, 1, comp(1311, 341));  // mtxmgt:list_scrollbar
        IF_SETSIZE(300, 40, 0, 1, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETPOSITION(0, 0, 2, 0, comp(1311, 343));  // mtxmgt:preview_pane
        IF_SETHIDE(true, comp(1311, 351));  // mtxmgt:pets_bigger_background
    };
    return;
}