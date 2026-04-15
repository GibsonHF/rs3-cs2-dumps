//
function script15841(int0: int): void {
    var string0 = script8521(int0);
    varclient_1028 = STRING_LENGTH(ESCAPE(string0));
    if ((script6968(int0) == 1)) {
        return;
    };
    var int1 = script13749();
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    [int2, int3, int4, int5, int6, int7, int8] = script4590();
    var int10 = -1;
    var int11 = -1;
    if ((((varbitplayer_21242 == 0) && (int1 == false)) && (STRING_LENGTH(string0) <= 0))) {
        script8517(int0);
        switch (int0) {
            case 18: {
                script1050(0, "", int0);
                break;
            }
            case 19: {
                return;
            }
            case 20: {
                script1050(2, "", int0);
                break;
            }
            case 21: {
                script1050(8, "", int0);
                break;
            }
            case 22: {
                script1050(10, "", int0);
                break;
            }
            case 23: {
                script1050(0, "", int0);
                break;
            }
            case 25: {
                if ((varclient_4505 == 0)) {
                    script1050(13, "", int0);
                } else {
                    script1050(15, "", int0);
                };
                break;
            }
            case 46: {
                script1050(17, "", int0);
                break;
            }
            default: {
                return;
            }
        };
    } else {
        if ((strcmp(string0, "/?") == 0)) {
            script8527(int0);
            script8522(int0, "");
            script8517(int0);
            return;
        };
        if ((int1 == false)) {
            if ((strcmp(string0, "/") == 0)) {
                script1050(2, "", int0);
            } else if ((strcmp(string0, "//") == 0)) {
                script1050(8, "", int0);
            } else if ((strcmp(string0, "///") == 0)) {
                script1050(10, "", int0);
            } else if ((strcmp(string0, "////") == 0)) {
                script1050(13, "", int0);
            } else if ((strcmp(string0, "/////") == 0)) {
                script1050(15, "", int0);
            } else if (((strcmp(string0, "/#") == 0) && (script19316() == true))) {
                script1050(17, "", int0);
            };
        };
        int10 = script8519(string0);
        if (((int10 != -1) && (int0 != 24))) {
            varclient_1028 = STRING_LENGTH(string0);
            script8522(int0, "");
            script8514(int0, int10);
            if ((((int10 == 18) && (varbitplayer_27169 == 0)) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
                script8551(int10, 0);
                script1558(int10, 0);
            };
            return;
        };
        int11 = script8520(int0);
        switch (int11) {
            case 1: {
                if ((strcmp("", CLAN_GETCHATDISPLAYNAME()) == 0)) {
                    int11 = -1;
                    script7171(int0, "You aren't in a Friends Chat channel.");
                };
                break;
            }
            case 2: {
                if ((int2 < 0)) {
                    int11 = -1;
                    script7171(int0, "You aren't in a Clan Chat channel.");
                } else if ((int3 < int4)) {
                    int11 = -1;
                    MES_TYPED(43, 0, "Your rank is not high enough to talk in your Clan Chat.");
                } else if ((int5 == 1)) {
                    int11 = -1;
                    MES_TYPED(43, 0, "You've been muted by your Clan and can't talk in your Clan Chat.");
                };
                break;
            }
            case 3: {
                if ((int6 < 0)) {
                    int11 = -1;
                    script7171(int0, "You aren't a guest in a visited Clan Chat channel.");
                } else if ((int7 < int8)) {
                    int11 = -1;
                    MES_TYPED(46, 0, "Guests cannot chat in this Clan Chat channel.");
                };
                break;
            }
            case 4:
            case 5: {
                if ((PLAYER_GROUP_FIND() == 0)) {
                    int11 = -1;
                    printmessage("You aren't in a group. You can create one using the button on this window.");
                };
                break;
            }
            case 102: {
                if (((script19316() == false) || (unk10993(1) == 0))) {
                    int11 = -1;
                    printmessage("Group Ironman chat is currently unavailable.");
                };
                break;
            }
        };
        string0 = script8521(int0);
        if (((int11 != -1) && (STRING_LENGTH(string0) > 0))) {
            switch (int11) {
                case 101: {
                    break;
                }
                case 100: {
                    CHAT_SENDPRIVATE(varclient_2367, string0);
                    break;
                }
                case 6: {
                    int9 = unk11121(string0);
                    break;
                }
                case 2: {
                    stack(0);
                    CHAT_SETMODE();
                    CHAT_SENDPUBLIC(string0);
                    break;
                }
                case 102: {
                    stack(1);
                    CHAT_SETMODE();
                    CHAT_SENDPUBLIC(string0);
                    break;
                }
                default: {
                    stack(int11);
                    CHAT_SETMODE();
                    CHAT_SENDPUBLIC(string0);
                    break;
                }
            };
        };
        script8517(int0);
    };
    return;
}