//
function script16388(int0: int, int1: int): void {
    var int2 = IF_GETWIDTH(comp(955, 6));
    var int3 = IF_GETHEIGHT(comp(955, 6));
    var int4 = 0;
    if ((int0 < 0)) {
        int4 = 1;
    } else if ((int0 > int2)) {
        int4 = 2;
    } else if ((int1 < 0)) {
        int4 = 3;
    } else {
        int4 = 4;
    };
    if (((varclient_3851 != 0) && (int4 == varclient_3851))) {
        return;
    };
    CC_CREATE(comp(955, 9), 5, 0);
    CC_SETGRAPHIC(21393 as graphic);
    CC_SETSIZE(41, 54, 0, 0);
    CC_SETONTIMER(callback(script773, 0, 0, 62586889));
    switch (int4) {
        case 2: {
            CC_SETPOSITION((int2 - CC_GETWIDTH()), ((int3 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
            CC_SET2DANGLE(16384);
            break;
        }
        case 3: {
            CC_SETPOSITION(((int2 / 2) - (CC_GETWIDTH() / 2)), 0, 0, 0);
            CC_SET2DANGLE(32768);
            break;
        }
        case 4: {
            CC_SETPOSITION(((int2 / 2) - (CC_GETWIDTH() / 2)), (int3 - CC_GETHEIGHT()), 0, 0);
            CC_SET2DANGLE(0);
            break;
        }
        default: {
            CC_SETPOSITION(0, ((int3 / 2) - (CC_GETHEIGHT() / 2)), 0, 0);
            CC_SET2DANGLE(49152);
            break;
        }
    };
    varclient_3851 = int4;
    return;
}