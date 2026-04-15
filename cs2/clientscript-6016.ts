//
function script6016(int0: int): int {
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
            return varbitclansettings_6214;
        }
        case 1: {
            return varbitclansettings_6215;
        }
        case 2: {
            return varbitclansettings_6216;
        }
        case 3: {
            return varbitclansettings_6217;
        }
        case 4: {
            return varbitclansettings_6218;
        }
        case 5: {
            return varbitclansettings_6219;
        }
        case 100: {
            return varbitclansettings_6220;
        }
        case 101: {
            return varbitclansettings_6221;
        }
        case 102: {
            return varbitclansettings_6222;
        }
        case 103: {
            return varbitclansettings_6223;
        }
        case 125: {
            return varbitclansettings_6224;
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