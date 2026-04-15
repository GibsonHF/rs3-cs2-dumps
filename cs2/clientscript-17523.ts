//
function script17523(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 7591: {
            if ((varbitplayer_53549 > 50)) {
                return 0;
            };
            break;
        }
        case 7662: {
            if (((varbitplayer_53496 == 15) || (varbitplayer_53549 < 70))) {
                return 0;
            };
            break;
        }
        case 7584: {
            if ((varbitplayer_53496 != 15)) {
                return 0;
            };
            break;
        }
        case 7585: {
            if ((varbitplayer_53499 != 45)) {
                return 0;
            };
            break;
        }
        case 7583: {
            if ((varbitplayer_53468 != 2)) {
                return 0;
            };
            break;
        }
        case 13391: {
            if ((varbitplayer_55367 != 47)) {
                return 0;
            };
            break;
        }
        case 13392: {
            if ((varbitplayer_55367 != 56)) {
                return 0;
            };
            break;
        }
        case 13815: {
            if ((script19066() == 0)) {
                return 0;
            };
            break;
        }
        case 14255: {
            if ((varbitplayer_56740 == 1)) {
                return 0;
            };
            break;
        }
        case 15591: {
            if ((varbitplayer_58246 != 108)) {
                return 0;
            };
            break;
        }
        case 15592: {
            if ((varbitplayer_58246 != 120)) {
                return 0;
            };
            break;
        }
        default: {
            if ((varbitplayer_53549 < 70)) {
                return 0;
            };
            break;
        }
    };
    [int1, int2] = script17528(int0);
    if (((script17502(int0) == true) && (int1 == 0))) {
        return 0;
    };
    if ((varbitplayer_53836 == 1)) {
        return 1;
    };
    var int3 = 1;
    var string0 = "";
    [int3, string0] = script17536(int0);
    if ((int3 == 0)) {
        return 0;
    };
    [int3, string0] = script17537(int0);
    if ((int3 == 0)) {
        return 0;
    };
    [int3, string0] = script17535(int0);
    if ((int3 == 0)) {
        return 0;
    };
    [int3, string0] = script17538(int0);
    if ((int3 == 0)) {
        return 0;
    };
    [int3, string0] = script17539(int0);
    return int3;
}