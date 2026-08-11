//
function script6574(int0: number): void {
    IF_SETOPKEY(1, -1, 0, comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETOPKEY(1, -1, 0, comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
    IF_SETOPKEY(1, -1, 0, comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
    IF_SETOPKEY(1, -1, 0, comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
    IF_SETOPKEY(1, -1, 0, comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
    IF_SETOPKEY(1, -1, 0, comp(1253, 276));  // wheel_of_fortune:reward_claim_auto_button
    IF_SETOPKEY(1, -1, 0, comp(1253, 278));  // wheel_of_fortune:reward_claim_bank_button
    IF_SETOPKEY(1, -1, 0, comp(1253, 277));  // wheel_of_fortune:reward_claim_inv_button
    IF_SETOPKEY(1, -1, 0, comp(1253, 282));  // wheel_of_fortune:reward_convert_button
    IF_SETOPKEY(1, -1, 0, comp(1253, 296));  // wheel_of_fortune:discard_confirm_button
    IF_SETOPKEY(1, -1, 0, comp(1253, 295));  // wheel_of_fortune:discard_cancel_button
    switch (varclient_1928) {
        case 7: {
            IF_SETOPKEY(1, -1, 0, comp(1620, 21));  // trh54_guaranteed_quality:keybind_layer
            break;
        }
        case 12: {
            script12372();
            break;
        }
        case 17: {
            script12747();
            break;
        }
        case 20:
        case 29:
        case 41:
        case 57: {
            IF_SETOPKEY(1, -1, 0, comp(1870, 21));  // trh119_buried_treasure_overlay:keybind_layer
            break;
        }
        case 32: {
            IF_SETOPKEY(1, -1, 0, comp(491, 7));  // trh147_overlay:keybind_layer
            break;
        }
        case 30: {
            IF_SETOPKEY(1, -1, 0, comp(215, 26));  // trh148_overlay:keybind_layer
            break;
        }
        case 34: {
            IF_SETOPKEY(1, -1, 0, comp(35, 17));  // trh153_overlay:keybind_layer
            break;
        }
        case 36: {
            IF_SETOPKEY(1, -1, 0, comp(19, 6));  // trh154_overlay:keybind_layer
            break;
        }
        case 51: {
            IF_SETOPKEY(1, -1, 0, comp(639, 27));  // trh166:claim_button
            break;
        }
        case 52: {
            IF_SETOPKEY(1, -1, 0, comp(644, 27));  // trh167_overlay:keybind_layer
            break;
        }
        case 53: {
            IF_SETOPKEY(1, -1, 0, comp(654, 194));  // trh168:keybind_layer
            break;
        }
        case 54: {
            script6528();
            break;
        }
        case 60: {
            IF_SETOPKEY(1, -1, 0, comp(539, 1));  // trh174_overlay:keybind_layer
            break;
        }
        case 62: {
            IF_SETOPKEY(1, -1, 0, comp(935, 17));  // trh176_overlay:keybind_layer
            break;
        }
        case 63: {
            IF_SETOPKEY(1, -1, 0, comp(669, 2));  // trh177_overlay:keybind_layer
            break;
        }
        case 66: {
            IF_SETOPKEY(1, -1, 0, comp(970, 30));  // trh180_overlay:keybind_layer
            break;
        }
        case 68:
        case 88:
        case 91: {
            IF_SETOPKEY(1, -1, 0, comp(1288, 6));  // trh_academy_shared_overlay:keybind_layer
            break;
        }
        case 69: {
            IF_SETOPKEY(1, -1, 0, comp(1014, 36));  // trh183_overlay:keybind_layer
            break;
        }
        case 72: {
            IF_SETOPKEY(1, -1, 0, comp(1023, 66));  // trh187_overlay:keybind_layer
            break;
        }
        case 74: {
            IF_SETOPKEY(1, -1, 0, comp(1068, 24));  // trh188:cauldron_model
            break;
        }
        case 75: {
            IF_SETOPKEY(1, -1, 0, comp(1082, 34));  // trh189_overlay:keybind_layer
            break;
        }
        case 76: {
            IF_SETOPKEY(1, -1, 0, comp(1120, 107));  // trh190_overlay:keybind_layer
            break;
        }
        case 77: {
            IF_SETOPKEY(1, -1, 0, comp(1138, 0));  // trh191:keybind_layer
            break;
        }
        case 78: {
            IF_SETOPKEY(1, -1, 0, comp(1152, 4));  // trh192_overlay:keybind_layer
            break;
        }
        case 81: {
            IF_SETOPKEY(1, -1, 0, comp(1271, 98));  // trh195:keybind_layer
            break;
        }
        case 82: {
            IF_SETOPKEY(1, -1, 0, comp(631, 3));  // trh196_overlay:keybind_layer
            break;
        }
        case 87: {
            script19309();
            break;
        }
        case 89: {
            IF_SETOPKEY(1, -1, 0, comp(1278, 70));  // trh204_overlay:keybind_layer
            break;
        }
        case 94: {
            IF_SETOPKEY(1, -1, 0, comp(1340, 28));  // trh210_overlay:keybind_layer
            break;
        }
    };
    script8844(1, 13, 8, 82116609, -1);
    if ((int0 == 0)) {
        return;
    };
    var int1 = 0;
    var int2 = script16161();
    var int3 = 0;
    if ((((IF_GETHIDE(comp(1253, 8)) == false) || (int2 == 33217)) || (int2 == 34277))) {  // wheel_of_fortune:chests_layer
        if ((IF_GETHIDE(comp(1253, 265)) == true)) {  // wheel_of_fortune:reward_layer
            switch (int2) {
                case 31364: {
                    script16019(106168341);
                    break;
                }
                case 33217: {
                    script12372();
                    if ((varbitplayer_30804 == 1)) {
                        IF_SETOPKEY(1, 83, 0, script12368());
                    };
                    break;
                }
                case 34277: {
                    script12747();
                    if ((varbitplayer_33726 == 1)) {
                        IF_SETOPKEY(1, 83, 0, script12746());
                    };
                    varclient_1993 = 0;
                    break;
                }
                case 1515:
                case 40380:
                case 7229:
                case 44604:
                case 49941: {
                    script16019(122552341);
                    return;
                }
                case 34810: {
                    script16019(32178183);
                    return;
                }
                case 40579: {
                    script16019(14090266);
                    return;
                }
                case 34826: {
                    script16019(2293777);
                    break;
                }
                case 519: {
                    script16019(1245190);
                    return;
                }
                case 42690: {
                    script16019(41877531);
                    break;
                }
                case 11605: {
                    script16019(42205211);
                    break;
                }
                case 11563: {
                    if ((IF_GETHIDE(comp(1253, 265)) == true)) {  // wheel_of_fortune:reward_layer
                        script16019(42860738);
                        return;
                    };
                    break;
                }
                case 1530: {
                    script1309();
                    break;
                }
                case 44665: {
                    script16019(50462733);
                    break;
                }
                case 45540: {
                    script16019(35323905);
                    break;
                }
                case 38119: {
                    script16019(61276177);
                    break;
                }
                case 39801: {
                    script16019(43843586);
                    break;
                }
                case 22606: {
                    script16019(63569950);
                    break;
                }
                case 32986:
                case 50263:
                case 2951: {
                    if ((IF_GETHIDE(comp(1288, 83)) == true)) {  // trh_academy_shared_overlay:claim_layer
                        script16019(84410374);
                        return;
                    };
                    break;
                }
                case 3707: {
                    script16019(66453540);
                    break;
                }
                case 46120: {
                    if ((script18817() == 1)) {
                        return;
                    };
                    script16019(82116641);
                    break;
                }
                case 19622: {
                    if ((script16681() == 1)) {
                        return;
                    };
                    script16019(82116641);
                    break;
                }
                case 39853: {
                    script16019(67043394);
                    break;
                }
                case 46482: {
                    script16019(69926932);
                    return;
                }
                case 46483: {
                    script16019(69992472);
                    break;
                }
                case 47035: {
                    script16019(70909986);
                    break;
                }
                case 46398: {
                    script16019(73400427);
                    return;
                }
                case 6879: {
                    script16019(74579968);
                    break;
                }
                case 46396: {
                    if ((IF_HASSUBMODAL(comp(1152, 1), 1253) == 1)) {  // trh192_overlay:splash_screen
                        return;
                    };
                    script16019(75497476);
                    break;
                }
                case 49116: {
                    script16019(83296354);
                    break;
                }
                case 21098: {
                    script16019(41353219);
                    break;
                }
                case 49719: {
                    script16019(84017172);
                    break;
                }
                case 50195: {
                    script16019(75169794);
                    break;
                }
                case 50555: {
                    script19308();
                    break;
                }
                case 51061: {
                    script16019(83755078);
                    return;
                }
                case 51131: {
                    script16019(86507524);
                    break;
                }
                case 51827: {
                    script16019(87949316);
                    break;
                }
                case 51804: {
                    if ((IF_GETHIDE(comp(1340, 65)) == true)) {  // trh210_overlay:bonus_layer
                        script16019(87818268);
                        return;
                    };
                    break;
                }
                default: {
                    int3 = 1;
                    break;
                }
            };
            if ((int3 == 0)) {
                return;
            };
            if ((IF_GETHIDE(comp(1253, 447)) == false)) {  // wheel_of_fortune:trh_promo_info
                varclient_1993 = 0;
                return;
            };
            script8844(1, 16, 8, 82116641, -1);
            script8844(1, 17, 8, 82116631, -1);
            script8844(1, 18, 8, 82116636, -1);
            script8844(1, 19, 8, 82116626, -1);
            script8844(1, 20, 8, 82116621, -1);
            if ((varbitplayer_21612 == 1)) {
                int1 = (1 + RANDOM(5));
            } else if ((varbitplayer_21612 == 0)) {
                int1 = MIN(varbitplayer_21614, 5);
            };
            switch (int1) {
                case 1: {
                    IF_SETOPKEY(1, 83, 0, comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
                    break;
                }
                case 2: {
                    IF_SETOPKEY(1, 83, 0, comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
                    break;
                }
                case 3: {
                    IF_SETOPKEY(1, 83, 0, comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
                    break;
                }
                case 4: {
                    IF_SETOPKEY(1, 83, 0, comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
                    break;
                }
                case 5: {
                    IF_SETOPKEY(1, 83, 0, comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
                    break;
                }
                default: {
                    IF_SETOPKEY(1, 83, 0, comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
                    break;
                }
            };
            varclient_1993 = 0;
            return;
        };
    };
    if ((IF_GETHIDE(comp(1253, 265)) == false)) {  // wheel_of_fortune:reward_layer
        switch (int2) {
            case 34810: {
                IF_SETOPKEY(1, -1, 0, comp(491, 7));  // trh147_overlay:keybind_layer
                break;
            }
            case 40579: {
                IF_SETOPKEY(1, -1, 0, comp(215, 26));  // trh148_overlay:keybind_layer
                break;
            }
            case 34826: {
                IF_SETOPKEY(1, -1, 0, comp(35, 17));  // trh153_overlay:keybind_layer
                break;
            }
            case 1530: {
                script6528();
                break;
            }
            case 45540: {
                IF_SETOPKEY(1, -1, 0, comp(539, 1));  // trh174_overlay:keybind_layer
                break;
            }
            case 38119: {
                IF_SETOPKEY(1, -1, 0, comp(935, 17));  // trh176_overlay:keybind_layer
                break;
            }
            case 39801: {
                IF_SETOPKEY(1, -1, 0, comp(669, 2));  // trh177_overlay:keybind_layer
                break;
            }
            case 22606: {
                IF_SETOPKEY(1, -1, 0, comp(970, 30));  // trh180_overlay:keybind_layer
                break;
            }
            case 3707: {
                IF_SETOPKEY(1, -1, 0, comp(1014, 36));  // trh183_overlay:keybind_layer
                break;
            }
            case 32986:
            case 50263: {
                IF_SETOPKEY(1, -1, 0, comp(1288, 6));  // trh_academy_shared_overlay:keybind_layer
                break;
            }
            case 39853: {
                IF_SETOPKEY(1, -1, 0, comp(1023, 66));  // trh187_overlay:keybind_layer
                break;
            }
            case 47035: {
                IF_SETOPKEY(1, -1, 0, comp(1082, 34));  // trh189_overlay:keybind_layer
                break;
            }
            case 46398: {
                IF_SETOPKEY(1, -1, 0, comp(1120, 107));  // trh190_overlay:keybind_layer
                break;
            }
            case 46396: {
                IF_SETOPKEY(1, -1, 0, comp(1152, 4));  // trh192_overlay:keybind_layer
                break;
            }
            case 49116: {
                IF_SETOPKEY(1, -1, 0, comp(1271, 98));  // trh195:keybind_layer
                break;
            }
            case 21098: {
                IF_SETOPKEY(1, -1, 0, comp(631, 3));  // trh196_overlay:keybind_layer
                break;
            }
            case 49719: {
                IF_SETOPKEY(1, -1, 0, comp(1282, 20));  // trh197_overlay:keybind_layer
                break;
            }
            case 50195: {
                IF_SETOPKEY(1, -1, 0, comp(1147, 2));  // trh199_overlay:keybind_layer
                break;
            }
            case 50555: {
                IF_SETOPKEY(1, -1, 0, comp(1290, 75));  // trh_dungeon_crawl_overlay:keybind_layer
                break;
            }
            case 51061: {
                IF_SETOPKEY(1, -1, 0, comp(1278, 70));  // trh204_overlay:keybind_layer
                break;
            }
            case 51131: {
                IF_SETOPKEY(1, -1, 0, comp(1320, 4));  // trh205_overlay:keybind_layer
                break;
            }
            case 51827: {
                IF_SETOPKEY(1, -1, 0, comp(1342, 4));  // trh209_overlay:keybind_layer
                break;
            }
        };
        if (((script6950() == 0) && (varbitplayer_4323 == 0))) {
            varclient_1993 = 0;
            return;
        };
        if ((IF_GETHIDE(comp(1253, 290)) == false)) {  // wheel_of_fortune:discard_confirm_layer
            script8844(1, 83, 8, 82116903, -1);
            script8844(1, 50, 8, 82116904, -1);
            varclient_1993 = 0;
            return;
        };
        if ((IF_GETENABLED(82116884) == 1)) {
            script8844(1, 83, 8, 82116884, -1);
        };
        if ((IF_GETENABLED(82116886) == 1)) {
            IF_SETOPKEY(1, 68, 0, comp(1253, 278));  // wheel_of_fortune:reward_claim_bank_button
        };
        if ((IF_GETENABLED(82116885) == 1)) {
            IF_SETOPKEY(1, 39, 0, comp(1253, 277));  // wheel_of_fortune:reward_claim_inv_button
        };
        if ((IF_GETENABLED(82116890) == 1)) {
            script8844(1, 50, 8, 82116890, -1);
        };
    };
    varclient_1993 = 0;
    return;
}