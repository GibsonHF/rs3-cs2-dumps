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
        case 15: {
            int2 = enum_getvalue(0, 0, 9278, varplayer_12351);
            if (((int2 != -1) && (int2 != 15))) {
                return script20169(int0, int1, int2, int3, int4);
            };
            return -1;
        }
        case 14: {
            int2 = 0;
            if ((int4 == 0)) {
                stack(int7);
                int7 = script18338(0);
            };
            stack(int2);
            int2 = (int2 + 1);
            while (BRANCH_LESS_THAN(11)) {
                if ((script20133(int2) == 1)) {
                    stack(int7);
                    int7 = script18338(int2);
                };
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 8: {
            int7 = script18377();
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 2: {
            int7 = script19030();
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 6: {
            int7 = script19135();
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 3: {
            int7 = script19214();
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 4: {
            script20200();
            int7 = [];
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 10: {
            script20201();
            int7 = [];
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 11: {
            script20202();
            int7 = [];
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 1: {
            script20203();
            int7 = [];
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 5: {
            script20205();
            int7 = [];
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 7: {
            script20206();
            int7 = [];
            if ((int4 == 1)) {
                int7 = unk11018(int7, WORLDMAP_LISTELEMENT_START(1368160, 0, 3, 0));
            };
            int6 = IF_SETPLAYERHEAD_SELF(int6, int7);
            break;
        }
        case 9: {
            script20272();
            int7 = [];
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