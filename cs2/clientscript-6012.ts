//
function script6012(int0: int): int {
    var int1 = -1;
    int1 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    if ((int1 < 0)) {
        return 0;
    };
    if ((int0 == -1)) {
        var int0 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int1);
    };
    switch (int0) {
        case 0: {
            return varbitclansettings_6192;
        }
        case 1: {
            return varbitclansettings_6193;
        }
        case 2: {
            return varbitclansettings_6194;
        }
        case 3: {
            return varbitclansettings_6195;
        }
        case 4: {
            return varbitclansettings_6196;
        }
        case 5: {
            return varbitclansettings_6197;
        }
        case 100: {
            return varbitclansettings_6198;
        }
        case 101: {
            return varbitclansettings_6199;
        }
        case 102: {
            return varbitclansettings_6200;
        }
        case 103: {
            return varbitclansettings_6201;
        }
        case 125: {
            return varbitclansettings_6202;
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