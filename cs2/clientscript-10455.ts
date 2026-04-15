//
function script10455(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var int7 = -1;
    if ((IF_FIND(int0) == 1)) {
        int4 = cc_getparam(6376);
        int5 = cc_getparam(6377);
        if (((int4 == comp(-1, 65535)) || (int5 == comp(-1, 65535)))) {
            return;
        };
        int6 = cc_getparam(6374);
        int7 = cc_getparam(6375);
    };
    switch (int6) {
        case 0: {
            IF_SETSIZE((83 * 2), (148 * 2), 0, 0, int4);
            while ((CC_FIND(int4, ++int1) == 1)) {
                CC_SETSIZE(83, 148, 0, 0);
            };
            IF_SETHIDE(false, int5);
            IF_SETSIZE((88 * 2), (25 * 2), 0, 0, int5);
            IF_SETPOSITION(0, 110, 1, 1, int5);
            int1 = -1;
            while ((CC_FIND(int5, ++int1) == 1)) {
                CC_SETSIZE(88, 25, 0, 0);
            };
            break;
        }
        case 1: {
            int2 = SCALE(int7, 1000, 83);
            int3 = SCALE(int7, 1000, 148);
            IF_SETSIZE((int2 * 2), (int3 * 2), 0, 0, int4);
            while ((CC_FIND(int4, ++int1) == 1)) {
                CC_SETSIZE(int2, int3, 0, 0);
            };
            IF_SETHIDE(false, int5);
            int2 = SCALE(int7, 1000, 88);
            int3 = SCALE(int7, 1000, 25);
            IF_SETSIZE((int2 * 2), (int3 * 2), 0, 0, int5);
            IF_SETPOSITION(0, SCALE(int7, 1000, 110), 1, 1, int5);
            int1 = -1;
            while ((CC_FIND(int5, ++int1) == 1)) {
                CC_SETSIZE(int2, int3, 0, 0);
            };
            break;
        }
        case 2: {
            int2 = SCALE(int7, 1000, 83);
            int3 = SCALE(int7, 1000, 148);
            IF_SETSIZE((int2 * 2), (int3 * 2), 0, 0, int4);
            while ((CC_FIND(int4, ++int1) == 1)) {
                CC_SETSIZE(int2, int3, 0, 0);
            };
            IF_SETHIDE(true, int5);
            break;
        }
    };
    return;
}