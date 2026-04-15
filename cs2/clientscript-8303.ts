//
function script8303(int0: obj): obj {
    var int1 = -1 as obj;
    switch (OC_CATEGORY(int0)) {
        case 2804: {
            if ((item_getparam(int0, 3110) != -1 as obj)) {
                return item_getparam(int0, 3110);
            };
            if ((item_getparam(int0, 6819) != -1 as obj)) {
                return item_getparam(int0, 6819);
            };
            break;
        }
        case 4058: {
            if ((item_getparam(int0, 6810) == true)) {
                return -1 as obj;
            };
            if (((OC_MEMBERS(int0) == 0) || (MAP_MEMBERS() == 1))) {
                if ((item_getparam(int0, 3384) == 1)) {
                    return enum_getvalue(33, 33, 11953 as cs2enum, int0);
                };
                return enum_getreverseindex(33, 33, 11953 as cs2enum, int0, 0);
            };
            break;
        }
        case 2127: {
            int1 = enum_getvalue(33, 33, 3538 as cs2enum, int0);
            return int1;
        }
        case 4222: {
            if ((int0 == 24205 as obj)) {
                return 24204 as obj;
            };
            if ((int0 == 24204 as obj)) {
                return 24205 as obj;
            };
            break;
        }
    };
    return -1 as obj;
}