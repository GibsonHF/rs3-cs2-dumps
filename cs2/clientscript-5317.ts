//
function script5317(): void {
    if ((IF_GETHIDE(comp(319, 38)) == true)) {  // clan_keep_theatre_sounds:sound_selected
        IF_SETHIDE(false, comp(319, 38));  // clan_keep_theatre_sounds:sound_selected
        IF_SETHIDE(true, comp(319, 30));  // clan_keep_theatre_sounds:bm_selected
        IF_SETHIDE(true, comp(319, 0));  // clan_keep_theatre_sounds:bm_list
        IF_SETHIDE(true, comp(319, 3));  // clan_keep_theatre_sounds:scroll_bar2
        IF_SETHIDE(true, comp(319, 10));  // clan_keep_theatre_sounds:clear_button_layer
        IF_SETHIDE(false, comp(319, 1));  // clan_keep_theatre_sounds:sound_list
        IF_SETHIDE(false, comp(319, 2));  // clan_keep_theatre_sounds:scroll_bar1
        IF_SETHIDE(false, comp(319, 12));  // clan_keep_theatre_sounds:sort_button_layer
    } else {
        IF_SETHIDE(true, comp(319, 38));  // clan_keep_theatre_sounds:sound_selected
        IF_SETHIDE(false, comp(319, 30));  // clan_keep_theatre_sounds:bm_selected
        IF_SETHIDE(false, comp(319, 0));  // clan_keep_theatre_sounds:bm_list
        IF_SETHIDE(false, comp(319, 3));  // clan_keep_theatre_sounds:scroll_bar2
        IF_SETHIDE(false, comp(319, 10));  // clan_keep_theatre_sounds:clear_button_layer
        IF_SETHIDE(true, comp(319, 1));  // clan_keep_theatre_sounds:sound_list
        IF_SETHIDE(true, comp(319, 2));  // clan_keep_theatre_sounds:scroll_bar1
        IF_SETHIDE(true, comp(319, 12));  // clan_keep_theatre_sounds:sort_button_layer
    };
    return;
}