//
function script20168(int0: cs2enum): unknown_int {
    var int1 = -1;
    if ((varbitplayer_58537 == 0)) {
        varplayer_12329 = -1;
        return WORLDMAP_LISTELEMENT_START(1368064, 0, 3, 0);
    };
    var int2 = varplayer_12351;
    while ((varplayer_12329 <= 8)) {
        int1 = -1;
        switch (varplayer_12329) {
            case 0: {
                int1 = script20169(1, 0, 11, 2, 1);
                break;
            }
            case 1: {
                int1 = script20169(6, 0, 11, 2, 1);
                break;
            }
            case 3: {
                int2 = enum_getvalue(0, 0, int0, varplayer_12351);
                if (((int2 != -1) && (int2 != varplayer_12351))) {
                    int1 = script20169(1, 0, int2, 2, 1);
                };
                break;
            }
            case 4: {
                int1 = script20169(1, 0, 13, 2, 1);
                break;
            }
            case 2: {
                int1 = script20169(0, 0, 11, 2, 1);
                break;
            }
            case 5: {
                int1 = script20169(0, 0, 11, 2, 1);
                break;
            }
            case 6: {
                int2 = enum_getvalue(0, 0, int0, varplayer_12351);
                if (((int2 != -1) && (int2 != varplayer_12351))) {
                    int1 = script20169(0, 0, int2, 2, 1);
                };
                break;
            }
            case 7: {
                int1 = script20169(0, 0, 13, 2, 1);
                break;
            }
            case 8: {
                int1 = script20169(0, 0, 13, 2, 1);
                break;
            }
        };
        if ((int1 != -1)) {
            unk11023(int1, 1368160, 1);
            dbrow_findnext();
            if ((stack() != -1)) {
                return int1;
            };
        };
        varplayer_12329 = (varplayer_12329 + 1);
    };
    int1 = script20169(0, 0, 13, 2, 1);
    return int1;
}