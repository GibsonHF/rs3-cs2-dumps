//
function script9914(int0: int, int1: int, int2: int): void {
    switch (int0) {
        case 0: {
            varbitplayer_18797 = int1;
            varbitplayer_18805 = int2;
            break;
        }
        case 1: {
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
        case 2: {
            varbitplayer_18801 = int1;
            varbitplayer_18809 = int2;
            CHAT_GETFILTER_PUBLIC();
            CHAT_GETFILTER_TRADE(stack(), int2);
            CHAT_SETFILTER();
            break;
        }
        case 3: {
            varbitplayer_18802 = int1;
            varbitplayer_18810 = int2;
            break;
        }
        case 4: {
            varbitplayer_18803 = int1;
            varbitplayer_18811 = int2;
            break;
        }
        case 5: {
            varbitplayer_18804 = int1;
            varbitplayer_18811 = int2;
            break;
        }
        case 6: {
            varbitplayer_60414 = int1;
            varbitplayer_60415 = int2;
            break;
        }
        case 15: {
            varbitplayer_24578 = int1;
            varbitplayer_24586 = int2;
            varclient_4505 = int2;
            break;
        }
        case 16: {
            varbitplayer_56269 = int1;
            varbitplayer_56278 = int2;
            break;
        }
    };
    return;
}