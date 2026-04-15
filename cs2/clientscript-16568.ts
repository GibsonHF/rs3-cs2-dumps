//
function script16568(int0: dbrow, int1: int): [string, int] {
    var string0 = dbrow_getfield(int0, 114688, 0);
    var int2 = 16777215;
    switch (int1) {
        case 1: {
            [string0, int2] = script17399(varclient_6480);
            break;
        }
        case 2: {
            switch (int0) {
                case 1202: {
                    string0 = `${TOSTRING_LOCALISED(RUNWEIGHT_VISIBLE(), 1)}kg`;
                    break;
                }
                case 1016: {
                    [string0, int2] = script17399(varclient_6480);
                    break;
                }
                case 6007: {
                    string0 = script16545();
                    break;
                }
            };
            break;
        }
        default: {
            switch (int0) {
                case 6001: {
                    if ((varbitplayer_45115 == 1)) {
                        string0 = "Filter Prayers";
                    } else {
                        string0 = "Show all Prayers";
                    };
                    break;
                }
                case 6002: {
                    if ((varbitplayer_27344 == 0)) {
                        string0 = "Filter unavailable abilities";
                    } else {
                        string0 = "Show unavailable abilities";
                    };
                    break;
                }
                case 6003: {
                    if ((varbitplayer_50989 == 0)) {
                        string0 = "Filter locked abilities";
                    } else {
                        string0 = "Show locked abilities";
                    };
                    break;
                }
                case 6004: {
                    if ((varbitplayer_50990 == 0)) {
                        string0 = "Filter lodestone teleports";
                    } else {
                        string0 = "Show lodestone teleports";
                    };
                    break;
                }
                case 6005: {
                    if ((varbitplayer_44637 == 0)) {
                        string0 = "Filter spells";
                    } else {
                        string0 = "Show all spells";
                    };
                    break;
                }
            };
            break;
        }
    };
    return [string0, int2];
}