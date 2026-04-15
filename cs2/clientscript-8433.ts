//
function script8433(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: int): void {
    var int8 = 0;
    var int9 = 0;
    if ((int0 == comp(1617, 0))) {
        if ((((int7 != -1) && (int7 < ((5 * 4) * 2))) && (MODULO(int7, 2) == 0))) {
            int9 = (int7 / 2);
            switch ((int9 / 4)) {
                case 0: {
                    var int0 = comp(1460, 5);
                    break;
                }
                case 1: {
                    int0 = comp(1452, 7);
                    break;
                }
                case 2: {
                    int0 = comp(1461, 7);
                    break;
                }
                case 3: {
                    int0 = comp(1219, 7);
                    break;
                }
                case 4: {
                    int0 = comp(1883, 7);
                    break;
                }
            };
            int9 = MODULO(int9, 4);
        } else {
            return;
        };
    } else {
        int9 = script8434(int7);
        int9 = MAX(int9, 0);
    };
    switch (int0) {
        case 95682565: {
            int8 = 1;
            varbitplayer_18787 = int9;
            varbitplayer_27697 = 0;
            break;
        }
        case 95158279: {
            int8 = 2;
            varbitplayer_18789 = int9;
            varbitplayer_27697 = 1;
            break;
        }
        case 95748103: {
            if (((varbitplayer_27168 == 1) && (int9 > 2))) {
                return;
            };
            int8 = 3;
            varbitplayer_18791 = int9;
            varbitplayer_27697 = 2;
            break;
        }
        case 123469831: {
            int8 = 8;
            int9 = 0;
            break;
        }
        case 123535367: {
            int8 = 9;
            int9 = 0;
            break;
        }
        case 123666439: {
            int8 = 10;
            int9 = 0;
            break;
        }
        case 123600903: {
            int8 = 11;
            int9 = 0;
            break;
        }
        case 79888391: {
            int8 = 4;
            varbitplayer_53124 = int9;
            varbitplayer_27697 = 3;
            break;
        }
        case 79953927: {
            int8 = 14;
            int9 = 0;
            break;
        }
        case 80019463: {
            int8 = 15;
            int9 = 0;
            break;
        }
        case 123404295: {
            int8 = 5;
            varbitplayer_36454 = int9;
            varbitplayer_27697 = 4;
            break;
        }
        case 94961671: {
            int8 = 12;
            int9 = 0;
            break;
        }
        case 123338759: {
            int8 = 13;
            int9 = 0;
            break;
        }
        case 95027200: {
            int8 = 1;
            varbitplayer_18786 = int9;
            break;
        }
        case 95420423: {
            int8 = 2;
            varbitplayer_18788 = int9;
            break;
        }
        case 95617031: {
            if (((varbitplayer_27168 == 1) && (int9 > 2))) {
                return;
            };
            int8 = 3;
            varbitplayer_18790 = int9;
            break;
        }
        case 79101959: {
            int8 = 4;
            varbitplayer_53123 = int9;
            break;
        }
        case 123207687: {
            int8 = 5;
            varbitplayer_36453 = int9;
            break;
        }
        default: {
            return;
        }
    };
    int8 = MAX(int8, 1);
    int9 = MAX(int9, 0);
    if ((varbitplayer_27170 == 2)) {
        script11341(comp(1617, 0), 105971715, comp(1617, 4), comp(1617, 5), comp(1617, 6), comp(1617, 7), comp(1617, 8));
    };
    script8426(int0, int1, int2, int3, int4, int5, int6, int8, int9);
    return;
}