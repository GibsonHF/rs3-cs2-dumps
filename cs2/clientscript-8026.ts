//
function script8026(int0: obj): obj {
    if (((((item_getparam(int0, 3793) == 1) || (enum_getvalue(33, 1, 15589 as cs2enum, int0) == true)) || (item_getparam(int0, 3845) == true)) && (int0 != 32705 as obj))) {
        return -1 as obj;
    };
    var int1 = script8156(int0);
    if ((item_getparam(int0, 3384) == 1)) {
        switch (OC_CATEGORY(int0)) {
            case 2804: {
                var int0 = item_getparam(int0, 3110);
                if ((int0 == -1 as obj)) {
                    int0 = item_getparam(int1, 3382);
                };
                if ((int0 != -1 as obj)) {
                    int1 = int0;
                };
                break;
            }
            case 4058: {
                int1 = enum_getvalue(33, 33, 11953 as cs2enum, int0);
                break;
            }
        };
    };
    return int1;
}