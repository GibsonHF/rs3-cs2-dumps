//
function script20169(int0: int, int1: int, int2: int, int3: int, int4: unknown_int): unknown_int {
    var int5 = varplayer_12314;
    var int6 = -1;
    var int7 = -1;
    switch (int5) {
        case 1: {
            int6 = WORLDMAP_LISTELEMENT_START(1368080, 1, 3, 0);
            break;
        }
        default: {
            script12478(`League ${inttostring(int5, 10)} has not been plugged in to filter generation.`);
            return -1;
        }
    };
    switch (int2) {
        case 0: {
            break;
        }
        case 11: {
            var int2 = varplayer_12351;
            if ((((int2 >= 0) && (int2 < 60)) && (int2 != 10))) {
                int7 = unk11014(WORLDMAP_LISTELEMENT_START(1368144, int2, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
                int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            } else {
                int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            break;
        }
        case 13: {
            break;
        }
        case 7: {
            int7 = unk11014(unk11014(unk11014(unk11014(unk11014(unk11014(WORLDMAP_LISTELEMENT_START(1368144, 1, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 2, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 27, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 21, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 34, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 35, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 18, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 2: {
            int7 = unk11014(unk11014(unk11014(unk11014(unk11014(WORLDMAP_LISTELEMENT_START(1368144, 3, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 22, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 8, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 30, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 32, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 26, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 5: {
            int7 = unk11014(unk11014(unk11014(unk11014(unk11014(unk11014(unk11014(WORLDMAP_LISTELEMENT_START(1368144, 4, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 5, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 28, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 15, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 16, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 31, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 20, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 29, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 3: {
            int7 = unk11014(WORLDMAP_LISTELEMENT_START(1368144, 11, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 25, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 4: {
            int7 = unk11014(unk11014(WORLDMAP_LISTELEMENT_START(1368144, 7, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 17, 3, 0)), WORLDMAP_LISTELEMENT_START(1368144, 24, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 9: {
            int7 = unk11014(WORLDMAP_LISTELEMENT_START(1368144, 13, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 23, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 10: {
            int7 = unk11014(WORLDMAP_LISTELEMENT_START(1368144, 14, 3, 0), WORLDMAP_LISTELEMENT_START(1368144, 12, 3, 0));
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 1: {
            int7 = WORLDMAP_LISTELEMENT_START(1368144, 33, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 6: {
            int7 = WORLDMAP_LISTELEMENT_START(1368144, 6, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 8: {
            int7 = WORLDMAP_LISTELEMENT_START(1368144, 9, 3, 0);
            if ((int4 == 1)) {
                int7 = unk11014(int7, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 12: {
            int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368144, 0, 3, 0));
            break;
        }
        default: {
            script12478(`Error unhandled locality filter: ${inttostring(int2, 10)}`);
            break;
        }
    };
    if ((int1 != 0)) {
        int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368128, int1, 3, 0));
    };
    if ((int0 != 0)) {
        if ((int0 == 6)) {
            int7 = unk11014(WORLDMAP_LISTELEMENT_START(1368160, 1, 3, 0), WORLDMAP_LISTELEMENT_START(1368160, 2, 3, 0));
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
        } else {
            int6 = IF_SETPLAYERHEAD_SELF(int6, WORLDMAP_LISTELEMENT_START(1368160, int0, 3, 0));
        };
    };
    switch (int3) {
        case 0: {
            break;
        }
        case 2: {
            int6 = IF_SETPLAYERHEAD_SELF(unk11132(int6, 1368112, 0, 3, 0));
            break;
        }
        case 1: {
            int6 = IF_SETPLAYERHEAD_SELF(unk11132(int6, 1368112, 1, 3, 0));
            break;
        }
    };
    return int6;
}