//[clientscript,meslayer_onkey]
function script112(int0: int, int1: unknown_int): void {
    if ((varclient_2873 != 10)) {
        return;
    };
    var int2 = 0;
    var int3 = 1;
    switch (int0) {
        case 84: {
            switch (varclient_5) {
                case 7:
                case 17: {
                    if ((STRING_LENGTH(varclient_2506) <= 0)) {
                        return;
                    };
                    break;
                }
                case 12: {
                    script1806(varclient_2506);
                    return;
                }
                case 13: {
                    RESUME_STRINGDIALOG(varclient_2506);
                    script1548(13);
                    return;
                }
            };
            if ((STRING_LENGTH(varclient_2506) > 0)) {
                switch (varclient_5) {
                    case 4:
                    case 5: {
                        if ((IGNORE_COUNT() < 0)) {
                            printmessage("Unable to update Ignore List: system busy");
                        } else if ((varclient_5 == 4)) {
                            IGNORE_ADD(varclient_2506);
                        } else if ((varclient_5 == 5)) {
                            if ((IGNORE_TEST(script4591(varclient_2506)) == 1)) {
                                IGNORE_DEL(script4591(varclient_2506));
                            } else {
                                printmessage("That player is not on your ignore list.");
                            };
                        };
                        script1548(varclient_5);
                        break;
                    }
                    case 2:
                    case 3:
                    case 6: {
                        if ((FRIEND_COUNT() < 0)) {
                            printmessage("Unable to complete action - system busy");
                        } else if ((varclient_5 == 2)) {
                            FRIEND_ADD(varclient_2506);
                        } else if ((varclient_5 == 3)) {
                            if ((FRIEND_TEST(script4591(varclient_2506)) == 1)) {
                                varclient_3936 = script4591(varclient_2506);
                                script2018(8);
                            } else {
                                printmessage("That player is not on your friends list.");
                            };
                        } else if ((varclient_5 == 6)) {
                            if ((CHAT_GETFILTER_PRIVATE() == 2)) {
                                CHAT_GETFILTER_PUBLIC();
                                CHAT_GETFILTER_TRADE(stack(), 1);
                                CHAT_SETFILTER();
                            };
                            CHAT_SENDPRIVATE(varclient_2367, varclient_2506);
                        };
                        script1548(varclient_5);
                        break;
                    }
                    case 7: {
                        varclient_2506 = script17391(varclient_2506);
                        if ((KEYHELD_SHIFT() == true)) {
                            varclient_2506 = script17397(varclient_2506);
                            varclient_1029 = STRING_LENGTH(varclient_2506);
                            int3 = 0;
                        } else {
                            RESUME_COUNTDIALOG(script17397(varclient_2506));
                        };
                        break;
                    }
                    case 17: {
                        varclient_2506 = script17393(varclient_2506);
                        if ((KEYHELD_SHIFT() == true)) {
                            varclient_2506 = script17398(varclient_2506);
                            varclient_1029 = STRING_LENGTH(varclient_2506);
                            int3 = 0;
                        } else {
                            RESUME_COUNTDIALOG_LONG(script17398(varclient_2506));
                        };
                        break;
                    }
                    case 8: {
                        varclient_2507 = ESCAPE(varclient_2506);
                        varclient_1026 = true;
                        RESUME_NAMEDIALOG(varclient_2506);
                        break;
                    }
                    case 9: {
                        if ((strcmp(LOWERCASE(varclient_2506), LOWERCASE(varclient_2577)) != 0)) {
                            RESUME_STRINGDIALOG(varclient_2506);
                        } else {
                            printmessage("Please do not enter your password here!");
                        };
                        break;
                    }
                    case 10: {
                        varclient_2508 = ESCAPE(varclient_2506);
                        varclient_1027 = true;
                        CLAN_JOINCHAT(varclient_2506);
                        break;
                    }
                    case 15: {
                        script1633(varclient_2506);
                        break;
                    }
                    case 16: {
                        script4465(varclient_2506);
                        break;
                    }
                };
            } else if ((varclient_5 == 14)) {
                script7751();
                return;
            };
            if ((int3 == 1)) {
                script1548(0);
                return;
            };
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            switch (varclient_5) {
                case 12: {
                    script1806(varclient_2409);
                    script1750(0);
                    break;
                }
                case 14: {
                    script7751();
                    break;
                }
                default: {
                    script1750(varclient_5);
                    break;
                }
            };
            return;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if ((KEYHELD_SHIFT() == false)) {
                return;
            };
            varclient_1029 = script1553(int0, varclient_1029, varclient_2506);
            break;
        }
        default: {
            switch (varclient_5) {
                case 1: {
                    if ((int0 == 83)) {
                        script1548(1);
                    };
                    return;
                }
                case 6:
                case 9: {
                    int2 = 0;
                    break;
                }
                case 7: {
                    int2 = 6;
                    break;
                }
                case 17: {
                    int2 = 10;
                    break;
                }
                case 13: {
                    int2 = 5;
                    break;
                }
                case 14: {
                    int2 = 4;
                    break;
                }
                default: {
                    int2 = 2;
                    break;
                }
            };
            [varclient_2506, varclient_1029] = script802(varclient_1029, varclient_2506, int2, int0, int1);
            break;
        }
    };
    IF_SETTEXT(ESCAPE(varclient_2506), comp(1469, 4));
    script1557();
    if ((varclient_5 == 14)) {
        varclient_2249 = LOWERCASE(varclient_2506);
        varclient_89 = true;
        script7746();
    };
    return;
}