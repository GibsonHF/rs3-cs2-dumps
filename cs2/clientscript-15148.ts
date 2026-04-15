//
function script15148(int0: obj): int {
    if ((varplayer_1171 > 0)) {
        return varplayer_1171;
    };
    var int1 = 0;
    switch (OC_CATEGORY(int0)) {
        case 4935: {
            return (1000 - script15448(varplayer_9409));
        }
        case 3027: {
            if ((varbitplayer_40689 == 1)) {
                return (3 - varbitplayer_20138);
            };
            break;
        }
        case 62:
        case 2762: {
            if ((item_getparam(int0, 2995) > 0)) {
                int1 = item_getparam(int0, 2995);
            } else {
                int1 = 20;
            };
            break;
        }
    };
    if ((int1 == 0)) {
        int1 = item_getparam(int0, 2995);
    };
    if ((int1 == 0)) {
        int1 = 60;
    };
    if ((script15180(50476) == 1)) {
        if ((((item_getparam(int0, 2640) == 19) && (item_getparam(int0, 2696) == 19)) && (item_getparam(int0, 1047) == 0))) {
            int1 = (int1 + 30);
        };
    } else if ((script15180(50475) == 1)) {
        if ((((item_getparam(int0, 2640) == 19) && (item_getparam(int0, 2696) == 19)) && (item_getparam(int0, 1047) == 0))) {
            int1 = (int1 + 15);
        };
    } else if ((script16844() == 1)) {
        int1 = script16845(int0, int1);
    } else if ((script17428() == 1)) {
        int1 = script17429(int0, int1);
    };
    return int1;
}