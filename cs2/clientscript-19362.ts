//
function script19362(int0: obj): unknown_int {
    if ((script1857() == 0)) {
        return 1;
    };
    if ((script19574(int0) == 1)) {
        return 1;
    };
    if ((script16768(int0) == 1)) {
        return 1;
    };
    if ((script3996(int0) == 1)) {
        return 1;
    };
    switch (int0) {
        case 36725:
        case 36599:
        case 36719:
        case 36720: {
            if ((script13692() == 0)) {
                return 1;
            };
            break;
        }
        case 50805: {
            if ((((((varbitplayer_48172 + varbitplayer_48173) + varbitplayer_48174) + varbitplayer_48175) + varbitplayer_48176) != 0)) {
                return 1;
            };
            return 0;
        }
    };
    if ((enum_hasoutput(33, 5986 as cs2enum, int0) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(33, 6048 as cs2enum, int0) == 1)) {
        return 0;
    };
    if ((enum_hasoutput(41, 5985 as cs2enum, OC_CATEGORY(int0)) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(41, 5990 as cs2enum, OC_CATEGORY(int0)) == 1)) {
        return 0;
    };
    if ((item_getparam(int0, 4076) == 1)) {
        return 0;
    };
    if ((item_getparam(int0, 818) == 1)) {
        return 0;
    };
    if ((item_getparam(int0, 5726) == 2)) {
        return 0;
    };
    if ((OC_CATEGORY(int0) == 2127 as category)) {
        switch (item_getparam(int0, 369)) {
            case 0:
            case 3: {
                return 0;
            }
        };
    };
    if ((OC_TRADEABLE(int0) == 0)) {
        if ((script19363(int0) == 1)) {
            return 0;
        };
        if ((script19364(int0) == 1)) {
            return 0;
        };
        return 1;
    };
    return 0;
}