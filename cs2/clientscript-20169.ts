//
function script20169(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = varplayer_12314;
    stack(int5);
    script20980();
    var int6 = [];
    if ((int6 == -1)) {
        script12478(`League ${inttostring(int5, 10)} has not been plugged in to filter generation.`);
        return -1;
    };
    var int7 = -1;
    switch (int2) {
        case 0: {
            break;
        }
        case 12: {
            var int2 = varplayer_12351;
            if ((int2 >= 0)) {
                if ((int2 < 60)) {
                    if ((int2 != 10)) {
                        int7 = unk11018(WORLDMAP_LISTELEMENT_START(1368160, int2, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
                        int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
                    } else {
                        int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
                    };
                } else {
                    int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
                };
            } else {
                int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            break;
        }
        case 14: {
            break;
        }
        case 8: {
            int7 = unk11018(unk11018(unk11018(unk11018(unk11018(unk11018(WORLDMAP_LISTELEMENT_START(1368160, 1, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 2, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 27, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 21, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 34, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 35, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 18, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 2: {
            int7 = unk11018(unk11018(unk11018(unk11018(unk11018(WORLDMAP_LISTELEMENT_START(1368160, 3, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 22, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 8, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 30, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 32, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 26, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 6: {
            int7 = unk11018(unk11018(unk11018(unk11018(unk11018(unk11018(unk11018(WORLDMAP_LISTELEMENT_START(1368160, 4, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 5, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 28, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 15, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 16, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 31, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 20, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 29, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 3: {
            int7 = unk11018(WORLDMAP_LISTELEMENT_START(1368160, 11, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 25, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 4: {
            int7 = unk11018(unk11018(WORLDMAP_LISTELEMENT_START(1368160, 7, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 17, 3, 0)), WORLDMAP_LISTELEMENT_START(1368160, 24, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 10: {
            int7 = unk11018(WORLDMAP_LISTELEMENT_START(1368160, 13, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 23, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 11: {
            int7 = unk11018(WORLDMAP_LISTELEMENT_START(1368160, 14, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 12, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 1: {
            int7 = WORLDMAP_LISTELEMENT_START(1368160, 33, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 5: {
            int7 = WORLDMAP_LISTELEMENT_START(1368160, 36, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 7: {
            int7 = WORLDMAP_LISTELEMENT_START(1368160, 6, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 9: {
            int7 = WORLDMAP_LISTELEMENT_START(1368160, 9, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 13: {
            int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            break;
        }
        default: {
            script12478(`Error unhandled locality filter: ${inttostring(int2, 10)}`);
            break;
        }
    };
    if ((int1 != 0)) {
        if ((int1 == 2)) {
            int7 = unk11018(WORLDMAP_LISTELEMENT_START(1368144, 1, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 2, 3, 0));
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
        } else {
            int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368144, int1, 3, 0));
        };
    };
    if ((int0 != 0)) {
        if ((int0 == 6)) {
            int7 = unk11018(WORLDMAP_LISTELEMENT_START(1368176, 1, 3, 0), WORLDMAP_LISTELEMENT_START(1368176, 2, 3, 0));
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
        } else {
            int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368176, int0, 3, 0));
        };
    };
    switch (int3) {
        case 0: {
            break;
        }
        case 2: {
            int6 = IF_SETPLAYERHEAD_SELF(int6, unk11050(1368128, 0, 3, 0));
            break;
        }
        case 1: {
            int6 = IF_SETPLAYERHEAD_SELF(int6, unk11050(1368128, 1, 3, 0));
            break;
        }
    };
    return int6;
}