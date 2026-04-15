//
function script7113(int0: obj): unknown_int {
    var int1 = item_getparam(int0, 2650);
    var int2 = item_getparam(int0, 2990);
    var int3 = 1;
    while (((int1 != -1 as obj) || (int2 != -1 as struct))) {
        if ((int2 != -1 as struct)) {
            if ((script7114(int2) == 0)) {
                return 0;
            };
        } else if ((script7089(int1) == 0)) {
            return 0;
        };
        switch (++int3) {
            case 2: {
                int1 = item_getparam(int0, 2651);
                int2 = item_getparam(int0, 2991);
                break;
            }
            case 3: {
                int1 = item_getparam(int0, 2652);
                int2 = item_getparam(int0, 2992);
                break;
            }
            default: {
                int1 = -1 as obj;
                break;
            }
        };
    };
    return 1;
}