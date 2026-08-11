//
function script4889(): void {
    var string0 = "";
    IF_SETHIDE(true, comp(1258, 62));  // clan_stronghold_main_decor:custom_blanket_button_layer_partychair
    IF_SETHIDE(true, comp(1258, 67));  // clan_stronghold_main_decor:custom_blanket_button_layer_partytable
    IF_SETHIDE(true, comp(1258, 102));  // clan_stronghold_main_decor:custom_blanket_button_layer_flag
    IF_SETHIDE(true, comp(1258, 57));  // clan_stronghold_main_decor:custom_blanket_button_layer_pottedplant
    IF_SETHIDE(true, comp(1258, 92));  // clan_stronghold_main_decor:custom_blanket_button_layer_sundial
    IF_SETHIDE(true, comp(1258, 77));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepflag
    IF_SETHIDE(true, comp(1258, 87));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeptapestry
    IF_SETHIDE(true, comp(1258, 72));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepbanner
    IF_SETHIDE(true, comp(1258, 97));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepshield
    IF_SETHIDE(true, comp(1258, 52));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepfireplace
    IF_SETHIDE(true, comp(1258, 107));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0window
    IF_SETHIDE(true, comp(1258, 112));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl1window
    IF_SETHIDE(true, comp(1258, 82));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0door
    if ((varbitclan_6507 > 1)) {
        IF_SETHIDE(false, comp(1258, 52));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepfireplace
        IF_SETHIDE(false, comp(1258, 57));  // clan_stronghold_main_decor:custom_blanket_button_layer_pottedplant
        IF_SETHIDE(true, comp(1258, 53));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepfireplace_disabled
        IF_SETHIDE(true, comp(1258, 58));  // clan_stronghold_main_decor:custom_blanket_button_layer_pottedplant_disabled
    } else {
        IF_SETHIDE(false, comp(1258, 53));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepfireplace_disabled
        IF_SETHIDE(false, comp(1258, 58));  // clan_stronghold_main_decor:custom_blanket_button_layer_pottedplant_disabled
        string0 = "You need at least a tier 2 citadel to customise the keep fireplace.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 53));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepfireplace_disabled
        string0 = "You need at least a tier 2 citadel to customise the potted plants.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 58));  // clan_stronghold_main_decor:custom_blanket_button_layer_pottedplant_disabled
    };
    if ((varbitclan_6507 > 2)) {
        IF_SETHIDE(false, comp(1258, 62));  // clan_stronghold_main_decor:custom_blanket_button_layer_partychair
        IF_SETHIDE(false, comp(1258, 67));  // clan_stronghold_main_decor:custom_blanket_button_layer_partytable
        IF_SETHIDE(false, comp(1258, 92));  // clan_stronghold_main_decor:custom_blanket_button_layer_sundial
        IF_SETHIDE(false, comp(1258, 87));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeptapestry
        IF_SETHIDE(false, comp(1258, 72));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepbanner
        IF_SETHIDE(false, comp(1258, 82));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0door
        IF_SETHIDE(true, comp(1258, 63));  // clan_stronghold_main_decor:custom_blanket_button_layer_partychair_disabled
        IF_SETHIDE(true, comp(1258, 68));  // clan_stronghold_main_decor:custom_blanket_button_layer_partytable_disabled
        IF_SETHIDE(true, comp(1258, 93));  // clan_stronghold_main_decor:custom_blanket_button_layer_sundial_disabled
        IF_SETHIDE(true, comp(1258, 78));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepflag_disabled
        IF_SETHIDE(true, comp(1258, 88));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeptapestry_disabled
        IF_SETHIDE(true, comp(1258, 73));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepbanner_disabled
        IF_SETHIDE(true, comp(1258, 83));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0door_disabled
    } else {
        IF_SETHIDE(false, comp(1258, 63));  // clan_stronghold_main_decor:custom_blanket_button_layer_partychair_disabled
        IF_SETHIDE(false, comp(1258, 68));  // clan_stronghold_main_decor:custom_blanket_button_layer_partytable_disabled
        IF_SETHIDE(false, comp(1258, 93));  // clan_stronghold_main_decor:custom_blanket_button_layer_sundial_disabled
        IF_SETHIDE(false, comp(1258, 88));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeptapestry_disabled
        IF_SETHIDE(false, comp(1258, 73));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepbanner_disabled
        IF_SETHIDE(false, comp(1258, 83));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0door_disabled
        string0 = "You need at least a tier 3 citadel to customise the party room chairs.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 63));  // clan_stronghold_main_decor:custom_blanket_button_layer_partychair_disabled
        string0 = "You need at least a tier 3 citadel to customise the party room tables.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 68));  // clan_stronghold_main_decor:custom_blanket_button_layer_partytable_disabled
        string0 = "You need at least a tier 3 citadel to customise the sundials.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 93));  // clan_stronghold_main_decor:custom_blanket_button_layer_sundial_disabled
        string0 = "You need at least a tier 3 citadel to customise the keep tapestry.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 88));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeptapestry_disabled
        string0 = "You need at least a tier 3 citadel to customise the keep banners.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 73));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepbanner_disabled
        string0 = "You need at least a tier 3 citadel to customise the keep door.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 83));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0door_disabled
    };
    if ((varbitclan_6507 > 3)) {
        IF_SETHIDE(false, comp(1258, 107));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0window
        IF_SETHIDE(false, comp(1258, 112));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl1window
        IF_SETHIDE(false, comp(1258, 102));  // clan_stronghold_main_decor:custom_blanket_button_layer_flag
        IF_SETHIDE(false, comp(1258, 97));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepshield
        IF_SETHIDE(true, comp(1258, 108));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0window_disabled
        IF_SETHIDE(true, comp(1258, 113));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl1window_disabled
        IF_SETHIDE(true, comp(1258, 103));  // clan_stronghold_main_decor:custom_blanket_button_layer_flag_disabled
        IF_SETHIDE(true, comp(1258, 98));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepshield_disabled
    } else {
        IF_SETHIDE(false, comp(1258, 108));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0window_disabled
        IF_SETHIDE(false, comp(1258, 113));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl1window_disabled
        IF_SETHIDE(false, comp(1258, 103));  // clan_stronghold_main_decor:custom_blanket_button_layer_flag_disabled
        IF_SETHIDE(false, comp(1258, 98));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepshield_disabled
        string0 = "You need at least a tier 4 citadel to customise the keep lower windows.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 108));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl0window_disabled
        string0 = "You need at least a tier 4 citadel to customise the keep upper windows.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 113));  // clan_stronghold_main_decor:custom_blanket_button_layer_keeplvl1window_disabled
        string0 = "You need at least a tier 4 citadel to customise the citadel flags.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 103));  // clan_stronghold_main_decor:custom_blanket_button_layer_flag_disabled
        string0 = "You need at least a tier 4 citadel to customise the keep shields.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 98));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepshield_disabled
    };
    if ((varbitclan_6507 > 4)) {
        IF_SETHIDE(false, comp(1258, 77));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepflag
    } else {
        IF_SETHIDE(false, comp(1258, 78));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepflag_disabled
        string0 = "You need at least a tier 5 citadel to customise the keep flag.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1258, 78));  // clan_stronghold_main_decor:custom_blanket_button_layer_keepflag_disabled
    };
    return;
}