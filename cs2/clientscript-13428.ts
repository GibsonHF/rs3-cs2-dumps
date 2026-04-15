//
function script13428(int0: obj, int1: obj): unknown_int {
    if ((int0 == int1)) {
        return 1;
    };
    if (((item_getparam(int0, 4949) == 1) && (enum_getvalue(33, 33, 9904 as cs2enum, int1) == int0))) {
        return 1;
    };
    if (((item_getparam(int1, 4949) == 1) && (enum_getvalue(33, 33, 9904 as cs2enum, int0) == int1))) {
        return 1;
    };
    return 0;
}