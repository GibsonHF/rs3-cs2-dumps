//
function script9357(int0: int): int {
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
            return varbitclansettings_20978;
        }
        case 1: {
            return varbitclansettings_20979;
        }
        case 2: {
            return varbitclansettings_20980;
        }
        case 3: {
            return varbitclansettings_20981;
        }
        case 4: {
            return varbitclansettings_20982;
        }
        case 5: {
            return varbitclansettings_20983;
        }
        case 100: {
            return varbitclansettings_20984;
        }
        case 101: {
            return varbitclansettings_20985;
        }
        case 102: {
            return varbitclansettings_20986;
        }
        case 103: {
            return varbitclansettings_20987;
        }
        case 125: {
            return varbitclansettings_20988;
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