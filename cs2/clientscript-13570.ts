//
function script13570(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if (((item_getparam(int0, 5449) == 1) && (script7105(int0) == 0))) {
        return 0;
    };
    if ((item_getparam(int0, 3684) == false)) {
        return 1;
    };
    var int1 = item_getparam(int0, 6570);
    var int2 = item_getparam(int0, 6573);
    var int3 = 1;
    if ((script14491(int0) == 0)) {
        return 0;
    };
    while ((int1 > 0)) {
        if ((script14717(int0, int1, int2) == false)) {
            return 0;
        };
        switch (++int3) {
            case 2: {
                int1 = item_getparam(int0, 6571);
                int2 = item_getparam(int0, 6574);
                break;
            }
            case 3: {
                int1 = item_getparam(int0, 6572);
                int2 = item_getparam(int0, 6575);
                break;
            }
            default: {
                return 1;
            }
        };
    };
    return 1;
}