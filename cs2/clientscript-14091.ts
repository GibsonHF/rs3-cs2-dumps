//
function script14091(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 1;
    };
    if (((OC_MEMBERS(int0) == 1) && (MAP_MEMBERS() == 0))) {
        return 0;
    };
    switch (int0) {
        case 32633:
        case 32634: {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 4663) == 1)) {
                return 1;
            };
            break;
        }
        case 32635:
        case 32636: {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 4662) == 1)) {
                return 1;
            };
            break;
        }
        case 32637:
        case 32638: {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 4660) == 1)) {
                return 1;
            };
            break;
        }
        case 32640:
        case 32641: {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 4659) == 1)) {
                return 1;
            };
            break;
        }
        case 32642:
        case 32643: {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 4657) == 1)) {
                return 1;
            };
            break;
        }
        case 35719:
        case 35720: {
            if ((item_getparam(INV_GETOBJ(94 as inv, 3), 5322) == 1)) {
                return 1;
            };
            break;
        }
        case 1734: {
            if ((script13040(11, 0) == 1)) {
                return 1;
            };
            break;
        }
    };
    return 0;
}