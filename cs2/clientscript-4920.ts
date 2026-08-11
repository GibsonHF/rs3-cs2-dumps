//
function script4920(): void {
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (varbitplayer_6679) {
        case 0: {
            int0 = comp(1259, 186);  // clan_stronghold_main_map:member_count_text
            int1 = comp(1259, 180);  // clan_stronghold_main_map:build_time_text
            int2 = comp(1259, 46);  // clan_stronghold_main_map:member_display_blue_layer
            break;
        }
        case 1:
        case 3:
        case 4: {
            int0 = comp(1261, 367);  // clan_stronghold_main_buildings:member_count_text
            int1 = comp(1261, 360);  // clan_stronghold_main_buildings:build_time_text
            int2 = comp(1261, 363);  // clan_stronghold_main_buildings:member_display_blue_layer
            break;
        }
        case 2:
        case 5: {
            int0 = comp(1258, 614);  // clan_stronghold_main_decor:member_count_text
            int1 = comp(1258, 607);  // clan_stronghold_main_decor:build_time_text
            int2 = comp(1258, 610);  // clan_stronghold_main_decor:member_display_blue_layer
            break;
        }
        case 6: {
            int0 = comp(1260, 319);  // clan_stronghold_main_resources:member_count_text
            int1 = comp(1260, 313);  // clan_stronghold_main_resources:build_time_text
            int2 = comp(1260, 102);  // clan_stronghold_main_resources:member_display_blue_layer
            break;
        }
    };
    var string0 = "";
    if (((((varclient_1557 == 0) && (varclient_1558 < 6)) && (varclient_1558 == 0)) && (varclient_1559 < 20))) {
    };
    if ((((varclient_1557 == 0) && (varclient_1558 == 0)) && (varclient_1559 == 0))) {
        IF_SETTEXT("Due!", int1);
        return;
    };
    if ((varclient_1557 > 0)) {
        string0 = strconcat(string0, `${inttostring(varclient_1557, 10)}d `);
    };
    if ((varclient_1558 > 0)) {
        string0 = strconcat(string0, `${inttostring(varclient_1558, 10)}h `);
    };
    if ((varclient_1559 > 0)) {
        string0 = strconcat(string0, `${inttostring(varclient_1559, 10)}m`);
    };
    IF_SETTEXT(string0, int1);
    var string1 = "";
    if ((CLANPROFILE_FIND() == 1)) {
        IF_SETTEXT(inttostring(varclan_2136, 10), int0);
        if (((varbitclan_6507 - varbitclan_6556) == 7)) {
            IF_SETCOLOUR(2672721, int0);
            string1 = "Number of clan members who have visited your citadel.";
        } else if ((script4786((varbitclan_6507 - varbitclan_6556)) == 1)) {
            IF_SETCOLOUR(2672721, int0);
            string1 = "Sufficient clan members have visited to allow upgrades.";
        } else {
            IF_SETCOLOUR(12857645, int0);
            string1 = "More clan members must visit your citadel to allow upgrades.";
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), int2);
    };
    return;
}