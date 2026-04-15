//
function script2660(int0: struct): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int0 = script8247(int0);
    if ((struct_getparam(int0, 8841) == 1)) {
        return 1;
    };
    var int1 = enum_getvalue(0, 17, 681 as cs2enum, struct_getparam(int0, 2806));
    var int2 = STAT(int1);
    var int3 = 0;
    var int4 = INV_GETOBJ(94 as inv, 3);
    var int5 = INV_GETOBJ(94 as inv, 5);
    if ((int1 == 28 as stat)) {
        int2 = STAT_BASE(int1);
    } else if ((((int1 == 6 as stat) && (struct_getparam(int0, 2880) != 0)) && (varbitplayer_3043 == 1))) {
        int2 = MAX(int2, varplayer_1185);
    };
    if (((int2 < struct_getparam(int0, 2807)) && (varbitplayer_15197 == 0))) {
        int3 = 0;
    } else if ((((struct_getparam(int0, 2809) == 1) && (MAP_MEMBERS() == 0)) && (varbitplayer_15197 == 0))) {
        int3 = 0;
    } else if ((struct_getparam(int0, 2811) == 1)) {
        if ((((INV_TOTALPARAM(94 as inv, 2826) == 2) || (script6688(int0) == 1)) && (struct_getparam(int0, 2806) == 3))) {
            int3 = 1;
        } else if ((((INV_TOTALPARAM(94 as inv, 2827) == 2) || (script6688(int0) == 1)) && (struct_getparam(int0, 2806) == 4))) {
            int3 = 1;
        } else if ((((INV_TOTALPARAM(94 as inv, 2825) == 2) || (script6688(int0) == 1)) && ((struct_getparam(int0, 2806) == 1) || (struct_getparam(int0, 2806) == 2)))) {
            int3 = 1;
        } else if ((((INV_TOTALPARAM(94 as inv, 8898) == 2) || (script6688(int0) == 1)) && (struct_getparam(int0, 2806) == 29))) {
            int3 = 1;
        };
    } else if ((struct_getparam(int0, 2812) == 1)) {
        if (((((OC_WEARPOS(int4) > 0) && (OC_WEARPOS2(int4) > 0)) && (struct_getparam(int0, 2806) == 3)) && (item_getparam(int4, 2826) == 1))) {
            int3 = 1;
        } else if (((((OC_WEARPOS(int4) > 0) && (OC_WEARPOS2(int4) > 0)) && (struct_getparam(int0, 2806) == 4)) && (item_getparam(int4, 2827) == 1))) {
            int3 = 1;
        } else if (((((OC_WEARPOS(int4) > 0) && (OC_WEARPOS2(int4) > 0)) && (struct_getparam(int0, 2806) == 29)) && (item_getparam(int4, 8898) == 1))) {
            int3 = 1;
        } else if (((((OC_WEARPOS(int4) > 0) && (OC_WEARPOS2(int4) > 0)) && (item_getparam(int4, 2825) == 1)) && ((struct_getparam(int0, 2806) == 1) || (struct_getparam(int0, 2806) == 2)))) {
            int3 = 1;
        };
    } else if ((struct_getparam(int0, 2813) == 1)) {
        switch (script17448()) {
            case 1:
            case 2: {
                int3 = 1;
                break;
            }
            case 3: {
                if (((struct_getparam(int0, 8888) == 0) && (script17691(varplayer_11065) == 1))) {
                    int3 = 1;
                };
                break;
            }
        };
    } else if ((struct_getparam(int0, 2814) == 1)) {
        if ((varbitplayer_1899 != 1)) {
            int3 = 1;
        };
    } else if ((struct_getparam(int0, 5195) == 1)) {
        if (((int4 != -1 as obj) && ((((item_getparam(int4, 2826) + item_getparam(int4, 2827)) + item_getparam(int4, 2825)) + item_getparam(int4, 8898)) > 0))) {
            int3 = 1;
        };
    } else if ((((int0 == varplayer_3170) && (varbitplayer_0 == 2)) && (script17690(14874 as struct) == 1))) {
        int3 = 1;
    } else if ((((int0 == 48326 as struct) || (int0 == 48327 as struct)) && (varplayer_11065 == int0))) {
        int3 = 1;
    } else if ((((varbitplayer_0 == 1) && (varbitplayer_21855 == 1)) && (varbitplayer_21841 == 95))) {
        int3 = 1;
    } else if ((script17690(int0) == 0)) {
        int3 = 0;
    } else if ((script17691(int0) == 0)) {
        int3 = 0;
    } else if (((varclient_1725 >= 11) && (((struct_getparam(int0, 2806) == 4) || (struct_getparam(int0, 2806) == 27)) && (struct_getparam(int0, 2872) == 0)))) {
        int3 = 0;
    } else if ((int0 == 14878 as struct)) {
        if ((varplayer_1101 == -1 as coordgrid)) {
            int3 = 0;
        } else {
            int3 = 1;
        };
    } else if ((int0 == 20280 as struct)) {
        if (((varplayer_3858 == -1 as coordgrid) || (script11771(4) == 0))) {
            int3 = 0;
        } else {
            int3 = 1;
        };
    } else if ((int0 == 20279 as struct)) {
        if ((script11771(4) == 0)) {
            int3 = 0;
        } else {
            int3 = 1;
        };
    } else if ((int0 == 43909 as struct)) {
        if ((script14970() == 1)) {
            int3 = 1;
        } else {
            int3 = 0;
        };
    } else if ((int0 == 11748 as struct)) {
        if (((OC_CATEGORY(INV_GETOBJ(94 as inv, 2)) == 4700 as category) && (item_getparam(INV_GETOBJ(94 as inv, 2), 3793) == 0))) {
            int3 = 1;
        } else {
            int3 = 0;
        };
    } else if ((int0 == 47129 as struct)) {
        if ((script15411(47129 as struct) == 1)) {
            int3 = 1;
        };
    } else if (((int0 == 45801 as struct) || (int0 == 45802 as struct))) {
        if ((((OC_CATEGORY(INV_GETOBJ(94 as inv, 13)) == 5087 as category) && (item_getparam(INV_GETOBJ(94 as inv, 13), 8605) > 1)) && (OC_HASVAROBJ(INV_GETOBJ(94 as inv, 13)) == 1))) {
            switch (int0) {
                case 45801: {
                    if ((INV_GETVAR(94 as inv, 13, 50377) != 0)) {
                        int3 = 1;
                    };
                    break;
                }
                case 45802: {
                    if ((INV_GETVAR(94 as inv, 13, 50377) != 1)) {
                        int3 = 1;
                    };
                    break;
                }
            };
        };
    } else if ((struct_getparam(int0, 2913) == 1)) {
        int3 = 1;
        switch (int0) {
            case 14767: {
                if (((((((((INV_TOTAL(94 as inv, 4170 as obj) < 1) && (script7008() == 0)) && (INV_TOTAL(94 as inv, 30828 as obj) < 1)) && (INV_TOTAL(94 as inv, 30825 as obj) < 1)) && (INV_TOTAL(94 as inv, 36635 as obj) < 1)) && (INV_TOTAL(94 as inv, 30827 as obj) < 1)) && (INV_TOTAL(94 as inv, 30830 as obj) < 1)) && (INV_TOTAL(94 as inv, 36637 as obj) < 1))) {
                    int3 = 0;
                };
                break;
            }
            case 14880: {
                if (((((INV_TOTAL(94 as inv, 22494 as obj) < 1) && (INV_TOTAL(94 as inv, 22496 as obj) < 1)) && (INV_TOTAL(94 as inv, 22497 as obj) < 1)) && (INV_TOTAL(94 as inv, 36639 as obj) < 1))) {
                    int3 = 0;
                };
                break;
            }
            case 14781: {
                if ((INV_TOTAL(93 as inv, 1963 as obj) < 1)) {
                    int3 = 0;
                };
                break;
            }
            case 14783:
            case 14775:
            case 14771:
            case 14780: {
                if ((INV_TOTAL(93 as inv, 567 as obj) < 1)) {
                    int3 = 0;
                };
                break;
            }
            case 32942:
            case 32943: {
                if ((script12052(1) == 0)) {
                    int3 = 0;
                };
                break;
            }
            case 14776:
            case 14747: {
                int3 = script10242();
                break;
            }
        };
    } else if ((struct_getparam(int0, 2945) != 0)) {
        int3 = script12007(int0);
        if (((script5256() == 0) || (varbitplayer_16789 != struct_getparam(int0, 2947)))) {
            int3 = 0;
        };
    } else if (((struct_getparam(int0, 2806) == 3) && (item_getparam(int4, 2826) == 1))) {
        int3 = 1;
    } else if ((struct_getparam(int0, 2806) == 4)) {
        if ((struct_getparam(int0, 2880) == 5)) {
            if (((item_getparam(int4, 2827) == 1) || (int0 == 37220 as struct))) {
                int3 = 1;
            };
        } else if ((struct_getparam(int0, 2874) == 0)) {
            int3 = 1;
        } else if ((INV_TOTALPARAM(94 as inv, 2827) > 0)) {
            int3 = 1;
        };
    } else if (((int4 == -1 as obj) && ((struct_getparam(int0, 9408) == 1) || (int0 == 49531 as struct)))) {
        int3 = 1;
    } else if (((item_getparam(int4, 2825) == 1) && ((struct_getparam(int0, 2806) == 1) || (struct_getparam(int0, 2806) == 2)))) {
        int3 = 1;
    } else if ((struct_getparam(int0, 2806) == 29)) {
        switch (struct_getparam(int0, 5542)) {
            case 11:
            case 12: {
                if ((item_getparam(int4, 8898) == 1)) {
                    int3 = 1;
                };
                break;
            }
            default: {
                int3 = 1;
                break;
            }
        };
        if (((struct_getparam(int0, 8889) == 1) && (varplayer_11218 == 0))) {
            int3 = 0;
        };
    } else if ((struct_getparam(int0, 5348) == 1)) {
        int3 = 1;
    } else if (((struct_getparam(int0, 2806) == 5) || (struct_getparam(int0, 2806) == 6))) {
        int3 = 1;
    } else if ((((struct_getparam(int0, 2871) != 3) && (struct_getparam(int0, 2871) != varbitplayer_0)) && (struct_getparam(int0, 2880) != 5))) {
        int3 = 0;
    };
    if ((struct_getparam(int0, 2882) == 1)) {
        switch (int0) {
            case 32942:
            case 32943: {
                if ((script12043(26 as stat) == 0)) {
                    int3 = 0;
                };
                break;
            }
            case 14827:
            case 14830:
            case 14835:
            case 14842:
            case 14849:
            case 39785:
            case 14859:
            case 14873:
            case 6846:
            case 6845: {
                if ((script20174() == false)) {
                    int3 = 0;
                };
                break;
            }
            case 14836: {
                if ((varbitplayer_16374 < 1)) {
                    int3 = 0;
                };
                break;
            }
            case 14840: {
                if ((varbitplayer_16374 < 2)) {
                    int3 = 0;
                };
                break;
            }
            case 14843: {
                if ((varbitplayer_16374 < 3)) {
                    int3 = 0;
                };
                break;
            }
            case 14846: {
                if ((varbitplayer_16374 < 4)) {
                    int3 = 0;
                };
                break;
            }
            case 44699: {
                if ((varbitplayer_16374 < 5)) {
                    int3 = 0;
                };
                break;
            }
            case 14854: {
                if ((varbitplayer_16374 < 6)) {
                    int3 = 0;
                };
                break;
            }
            case 14865: {
                if ((varbitplayer_16374 < 7)) {
                    int3 = 0;
                };
                break;
            }
            case 14871: {
                if ((varbitplayer_16374 < 8)) {
                    int3 = 0;
                };
                break;
            }
            case 14867: {
                if (((varbitplayer_16374 < 9) || (varbitplayer_9987 < 320))) {
                    int3 = 0;
                };
                break;
            }
            case 14868: {
                if (((varbitplayer_16374 < 10) || (varbitplayer_9987 < 320))) {
                    int3 = 0;
                };
                break;
            }
            case 14874: {
                if ((varbitplayer_16374 < 11)) {
                    int3 = 0;
                };
                break;
            }
            case 14861: {
                if ((varbitplayer_11610 < 170)) {
                    int3 = 0;
                };
                break;
            }
            case 51274: {
                if ((varplayer_2265 < 50)) {
                    int3 = 0;
                };
                break;
            }
            case 31921: {
                if ((script6667(4) == false)) {
                    int3 = 0;
                };
                break;
            }
            case 51276:
            case 51277: {
                if ((varbitplayer_44469 < 50)) {
                    int3 = 0;
                };
                break;
            }
            case 53006: {
                if ((script18522(526 as quest) == false)) {
                    int3 = 0;
                };
                break;
            }
        };
    };
    switch (int0) {
        case 14665:
        case 14726:
        case 47129:
        case 45801:
        case 45802: {
            return int3;
        }
        case 48299: {
            if ((varplayer_11035 < 1)) {
                int3 = 0;
            };
            break;
        }
        case 48301: {
            if ((varplayer_11035 < 2)) {
                int3 = 0;
            };
            break;
        }
        case 48302: {
            if ((varplayer_10994 == 1)) {
                int3 = 0;
            };
            break;
        }
        case 48304: {
            if ((varplayer_11006 == 1)) {
                int3 = 0;
            };
            break;
        }
        case 48305: {
            if ((varplayer_11009 == 1)) {
                int3 = 0;
            };
            break;
        }
        case 48306: {
            if ((varplayer_11018 == 1)) {
                int3 = 0;
            };
            break;
        }
        case 48307: {
            if ((varplayer_11021 == 1)) {
                int3 = 0;
            };
            break;
        }
        case 31820: {
            if ((varplayer_11820 == 1)) {
                int3 = 0;
            };
            break;
        }
        case 33965: {
            if ((script18292() == 0)) {
                int3 = 0;
            };
            break;
        }
    };
    switch (struct_getparam(int0, 5542)) {
        case 2:
        case 1:
        case 4:
        case 5:
        case 10: {
            return int3;
        }
    };
    var int6 = -1 as obj;
    if ((int3 == 1)) {
        if ((item_getparam(int4, 2827) == 1)) {
            if ((struct_getparam(int0, 5542) == 7)) {
                if ((int0 == varplayer_3170)) {
                    int3 = 1;
                } else if ((script17690(int0) == 0)) {
                    int3 = 0;
                };
            } else if ((script17690(int0) == 0)) {
                int3 = 0;
            };
        } else if (((item_getparam(int4, 2826) == 1) && (struct_getparam(int0, 5542) == 6))) {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 686) == 14940 as struct)) {
                return 1;
            };
            int6 = INV_GETOBJ(94 as inv, 13);
            if (((OC_CATEGORY(int6) == 5087 as category) && (varplayer_10264 != -1 as obj))) {
                int6 = varplayer_10264;
            };
            if (((item_getparam(INV_GETOBJ(94 as inv, 3), 21) != -1 as category) && (item_getparam(INV_GETOBJ(94 as inv, 3), 21) != OC_CATEGORY(int6)))) {
                int3 = 0;
            };
        };
    };
    return int3;
}