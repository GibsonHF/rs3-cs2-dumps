//
function script5975(): void {
    var int0 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        if ((varbitplayer_6675 != varbitclan_6661)) {
            int0 = 1;
        };
        if ((varbitplayer_6676 != varbitclan_6662)) {
            int0 = 1;
        };
        if ((varbitplayer_6676 == 0)) {
            IF_SETHIDE(true, comp(1259, 104));  // clan_stronghold_main_map:day_button_selected_layer
            IF_SETHIDE(false, comp(1259, 98));  // clan_stronghold_main_map:night_button_selected_layer
        } else {
            IF_SETHIDE(false, comp(1259, 104));  // clan_stronghold_main_map:day_button_selected_layer
            IF_SETHIDE(true, comp(1259, 98));  // clan_stronghold_main_map:night_button_selected_layer
        };
    };
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1259, 68));  // clan_stronghold_main_map:select_layout_button_disabled_layer
        IF_SETHIDE(true, comp(1259, 75));  // clan_stronghold_main_map:revert_layout_button_disabled_layer
    } else {
        IF_SETHIDE(false, comp(1259, 68));  // clan_stronghold_main_map:select_layout_button_disabled_layer
        IF_SETHIDE(false, comp(1259, 75));  // clan_stronghold_main_map:revert_layout_button_disabled_layer
    };
    return;
}