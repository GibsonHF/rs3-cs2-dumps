//
function script6014(int0: int): int {
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
            return varbitclansettings_6203;
        }
        case 1: {
            return varbitclansettings_6204;
        }
        case 2: {
            return varbitclansettings_6205;
        }
        case 3: {
            return varbitclansettings_6206;
        }
        case 4: {
            return varbitclansettings_6207;
        }
        case 5: {
            return varbitclansettings_6208;
        }
        case 100: {
            return varbitclansettings_6209;
        }
        case 101: {
            return varbitclansettings_6210;
        }
        case 102: {
            return varbitclansettings_6211;
        }
        case 103: {
            return varbitclansettings_6212;
        }
        case 125: {
            return varbitclansettings_6213;
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