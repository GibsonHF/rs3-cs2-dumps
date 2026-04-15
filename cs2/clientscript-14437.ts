//
function script14437(int0: obj, int1: unknown_int): unknown_int {
    if ((int1 == 0)) {
        if ((script13621(int0) == 0)) {
            return 0;
        };
    } else if ((script13793(int0) == 0)) {
        return 0;
    };
    switch (varclient_4741) {
        case 1: {
            if ((item_getparam(int0, 4901) == 1)) {
                return 1;
            };
            break;
        }
        case 2: {
            if ((((((item_getparam(int0, 4905) == 1) || (item_getparam(int0, 2825) == 1)) || (item_getparam(int0, 2826) == 1)) || (item_getparam(int0, 2827) == 1)) || (item_getparam(int0, 8898) == 1))) {
                return 1;
            };
            break;
        }
        case 3: {
            if (((item_getparam(int0, 4906) == 1) || (item_getparam(int0, 2870) > 0))) {
                return 1;
            };
            break;
        }
        case 4: {
            if ((item_getparam(int0, 4903) == 1)) {
                return 1;
            };
            break;
        }
        case 5: {
            if ((item_getparam(int0, 4904) == 1)) {
                return 1;
            };
            break;
        }
        default: {
            return 1;
        }
    };
    return 0;
}