//
function script9915(int0: unknown_int, int1: int, int2: int): void {
    if ((varplayer_1295 < 1000)) {
        printmessage("You can't do this while in the tutorial.");
        return;
    };
    if ((varbitplayer_3617 == 1)) {
        printmessage("You cannot change your chat filters while you are in the tutorial as you might miss important messages that will help with your progress.");
        return;
    };
    switch (int0) {
        case 1: {
            if ((varclient_41 == int2)) {
                varclient_41 = -1;
                script9946();
            } else if ((varclient_41 == -1)) {
                varclient_41 = int2;
                script9946();
            } else {
                varclient_41 = int2;
            };
            script9912(int2);
            script10268(int2);
            break;
        }
        case 2: {
            if ((int2 == 1)) {
                varbitplayer_36983 = 0;
            };
            script9914(int2, 1, 0);
            break;
        }
        case 3: {
            if ((int2 == 1)) {
                varbitplayer_36983 = 0;
            };
            script9914(int2, 1, 1);
            break;
        }
        case 4: {
            switch (int2) {
                case 0: {
                    varbitplayer_18797 = 0;
                    break;
                }
                case 1: {
                    if ((int2 == 1)) {
                        varbitplayer_36983 = 0;
                    };
                    script9914(int2, 0, 0);
                    break;
                }
                case 2: {
                    varbitplayer_18801 = 0;
                    CHAT_GETFILTER_PUBLIC();
                    CHAT_GETFILTER_TRADE(stack(), 2);
                    CHAT_SETFILTER();
                    break;
                }
                case 3: {
                    varbitplayer_18802 = 0;
                    break;
                }
                case 4: {
                    varbitplayer_18803 = 0;
                    break;
                }
                case 5: {
                    varbitplayer_18804 = 0;
                    break;
                }
                case 6: {
                    varbitplayer_60414 = 0;
                    break;
                }
                case 15: {
                    varbitplayer_24578 = 0;
                    break;
                }
                case 16: {
                    varbitplayer_56269 = 0;
                    break;
                }
            };
            break;
        }
        case 5: {
            if ((int2 == 1)) {
                varbitplayer_36983 = 1;
            };
            break;
        }
    };
    script8491(int1);
    return;
}