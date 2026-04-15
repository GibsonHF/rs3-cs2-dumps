//
function script5964(int0: int): int {
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
            return varbitclansettings_6171;
        }
        case 1: {
            return varbitclansettings_6172;
        }
        case 2: {
            return varbitclansettings_6173;
        }
        case 3: {
            return varbitclansettings_6174;
        }
        case 4: {
            return varbitclansettings_6175;
        }
        case 5: {
            return varbitclansettings_6176;
        }
        case 100: {
            return varbitclansettings_6177;
        }
        case 101: {
            return varbitclansettings_6178;
        }
        case 102: {
            return varbitclansettings_6179;
        }
        case 103: {
            return varbitclansettings_6180;
        }
        case 125: {
            return varbitclansettings_6181;
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