//
function script3145(int0: int): int {
    switch (int0) {
        case 5: {
            if ((varplayer_2353 < 10)) {
                return 0;
            };
            break;
        }
        case 6: {
            if ((STAT_BASE(14 as stat) < 60)) {
                return 0;
            };
            break;
        }
        case 10: {
            if (((varbitplayer_15344 < 10) || (script1283() == 1))) {
                return 0;
            };
            break;
        }
        case 18: {
            return varbitplayer_9663;
        }
        case 1002: {
            if ((varbitplayer_9602 < 210)) {
                return 0;
            };
            break;
        }
        case 1001: {
            if ((varbitplayer_21715 < 100)) {
                return 0;
            };
            break;
        }
    };
    return 1;
}