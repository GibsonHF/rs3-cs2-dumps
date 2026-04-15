//
function script13002(int0: dbrow, int1: unknown_int, int2: unknown_int): int {
    switch (int0) {
        case 4132: {
            if ((int2 == 0)) {
                return varbitplayer_49428;
            };
            varbitplayer_49428 = 1;
            break;
        }
        case 4167: {
            if ((int2 == 0)) {
                return varbitplayer_35122;
            };
            varbitplayer_35122 = 1;
            break;
        }
        case 4166: {
            if ((int2 == 0)) {
                return varbitplayer_49338;
            };
            varbitplayer_49338 = 1;
            break;
        }
        case 4123: {
            if ((int2 == 0)) {
                return varbitplayer_50124;
            };
            varbitplayer_50124 = 1;
            break;
        }
        case 4598: {
            if ((int2 == 0)) {
                return varbitplayer_28990;
            };
            varbitplayer_28990 = 1;
            break;
        }
        case 7003:
        case 12788: {
            if ((int2 == 0)) {
                return varbitplayer_52303;
            };
            varbitplayer_52303 = 1;
            break;
        }
        case 7005: {
            if ((int2 == 0)) {
                return varbitplayer_52305;
            };
            varbitplayer_52305 = 1;
            break;
        }
        case 7006: {
            if ((int2 == 0)) {
                return varbitplayer_52306;
            };
            varbitplayer_52306 = 1;
            break;
        }
        case 7896:
        case 7895: {
            if ((int2 == 0)) {
                return varbitplayer_54122;
            };
            varbitplayer_54122 = 1;
            break;
        }
        case 12789:
        case 12790:
        case 12791:
        case 12792: {
            if ((int2 == 0)) {
                return varbitplayer_24930;
            };
            varbitplayer_24930 = 1;
            break;
        }
        case 12986: {
            if ((int2 == 0)) {
                return varbitplayer_54872;
            };
            varbitplayer_54872 = 1;
            break;
        }
        case 13597: {
            if ((int2 == 0)) {
                return varbitplayer_55478;
            };
            varbitplayer_55478 = 1;
            break;
        }
        case 13598: {
            if ((int2 == 0)) {
                return varbitplayer_55479;
            };
            varbitplayer_55479 = 1;
            break;
        }
        case 13285: {
            if ((int2 == 0)) {
                return varbitplayer_55298;
            };
            varbitplayer_55298 = 1;
            break;
        }
        case 13284: {
            if ((int2 == 0)) {
                return varbitplayer_55299;
            };
            if ((script18801() == 0)) {
                varbitplayer_55299 = 1;
            };
            break;
        }
        case 6677: {
            if ((int2 == 0)) {
                if ((script2102() == 0)) {
                    return 1;
                };
                return 0;
            };
            varbitplayer_55684 = (varbitplayer_55684 + 1);
            break;
        }
        case 14799: {
            if ((int2 == 0)) {
                return varbitplayer_57672;
            };
            break;
        }
        default: {
            script12478(`Missing plugin into bonds_singletime_purchase_plugin, at title ${dbrow_getfield(int0, 548864, 0)}`);
            break;
        }
    };
    return 0;
}