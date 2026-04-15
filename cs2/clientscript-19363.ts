//
function script19363(int0: obj): unknown_int {
    var int1 = item_getparam(int0, 5525);
    if (((int1 == -1 as obj) || (script3996(int1) == 1))) {
        return 0;
    };
    if ((OC_TRADEABLE(int1) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(33, 6048 as cs2enum, int1) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(41, 5990 as cs2enum, OC_CATEGORY(int1)) == 1)) {
        return 1;
    };
    int1 = item_getparam(int1, 1097);
    if (((int1 == -1 as obj) || (script3996(int1) == 1))) {
        return 0;
    };
    if ((OC_TRADEABLE(int1) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(33, 6048 as cs2enum, int1) == 1)) {
        return 1;
    };
    if ((enum_hasoutput(41, 5990 as cs2enum, OC_CATEGORY(int1)) == 1)) {
        return 1;
    };
    return 0;
}