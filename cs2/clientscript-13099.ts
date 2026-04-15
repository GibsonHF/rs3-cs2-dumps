//
function script13099(int0: struct): string {
    if ((int0 == -1 as struct)) {
        return "";
    };
    var string0 = "";
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = varplayer_1297;
    var int6 = varplayer_423;
    var int7 = -1 as quest;
    var int8 = -1 as achievement;
    if ((script6488(int0) == 0)) {
        int2 = struct_getparam(int0, 2546);
        int4 = struct_getparam(int0, 4419);
        string0 = struct_getparam(int0, 4751);
        int1 = STRING_LENGTH(string0);
        int7 = struct_getparam(int0, 8684);
        int8 = struct_getparam(int0, 823);
        if ((script6214(int0) == 1)) {
            string0 = "You need to be a member to activate this customisation.";
        } else if (((int4 != -1 as struct) && ((script6488(int4) == 1) || (int1 > 0)))) {
            if ((int1 == 0)) {
                string0 = "You don't meet the requirements for this item.";
            } else {
                switch (int4) {
                    case 29735: {
                        string0 = strconcat(string0, ` (${inttostring(varbitplayer_25811, 10)}/5)`);
                        break;
                    }
                    case 29736: {
                        string0 = strconcat(string0, ` (${inttostring(varbitplayer_25810, 10)}/5)`);
                        break;
                    }
                    case 33005: {
                        string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varbitplayer_30373, 1)}/${TOSTRING_LOCALISED(7000, 1)})`);
                        break;
                    }
                    case 33006: {
                        string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varbitplayer_30373, 1)}/${TOSTRING_LOCALISED(35000, 1)})`);
                        break;
                    }
                    case 34166: {
                        string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varbitplayer_33683, 1)}/${TOSTRING_LOCALISED(35000, 1)})`);
                        break;
                    }
                    case 35738: {
                        string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varbitplayer_35239, 1)}/${TOSTRING_LOCALISED(35000, 1)})`);
                        break;
                    }
                };
            };
        } else if (((int1 == 0) && (((int2 == 1) && (struct_getparam(int0, 2532) != 19)) || (int2 == 2)))) {
            if ((((int4 != -1 as struct) && (struct_getparam(int4, 4742) == varplayer_3079)) || ((int4 == -1 as struct) && (struct_getparam(int0, 4742) == varplayer_3079)))) {
                string0 = "This item is not available yet. Check back later.";
            } else {
                string0 = "This item is not available right now.";
            };
        } else if ((int1 > 0)) {
            switch (int0) {
                case 16585: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(400, 1)})`);
                    break;
                }
                case 16586: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(800, 1)})`);
                    break;
                }
                case 16587: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(1200, 1)})`);
                    break;
                }
                case 16588: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(1600, 1)})`);
                    break;
                }
                case 16589: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(2000, 1)})`);
                    break;
                }
                case 25794: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(3500, 1)})`);
                    break;
                }
                case 30149: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varplayer_9610, 1)}/${TOSTRING_LOCALISED(4500, 1)})`);
                    break;
                }
                case 20278: {
                    string0 = strconcat(string0, ` (${inttostring(script13115(), 10)}/60)`);
                    break;
                }
                case 29009: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_25032, 10)}/100)`);
                    break;
                }
                case 29010: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_25033, 10)}/8)`);
                    break;
                }
                case 29011: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_25034, 10)}/1,000)`);
                    break;
                }
                case 29014: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_25947, 10)}/100)`);
                    break;
                }
                case 29015: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_25932, 10)}/${inttostring(200, 10)})`);
                    break;
                }
                case 29016: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_26004, 10)}/50)`);
                    break;
                }
                case 29017: {
                    string0 = strconcat(string0, ` (${inttostring((((((((TESTBIT(varbitplayer_25038, 0) + TESTBIT(varbitplayer_25038, 1)) + TESTBIT(varbitplayer_25038, 2)) + TESTBIT(varbitplayer_25038, 3)) + TESTBIT(varbitplayer_25038, 4)) + TESTBIT(varbitplayer_25038, 5)) + TESTBIT(varbitplayer_25038, 6)) + TESTBIT(varbitplayer_25038, 7)), 10)}/8)`);
                    break;
                }
                case 30843: {
                    string0 = strconcat(string0, ` (${inttostring(int5, 10)}/${inttostring(int6, 10)} Quest Points)`);
                    break;
                }
                case 31568: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_5530, 10)}/15 Champions)`);
                    break;
                }
                case 31569: {
                    string0 = strconcat(string0, ` (${inttostring(script11502(), 10)}/16 cases)`);
                    break;
                }
                case 31570: {
                    int3 = (24 - 5);
                    string0 = strconcat(string0, ` (${inttostring(script13114(), 10)}/${inttostring(int3, 10)} D&Ds)`);
                    break;
                }
                case 31690: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_28331, 10)}/10)`);
                    break;
                }
                case 31691: {
                    string0 = strconcat(string0, ` (${inttostring((varbitplayer_28331 - varbitplayer_28330), 10)}/10)`);
                    break;
                }
                case 31692: {
                    string0 = strconcat(string0, ` (${inttostring((varbitplayer_28331 - varbitplayer_28330), 10)}/25)`);
                    break;
                }
                case 31693: {
                    string0 = strconcat(string0, ` (${inttostring((varbitplayer_28331 - varbitplayer_28330), 10)}/100)`);
                    break;
                }
                case 31694: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_28330, 10)}/10)`);
                    break;
                }
                case 31695: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_28330, 10)}/25)`);
                    break;
                }
                case 31696: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_28330, 10)}/100)`);
                    break;
                }
                case 35291: {
                    string0 = strconcat(string0, ` (${inttostring(varplayer_1297, 10)}/200)`);
                    break;
                }
                case 35293: {
                    string0 = strconcat(string0, ` (${inttostring(varplayer_1297, 10)}/400)`);
                    break;
                }
                case 30736: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_27151, 10)}/500)`);
                    break;
                }
                case 31966: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(varbitplayer_28733, 1)}/2,500)`);
                    break;
                }
                case 35312: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_23260, 10)}/${inttostring(200, 10)})`);
                    break;
                }
                case 44509: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_47837, 10)}/${inttostring(70, 10)})`);
                    break;
                }
                case 44510: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_47837, 10)}/${inttostring(20, 10)})`);
                    break;
                }
                case 44507: {
                    string0 = strconcat(string0, ` (${inttostring(varbitplayer_47837, 10)}/${inttostring(80, 10)})`);
                    break;
                }
                case 29243: {
                    string0 = strconcat(string0, ` (${script14034(varplayer_9746, varbitplayer_48911, 1)}/${script14034(100, 0, 1)})`);
                    break;
                }
                case 44792: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED(ACHIEVEMENT_TOTAL_RUNESCORE(), 1)}/${TOSTRING_LOCALISED(5000, 1)})`);
                    break;
                }
                case 50000: {
                    string0 = strconcat(string0, ` (${TOSTRING_LOCALISED((varbitplayer_55735 + (varbitplayer_55741 * 60000)), 1)}/${TOSTRING_LOCALISED(100, 1)})`);
                    break;
                }
            };
        } else {
            switch (int2) {
                case 13: {
                    if ((script9964(int0) == -1 as obj)) {
                        string0 = "You don't have anything in this slot.";
                    } else {
                        string0 = "You don't meet the requirements for this item.";
                    };
                    break;
                }
                case 5: {
                    if ((int7 != -1 as quest)) {
                        string0 = "You can unlock this customisation by completing the '";
                        string0 = strconcat(string0, script2103(int7));
                        string0 = strconcat(string0, "' quest.");
                    } else if ((int8 != -1 as achievement)) {
                        string0 = "You can unlock this customisation by completing the '";
                        string0 = strconcat(string0, ACHIEVEMENT_GETNAME(int8));
                        string0 = strconcat(string0, "' achievement.");
                    } else {
                        string0 = "You can unlock this customisation by playing the game.";
                    };
                    break;
                }
                case 6: {
                    string0 = "You can unlock this customisation by joining a clan of 5 people or more.";
                    break;
                }
                case 8: {
                    string0 = "This item is unlocked by playing a limited-time holiday event.";
                    break;
                }
                case 10: {
                    string0 = "This pet can be captured from around the world.";
                    break;
                }
                case 7: {
                    string0 = "This item can be gained through the seasonal hiscores.";
                    break;
                }
                case 11: {
                    string0 = "This pet can be earned by completing content.";
                    break;
                }
                case 14: {
                    string0 = "This customisation can be obtained from Treasure Hunter.";
                    break;
                }
                case 3: {
                    string0 = "This customisation can be obtained from tokens available on the Grand Exchange.";
                    break;
                }
                default: {
                    string0 = "You don't have this customisation yet.";
                    break;
                }
            };
        };
    } else if ((script12779(int0, -1 as obj, -1) == 0)) {
        switch (int0) {
            case 37989:
            case 37990: {
                string0 = "Complete god books to unlock their colours. Additional colours are unlocked by completing all god books.";
                break;
            }
            case 37991:
            case 37992: {
                string0 = "Illuminate god books to unlock their colours. Additional colours are unlocked by illuminating all god books.";
                break;
            }
            default: {
                string0 = "You don't have this recolour unlocked.";
                break;
            }
        };
    };
    return string0;
}