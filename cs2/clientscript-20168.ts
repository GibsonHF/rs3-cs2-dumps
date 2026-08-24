//
function script20168(int0: number): number {
    var int1 = -1;
    var int2 = -1;
    if ((varbitplayer_58537 == 0)) {
        varplayer_12329 = -1;
        return WORLDMAP_LISTELEMENT_START(1368064, 0, 3, 0);
    };
    var int3 = varplayer_12351;
    while ((varplayer_12329 <= 2)) {
        int1 = -1;
        int2 = -1;
        switch (varplayer_12329) {
            case 0: {
                int1 = script20169(1, 0, 12, 2, 1);
                break;
            }
            case 1: {
                int1 = script20169(6, 0, 12, 2, 1);
                int2 = script20169(1, 0, 15, 2, 1);
                break;
            }
            case 2: {
                int1 = script20169(1, 0, 14, 2, 1);
                unk11023(int1, 1368176, 1);
                if ((dbrow_findnext() == -1)) {
                    int1 = script20169(2, 0, 14, 2, 1);
                    unk11023(int1, 1368176, 1);
                    if ((dbrow_findnext() == -1)) {
                        int1 = script20169(0, 0, 14, 2, 1);
                    };
                };
                int2 = script20169(0, 0, 15, 2, 1);
                break;
            }
        };
        if ((int2 != -1)) {
            if ((int1 == -1)) {
                int1 = int2;
            } else {
                int1 = unk11018(int1, int2);
            };
        };
        if ((int1 != -1)) {
            unk11023(int1, 1368176, 1);
            if ((dbrow_findnext() != -1)) {
                return int1;
            };
        };
        varplayer_12329 = (varplayer_12329 + 1);
    };
    int1 = script20169(0, 0, 14, 2, 1);
    return int1;
}