//
function script8506(int0: int, int1: int, int2: int, int3: chatphrase, int4: unknown_int, int5: unknown_int, int6: unknown_int, string0: string, string1: string, string2: string): void {
    var int7 = -1;
    var int8 = 0;
    CC_CLEAROPS();
    CC_SETONOP(callback(script86, int0, -2147483644, -2147483643));
    CC_SETOPBASE(`<col=ffffff>${REMOVETAGS(string1)}`);
    if ((int0 == 1019)) {
        script3927(1019);
    };
    switch (int1) {
        case 1:
        case 2:
        case 3:
        case 7:
        case 41:
        case 44:
        case 9:
        case 6:
        case 24:
        case 22: {
            if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) == 0) || (strcmp(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()), REMOVETAGS(string2)) == 0))) {
            } else {
                if ((FRIEND_TEST(REMOVETAGS(string2)) == 1)) {
                    int8 = 1;
                    if (((MAP_QUICKCHAT() == 0) && (USERDETAIL_QUICKCHAT() == 0))) {
                        CC_SETOP(6, "Message");
                    };
                } else {
                    CC_SETOP(6, "Add friend");
                    CC_SETOP(7, "Add ignore");
                };
                if ((PLAYER_GROUP_FIND() == 1)) {
                    int7 = script10275();
                    if (((int1 == 24) || (int1 == 22))) {
                        if ((script10279(int7) == 1)) {
                            CC_SETOP(10, "Kick/ban");
                        };
                    } else if ((script10281(int7) == 1)) {
                        switch (int1) {
                            case 3:
                            case 7: {
                                if ((int8 == 1)) {
                                    CC_SETOP(9, "Invite to group");
                                };
                                break;
                            }
                            case 9: {
                                break;
                            }
                            default: {
                                CC_SETOP(9, "Invite to group");
                                break;
                            }
                        };
                    };
                };
                if ((varbitplayer_16564 == 1)) {
                    CC_SETOP(8, "Report");
                };
                if ((int1 == 41)) {
                    if (((int4 == 1) && (int6 == 0))) {
                        CC_SETOP(10, "Kick/ban");
                    };
                } else if (((int1 == 9) && (int5 == 1))) {
                    CC_SETOP(10, "Kick/ban");
                };
            };
            break;
        }
        case 100: {
            CC_SETOP(1, "Accept trade");
            break;
        }
        case 101:
        case 105:
        case 106:
        case 107:
        case 113:
        case 114:
        case 118:
        case 132: {
            CC_SETOP(2, "Accept challenge");
            break;
        }
        case 102: {
            CC_SETOP(3, "Give assistance");
            break;
        }
        case 111: {
            CC_SETOP(2, "Open invitation");
            break;
        }
        case 112: {
            CC_SETOP(3, "Vote");
            break;
        }
        case 17:
        case 18:
        case 42:
        case 45:
        case 20:
        case 25:
        case 23: {
            if (((strcmp(REMOVETAGS(CHAT_PLAYERNAME()), REMOVETAGS(string1)) == 0) || (strcmp(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()), REMOVETAGS(string2)) == 0))) {
            } else {
                if ((FRIEND_TEST(REMOVETAGS(string2)) == 1)) {
                    if (((MAP_QUICKCHAT() == 0) && (USERDETAIL_QUICKCHAT() == 0))) {
                        CC_SETOP(6, "Message");
                    };
                } else {
                    CC_SETOP(6, "Add friend");
                    CC_SETOP(7, "Add ignore");
                };
                if ((int1 == 42)) {
                    if ((int4 == 1)) {
                        CC_SETOP(10, "Kick/ban");
                    };
                } else if (((int1 == 20) && (int5 == 1))) {
                    CC_SETOP(10, "Kick/ban");
                };
                if ((CHATPHRASE_GETAUTORESPONSECOUNT(int3) > 0)) {
                    if ((script8627(int0) == -1 as chatphrase)) {
                        script8628(int0, int3);
                        script8610(int0, string1);
                        switch (int1) {
                            case 20: {
                                script8630(int0, 6);
                                break;
                            }
                            case 42: {
                                script8630(int0, 9);
                                break;
                            }
                            case 45: {
                                script8630(int0, 11);
                                break;
                            }
                            case 18: {
                                script8630(int0, 5);
                                break;
                            }
                            case 25: {
                                script8630(int0, 14);
                                break;
                            }
                            case 23: {
                                script8630(int0, 16);
                                break;
                            }
                            default: {
                                script8630(int0, 4);
                                break;
                            }
                        };
                    };
                    CC_SETOP(9, "Quick Response");
                };
            };
            break;
        }
        case 108: {
            CC_SETOP(10, "Accept alliance");
            break;
        }
        case 135: {
            CC_SETOP(4, "Open link");
            break;
        }
        case 127:
        case 115:
        case 125:
        case 136:
        case 145: {
            if ((STRING_LENGTH(enum_getvalue(0, 36, 15193 as cs2enum, int2)) > 0)) {
                CC_SETOP(4, "Open link");
            };
            break;
        }
        case 140:
        case 143: {
            switch (int2) {
                case 2: {
                    CC_SETOP(4, "Claim Cosmetic");
                    break;
                }
                case 3: {
                    CC_SETOP(4, "Claim free Bank Booster");
                    break;
                }
                case 6: {
                    CC_SETOP(4, "Open Yak Track");
                    break;
                }
                case 7: {
                    CC_SETOP(4, "Open event");
                    break;
                }
                case 11: {
                    CC_SETOP(4, "Open Calendar");
                    break;
                }
                case 8: {
                    CC_SETOP(4, "Open Hero Pass Track");
                    break;
                }
                case 9: {
                    CC_SETOP(4, "Open Hero Pass Missions");
                    break;
                }
                case 10: {
                    CC_SETOP(4, "Open Hero Store");
                    break;
                }
                case 12: {
                    CC_SETOP(4, "Set up Action Bar");
                    break;
                }
            };
            break;
        }
        case 141: {
            CC_SETOP(4, "Open Treasure Hunter");
            break;
        }
        case 146: {
            if ((int2 > 0)) {
                CC_SETOP(4, `World hop to ${inttostring(int2, 10)}`);
            };
            break;
        }
    };
    return;
}