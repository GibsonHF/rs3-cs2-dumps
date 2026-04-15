//
function script6022(int0: int): int {
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
            return varbitclansettings_6247;
        }
        case 1: {
            return varbitclansettings_6248;
        }
        case 2: {
            return varbitclansettings_6249;
        }
        case 3: {
            return varbitclansettings_6250;
        }
        case 4: {
            return varbitclansettings_6251;
        }
        case 5: {
            return varbitclansettings_6252;
        }
        case 100: {
            return varbitclansettings_6253;
        }
        case 101: {
            return varbitclansettings_6254;
        }
        case 102: {
            return varbitclansettings_6255;
        }
        case 103: {
            return varbitclansettings_6256;
        }
        case 125: {
            return varbitclansettings_6257;
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