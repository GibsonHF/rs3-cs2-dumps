//
function script15747(int0: unknown_int, int1: dbrow): int {
    if ((int0 == 0)) {
        return 0;
    };
    if (((PLATFORMTYPE() == 3) && (script16252(int1) == 0))) {
        return 0;
    };
    if (((dbrow_getfield(int1, 500000, 0) == false) && (script4148() == true))) {
        return 0;
    };
    if ((dbrow_getfield(int1, 500016, 0) == true)) {
        switch (int1) {
            case 7081:
            case 7082:
            case 7083: {
                if ((varclient_6911 == 1)) {
                    return 0;
                };
                break;
            }
            default: {
                if (((PLAYERMEMBER() == true) || (varclient_6911 == 1))) {
                    return 0;
                };
                break;
            }
        };
    };
    switch (int1) {
        case 3916: {
            if ((varclient_6893 == 1)) {
                return 0;
            };
            break;
        }
        case 3917: {
            if (((varclient_6894 == 1) || (varbitplayer_49042 == 1))) {
                return 0;
            };
            break;
        }
        case 3918: {
            if (((varclient_6895 == 1) || (varbitplayer_49041 == 1))) {
                return 0;
            };
            break;
        }
        case 14119: {
            if (((varplayer_9903 > 0) || (varclient_6911 == 1))) {
                return 0;
            };
            break;
        }
        case 4469: {
            if ((varbitplayer_49901 == 1)) {
                return 0;
            };
            return varbitplayer_49902;
        }
        case 4969: {
            if ((varclient_7037 == 1)) {
                return 0;
            };
            return script42(script11568());
        }
        case 7081: {
            if ((script11458() == 0)) {
                return 0;
            };
            if (((varclient_7114 == 1) || (varbitplayer_52431 == 1))) {
                return 0;
            };
            break;
        }
        case 7082: {
            if ((script11458() == 0)) {
                return 0;
            };
            if (((varclient_7115 == 1) || (varbitplayer_52432 == 1))) {
                return 0;
            };
            break;
        }
        case 7083: {
            if ((script11458() == 0)) {
                return 0;
            };
            if (((varclient_7116 == 1) || (varbitplayer_52433 == 1))) {
                return 0;
            };
            break;
        }
        case 7541:
        case 12787:
        case 7542: {
            if ((varclient_7156 == 1)) {
                return 0;
            };
            if ((script17436(int1) == 0)) {
                return 0;
            };
            switch (int1) {
                case 12787: {
                    if ((script18311() == false)) {
                        return 0;
                    };
                    break;
                }
                case 7541: {
                    if ((script18311() == true)) {
                        return 0;
                    };
                    break;
                }
            };
            break;
        }
        case 10239: {
            if ((script15766() == 0)) {
                return 0;
            };
            break;
        }
        case 5038: {
            if (((script18400(5038) == 0) || (varclient_7353 == 1))) {
                return 0;
            };
            break;
        }
        case 12990: {
            if (((script18400(12990) == 0) || (varclient_7353 == 1))) {
                return 0;
            };
            break;
        }
        case 12991: {
            if ((varclient_7354 == 1)) {
                return 0;
            };
            break;
        }
        case 12992: {
            if ((varclient_7355 == 1)) {
                return 0;
            };
            break;
        }
        case 12993: {
            if ((varclient_7356 == 1)) {
                return 0;
            };
            break;
        }
        case 13932:
        case 13931: {
            if ((varclient_7790 == 1)) {
                return 0;
            };
            if ((script19078(int1) == 0)) {
                return 0;
            };
            break;
        }
        case 14798: {
            if ((varclient_8290 == 1)) {
                return 0;
            };
            if (((varplayer_3079 < 8661) || (varplayer_3079 > 8671))) {
                return 0;
            };
            break;
        }
        case 14944:
        case 14943: {
            if ((varclient_8295 == 1)) {
                return 0;
            };
            if ((script12545(int1) == 0)) {
                return 0;
            };
            break;
        }
        case 15124: {
            if ((varclient_8296 == 1)) {
                return 0;
            };
            break;
        }
        case 15125: {
            if ((varclient_8297 == 1)) {
                return 0;
            };
            break;
        }
        case 15126: {
            if ((varclient_8298 == 1)) {
                return 0;
            };
            break;
        }
        case 15549: {
            if ((varclient_8306 == 1)) {
                return 0;
            };
            break;
        }
        case 15550: {
            if ((varclient_8307 == 1)) {
                return 0;
            };
            break;
        }
        case 15551: {
            if ((varclient_8308 == 1)) {
                return 0;
            };
            break;
        }
        case 15552: {
            if ((varclient_8309 == 1)) {
                return 0;
            };
            break;
        }
        case 15553: {
            if ((varclient_8310 == 1)) {
                return 0;
            };
            break;
        }
        case 15554: {
            if ((varclient_8311 == 1)) {
                return 0;
            };
            break;
        }
        case 17081:
        case 17082: {
            if ((varclient_8340 == 1)) {
                return 0;
            };
            break;
        }
    };
    if (((DB_GETFIELDCOUNT(int1, 500032) > 0) && (script12115(dbrow_getfield(int1, 500032, 0)) == 0))) {
        return 0;
    };
    return 1;
}