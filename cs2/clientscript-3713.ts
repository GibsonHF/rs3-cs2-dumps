//
function script3713(int0: int, int1: unknown_int): unknown_int {
    var int2 = 0;
    var int3 = script6798(int0);
    if ((struct_getparam(int3, 1345) > 0)) {
        return script2148(1, struct_getparam(int3, 1345));
    };
    var int4 = -1 as struct;
    var int5 = 0;
    var int6 = 0;
    var int7 = 1;
    var int8 = 20;
    while ((int7 <= int8)) {
        switch (int7) {
            case 1: {
                if (((script4148() == false) || (struct_getparam(int3, 4589) == 0))) {
                    int5 = struct_getparam(int3, 1294);
                    int6 = struct_getparam(int3, 1295);
                } else {
                    int5 = struct_getparam(int3, 4588);
                    int6 = struct_getparam(int3, 4589);
                };
                break;
            }
            case 2: {
                int5 = struct_getparam(int3, 1296);
                int6 = struct_getparam(int3, 1297);
                break;
            }
            case 3: {
                int5 = struct_getparam(int3, 1298);
                int6 = struct_getparam(int3, 1299);
                break;
            }
            case 4: {
                int5 = struct_getparam(int3, 1300);
                int6 = struct_getparam(int3, 1301);
                break;
            }
            case 5: {
                int5 = struct_getparam(int3, 1302);
                int6 = struct_getparam(int3, 1303);
                break;
            }
            case 6: {
                int5 = struct_getparam(int3, 1304);
                int6 = struct_getparam(int3, 1305);
                break;
            }
            case 7: {
                int5 = struct_getparam(int3, 1306);
                int6 = struct_getparam(int3, 1307);
                break;
            }
            case 8: {
                int5 = struct_getparam(int3, 1308);
                int6 = struct_getparam(int3, 1309);
                break;
            }
            case 9: {
                int5 = struct_getparam(int3, 1310);
                int6 = struct_getparam(int3, 1311);
                break;
            }
            case 10: {
                int5 = struct_getparam(int3, 1312);
                int6 = struct_getparam(int3, 1313);
                break;
            }
            case 11: {
                int5 = struct_getparam(int3, 2227);
                int6 = struct_getparam(int3, 2228);
                break;
            }
            case 12: {
                int5 = struct_getparam(int3, 2229);
                int6 = struct_getparam(int3, 2230);
                break;
            }
            case 13: {
                int5 = struct_getparam(int3, 4474);
                int6 = struct_getparam(int3, 4475);
                break;
            }
            case 14: {
                int5 = struct_getparam(int3, 6434);
                int6 = struct_getparam(int3, 6435);
                break;
            }
            case 15: {
                int5 = struct_getparam(int3, 6436);
                int6 = struct_getparam(int3, 6437);
                break;
            }
            case 16: {
                int5 = struct_getparam(int3, 6438);
                int6 = struct_getparam(int3, 6439);
                break;
            }
            case 17: {
                int5 = struct_getparam(int3, 6440);
                int6 = struct_getparam(int3, 6441);
                break;
            }
            case 18: {
                int5 = struct_getparam(int3, 6442);
                int6 = struct_getparam(int3, 6443);
                break;
            }
            case 19: {
                int5 = struct_getparam(int3, 6444);
                int6 = struct_getparam(int3, 6445);
                break;
            }
            case 20: {
                int5 = struct_getparam(int3, 6446);
                int6 = struct_getparam(int3, 6447);
                break;
            }
        };
        if (((int5 > 0) && (int5 < 60))) {
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int5)) < int6)) {
                return 0;
            };
        } else if ((int5 == 60)) {
            int4 = script5795(int6);
            if ((int4 == -1 as struct)) {
                return 0;
            };
            if ((script3227(int6) != 2)) {
                return 0;
            };
        } else if (((int5 == 61) && (script7073(int6) != 2))) {
            return 0;
        };
        if ((int5 == 0)) {
            int7 = (int8 + 1);
        } else {
            int7 = (int7 + 1);
        };
    };
    if ((script1432() < struct_getparam(int3, 2233))) {
        return 0;
    };
    if ((int1 == 1)) {
        return 1;
    };
    if ((int1 == 0)) {
        return 0;
    };
    switch (int0) {
        case 3000: {
            if (((varplayer_1297 < varbitplayer_4915) && (script4218() > 0))) {
                return 0;
            };
            break;
        }
        case 3001: {
            if ((script1432() < 40)) {
                return 0;
            };
            break;
        }
        case 3002: {
            if ((varbitplayer_4165 == 0)) {
                return 0;
            };
            break;
        }
        case 3047: {
            if ((((varbitplayer_3617 == 1) && (varbitplayer_3584 < 60)) && (varbitplayer_13240 != 40))) {
                return 0;
            };
            break;
        }
        case 3005: {
            if ((STAT(21 as stat) < 17)) {
                return 0;
            };
            break;
        }
        case 3072: {
            if ((varbitplayer_9902 < 10)) {
                return 0;
            };
            break;
        }
        case 3009: {
            if ((varbitplayer_13518 < 90)) {
                return 0;
            };
            break;
        }
        case 3010: {
            if ((varbitplayer_26628 == 1)) {
                return 0;
            };
            break;
        }
        case 3011: {
            if ((varplayer_1297 < 33)) {
                return 0;
            };
            break;
        }
        case 3012: {
            if ((STAT_BASE(20 as stat) < 50)) {
                return 0;
            };
            break;
        }
        case 3013: {
            if ((script1432() < 55)) {
                return 0;
            };
            break;
        }
        case 3015: {
            if ((((STAT_BASE(0 as stat) < 65) && (STAT_BASE(1 as stat) < 65)) || ((INV_TOTAL(93 as inv, 18757 as obj) == 0) && (INV_TOTAL(95 as inv, 18757 as obj) == 0)))) {
                return 0;
            };
            break;
        }
        case 3052: {
            if ((varclient_5212 == 0)) {
                return 0;
            };
            break;
        }
        case 3031: {
            if ((script1432() < 70)) {
                return 0;
            };
            break;
        }
        case 3034: {
            if (((((STAT_BASE(2 as stat) + STAT_BASE(0 as stat)) < 130) && (STAT_BASE(0 as stat) < 99)) && (STAT_BASE(2 as stat) < 99))) {
                return 0;
            };
            break;
        }
        case 858: {
            if (((varplayer_2171 < 60) && (varbitplayer_13266 < 5))) {
                return 0;
            };
            break;
        }
        case 881: {
            if (((varplayer_3202 < 7) || (varplayer_3197 < 7))) {
                return 0;
            };
            break;
        }
        case 656: {
            if ((varbitplayer_10459 != 1)) {
                return 0;
            };
            break;
        }
        case 659: {
            if ((varbitplayer_11498 < 280)) {
                return 0;
            };
            break;
        }
        case 1200: {
            if ((varplayer_2205 < 9)) {
                return 0;
            };
            break;
        }
        case 3074: {
            if ((varbitplayer_30071 < 200)) {
                return 0;
            };
            break;
        }
        case 3085: {
            if ((varbitplayer_15817 < 10)) {
                return 0;
            };
            break;
        }
        case 3087: {
            if ((script18522(500 as quest) == false)) {
                return 0;
            };
            break;
        }
        default: {
            return 1;
        }
    };
    return 1;
}