//
function script4920(): void {
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = -1;
    switch (varbitplayer_6679) {
        case 0: {
            int0 = comp(1259, 186);
            int1 = comp(1259, 180);
            int2 = 82509870;
            break;
        }
        case 1:
        case 3:
        case 4: {
            int0 = comp(1261, 367);
            int1 = comp(1261, 360);
            int2 = 82641259;
            break;
        }
        case 2:
        case 5: {
            int0 = comp(1258, 614);
            int1 = comp(1258, 607);
            int2 = 82444898;
            break;
        }
        case 6: {
            int0 = comp(1260, 319);
            int1 = comp(1260, 313);
            int2 = 82575462;
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