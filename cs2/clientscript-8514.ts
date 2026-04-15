//
function script8514(int0: int, int1: int): void {
    if (((varbitplayer_27169 == 0) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
        varclient_2231 = int1;
        script1558(int0, 0);
        script8515(int1);
    } else {
        if ((varclient_41 == -1)) {
            return;
        };
        switch (int1) {
            case 18: {
                var int1 = 1;
                break;
            }
            case 20: {
                int1 = 3;
                break;
            }
            case 21: {
                int1 = 4;
                break;
            }
            case 22: {
                int1 = 5;
                break;
            }
            case 25: {
                int1 = 15;
                break;
            }
            case 46: {
                int1 = 16;
                break;
            }
        };
        varclient_41 = int1;
        script9912(int1);
        script1558(int0, 0);
        script8491(18);
    };
    return;
}