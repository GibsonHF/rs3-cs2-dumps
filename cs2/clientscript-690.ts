//
function script690(int0: struct): unknown_int {
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    switch (int0) {
        case 14693:
        case 14694:
        case 14695:
        case 24365:
        case 24366:
        case 24367: {
            if ((varbitplayer_21748 == 0)) {
                int1 = 1;
            } else if ((varplayer_1494 == 1)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 24368:
        case 24369:
        case 24370: {
            if ((varbitplayer_21748 == 0)) {
                int1 = 1;
            } else if ((varplayer_1494 == 2)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 24371:
        case 24372:
        case 24373: {
            if ((varbitplayer_21748 == 0)) {
                int1 = 1;
            } else if ((varplayer_1494 == 3)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 24362:
        case 24363:
        case 24364: {
            if ((varbitplayer_21748 == 0)) {
                int1 = 1;
            } else if ((varplayer_1494 == 4)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 43909: {
            if ((script14969() == 0)) {
                int1 = 1;
            };
            break;
        }
        case 45801:
        case 45802: {
            if ((((INV_GETOBJ(94 as inv, 13) == -1 as obj) || (OC_CATEGORY(INV_GETOBJ(94 as inv, 13)) != 5087 as category)) || (item_getparam(INV_GETOBJ(94 as inv, 13), 8605) < 2))) {
                int1 = 1;
            };
            break;
        }
        case 49251: {
            if ((script18376() == 1)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 49603: {
            if ((script18797() == 1)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 50569: {
            if ((script17140() == 1)) {
                int1 = 0;
            } else {
                int1 = 1;
            };
            break;
        }
        case 28927: {
            if ((script15411(int0) == 0)) {
                int1 = 2;
            } else if ((varbitplayer_21020 == 1)) {
                int1 = 3;
            } else {
                int1 = 0;
            };
            break;
        }
        case 45800: {
            if ((script15411(int0) == 0)) {
                int1 = 1;
            } else if ((varbitplayer_21020 == 1)) {
                int1 = 0;
            } else {
                int1 = 3;
            };
            break;
        }
        case 20279:
        case 20280: {
            if ((script11771(4) == 1)) {
                int1 = 0;
            } else {
                int1 = 2;
            };
            break;
        }
        default: {
            if ((script15411(int0) == 0)) {
                int1 = 2;
            };
            break;
        }
    };
    if ((((varbitplayer_50989 == 1) && (int1 == 2)) || ((varbitplayer_50990 == 1) && (struct_getparam(int0, 4652) == 1)))) {
        int1 = 1;
    };
    return int1;
}