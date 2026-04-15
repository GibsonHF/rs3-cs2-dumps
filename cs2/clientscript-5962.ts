//
function script5962(int0: int): int {
    var int1 = -1;
    int1 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    if ((int1 < 0)) {
        return 0;
    };
    if ((int0 == -1)) {
        var int0 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int1);
    };
    switch (int0) {
        case 100: {
            return varbitclansettings_6166;
        }
        case 101: {
            return varbitclansettings_6167;
        }
        case 102: {
            return varbitclansettings_6168;
        }
        case 103: {
            return varbitclansettings_6169;
        }
        case 125: {
            return varbitclansettings_6170;
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