//
function script5977(): void {
    var int0 = 1;
    var int1 = 0;
    var int2 = -1 as graphic;
    var int3 = comp(-1, 65535);
    switch (varbitplayer_6679) {
        case 0: {
            int3 = comp(1259, 2);
            break;
        }
        case 1:
        case 3:
        case 4: {
            int3 = comp(1261, 6);
            break;
        }
        case 2:
        case 5: {
            int3 = comp(1258, 27);
            break;
        }
        default: {
            return;
        }
    };
    if ((CLANPROFILE_FIND() == 1)) {
        if ((varclient_1794 < 0)) {
            varclient_1794 = 0;
        };
        if ((varclient_1794 == 0)) {
            int1 = varbitclan_6524;
        } else {
            int1 = varbitclan_6661;
        };
        int0 = varbitclan_6507;
        int2 = script4904(1, int1, int0);
        if ((int2 == -1 as graphic)) {
            return;
        };
        IF_SETGRAPHIC(int2, int3);
    };
    return;
}