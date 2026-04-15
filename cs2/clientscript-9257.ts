//
function script9257(int0: inv, int1: obj, int2: unknown_int): unknown_int {
    if ((varplayer_1784 != -1 as npc)) {
        switch (varplayer_1784) {
            case 6818:
            case 6819:
            case 6820:
            case 6821:
            case 7349:
            case 7350: {
                if ((((int1 != 1436 as obj) && (int1 != 7936 as obj)) && (int1 != 55667 as obj))) {
                    return 1;
                };
                break;
            }
            case 32716: {
                return 1;
            }
            default: {
                if ((((int1 == 1436 as obj) || (int1 == 7936 as obj)) || (int1 == 55667 as obj))) {
                    return 1;
                };
                break;
            }
        };
        if (((npc_getparam(varplayer_1784, 1323) == 0) && ((npc_getparam(varplayer_1784, 5048) == 0) || ((npc_getparam(varplayer_1784, 5048) == 1) && (varbitplayer_27747 == 0))))) {
            switch (varplayer_1784) {
                case 11186:
                case 11188:
                case 11190:
                case 11192:
                case 11194:
                case 11196:
                case 11198:
                case 11200:
                case 11202:
                case 11204:
                case 11187:
                case 11189:
                case 11191:
                case 11193:
                case 11195:
                case 11197:
                case 11199:
                case 11201:
                case 11203:
                case 11205: {
                    break;
                }
                default: {
                    return 1;
                }
            };
        };
    } else if ((int0 != 741 as inv)) {
        return 1;
    };
    if (((int1 == 29492 as obj) || (int1 == 29494 as obj))) {
        return 1;
    };
    if ((item_getparam(int1, 3741) != 0)) {
        return 1;
    };
    if ((OC_CATEGORY(int1) == 43 as category)) {
        return 1;
    };
    if ((item_getparam(int1, 226) == 1)) {
        return 1;
    };
    if ((OC_CATEGORY(int1) == 2941 as category)) {
        return 1;
    };
    switch (int1) {
        case 32817:
        case 32818:
        case 32819:
        case 32820:
        case 32821: {
            return 1;
        }
    };
    if (((OC_TRADEABLE(int1) == 0) && (item_getparam(int1, 2240) == 0))) {
        if ((((int1 != -1 as obj) && (OC_CERT(int1) == int1)) && (item_getparam(OC_UNCERT(int1), 2240) == 1))) {
            return 0;
        };
        return 1;
    };
    return 0;
}