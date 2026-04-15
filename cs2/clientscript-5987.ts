//
function script5987(int0: component, int1: unknown_int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int2 = 0;
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(22, 27, 1, 0);
    CC_SETGRAPHIC(6084 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(11, 27, 0, 0);
    CC_SETGRAPHIC(6083 as graphic);
    CC_SETTILING(true);
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETSIZE(11, 27, 0, 0);
    CC_SETGRAPHIC(6083 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(21, 0, 0, 1);
    CC_SETSIZE(11, 27, 0, 0);
    CC_SETGRAPHIC(6085 as graphic);
    CC_SETTILING(true);
    CC_SETHFLIP(true);
    var int3 = -1 as graphic;
    switch (int1) {
        case 1: {
            int3 = 7381 as graphic;
            break;
        }
        case 2: {
            int3 = 7380 as graphic;
            break;
        }
        case 3: {
            int3 = 7384 as graphic;
            break;
        }
        case 4: {
            int3 = 7378 as graphic;
            break;
        }
        case 5: {
            int3 = 7377 as graphic;
            break;
        }
        case 6: {
            int3 = 7379 as graphic;
            break;
        }
        case 7: {
            int3 = 7376 as graphic;
            break;
        }
        case 9: {
            int3 = 7382 as graphic;
            break;
        }
        case 8: {
            int3 = 7383 as graphic;
            break;
        }
        case 10: {
            int3 = 7385 as graphic;
            break;
        }
        default: {
            return;
        }
    };
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(5, 0, 0, 1);
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETGRAPHIC(int3);
    CC_SETTILING(true);
    return;
}