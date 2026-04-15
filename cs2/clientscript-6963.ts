//
function script6963(int0: int): unknown_int {
    switch (int0) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7: {
            return 0;
        }
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
            if ((PLAYERMEMBER() == false)) {
                return 1;
            };
            return 0;
        }
        case 16:
        case 17:
        case 18: {
            if ((varbitplayer_24930 == 0)) {
                return 3;
            };
            return 0;
        }
        case 19: {
            if ((MAP_MEMBERS() == 0)) {
                return 2;
            };
            return 0;
        }
    };
    script12478(`unknown preset slot being checked ${inttostring(int0, 10)}, max is ${inttostring(19, 10)} and min is 1.`);
    return 0;
}