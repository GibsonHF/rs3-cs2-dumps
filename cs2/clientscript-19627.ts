//
function script19627(int0: unknown_int, int1: int): void {
    if ((script6431() == true)) {
        printmessage("Quick Chat is currently disabled on mobile.");
        return;
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    [int2, int3, int4, int5, int6, int7, int8] = script4590();
    var int10 = int1;
    if ((varbitplayer_27169 == 1)) {
        switch (int0) {
            case 1: {
                int9 = 1;
                break;
            }
            case 2: {
                int9 = 1;
                int10 = 18;
                script1050(0, "", int10);
                break;
            }
            case 3: {
                int9 = 3;
                break;
            }
            case 4: {
                int9 = 3;
                int10 = 18;
                if ((CLAN_GETCHATCOUNT() > 0)) {
                    script1050(2, "", int10);
                } else {
                    script7171(18, "You aren't in a Friends Chat channel.");
                    return;
                };
                break;
            }
            case 5: {
                int9 = 4;
                break;
            }
            case 6: {
                int9 = 4;
                int10 = 18;
                if ((int2 >= 0)) {
                    if ((int3 < int4)) {
                        MES_TYPED(43, 0, "Your rank is not high enough to chat in the Clan Chat.");
                        return;
                    };
                    if ((int5 == 1)) {
                        MES_TYPED(43, 0, "You've been muted by your Clan and can't talk in your Clan Chat.");
                        return;
                    };
                    script1050(8, "", int10);
                } else {
                    script7171(18, "You aren't in a Clan Chat channel.");
                    return;
                };
                break;
            }
            case 7: {
                int9 = 5;
                break;
            }
            case 8: {
                int9 = 5;
                int10 = 18;
                if ((int6 >= 0)) {
                    if ((int7 >= int8)) {
                        script1050(10, "", int10);
                    } else {
                        MES_TYPED(43, 0, "Guests cannot chat in this visited Clan channel.");
                        return;
                    };
                } else {
                    script7171(18, "You aren't a guest in a Clan Chat channel.");
                    return;
                };
                break;
            }
            case 9: {
                int9 = 15;
                break;
            }
            case 10: {
                int9 = 15;
                int10 = 18;
                if ((PLAYER_GROUP_FIND() == 1)) {
                    script1050(13, "", int10);
                } else {
                    printmessage("You need to be in a group to use group quickchat.");
                };
                break;
            }
            case 11: {
                int9 = 16;
                break;
            }
            case 12: {
                int9 = 16;
                int10 = 18;
                if (((script19316() == false) || (unk10993(1) == 0))) {
                    printmessage("Group Ironman chat is currently unavailable.");
                    return;
                };
                script1050(17, "", int10);
                break;
            }
        };
        varclient_41 = int9;
        script9912(int9);
        script1558(18, 0);
        script8491(18);
        return;
    };
    switch (int0) {
        case 1: {
            script8515(18);
            script8516(18);
            break;
        }
        case 2: {
            int10 = 18;
            script1050(0, "", int10);
            break;
        }
        case 3: {
            script8515(20);
            script8516(20);
            break;
        }
        case 4: {
            if ((int1 == 18)) {
                int10 = 18;
            } else {
                int10 = 20;
            };
            if ((CLAN_GETCHATCOUNT() > 0)) {
                script1050(2, "", int10);
            } else {
                script7171(18, "You aren't in a Friends Chat channel.");
                return;
            };
            break;
        }
        case 5: {
            script8515(21);
            script8516(21);
            break;
        }
        case 6: {
            if ((int1 == 18)) {
                int10 = 18;
            } else {
                int10 = 21;
            };
            if ((int2 < 0)) {
                script7171(18, "You aren't in a Clan Chat channel.");
                return;
            };
            if ((int3 < int4)) {
                MES_TYPED(43, 0, "Your rank is not high enough to chat in the Clan Chat.");
                return;
            };
            if ((int5 == 1)) {
                MES_TYPED(43, 0, "You've been muted by your Clan and can't talk in your Clan Chat.");
                return;
            };
            script1050(8, "", int10);
            break;
        }
        case 7: {
            script8515(22);
            script8516(22);
            break;
        }
        case 8: {
            if ((int1 == 18)) {
                int10 = 18;
            } else {
                int10 = 22;
            };
            if ((int6 < 0)) {
                script7171(18, "You aren't a guest in a Clan Chat channel.");
                return;
            };
            if ((int7 >= int8)) {
                script1050(10, "", int10);
            } else {
                MES_TYPED(43, 0, "Guests cannot chat in this visited Clan channel.");
                return;
            };
            break;
        }
        case 9: {
            script8515(25);
            script8516(25);
            break;
        }
        case 10: {
            if ((int1 == 18)) {
                int10 = 18;
            } else {
                int10 = 25;
            };
            if ((PLAYER_GROUP_FIND() == 1)) {
                script1050(13, "", int10);
            } else {
                printmessage("You aren't in a group.");
            };
            break;
        }
        case 11: {
            if ((script19316() == false)) {
                return;
            };
            script8515(46);
            script8516(46);
            break;
        }
        case 12: {
            if ((int1 == 18)) {
                int10 = 18;
            } else {
                int10 = 46;
            };
            if (((script19316() == false) || (unk10993(1) == 0))) {
                printmessage("Group Ironman chat is currently unavailable.");
                return;
            };
            script1050(17, "", int10);
            break;
        }
    };
    return;
}