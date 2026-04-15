//
function script6024(int0: int): int {
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
            return varbitclansettings_6258;
        }
        case 1: {
            return varbitclansettings_6259;
        }
        case 2: {
            return varbitclansettings_6260;
        }
        case 3: {
            return varbitclansettings_6261;
        }
        case 4: {
            return varbitclansettings_6262;
        }
        case 5: {
            return varbitclansettings_6263;
        }
        case 100: {
            return varbitclansettings_6264;
        }
        case 101: {
            return varbitclansettings_6265;
        }
        case 102: {
            return varbitclansettings_6266;
        }
        case 103: {
            return varbitclansettings_6267;
        }
        case 125: {
            return varbitclansettings_6268;
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