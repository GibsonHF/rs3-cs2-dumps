//
function script5730(int0: int, int1: obj, int2: int): unknown_int {
    if ((((int1 == -1 as obj) || (int1 == 31167 as obj)) || (int0 != item_getparam(int1, 5432)))) {
        return 0;
    };
    if ((item_getparam(int1, 4076) == 1)) {
        return 1;
    };
    if (((OC_WEARPOS(int1) != -1) && (enum_getvalue(33, 1, 15589 as cs2enum, int1) == false))) {
        return 1;
    };
    switch (int1) {
        case 48056: {
            script1493();
            break;
        }
        case 18338: {
            script1494(int2);
            break;
        }
        case 31455: {
            script1495();
            break;
        }
        case 38934: {
            script1496();
            break;
        }
    };
    return 0;
}