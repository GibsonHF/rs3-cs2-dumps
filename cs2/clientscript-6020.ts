//
function script6020(int0: int): int {
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
            return varbitclansettings_6236;
        }
        case 1: {
            return varbitclansettings_6237;
        }
        case 2: {
            return varbitclansettings_6238;
        }
        case 3: {
            return varbitclansettings_6239;
        }
        case 4: {
            return varbitclansettings_6240;
        }
        case 5: {
            return varbitclansettings_6241;
        }
        case 100: {
            return varbitclansettings_6242;
        }
        case 101: {
            return varbitclansettings_6243;
        }
        case 102: {
            return varbitclansettings_6244;
        }
        case 103: {
            return varbitclansettings_6245;
        }
        case 125: {
            return varbitclansettings_6246;
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