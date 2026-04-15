//
function script8529(int0: int, int1: int, int2: int): void {
    switch (int0) {
        case 18: {
            varbitplayer_18800 = int1;
            varbitplayer_18808 = int2;
            if ((varbitplayer_36983 == 1)) {
                CHAT_GETFILTER_TRADE(3, CHAT_GETFILTER_PRIVATE());
                CHAT_SETFILTER();
            } else if ((int1 == 0)) {
                CHAT_GETFILTER_TRADE(2, CHAT_GETFILTER_PRIVATE());
                CHAT_SETFILTER();
            } else if ((int2 == 0)) {
                CHAT_GETFILTER_TRADE(0, CHAT_GETFILTER_PRIVATE());
                CHAT_SETFILTER();
            } else {
                CHAT_GETFILTER_TRADE(1, CHAT_GETFILTER_PRIVATE());
                CHAT_SETFILTER();
            };
            break;
        }
        case 19: {
            varbitplayer_18815 = int1;
            varbitplayer_18823 = int2;
            break;
        }
        case 20: {
            varbitplayer_18830 = int1;
            varbitplayer_18838 = int2;
            break;
        }
        case 21: {
            varbitplayer_18845 = int1;
            varbitplayer_18853 = int2;
            break;
        }
        case 22: {
            varbitplayer_18860 = int1;
            varbitplayer_18868 = int2;
            break;
        }
        case 23: {
            varbitplayer_20816 = int1;
            varbitplayer_20824 = int2;
            break;
        }
        case 25: {
            varbitplayer_24566 = int1;
            varbitplayer_24574 = int2;
            break;
        }
        case 46: {
            varbitplayer_56253 = int1;
            varbitplayer_56261 = int2;
            break;
        }
    };
    return;
}