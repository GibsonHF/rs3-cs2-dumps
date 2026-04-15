//[proc,lobbyscreen_input_ok]
function script3020(int0: unknown_int, string0: string): void {
    var string1 = "";
    var string2 = "";
    var int1 = -1;
    var string3 = "";
    var string4 = "";
    var int2 = -1;
    if ((STRING_LENGTH(varclient_2478) > 0)) {
        switch (int0) {
            case 0: {
                if (((STRING_LENGTH(varclient_2478) > 0) && (STRING_LENGTH(string0) > 0))) {
                    if ((CHAT_GETFILTER_PRIVATE() == 2)) {
                        script3047(1);
                    };
                    CHAT_SENDPRIVATE(REMOVETAGS(string0), varclient_2478);
                };
                break;
            }
            case 1: {
                if ((FRIEND_COUNT() < 0)) {
                    printmessage("Unable to update Friends List - system busy.");
                } else if ((STRING_LENGTH(varclient_2478) > 0)) {
                    FRIEND_ADD(varclient_2478);
                };
                break;
            }
            case 2: {
                if ((IGNORE_COUNT() < 0)) {
                    printmessage("Unable to update Ignore List - system busy.");
                } else if ((STRING_LENGTH(varclient_2478) > 0)) {
                    IGNORE_ADD(varclient_2478);
                };
                break;
            }
            case 3: {
                if ((FRIEND_COUNT() < 0)) {
                    printmessage("Unable to update Friends List - system busy.");
                } else if ((STRING_LENGTH(varclient_2478) > 0)) {
                    FRIEND_DEL(varclient_2478);
                };
                break;
            }
            case 4: {
                if ((IGNORE_COUNT() < 0)) {
                    printmessage("Unable to update Ignore List - system busy.");
                } else if ((STRING_LENGTH(varclient_2478) > 0)) {
                    IGNORE_DEL(varclient_2478);
                };
                break;
            }
            case 5: {
                if (((CLAN_GETCHATCOUNT() <= 0) && (STRING_LENGTH(varclient_2478) > 0))) {
                    CLAN_JOINCHAT(varclient_2478);
                };
                break;
            }
            case 6: {
                varclient_1094 = false;
                script15230(12);
                break;
            }
            case 7: {
                if ((STRING_LENGTH(varclient_2478) > 0)) {
                    script4465(varclient_2478);
                };
                break;
            }
            case 9: {
                if (((CLAN_GETCHATCOUNT() > 0) && (STRING_LENGTH(varclient_2478) > 0))) {
                    script1633(varclient_2478);
                };
                break;
            }
            case 10: {
                LOGIN_CANCEL();
                varclient_1100 = -1;
                break;
            }
            case 12: {
                script3017();
                LOGIN_CANCEL();
                varclient_1100 = -1;
                script4701(1, varclient_1553, varclient_1554, varclient_2482);
                return;
            }
        };
    };
    varclient_1650 = false;
    script3017();
    return;
}