//
function script5987(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    };
    CC_DELETEALL(int0);
    var int2 = 0;
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(22, 27, 1, 0);
    CC_SETGRAPHIC(6084);
    CC_SETTILING(1);
    CC_SETHFLIP(1);
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETSIZE(11, 27, 0, 0);
    CC_SETGRAPHIC(6083);
    CC_SETTILING(1);
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETSIZE(11, 27, 0, 0);
    CC_SETGRAPHIC(6083);
    CC_SETTILING(1);
    CC_SETHFLIP(1);
    int2 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int2);
    CC_SETPOSITION(21, 0, 0, 1);
    CC_SETSIZE(11, 27, 0, 0);
    CC_SETGRAPHIC(6085);
    CC_SETTILING(1);
    CC_SETHFLIP(1);
    var int3 = -1;
    switch (int1) {
        case 1: {
            int3 = 7381;
            break;
        }
        case 2: {
            int3 = 7380;
            break;
        }
        case 3: {
            int3 = 7384;
            break;
        }
        case 4: {
            int3 = 7378;
            break;
        }
        case 5: {
            int3 = 7377;
            break;
        }
        case 6: {
            int3 = 7379;
            break;
        }
        case 7: {
            int3 = 7376;
            break;
        }
        case 9: {
            int3 = 7382;
            break;
        }
        case 8: {
            int3 = 7383;
            break;
        }
        case 10: {
            int3 = 7385;
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
    CC_SETTILING(1);
    return;
}