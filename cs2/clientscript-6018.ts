//
function script6018(int0: int): int {
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
            return varbitclansettings_6225;
        }
        case 1: {
            return varbitclansettings_6226;
        }
        case 2: {
            return varbitclansettings_6227;
        }
        case 3: {
            return varbitclansettings_6228;
        }
        case 4: {
            return varbitclansettings_6229;
        }
        case 5: {
            return varbitclansettings_6230;
        }
        case 100: {
            return varbitclansettings_6231;
        }
        case 101: {
            return varbitclansettings_6232;
        }
        case 102: {
            return varbitclansettings_6233;
        }
        case 103: {
            return varbitclansettings_6234;
        }
        case 125: {
            return varbitclansettings_6235;
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