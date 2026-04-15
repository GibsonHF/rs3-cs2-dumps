//
function script947(int0: obj): [obj, int, unknown_int] {
    if ((int0 == -1 as obj)) {
        return [-1 as obj, -1, -1];
    };
    var int1 = int0;
    var int2 = item_getparam(int1, 2281);
    var int3 = -1 as obj;
    var int4 = -1;
    var int5 = -1;
    if ((int2 != -1 as struct)) {
        if ((item_getparam(int1, 4230) == 1)) {
            int5 = script12517(93 as inv, int1, 0);
            return [int1, int5, 93];
        };
        if ((OC_WEARPOS(int1) != -1)) {
            [int3, int5] = script8233(int2, 94 as inv, int1, 1);
        };
        if ((int3 != -1 as obj)) {
            return [int3, int5, 94];
        };
        [int3, int5] = script8233(int2, 93 as inv, int1, 1);
        if ((int3 != -1 as obj)) {
            return [int3, int5, 93];
        };
    } else {
        switch (OC_CATEGORY(int1)) {
            case 2804: {
                if ((OC_WEARPOS(int1) != -1)) {
                    if ((item_getparam(int1, 3110) != -1 as obj)) {
                        int3 = item_getparam(int1, 3110);
                    } else if ((item_getparam(int1, 6819) != -1 as obj)) {
                        int3 = int1;
                        int1 = item_getparam(int1, 6819);
                    };
                } else if ((item_getparam(int1, 3110) != -1 as obj)) {
                    int3 = int1;
                    int1 = item_getparam(int1, 3110);
                } else if ((item_getparam(int1, 6819) != -1 as obj)) {
                    int3 = item_getparam(int1, 6819);
                };
                break;
            }
            case 4058: {
                if (((item_getparam(int1, 6810) == false) && ((OC_MEMBERS(int1) == 0) || (MAP_MEMBERS() == 1)))) {
                    if ((item_getparam(int1, 3384) == 1)) {
                        int3 = enum_getvalue(33, 33, 11953 as cs2enum, int1);
                    } else {
                        int3 = int1;
                        int1 = enum_getreverseindex(33, 33, 11953 as cs2enum, int1, 0);
                    };
                };
                break;
            }
        };
        if ((OC_WEARPOS(int1) > -1)) {
            int5 = script12517(94 as inv, int1, 0);
            if ((int5 > -1)) {
                return [int1, int5, 94];
            };
            if ((int3 != -1 as obj)) {
                int5 = script12517(94 as inv, int3, 0);
                if ((int5 > -1)) {
                    return [int3, int5, 94];
                };
            };
        };
        int5 = script12517(93 as inv, int1, 0);
        if ((int5 > -1)) {
            return [int1, int5, 93];
        };
        if ((int3 != -1 as obj)) {
            int5 = script12517(93 as inv, int3, 0);
            if ((int5 > -1)) {
                return [int3, int5, 93];
            };
        };
    };
    return [int0, -1, 93];
}