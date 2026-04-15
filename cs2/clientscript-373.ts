//
function script373(int0: int, int1: int, int2: struct): void {
    if ((TESTBIT(struct_getparam(int2, 6653), int0) == 0)) {
        return;
    };
    var int3 = 0;
    var int4 = 0;
    switch (int0) {
        case 2: {
            if ((int2 == 37632 as struct)) {
                varbitplayer_36983 = 0;
            };
            int3 = 1;
            int4 = 0;
            break;
        }
        case 3: {
            if ((int2 == 37632 as struct)) {
                varbitplayer_36983 = 0;
            };
            int3 = 1;
            int4 = 1;
            break;
        }
        case 4: {
            if ((int2 == 37632 as struct)) {
                varbitplayer_36983 = 0;
            };
            int3 = 0;
            int4 = 0;
            break;
        }
        case 5: {
            [int3, int4] = script11599(int1, int2);
            if ((int2 == 37632 as struct)) {
                varbitplayer_36983 = 1;
            };
            break;
        }
        default: {
            [int3, int4] = script11599(int1, int2);
            if ((int4 == -1)) {
                int3 = (1 - int3);
            } else if ((int3 == 0)) {
                if ((int2 == 37632 as struct)) {
                    if ((varbitplayer_36983 == 1)) {
                        varbitplayer_36983 = 0;
                        int3 = 1;
                    } else {
                        varbitplayer_36983 = 1;
                    };
                } else {
                    int3 = 1;
                };
            } else if ((int4 == 1)) {
                int3 = 0;
                int4 = 0;
            } else {
                int4 = 1;
            };
            break;
        }
    };
    if (((int3 == 0) && (TESTBIT(struct_getparam(int2, 6652), script383(int1)) == 1))) {
        int3 = 1;
    };
    switch (int2) {
        case 37631: {
            script8528(int1, int3, int4);
            break;
        }
        case 37632: {
            script8529(int1, int3, int4);
            break;
        }
        case 37633: {
            script8530(int1, int3, int4);
            break;
        }
        case 37634: {
            script8531(int1, int3, int4);
            break;
        }
        case 37635: {
            script8532(int1, int3, int4);
            break;
        }
        case 37636: {
            script8533(int1, int3, int4);
            break;
        }
        case 37637: {
            script10486(int1, int3, int4);
            break;
        }
        case 52683: {
            script8534(int1, int3, int4);
            break;
        }
        case 37641: {
            script9213(int1, (1 - varbitplayer_20828));
            break;
        }
        case 50652: {
            script19380(int1, int3, int4);
            break;
        }
        default: {
            return;
        }
    };
    return;
}