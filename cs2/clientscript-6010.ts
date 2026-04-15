//
function script6010(int0: int): int {
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
            return varbitclansettings_6279;
        }
        case 1: {
            return varbitclansettings_6280;
        }
        case 2: {
            return varbitclansettings_6281;
        }
        case 3: {
            return varbitclansettings_6282;
        }
        case 4: {
            return varbitclansettings_6283;
        }
        case 5: {
            return varbitclansettings_6284;
        }
        case 100: {
            return varbitclansettings_6285;
        }
        case 101: {
            return varbitclansettings_6286;
        }
        case 102: {
            return varbitclansettings_6287;
        }
        case 103: {
            return varbitclansettings_6288;
        }
        case 125: {
            return varbitclansettings_6289;
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