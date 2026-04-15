//
function script19365(int0: obj): unknown_int {
    if (((int0 == -1 as obj) || (script3996(int0) == 1))) {
        return 0;
    };
    if ((OC_TRADEABLE(int0) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(33, 6048 as cs2enum, int0) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(41, 5990 as cs2enum, OC_CATEGORY(int0)) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(33, 6049 as cs2enum, int0) == 1)) {
        return 1;
    };
    if (((item_getparam(int0, 3384) == 1) || (item_getparam(int0, 3793) == 1))) {
        if ((OC_TRADEABLE(int0) == 1)) {
            return 1;
        };
        return 0;
    };
    var int1 = item_getparam(int0, 3382);
    if ((int1 != -1 as obj)) {
        if (((item_getparam(int1, 3384) == 1) && (OC_TRADEABLE(int1) == 1))) {
            return 1;
        };
        int1 = item_getparam(int1, 3382);
        if ((((int1 != -1 as obj) && (item_getparam(int1, 3384) == 1)) && (OC_TRADEABLE(int1) == 1))) {
            return 1;
        };
    };
    return 0;
}