//
function script8520(int0: int): int {
    var string0 = script8521(int0);
    var int1 = STRING_LENGTH(string0);
    var int2 = -1;
    if ((int1 == 0)) {
        return -1;
    };
    if (((int0 == 24) && (varbitplayer_27169 == 0))) {
        script8522(int0, string0);
        return script8550(int0);
    };
    if (((varbitplayer_27169 == 1) && (varbitplayer_22846 == 14))) {
        script8522(int0, string0);
        return 6;
    };
    var string1 = "";
    var int3 = 0;
    if (((strcmp(SUBSTRING(string0, 0, MIN(4, int1)), "/pm ") == 0) || (strcmp(SUBSTRING(string0, 0, MIN(4, int1)), "\\pm ") == 0))) {
        if ((int1 > 4)) {
            if ((strcmp("'", SUBSTRING(string0, 4, 5)) == 0)) {
                int2 = STRING_INDEXOF_CHAR(string0, 39, 5);
                int3 = 2;
                if ((int2 > 5)) {
                    string1 = script2332(SUBSTRING(string0, 5, int2), " ", " ");
                };
            } else {
                int2 = STRING_INDEXOF_CHAR(string0, 32, 4);
                int3 = 1;
                if ((int2 > 4)) {
                    string1 = SUBSTRING(string0, 4, int2);
                };
            };
            if (((((int2 + int3) < int1) && (STRING_LENGTH(string1) > 0)) && (FRIEND_TEST(string1) == 1))) {
                string0 = SUBSTRING(string0, (int2 + int3), int1);
                int2 = 100;
                varclient_2367 = string1;
            } else {
                printmessage("You need to enter the name of a player on your friends list and a message to send. If their name contains spaces enter as 'player name'.");
                int2 = 101;
            };
        } else {
            printmessage("You need to enter the name of a player on your friends list and a message to send.");
            int2 = 101;
        };
    } else if ((varclient_6858 == true)) {
        script7839(string0, script8526(int0));
        string0 = "";
        int2 = 101;
        varclient_6858 = false;
    } else if (((strcmp(LOWERCASE(SUBSTRING(string0, 0, MIN(5, int1))), "/wiki") == 0) || (strcmp(LOWERCASE(SUBSTRING(string0, 0, MIN(5, int1))), "\\wiki") == 0))) {
        if ((int1 == 5)) {
            script7839("", script8526(int0));
            string0 = "";
            int2 = 101;
        } else if (((int1 > 6) && (strcmp(SUBSTRING(string0, 5, 6), " ") == 0))) {
            string0 = SUBSTRING(string0, 6, int1);
            script7839(string0, script8526(int0));
            string0 = "";
            int2 = 101;
        } else {
            MES_TYPED(script8526(int0), 0, "Unrecognised Command: type /? for a list.");
        };
        varclient_6858 = false;
    } else if ((script8550(int0) == 100)) {
        while (((int1 > 0) && (strcmp(SUBSTRING(string0, 0, 1), "/") == 0))) {
            string0 = SUBSTRING(string0, 1, int1);
            int1 = STRING_LENGTH(string0);
        };
        int2 = 100;
    } else if ((strcmp(SUBSTRING(string0, 0, MIN(6, int1)), "//////") == 0)) {
        MES_TYPED(script8526(int0), 0, "Unrecognised Command: type /? for a list.");
    } else if ((strcmp(SUBSTRING(string0, 0, MIN(5, int1)), "/////") == 0)) {
        string0 = SUBSTRING(string0, 5, int1);
        varclient_4505 = 1;
        int2 = 5;
    } else if ((strcmp(SUBSTRING(string0, 0, MIN(4, int1)), "////") == 0)) {
        string0 = SUBSTRING(string0, 4, int1);
        varclient_4505 = 0;
        int2 = 4;
    } else if ((strcmp(SUBSTRING(string0, 0, MIN(3, int1)), "///") == 0)) {
        string0 = SUBSTRING(string0, 3, int1);
        int2 = 3;
    } else if ((strcmp(SUBSTRING(string0, 0, MIN(2, int1)), "//") == 0)) {
        string0 = SUBSTRING(string0, 2, int1);
        int2 = 2;
    } else if (((script19316() == true) && (strcmp(SUBSTRING(string0, 0, MIN(2, int1)), "/#") == 0))) {
        string0 = SUBSTRING(string0, 2, int1);
        int2 = 102;
    } else if ((strcmp(SUBSTRING(string0, 0, MIN(1, int1)), "/") == 0)) {
        string0 = SUBSTRING(string0, 1, int1);
        int2 = 1;
    } else if (((varbitplayer_27169 == 0) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
        int2 = script8550(int0);
    } else {
        switch (varbitplayer_22846) {
            case 4: {
                int2 = 1;
                break;
            }
            case 5: {
                int2 = 2;
                break;
            }
            case 6: {
                int2 = 3;
                break;
            }
            case 14: {
                int2 = 6;
                break;
            }
            case 10: {
                if ((varclient_4505 == 0)) {
                    int2 = 4;
                } else {
                    int2 = 5;
                };
                break;
            }
            case 11: {
                int2 = 102;
                break;
            }
            default: {
                int2 = 0;
                break;
            }
        };
    };
    script8522(int0, string0);
    return int2;
}