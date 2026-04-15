//
function script15322(int0: achievement): [int, int] {
    if ((int0 == -1 as achievement)) {
        return [0, 0];
    };
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = unk11135(int0);
    switch (int0) {
        case 2301:
        case 2302:
        case 2303:
        case 2304:
        case 2305:
        case 2306:
        case 2307: {
            int1 = (int1 / 6000);
            int2 = (int2 / 6000);
            break;
        }
        case 2959: {
            int2 = (100 * 1000000);
            int1 = MIN(int2, (varplayer_9746 * 1000000));
            if ((int1 < int2)) {
                int1 = (int1 + varbitplayer_48911);
            };
            break;
        }
        case 2962: {
            int1 = ACHIEVEMENT_TOTAL_RUNESCORE();
            int2 = 5000;
            break;
        }
        case 3535: {
            int1 = varbitplayer_56525;
            int2 = (40 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3539: {
            int1 = varbitplayer_56525;
            int2 = (50 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3545: {
            int1 = varbitplayer_56525;
            int2 = (200 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3551: {
            int1 = varbitplayer_56525;
            int2 = (500 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3558: {
            int1 = varbitplayer_56525;
            int2 = (1000 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3565: {
            int1 = varbitplayer_56525;
            int2 = (1400 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3572: {
            int1 = varbitplayer_56525;
            int2 = (1800 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3579: {
            int1 = varbitplayer_56525;
            int2 = (2000 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3585: {
            int1 = varbitplayer_56525;
            int2 = (2150 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3592: {
            int1 = varbitplayer_56525;
            int2 = (2300 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3598: {
            int1 = varbitplayer_56525;
            int2 = (2500 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3540: {
            int1 = varbitplayer_56542;
            int2 = (5 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3546: {
            int1 = varbitplayer_56542;
            int2 = (20 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3552: {
            int1 = varbitplayer_56542;
            int2 = (40 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3559: {
            int1 = varbitplayer_56542;
            int2 = (80 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3566: {
            int1 = varbitplayer_56542;
            int2 = (120 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3573: {
            int1 = varbitplayer_56542;
            int2 = (160 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3580: {
            int1 = varbitplayer_56542;
            int2 = (200 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3586: {
            int1 = varbitplayer_56542;
            int2 = (250 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3593: {
            int1 = varbitplayer_56542;
            int2 = (300 * MAX(2, varbitplayer_56588));
            break;
        }
        case 3599: {
            int1 = varbitplayer_56542;
            int2 = (375 * MAX(2, varbitplayer_56588));
            break;
        }
        case 2787: {
            int1 = (((((((((((varbitplayer_3335 + varbitplayer_43020) + varbitplayer_43026) + varbitplayer_43027) + varbitplayer_43030) + varbitplayer_43031) + varbitplayer_43032) + varbitplayer_43033) + varbitplayer_43034) + varbitplayer_43035) + varbitplayer_43036) + varbitplayer_43037);
            if (((varbitplayer_43019 == 1) || (varbitplayer_15454 == 1))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_3359 == 1) || (varbitplayer_15735 == 1))) {
                int1 = (int1 + 1);
            };
            if ((((varbitplayer_43021 == 1) || (varbitplayer_15478 == 1)) || (varbitplayer_15564 == 1))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_15577 == 1) || (varbitplayer_26542 == 1))) {
                int1 = (int1 + 1);
            };
            if ((((varbitplayer_43022 == 1) || (varbitplayer_15479 == 1)) || (varbitplayer_15856 == 1))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_43023 == 1) || (varbitplayer_15488 == 1))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_43024 == 1) || (varbitplayer_15647 == 1))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_43025 == 1) || (varbitplayer_35977 == 1))) {
                int1 = (int1 + 1);
            };
            if ((((varbitplayer_43028 == 1) || (varbitplayer_15812 == 1)) || (varbitplayer_15964 == 1))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_43029 == 1) || (varbitplayer_17767 == 1))) {
                int1 = (int1 + 1);
            };
            int2 = 22;
            break;
        }
        case 4041: {
            int1 = (varbitplayer_58090 + varbitplayer_58089);
            if (((varbitplayer_58079 == 1) || (varbitplayer_55881 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58080 == 1) || (varbitplayer_55884 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58081 == 1) || (varbitplayer_55887 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58082 == 1) || (varbitplayer_55890 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58083 == 1) || (varbitplayer_55893 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58084 == 1) || (varbitplayer_55896 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58085 == 1) || (varbitplayer_55899 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58086 == 1) || (varbitplayer_55902 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58087 == 1) || (varbitplayer_55905 > 0))) {
                int1 = (int1 + 1);
            };
            if (((varbitplayer_58088 == 1) || (varbitplayer_55908 > 0))) {
                int1 = (int1 + 1);
            };
            int2 = 12;
            break;
        }
        case 1788: {
            if (((varbitplayer_42944 == 1) || (varplayer_1627 >= 300))) {
                int1 = 4;
            } else if (((varbitplayer_42943 == 1) || (varplayer_1627 >= 200))) {
                int1 = 3;
            } else if (((varbitplayer_42942 == 1) || (varplayer_1627 >= 100))) {
                int1 = 2;
            } else if (((varbitplayer_42941 == 1) || (varplayer_1627 >= 1))) {
                int1 = 1;
            };
            int2 = 4;
            break;
        }
    };
    if ((int1 > int2)) {
        int1 = int2;
    };
    return [int1, int2];
}