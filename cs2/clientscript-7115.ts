//
function script7115(int0: obj, int1: int, int2: obj, int3: int, int4: unknown_int): int {
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    switch (OC_CATEGORY(int2)) {
        case 4603: {
            int7 = script14693(int2);
            break;
        }
        case 4602: {
            int7 = script14906(int2);
            break;
        }
        case 5318: {
            int7 = script11567(int2, 1);
            break;
        }
        case 4503: {
            int7 = script8946(int2, 1);
            break;
        }
        default: {
            switch (int2) {
                case 17780:
                case 17781:
                case 17783:
                case 17782:
                case 17784:
                case 17788:
                case 17785:
                case 17786:
                case 17787:
                case 17793:
                case 17789:
                case 17791:
                case 17790:
                case 17792:
                case 556:
                case 555:
                case 554:
                case 557:
                case 4696:
                case 4698:
                case 4697:
                case 4694:
                case 4695:
                case 4699:
                case 558:
                case 559:
                case 566:
                case 565:
                case 564:
                case 9075:
                case 560:
                case 563:
                case 562:
                case 561:
                case 58450:
                case 21773: {
                    int7 = script17300(int0, int2);
                    break;
                }
                case 5340:
                case 5339:
                case 5338:
                case 5337:
                case 5336:
                case 5335:
                case 5334:
                case 5333:
                case 5331: {
                    if ((script7089(18682 as obj) == 1)) {
                        int7 = -1;
                    } else {
                        int7 = ((((((((8 * INV_TOTAL(93 as inv, 5340 as obj)) + (7 * INV_TOTAL(93 as inv, 5339 as obj))) + (6 * INV_TOTAL(93 as inv, 5338 as obj))) + (5 * INV_TOTAL(93 as inv, 5337 as obj))) + (4 * INV_TOTAL(93 as inv, 5336 as obj))) + (3 * INV_TOTAL(93 as inv, 5335 as obj))) + (2 * INV_TOTAL(93 as inv, 5334 as obj))) + INV_TOTAL(93 as inv, 5333 as obj));
                    };
                    break;
                }
                case 3436:
                case 3434:
                case 3432:
                case 3430: {
                    int7 = (((INV_TOTAL(93 as inv, 3436 as obj) + (INV_TOTAL(93 as inv, 3434 as obj) * 2)) + (INV_TOTAL(93 as inv, 3432 as obj) * 3)) + (INV_TOTAL(93 as inv, 3430 as obj) * 4));
                    break;
                }
                case 995: {
                    int7 = script17401();
                    break;
                }
                case 6797: {
                    int7 = (((((((INV_TOTAL(93 as inv, 5339 as obj) + INV_TOTAL(93 as inv, 5338 as obj)) + INV_TOTAL(93 as inv, 5337 as obj)) + INV_TOTAL(93 as inv, 5336 as obj)) + INV_TOTAL(93 as inv, 5335 as obj)) + INV_TOTAL(93 as inv, 5334 as obj)) + INV_TOTAL(93 as inv, 5333 as obj)) + INV_TOTAL(93 as inv, 5331 as obj));
                    break;
                }
                case 1831:
                case 1829:
                case 1827:
                case 1825: {
                    int7 = (((INV_TOTAL(93 as inv, 1831 as obj) + INV_TOTAL(93 as inv, 1829 as obj)) + INV_TOTAL(93 as inv, 1827 as obj)) + INV_TOTAL(93 as inv, 1825 as obj));
                    break;
                }
                case 26317: {
                    int7 = MAX(0, varbitplayer_17415);
                    break;
                }
                case 26318: {
                    int7 = MAX(0, varbitplayer_17417);
                    break;
                }
                case 26319: {
                    int7 = MAX(0, varbitplayer_17418);
                    break;
                }
                case 26320: {
                    int7 = MAX(0, varbitplayer_17416);
                    break;
                }
                case 26321: {
                    int7 = MAX(0, varbitplayer_17419);
                    break;
                }
                case 30566: {
                    int7 = MAX(0, varbitplayer_21334);
                    break;
                }
                case 30567: {
                    int7 = MAX(0, varbitplayer_21335);
                    break;
                }
                case 7984: {
                    if ((varclient_2689 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 7986: {
                    if ((varclient_2690 > 0)) {
                        return 1;
                    };
                    break;
                }
                case 2169: {
                    if (((MAP_MEMBERS() == 0) && (OC_MEMBERS(int2) == 1))) {
                        int7 = 0;
                    } else if (((int0 != -1 as obj) && (INV_TOTAL(93 as inv, 2169 as obj) > 0))) {
                        int7 = -1;
                    } else if ((int4 == 1)) {
                        int7 = (INV_TOTAL(93 as inv, int2) + INV_TOTAL(530 as inv, int2));
                    } else {
                        int7 = INV_TOTAL(93 as inv, int2);
                    };
                    break;
                }
                case 36365: {
                    int7 = script12054(int3);
                    break;
                }
                case 47066: {
                    if ((varbitplayer_43235 == 0)) {
                        int7 = script2548(int3);
                    };
                    break;
                }
                case 47067: {
                    int7 = script18309(enum_getvalue(0, 33, 2503 as cs2enum, int3));
                    break;
                }
                case 58252: {
                    int7 = INV_TOTAL(937 as inv, enum_getvalue(0, 33, 6544 as cs2enum, int3));
                    break;
                }
                case 20007: {
                    if ((MAP_MEMBERS() == 0)) {
                        int7 = 0;
                    } else {
                        int7 = script12420(int4);
                    };
                    break;
                }
                case 731:
                case 726: {
                    int7 = MAX(0, (15 - varbitplayer_10405));
                    break;
                }
                case 37411: {
                    int7 = varplayer_1097;
                    break;
                }
                case 960:
                case 8778:
                case 8780:
                case 8782:
                case 54860:
                case 54862:
                case 54864:
                case 54866:
                case 54868:
                case 54870: {
                    int7 = (int7 + script15393(int2));
                    if ((int4 == 1)) {
                        int7 = (int7 + INV_TOTAL(530 as inv, int2));
                    };
                    break;
                }
                case 39163: {
                    int7 = varbitplayer_34327;
                    break;
                }
                case 39164: {
                    int7 = varbitplayer_34328;
                    break;
                }
                case 39750: {
                    int7 = varbitplayer_35115;
                    break;
                }
                case 40355: {
                    int7 = varbitplayer_36270;
                    break;
                }
                case 41711: {
                    int7 = varbitplayer_38991;
                    break;
                }
                case 43369: {
                    int7 = varbitplayer_41472;
                    break;
                }
                case 48139: {
                    int7 = varbitplayer_44559;
                    break;
                }
                case 44000: {
                    int7 = varbitplayer_41707;
                    break;
                }
                case 47915: {
                    int7 = varbitplayer_44178;
                    break;
                }
                case 55336: {
                    int7 = script11567(int2, 1);
                    break;
                }
                default: {
                    if (((MAP_MEMBERS() == 0) && (OC_MEMBERS(int2) == 1))) {
                        int7 = 0;
                    } else if ((item_getparam(int2, 5774) == 1)) {
                        if ((item_getparam(int2, 5772) == 1)) {
                            int7 = 0;
                        } else {
                            int5 = script12517(93 as inv, int2, 0);
                            if ((int5 == -1)) {
                                int7 = 0;
                            } else if ((INV_GETVAR(93 as inv, int5, 18550) != 0)) {
                                int7 = 0;
                            } else {
                                int7 = 1;
                            };
                        };
                    } else if ((int4 == 1)) {
                        int7 = (INV_TOTAL(93 as inv, int2) + INV_TOTAL(530 as inv, int2));
                    } else {
                        int7 = INV_TOTAL(93 as inv, int2);
                    };
                    break;
                }
            };
            break;
        }
    };
    if (((int0 != -1 as obj) && (int7 != -1))) {
        int6 = script6589(int0, int2, int1);
    };
    return (int7 + int6);
}