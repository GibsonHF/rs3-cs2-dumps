//
function script5145(int0: int): int {
    var int1 = -1;
    int1 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    if ((int1 < 0)) {
        return 0;
    };
    if ((int0 == -1)) {
        var int0 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int1);
    };
    var int2 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        int2 = (varclan_2132 - DATE_MINUTES());
        if (((int2 < 360) && (int0 < 126))) {
            return 0;
        };
    };
    switch (int0) {
        case 100: {
            return varbitclansettings_6290;
        }
        case 101: {
            return varbitclansettings_6291;
        }
        case 102: {
            return varbitclansettings_6292;
        }
        case 103: {
            return varbitclansettings_6293;
        }
        case 125: {
            return varbitclansettings_6294;
        }
        case 126: {
            return 1;
        }
        case 127: {
            return 1;
        }
    };
    return 0;
}