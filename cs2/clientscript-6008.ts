//
function script6008(int0: int): unknown_int {
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
            if ((varbitclansettings_6274 == 1)) {
                return 1;
            };
            break;
        }
        case 101: {
            if ((varbitclansettings_6275 == 1)) {
                return 1;
            };
            break;
        }
        case 102: {
            if ((varbitclansettings_6276 == 1)) {
                return 1;
            };
            break;
        }
        case 103: {
            if ((varbitclansettings_6277 == 1)) {
                return 1;
            };
            break;
        }
        case 125: {
            if ((varbitclansettings_6278 == 1)) {
                return 1;
            };
            break;
        }
        case 126: {
            return 1;
        }
        case 127: {
            return 1;
        }
        default: {
            return 0;
        }
    };
    return 0;
}