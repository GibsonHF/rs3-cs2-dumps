//
function script14717(int0: obj, int1: int, int2: int): boolean {
    var int3 = 0;
    var int4 = 0;
    var int5 = item_getparam(int0, 317);
    if ((item_getparam(int0, 7801) > 0)) {
        int5 = 1;
    };
    switch (int1) {
        case 66: {
            switch (int2) {
                case 1: {
                    [int3, int4] = [item_getparam(int0, 2640), item_getparam(int0, 2645)];
                    break;
                }
                case 2: {
                    [int3, int4] = [item_getparam(int0, 2641), item_getparam(int0, 2646)];
                    break;
                }
                case 3: {
                    [int3, int4] = [item_getparam(int0, 2642), item_getparam(int0, 2647)];
                    break;
                }
                case 4: {
                    [int3, int4] = [item_getparam(int0, 2643), item_getparam(int0, 2648)];
                    break;
                }
                case 5: {
                    [int3, int4] = [item_getparam(int0, 2644), item_getparam(int0, 2649)];
                    break;
                }
                default: {
                    return true;
                }
            };
            return script7106(int3, int4, int5, item_getparam(int0, 3649), int2);
        }
        case 67: {
            return script14492(int0, int2);
        }
    };
    return script7106(int1, int2, 1, item_getparam(int0, 3649), 0);
}