//
function script12633(int0: int, int1: int): [int, int, int, int] {
    var int2 = -1;
    var int3 = -1;
    switch (cc_getparam(5840)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: {
            int2 = cc_getparam(4421);
            if ((int2 == -2147483648)) {
                int2 = CC_GETX();
            };
            int3 = cc_getparam(4422);
            if ((int3 == -2147483648)) {
                int3 = CC_GETY();
            };
            break;
        }
        default: {
            int2 = CC_GETX();
            int3 = CC_GETY();
            break;
        }
    };
    var int4 = cc_getparam(5928);
    var int5 = cc_getparam(5929);
    switch (int4) {
        case 1: {
            int2 = ((int2 - (int0 / 2)) + (CC_GETWIDTH() / 2));
            break;
        }
        case 2: {
            int2 = (int0 - (int2 + CC_GETWIDTH()));
            break;
        }
        default: {
            int4 = 0;
            break;
        }
    };
    switch (int5) {
        case 1: {
            int3 = ((int3 - (int1 / 2)) + (CC_GETHEIGHT() / 2));
            break;
        }
        case 2: {
            int3 = (int1 - (int3 + CC_GETHEIGHT()));
            break;
        }
        default: {
            int5 = 0;
            break;
        }
    };
    return [int2, int3, int4, int5];
}