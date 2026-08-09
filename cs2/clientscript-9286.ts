//
function script9286(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var int4 = comp(-1, 65535);
    var int5 = -1 as struct;
    while ((int0 < 8)) {
        switch (int0) {
            case 0: {
                [int2, int3] = [1430, 93716480];
                break;
            }
            case 1: {
                [int2, int3] = [1670, 109445120];
                break;
            }
            case 2: {
                [int2, int3] = [1671, 109510656];
                break;
            }
            case 3: {
                [int2, int3] = [1672, 109576192];
                break;
            }
            case 4: {
                [int2, int3] = [1673, 109641728];
                break;
            }
            case 5: {
                [int2, int3] = [1436, 94109696];
                break;
            }
            case 6: {
                [int2, int3] = [1924, 126091264];
                break;
            }
            case 7: {
                [int2, int3] = [1925, 126156813];
                break;
            }
            default: {
                return;
            }
        };
        if ((script6354(int3) == 1)) {
            int1 = 1;
            while ((int1 <= 14)) {
                int4 = script7974(int2, int1);
                if ((IF_FIND(int4) == 1)) {
                    int5 = cc_getparam(3438);
                    switch (int5) {
                        case 14724:
                        case 27699:
                        case 27702: {
                            script6995(int2, int1, 0, 0, 0, -1);
                            break;
                        }
                        case 24325: {
                            script6995(int2, int1, 0, 0, 0, -1);
                            break;
                        }
                        default: {
                            if ((struct_getparam(int5, 4652) == 1)) {
                                if (((script690(int5) == 0) || (script690(int5) == 3))) {
                                    script6995(int2, int1, 0, 0, 1, -1);
                                };
                            };
                            break;
                        }
                    };
                };
                int1 = (int1 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    return;
}