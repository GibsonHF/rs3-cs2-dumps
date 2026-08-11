//
function script4857(): void {
    if ((CLANPROFILE_FIND() == 1)) {
        script4854();
        if ((varbitclan_6507 < 7)) {
            IF_SETHIDE(true, comp(1258, 152));  // clan_stronghold_main_decor:custom_button_on_layer_5x5_1
            IF_SETHIDE(true, comp(1258, 150));  // clan_stronghold_main_decor:custom_button_on_layer_4x4_5
            IF_SETHIDE(true, comp(1258, 128));  // clan_stronghold_main_decor:custom_button_on_layer_2x2_7
            IF_SETHIDE(true, comp(1258, 130));  // clan_stronghold_main_decor:custom_button_on_layer_2x2_8
        };
        if ((varbitclan_6507 < 5)) {
            IF_SETHIDE(true, comp(1258, 146));  // clan_stronghold_main_decor:custom_button_on_layer_4x4_3
            IF_SETHIDE(true, comp(1258, 148));  // clan_stronghold_main_decor:custom_button_on_layer_4x4_4
            IF_SETHIDE(true, comp(1258, 124));  // clan_stronghold_main_decor:custom_button_on_layer_2x2_5
            IF_SETHIDE(true, comp(1258, 126));  // clan_stronghold_main_decor:custom_button_on_layer_2x2_6
        };
        if ((varbitclan_6507 < 3)) {
            IF_SETHIDE(true, comp(1258, 120));  // clan_stronghold_main_decor:custom_button_on_layer_2x2_3
            IF_SETHIDE(true, comp(1258, 122));  // clan_stronghold_main_decor:custom_button_on_layer_2x2_4
        };
    };
    return;
}