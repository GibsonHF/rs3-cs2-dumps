//
function script18843(int0: component): dbrow {
    var int1 = 0;
    switch (int0) {
        case 120783100: {
            int1 = 0;
            break;
        }
        case 120783101: {
            int1 = 1;
            break;
        }
        case 120783102: {
            int1 = 2;
            break;
        }
        case 120783103: {
            int1 = 3;
            break;
        }
        case 120783104: {
            int1 = 4;
            break;
        }
        case 120783105: {
            int1 = 5;
            break;
        }
        case 120783106: {
            int1 = 6;
            break;
        }
        case 120783107: {
            int1 = 7;
            break;
        }
        default: {
            return -1 as dbrow;
        }
    };
    if ((IF_FIND[1](int0) == 1)) {
        return script15768(cc_getparam[1](6361));
    };
    return -1 as dbrow;
}