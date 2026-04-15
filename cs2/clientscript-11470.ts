//
function script11470(int0: obj): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    var int1 = -1 as obj;
    var int2 = 0;
    if (((item_getparam(int0, 1324) == 0) && (script12070(int0) == 1))) {
        int2 = 200000;
    };
    if ((item_getparam(int0, 3109) > 0)) {
        int2 = item_getparam(int0, 3114);
        if ((int2 < 1)) {
            switch (OC_WEARPOS(int0)) {
                case 17: {
                    int2 = 250000;
                    break;
                }
                case 0: {
                    int2 = item_getparam(26322 as obj, 3114);
                    break;
                }
                case 4: {
                    int2 = item_getparam(26323 as obj, 3114);
                    break;
                }
                case 7: {
                    int2 = item_getparam(26324 as obj, 3114);
                    break;
                }
                case 9: {
                    int2 = item_getparam(38812 as obj, 3114);
                    break;
                }
                case 10: {
                    int2 = item_getparam(38806 as obj, 3114);
                    break;
                }
            };
        };
        if ((int2 < 1)) {
            return 0;
        };
    };
    if ((item_getparam(int0, 3384) == 1)) {
        return 0;
    };
    if (((item_getparam(int0, 1324) == 1) && (item_getparam(int0, 3793) == 0))) {
        if ((item_getparam(int0, 1327) != -1 as obj)) {
            int2 = item_getparam(int0, 1328);
        } else if ((item_getparam(int0, 1079) > 0)) {
            int2 = item_getparam(int0, 1079);
        } else if ((item_getparam(int0, 3792) != -1 as obj)) {
            int2 = item_getparam(int0, 3230);
            if ((int2 < 1)) {
                int2 = item_getparam(item_getparam(int0, 3792), 3230);
            };
        } else if ((item_getparam(int0, 88) != -1 as obj)) {
            switch (OC_WEARPOS(int0)) {
                case 0: {
                    int2 = 180000;
                    break;
                }
                case 4: {
                    int2 = 270000;
                    break;
                }
                case 7: {
                    int2 = 240000;
                    break;
                }
                case 3: {
                    int2 = 300000;
                    break;
                }
                default: {
                    script12478(`Got an item with barrows_degraded_state and a non-supported wearpos: ${inttostring(OC_WEARPOS(int0), 10)}`);
                    break;
                }
            };
        } else if ((int0 == 24338 as obj)) {
            int2 = 200000;
        } else if ((item_getparam(int0, 5635) > 0)) {
            int2 = 200000;
        } else if ((item_getparam(int0, 5722) > 0)) {
            int2 = 200000;
        } else if (((item_getparam(int0, 3385) > 0) && (item_getparam(int0, 4563) == 0))) {
            if ((item_getparam(int0, 4656) == 1)) {
                int2 = script5253();
            } else if ((item_getparam(int0, 7808) == true)) {
                int2 = 200000;
            } else {
                int2 = item_getparam(int0, 3383);
                if (((int2 == -2) || ((int2 == -1) && (item_getparam(int0, 4548) != -1 as obj)))) {
                    int2 = 200000;
                } else if ((int2 < 1)) {
                    int1 = item_getparam(int0, 3382);
                    if ((int1 != -1 as obj)) {
                        int2 = item_getparam(int1, 3383);
                        if ((int2 < 1)) {
                            int1 = item_getparam(int0, 3382);
                            if ((int1 != -1 as obj)) {
                                int2 = item_getparam(int1, 3383);
                            };
                        };
                    };
                };
            };
        };
    };
    if ((int2 < 1)) {
        return 0;
    };
    return SCALE(int2, 100, 20);
}